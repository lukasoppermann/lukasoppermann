#!/usr/bin/env node

/**
 * Visual Regression Testing Script
 * 
 * This script captures HTML snapshots from the built static files and compares them
 * against baseline versions to detect visual regressions.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const config = {
  distDir: join(dirname(__dirname), 'dist'),
  outputDir: join(__dirname, 'snapshots'),
  baselineDir: join(__dirname, 'snapshots', 'baseline'),
  currentDir: join(__dirname, 'snapshots', 'current'),
  diffDir: join(__dirname, 'snapshots', 'diff'),
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

// Normalize HTML content for comparison
function normalizeHtml(html) {
  return html
    // Remove comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove extra whitespace between tags
    .replace(/>\s+</g, '><')
    // Normalize whitespace within text content
    .replace(/\s+/g, ' ')
    // Trim
    .trim();
}

// Generate content hash
function generateHash(content) {
  return createHash('sha256').update(content).digest('hex');
}

// Compare HTML content
function compareHtml(baselineContent, currentContent) {
  const baselineNormalized = normalizeHtml(baselineContent);
  const currentNormalized = normalizeHtml(currentContent);
  
  const baselineHash = generateHash(baselineNormalized);
  const currentHash = generateHash(currentNormalized);
  
  if (baselineHash === currentHash) {
    return {
      isDifferent: false,
      message: 'Content is identical'
    };
  }
  
  // Count character differences
  const minLength = Math.min(baselineNormalized.length, currentNormalized.length);
  let differences = Math.abs(baselineNormalized.length - currentNormalized.length);
  
  for (let i = 0; i < minLength; i++) {
    if (baselineNormalized[i] !== currentNormalized[i]) {
      differences++;
    }
  }
  
  return {
    isDifferent: true,
    differences,
    baselineHash: baselineHash.substring(0, 8),
    currentHash: currentHash.substring(0, 8),
    message: `Content differs: ${differences} character changes detected`
  };
}

// Generate detailed diff
function generateDetailedDiff(baselineContent, currentContent, diffPath) {
  const baselineLines = baselineContent.split('\n');
  const currentLines = currentContent.split('\n');
  
  const diffContent = [];
  const maxLines = Math.max(baselineLines.length, currentLines.length);
  
  diffContent.push('HTML Content Diff');
  diffContent.push('=================');
  diffContent.push('');
  
  for (let i = 0; i < maxLines; i++) {
    const baselineLine = baselineLines[i] || '';
    const currentLine = currentLines[i] || '';
    
    if (baselineLine !== currentLine) {
      diffContent.push(`Line ${i + 1}:`);
      diffContent.push(`- ${baselineLine}`);
      diffContent.push(`+ ${currentLine}`);
      diffContent.push('');
    }
  }
  
  if (diffContent.length === 3) {
    diffContent.push('No line-by-line differences found.');
    diffContent.push('Differences may be in whitespace or formatting.');
  }
  
  writeFileSync(diffPath, diffContent.join('\n'));
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
        .container { max-width: 1200px; margin: 0 auto; }
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
        .hash { font-family: monospace; font-size: 0.9em; background: #f1f5f9; padding: 2px 6px; border-radius: 3px; }
        .diff-link { color: #3b82f6; text-decoration: none; }
        .diff-link:hover { text-decoration: underline; }
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
                ${result.baselineHash ? `<p><strong>Baseline:</strong> <span class="hash">${result.baselineHash}</span> | <strong>Current:</strong> <span class="hash">${result.currentHash}</span></p>` : ''}
            </div>
            <div class="test-content">
                <p><strong>File:</strong> <code>${result.path}</code></p>
                ${result.isDifferent && result.diffPath ? `<p><a href="${result.diffPath.replace(process.cwd(), '.')}" class="diff-link">View detailed diff →</a></p>` : ''}
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
  
  console.log('Visual Regression Testing (Static File Mode)');
  console.log('============================================');
  
  // Check if dist directory exists
  if (!existsSync(config.distDir)) {
    console.error('❌ dist directory not found. Please run "npm run build" first.');
    process.exit(1);
  }
  
  ensureDirectories();
  
  const results = [];
  
  for (const page of config.pages) {
    const distFilePath = join(config.distDir, page.path);
    const filename = `${page.name}.html`;
    const currentPath = join(config.currentDir, filename);
    const baselinePath = join(config.baselineDir, filename);
    const diffPath = join(config.diffDir, `${page.name}.diff`);
    
    console.log(`Processing: ${page.name} (${page.path})`);
    
    // Check if file exists in dist
    if (!existsSync(distFilePath)) {
      results.push({
        page: page.name,
        path: page.path,
        isDifferent: true,
        message: `File not found: ${distFilePath}`,
        currentPath,
        baselinePath,
        diffPath
      });
      console.log(`❌ ${page.name}: File not found`);
      continue;
    }
    
    // Read current content
    const currentContent = readFileSync(distFilePath, 'utf-8');
    
    // Save current content
    writeFileSync(currentPath, currentContent);
    
    if (mode === 'baseline') {
      // Copy current to baseline
      writeFileSync(baselinePath, currentContent);
      console.log(`✅ Baseline created: ${filename}`);
      
      results.push({
        page: page.name,
        path: page.path,
        isDifferent: false,
        message: 'Baseline created',
        currentPath,
        baselinePath,
        diffPath
      });
    } else {
      // Compare with baseline
      if (!existsSync(baselinePath)) {
        results.push({
          page: page.name,
          path: page.path,
          isDifferent: true,
          message: 'No baseline found. Run with "baseline" mode first.',
          currentPath,
          baselinePath,
          diffPath
        });
        console.log(`❌ ${page.name}: No baseline found`);
        continue;
      }
      
      const baselineContent = readFileSync(baselinePath, 'utf-8');
      const comparison = compareHtml(baselineContent, currentContent);
      
      if (comparison.isDifferent) {
        generateDetailedDiff(baselineContent, currentContent, diffPath);
      }
      
      const result = {
        page: page.name,
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
    console.log('✅ Baseline snapshots created successfully!');
    console.log('Now you can run "npm run test:visual" to compare against these baselines.');
  } else if (failed > 0) {
    console.log('❌ Visual regression tests failed!');
    process.exit(1);
  } else {
    console.log('✅ All visual regression tests passed!');
  }
}

main().catch(console.error);