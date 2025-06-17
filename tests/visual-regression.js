#!/usr/bin/env node

/**
 * Visual Regression Testing Script
 * 
 * This script captures screenshots of web pages and compares them
 * against baseline screenshots to detect visual regressions.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { spawn } from 'child_process';
import { createRequire } from 'module';
import puppeteer from 'puppeteer';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const config = {
  outputDir: join(__dirname, 'screenshots'),
  baselineDir: join(__dirname, 'screenshots', 'baseline'),
  currentDir: join(__dirname, 'screenshots', 'current'),
  diffDir: join(__dirname, 'screenshots', 'diff'),
  viewport: { width: 1920, height: 1080 },
  distDir: join(dirname(__dirname), 'dist'),
  pages: [
    { path: 'index.html', name: 'homepage' },
    { path: 'about/index.html', name: 'about' },
    { path: 'articles/index.html', name: 'articles' },
    { path: 'imprint/index.html', name: 'imprint' }
  ]
};

// Ensure directories exist
function ensureDirectories() {
  [config.outputDir, config.baselineDir, config.currentDir, config.diffDir].forEach(dir => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  });
}

// Take screenshot of a page
async function takeScreenshot(browser, filePath, outputPath) {
  const page = await browser.newPage();
  
  try {
    await page.setViewport(config.viewport);
    
    // Use file:// URL to access the local file
    const fileUrl = `file://${filePath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait a bit more for any animations or lazy loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await page.screenshot({
      path: outputPath,
      fullPage: true
    });
  } finally {
    await page.close();
  }
}

// Compare two PNG images
function compareImages(baselinePath, currentPath, diffPath) {
  if (!existsSync(baselinePath)) {
    return {
      isDifferent: true,
      message: 'No baseline image found'
    };
  }
  
  if (!existsSync(currentPath)) {
    return {
      isDifferent: true,
      message: 'No current image found'
    };
  }
  
  const baselineImage = PNG.sync.read(readFileSync(baselinePath));
  const currentImage = PNG.sync.read(readFileSync(currentPath));
  
  // Check if dimensions match
  if (baselineImage.width !== currentImage.width || baselineImage.height !== currentImage.height) {
    return {
      isDifferent: true,
      message: `Image dimensions differ. Baseline: ${baselineImage.width}x${baselineImage.height}, Current: ${currentImage.width}x${currentImage.height}`
    };
  }
  
  const diff = new PNG({ width: baselineImage.width, height: baselineImage.height });
  const pixelsDifferent = pixelmatch(
    baselineImage.data,
    currentImage.data,
    diff.data,
    baselineImage.width,
    baselineImage.height,
    { threshold: 0.1 }
  );
  
  if (pixelsDifferent > 0) {
    // Save diff image
    writeFileSync(diffPath, PNG.sync.write(diff));
    
    const totalPixels = baselineImage.width * baselineImage.height;
    const percentDifferent = ((pixelsDifferent / totalPixels) * 100).toFixed(2);
    
    return {
      isDifferent: true,
      pixelsDifferent,
      percentDifferent,
      totalPixels,
      message: `${pixelsDifferent} pixels differ (${percentDifferent}%)`
    };
  }
  
  return {
    isDifferent: false,
    message: 'Images are identical'
  };
}

// Generate HTML report
function generateReport(results) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visual Regression Test Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
        .container { max-width: 1400px; margin: 0 auto; }
        .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .summary { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .test-case { background: white; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
        .test-header { padding: 15px 20px; border-bottom: 1px solid #e2e8f0; }
        .test-content { padding: 20px; }
        .pass { border-left: 4px solid #10b981; }
        .fail { border-left: 4px solid #ef4444; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px; }
        .stat { background: #f1f5f9; padding: 15px; border-radius: 6px; text-align: center; }
        .stat-value { font-size: 2em; font-weight: bold; color: #1e293b; }
        .stat-label { color: #64748b; margin-top: 5px; }
        .status-pass { color: #10b981; font-weight: bold; }
        .status-fail { color: #ef4444; font-weight: bold; }
        .image-comparison { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px; }
        .image-comparison.single { grid-template-columns: 1fr; }
        .image-comparison.double { grid-template-columns: 1fr 1fr; }
        .image-section { text-align: center; }
        .image-section h4 { margin: 0 0 10px 0; color: #475569; }
        .image-section img { max-width: 100%; height: auto; border: 1px solid #e2e8f0; border-radius: 4px; }
        .diff-stats { background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 15px; margin-top: 15px; }
        .diff-stats h4 { margin: 0 0 10px 0; color: #dc2626; }
        h1 { color: #1e293b; margin: 0; }
        h2 { color: #334155; margin: 0 0 15px 0; }
        h3 { color: #475569; margin: 0 0 10px 0; }
        code { background: #f1f5f9; padding: 2px 6px; border-radius: 3px; font-family: monospace; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Visual Regression Test Report</h1>
            <p style="color: #64748b; margin: 10px 0 0 0;">Generated on: ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="summary">
            <h2>Test Summary</h2>
            <div class="stats">
                <div class="stat">
                    <div class="stat-value">${results.length}</div>
                    <div class="stat-label">Total Tests</div>
                </div>
                <div class="stat">
                    <div class="stat-value" style="color: #10b981;">${results.filter(r => !r.isDifferent).length}</div>
                    <div class="stat-label">Passed</div>
                </div>
                <div class="stat">
                    <div class="stat-value" style="color: #ef4444;">${results.filter(r => r.isDifferent).length}</div>
                    <div class="stat-label">Failed</div>
                </div>
            </div>
        </div>

        ${results.map(result => `
        <div class="test-case ${result.isDifferent ? 'fail' : 'pass'}">
            <div class="test-header">
                <h3>${result.page}</h3>
                <p><strong>Status:</strong> <span class="${result.isDifferent ? 'status-fail' : 'status-pass'}">${result.isDifferent ? '❌ FAILED' : '✅ PASSED'}</span></p>
                <p><strong>Message:</strong> ${result.message}</p>
                ${result.pixelsDifferent ? `<p><strong>Pixels Different:</strong> ${result.pixelsDifferent} / ${result.totalPixels} (${result.percentDifferent}%)</p>` : ''}
            </div>
            <div class="test-content">
                <p><strong>URL:</strong> <code>${result.url}</code></p>
                ${result.currentPath && existsSync(result.currentPath) ? `
                <div class="image-comparison ${result.isDifferent && result.baselinePath && existsSync(result.baselinePath) ? (result.diffPath && existsSync(result.diffPath) ? '' : 'double') : 'single'}">
                    ${result.baselinePath && existsSync(result.baselinePath) ? `
                    <div class="image-section">
                        <h4>Baseline</h4>
                        <img src="${result.baselinePath.replace(process.cwd(), '.')}" alt="Baseline screenshot" />
                    </div>
                    ` : ''}
                    <div class="image-section">
                        <h4>Current</h4>
                        <img src="${result.currentPath.replace(process.cwd(), '.')}" alt="Current screenshot" />
                    </div>
                    ${result.isDifferent && result.diffPath && existsSync(result.diffPath) ? `
                    <div class="image-section">
                        <h4>Diff</h4>
                        <img src="${result.diffPath.replace(process.cwd(), '.')}" alt="Diff screenshot" />
                    </div>
                    ` : ''}
                </div>
                ` : ''}
                ${result.isDifferent && result.pixelsDifferent ? `
                <div class="diff-stats">
                    <h4>Difference Details</h4>
                    <p>• Total pixels: ${result.totalPixels}</p>
                    <p>• Different pixels: ${result.pixelsDifferent}</p>
                    <p>• Percentage different: ${result.percentDifferent}%</p>
                </div>
                ` : ''}
            </div>
        </div>
        `).join('')}
    </div>
</body>
</html>`;

  const reportPath = join(config.outputDir, 'report.html');
  writeFileSync(reportPath, html);
  console.log(`Report generated: ${reportPath}`);
  return reportPath;
}

// Main function
async function main() {
  const mode = process.argv[2] || 'test';
  
  console.log('Visual Regression Testing (Screenshot Mode)');
  console.log('==========================================');
  
  // Check if dist directory exists
  if (!existsSync(config.distDir)) {
    console.error('❌ dist directory not found. Please run "npm run build" first.');
    process.exit(1);
  }
  
  ensureDirectories();
  
  let browser = null;
  
  try {
    // Launch browser
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-plugins',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
        '--disable-web-security',
        '--allow-file-access-from-files'
      ]
    });
    
    const results = [];
    
    for (const page of config.pages) {
      const filePath = join(config.distDir, page.path);
      const filename = `${page.name}.png`;
      const currentPath = join(config.currentDir, filename);
      const baselinePath = join(config.baselineDir, filename);
      const diffPath = join(config.diffDir, `${page.name}-diff.png`);
      
      console.log(`Processing: ${page.name} (${page.path})`);
      
      // Check if file exists in dist
      if (!existsSync(filePath)) {
        results.push({
          page: page.name,
          url: `file://${filePath}`,
          path: page.path,
          isDifferent: true,
          message: `File not found: ${filePath}`,
          currentPath,
          baselinePath,
          diffPath
        });
        console.log(`❌ ${page.name}: File not found`);
        continue;
      }
      
      try {
        // Take screenshot
        await takeScreenshot(browser, filePath, currentPath);
        console.log(`Screenshot taken: ${filename}`);
        
        if (mode === 'baseline') {
          // Copy current to baseline
          const currentImageData = readFileSync(currentPath);
          writeFileSync(baselinePath, currentImageData);
          console.log(`✅ Baseline created: ${filename}`);
          
          results.push({
            page: page.name,
            url: `file://${filePath}`,
            path: page.path,
            isDifferent: false,
            message: 'Baseline created',
            currentPath,
            baselinePath,
            diffPath
          });
        } else {
          // Compare with baseline
          const comparison = compareImages(baselinePath, currentPath, diffPath);
          
          const result = {
            page: page.name,
            url: `file://${filePath}`,
            path: page.path,
            ...comparison,
            currentPath,
            baselinePath,
            diffPath
          };
          
          results.push(result);
          
          if (comparison.isDifferent) {
            console.log(`❌ ${page.name}: ${comparison.message}`);
          } else {
            console.log(`✅ ${page.name}: ${comparison.message}`);
          }
        }
      } catch (error) {
        console.error(`Error processing ${page.name}:`, error.message);
        results.push({
          page: page.name,
          url: `file://${filePath}`,
          path: page.path,
          isDifferent: true,
          message: `Error: ${error.message}`,
          currentPath,
          baselinePath,
          diffPath
        });
      }
    }
    
    // Generate report
    if (mode !== 'baseline') {
      const reportPath = generateReport(results);
      console.log(`\nOpen the test report: file://${reportPath}`);
    }
    
    // Summary
    const failed = results.filter(r => r.isDifferent).length;
    const total = results.length;
    
    console.log('\n=== Summary ===');
    console.log(`Total: ${total}, Passed: ${total - failed}, Failed: ${failed}`);
    
    if (mode === 'baseline') {
      console.log('✅ Baseline screenshots created successfully!');
      console.log('Now you can run "npm run test:visual" to compare against these baselines.');
    } else if (failed > 0) {
      console.log('❌ Visual regression tests failed!');
      process.exit(1);
    } else {
      console.log('✅ All visual regression tests passed!');
    }
    
  } finally {
    // Cleanup
    if (browser) {
      await browser.close();
    }
  }
}

main().catch(console.error);