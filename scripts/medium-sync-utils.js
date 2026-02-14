/**
 * Shared utilities for Medium article synchronization
 */

/**
 * Parse Medium RSS feed XML
 */
export function parseMediumRSS(xmlText) {
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
      // Remove HTML tags and normalize whitespace
      const cleanText = descMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      
      // Try to get first sentence, fallback to first 150 chars
      // Note: This is a simple heuristic that works for most cases but may not handle
      // complex punctuation (e.g., '...', 'Dr.', etc.) perfectly
      const firstSentence = cleanText.match(/^.*?[.!?](?=\s|$)/);
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
 * Create a slug from title
 */
export function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50); // Limit length
}
