/**
 * Shared utilities for Medium article synchronization
 */
import { createHash } from 'node:crypto';
import { parse } from 'node-html-parser';
import { XMLParser } from 'fast-xml-parser';
import { SyntaxValidator } from 'fast-xml-validator';

/**
 * Parse Medium RSS feed XML
 */
export function parseMediumRSS(xmlText) {
  try {
    SyntaxValidator.validate(xmlText);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid RSS XML: ${message}`);
  }

  const feed = new XMLParser({ cdataPropName: '__cdata' }).parse(xmlText);
  const feedItems = feed?.rss?.channel?.item;
  const items = feedItems === undefined ? [] : Array.isArray(feedItems) ? feedItems : [feedItems];
  const articles = [];

  const getText = value => {
    if (typeof value === 'string') return value;
    if (value && typeof value === 'object') {
      return value.__cdata ?? value['#text'] ?? '';
    }
    return '';
  };

  for (const item of items) {
    const title = getText(item.title).trim();
    const url = getText(item.link).trim();
    const publishedAt = new Date(getText(item.pubDate));

    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      continue;
    }

    if (!title || parsedUrl.protocol !== 'https:' || Number.isNaN(publishedAt.getTime())) {
      continue;
    }

    const description = parse(getText(item.description));
    description.querySelectorAll('script, style').forEach(element => element.remove());
    const cleanText = description.text.replace(/\s+/g, ' ').trim();
    const firstSentence = cleanText.match(/^.*?[.!?](?=\s|$)/);
    const excerpt = firstSentence ? firstSentence[0] : cleanText.substring(0, 150);

    articles.push({
      title,
      url: parsedUrl.href,
      published: publishedAt.toISOString().slice(0, 10),
      excerpt,
    });
  }

  return articles;
}

/**
 * Create a slug from title
 */
export function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50); // Limit length
}

export function createArticleFilename(title, url, usedFilenames) {
  const slug = createSlug(title);
  if (!slug) {
    throw new Error(`Cannot create an article filename from title: "${title}"`);
  }

  let filename = `${slug}.md`;
  if (usedFilenames.has(filename)) {
    const suffix = createHash('sha256').update(url).digest('hex').slice(0, 8);
    filename = `${slug.slice(0, 41)}-${suffix}.md`;
  }

  if (usedFilenames.has(filename)) {
    throw new Error(`Article filename collision for "${title}" (${url})`);
  }

  usedFilenames.add(filename);
  return filename;
}
