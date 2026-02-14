#!/usr/bin/env node

/**
 * Script to fetch articles from Medium RSS feed and create markdown files for articles
 * that are not already present in the src/content/articles directory.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MEDIUM_FEED_URL = 'https://lukasoppermann.medium.com/feed';
const ARTICLES_DIR = path.join(__dirname, '../src/content/articles');

/**
 * Fetch and parse Medium RSS feed
 */
async function fetchMediumFeed() {
  try {
    console.log('Fetching Medium RSS feed...');
    const response = await fetch(MEDIUM_FEED_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch feed: ${response.status} ${response.statusText}`);
    }
    
    const feedText = await response.text();
    return parseMediumRSS(feedText);
  } catch (error) {
    console.error('Error fetching Medium feed:', error.message);
    throw error;
  }
}

/**
 * Parse Medium RSS feed XML
 */
function parseMediumRSS(xmlText) {
  const articles = [];
  
  // Extract items from RSS feed using regex (simple parsing)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [...xmlText.matchAll(itemRegex)];
  
  for (const [, itemContent] of items) {
    // Extract title
    const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : null;
    
    // Extract link
    const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
    const url = linkMatch ? linkMatch[1].trim() : null;
    
    // Extract pubDate
    const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
    const pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : null;
    
    // Extract description/excerpt
    const descMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
    let excerpt = '';
    if (descMatch) {
      // Remove HTML tags and get first sentence or ~150 chars
      const cleanText = descMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      // Get first sentence or first 150 chars
      const firstSentence = cleanText.match(/^[^.!?]+[.!?]/);
      excerpt = firstSentence ? firstSentence[0] : cleanText.substring(0, 150);
    }
    
    if (title && url && pubDate) {
      articles.push({
        title,
        url,
        published: pubDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
        excerpt,
      });
    }
  }
  
  return articles;
}

/**
 * Get existing article URLs from markdown files
 */
async function getExistingArticleUrls() {
  const existingUrls = new Set();
  
  try {
    const files = await fs.readdir(ARTICLES_DIR);
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.join(ARTICLES_DIR, file);
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Extract URL from frontmatter
      const urlMatch = content.match(/^url:\s*["']([^"']+)["']/m);
      if (urlMatch) {
        existingUrls.add(urlMatch[1]);
      }
    }
  } catch (error) {
    console.error('Error reading existing articles:', error.message);
  }
  
  return existingUrls;
}

/**
 * Create a slug from title
 */
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50); // Limit length
}

/**
 * Create markdown file for an article
 */
async function createArticleFile(article) {
  const slug = createSlug(article.title);
  const filename = `${slug}.md`;
  const filePath = path.join(ARTICLES_DIR, filename);
  
  // Check if file already exists
  try {
    await fs.access(filePath);
    console.log(`  Skipping ${filename} (file already exists)`);
    return false;
  } catch {
    // File doesn't exist, proceed to create it
  }
  
  const frontmatter = `---
title: "${article.title.replace(/"/g, '\\"')}"
url: "${article.url}"
published: "${article.published}"
excerpt: "${article.excerpt.replace(/"/g, '\\"')}"
---`;
  
  await fs.writeFile(filePath, frontmatter, 'utf-8');
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
    const existingUrls = await getExistingArticleUrls();
    console.log(`Found ${existingUrls.size} existing articles\n`);
    
    // Filter new articles
    const newArticles = mediumArticles.filter(article => !existingUrls.has(article.url));
    
    if (newArticles.length === 0) {
      console.log('✓ All Medium articles are already present. Nothing to do!');
      return;
    }
    
    console.log(`Found ${newArticles.length} new articles to add:\n`);
    
    // Create files for new articles
    let created = 0;
    for (const article of newArticles) {
      const wasCreated = await createArticleFile(article);
      if (wasCreated) created++;
    }
    
    console.log(`\n✓ Successfully synced ${created} new articles!`);
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    process.exit(1);
  }
}

main();
