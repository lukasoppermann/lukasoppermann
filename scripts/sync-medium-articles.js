#!/usr/bin/env node

/**
 * Script to fetch articles from Medium RSS feed and create markdown files for articles
 * that are not already present in the src/content/articles directory.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createArticleFilename, parseMediumRSS } from './medium-sync-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MEDIUM_FEED_URL = 'https://lukasoppermann.medium.com/feed';
const ARTICLES_DIR = path.join(__dirname, '../src/content/articles');
const CACHE_FILE = path.join(__dirname, 'medium-feed-cache.xml');

/**
 * Fetch and parse Medium RSS feed
 * Falls back to cached file if network fetch fails
 */
async function fetchMediumFeed() {
  try {
    console.log('Fetching Medium RSS feed...');
    const response = await fetch(MEDIUM_FEED_URL, { signal: AbortSignal.timeout(15_000) });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch feed: ${response.status} ${response.statusText}`);
    }
    
    const feedText = await response.text();
    
    // Save to cache file for future offline use
    try {
      await fs.writeFile(CACHE_FILE, feedText, 'utf-8');
      console.log('✓ Cached feed for offline use\n');
    } catch (e) {
      console.warn('Could not cache the Medium feed:', e.message);
    }
    
    return parseMediumRSS(feedText);
  } catch (error) {
    console.error('Error fetching Medium feed:', error instanceof Error ? error.message : String(error));
    
    // Try to use cached file
    try {
      console.log('Attempting to use cached feed...');
      const cachedFeed = await fs.readFile(CACHE_FILE, 'utf-8');
      console.log('✓ Using cached feed\n');
      return parseMediumRSS(cachedFeed);
    } catch (cacheError) {
      console.error('No cached feed available:', cacheError.message);
      throw error;
    }
  }
}

/**
 * Get existing article URLs from markdown files
 */
async function getExistingArticles() {
  const existingUrls = new Set();
  const files = await fs.readdir(ARTICLES_DIR);

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(ARTICLES_DIR, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const urlMatch = content.match(/^url:\s*["']([^"']+)["']/m);
    if (urlMatch) {
      existingUrls.add(urlMatch[1]);
    }
  }

  return { urls: existingUrls, filenames: new Set(files) };
}

/**
 * Create markdown file for an article
 */
async function createArticleFile(article, usedFilenames) {
  const filename = createArticleFilename(article.title, article.url, usedFilenames);
  const filePath = path.join(ARTICLES_DIR, filename);

  // JSON-quoted strings are valid YAML scalars and correctly escape feed content.
  const frontmatter = `---
title: ${JSON.stringify(article.title)}
url: ${JSON.stringify(article.url)}
published: ${JSON.stringify(article.published)}
excerpt: ${JSON.stringify(article.excerpt)}
---`;

  await fs.writeFile(filePath, frontmatter, { encoding: 'utf-8', flag: 'wx' });
  console.log(`  ✓ Created ${filename}`);
  return true;
}

/**
 * Main execution
 */
async function main() {
  console.log('Starting Medium article sync...\n');
  
  try {
    // Fetch articles from Medium
    const mediumArticles = await fetchMediumFeed();
    console.log(`Found ${mediumArticles.length} articles on Medium\n`);
    
    // Get existing article URLs
    const existingArticles = await getExistingArticles();
    console.log(`Found ${existingArticles.urls.size} existing articles\n`);
    
    // Filter new articles
    const newArticles = mediumArticles.filter(article => {
      if (existingArticles.urls.has(article.url)) return false;
      existingArticles.urls.add(article.url);
      return true;
    });
    
    if (newArticles.length === 0) {
      console.log('✓ All Medium articles are already present. Nothing to do!');
      return;
    }
    
    console.log(`Found ${newArticles.length} new articles to add:\n`);
    
    // Create files for new articles
    let created = 0;
    for (const article of newArticles) {
      const wasCreated = await createArticleFile(article, existingArticles.filenames);
      if (wasCreated) created++;
    }
    
    console.log(`\n✓ Successfully synced ${created} new articles!`);
  } catch (error) {
    console.error('\n✗ Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
