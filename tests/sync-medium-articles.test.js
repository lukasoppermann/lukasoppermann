import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock RSS feed for testing
const mockRSSFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Lukas Oppermann - Medium</title>
    <item>
      <title><![CDATA[Test Article 1]]></title>
      <link>https://medium.com/@lukasoppermann/test-article-1-abc123</link>
      <pubDate>Mon, 01 Jan 2024 12:00:00 GMT</pubDate>
      <description><![CDATA[<p>This is a test excerpt for the first article.</p>]]></description>
    </item>
    <item>
      <title><![CDATA[Test Article 2]]></title>
      <link>https://medium.com/@lukasoppermann/test-article-2-def456</link>
      <pubDate>Tue, 02 Jan 2024 12:00:00 GMT</pubDate>
      <description><![CDATA[<p>This is a test excerpt for the second article. It has more content to test.</p>]]></description>
    </item>
  </channel>
</rss>`;

/**
 * Parse Medium RSS feed XML (copied from sync script for testing)
 */
function parseMediumRSS(xmlText) {
  const articles = [];
  
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [...xmlText.matchAll(itemRegex)];
  
  for (const [, itemContent] of items) {
    const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : null;
    
    const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
    const url = linkMatch ? linkMatch[1].trim() : null;
    
    const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
    const pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : null;
    
    const descMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
    let excerpt = '';
    if (descMatch) {
      const cleanText = descMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      const firstSentence = cleanText.match(/^[^.!?]+[.!?]/);
      excerpt = firstSentence ? firstSentence[0] : cleanText.substring(0, 150);
    }
    
    if (title && url && pubDate) {
      articles.push({
        title,
        url,
        published: pubDate.toISOString().split('T')[0],
        excerpt,
      });
    }
  }
  
  return articles;
}

/**
 * Create a slug from title (copied from sync script for testing)
 */
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
}

describe('Medium Article Sync', () => {
  describe('parseMediumRSS', () => {
    it('should parse RSS feed correctly', () => {
      const articles = parseMediumRSS(mockRSSFeed);
      
      expect(articles).toHaveLength(2);
      expect(articles[0].title).toBe('Test Article 1');
      expect(articles[0].url).toBe('https://medium.com/@lukasoppermann/test-article-1-abc123');
      expect(articles[0].published).toBe('2024-01-01');
      expect(articles[0].excerpt).toBe('This is a test excerpt for the first article.');
    });
    
    it('should handle empty feed', () => {
      const emptyFeed = '<?xml version="1.0"?><rss><channel></channel></rss>';
      const articles = parseMediumRSS(emptyFeed);
      expect(articles).toHaveLength(0);
    });
  });
  
  describe('createSlug', () => {
    it('should create valid slugs from titles', () => {
      expect(createSlug('Test Article 1')).toBe('test-article-1');
      expect(createSlug('Design Systems vs. AI')).toBe('design-systems-vs-ai');
      expect(createSlug('WCAG 2.1: Color Contrast!')).toBe('wcag-2-1-color-contrast');
    });
    
    it('should handle special characters', () => {
      expect(createSlug('Article with "quotes" and \'apostrophes\'')).toBe('article-with-quotes-and-apostrophes');
      expect(createSlug('Article — with em-dash')).toBe('article-with-em-dash');
    });
    
    it('should limit slug length', () => {
      const longTitle = 'This is a very long article title that should be truncated to a reasonable length for the filename';
      const slug = createSlug(longTitle);
      expect(slug.length).toBeLessThanOrEqual(50);
    });
  });
  
  describe('Article file structure', () => {
    it('should verify existing articles have required fields', async () => {
      const articlesDir = path.join(__dirname, '../src/content/articles');
      const files = await fs.readdir(articlesDir);
      
      for (const file of files) {
        if (!file.endsWith('.md')) continue;
        
        const filePath = path.join(articlesDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Check for required frontmatter fields
        expect(content).toMatch(/^---/m);
        expect(content).toMatch(/title:\s*["'].+["']/);
        expect(content).toMatch(/url:\s*["']https?:\/\/.+["']/);
        expect(content).toMatch(/published:\s*["']\d{4}-\d{2}-\d{2}["']/);
        expect(content).toMatch(/excerpt:\s*["'].+["']/);
      }
    });
  });
});
