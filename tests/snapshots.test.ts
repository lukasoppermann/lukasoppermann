import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Page Snapshots', () => {
  const distDir = join(process.cwd(), 'dist');
  const readPageHtml = (pagePath: string) =>
    readFileSync(join(distDir, pagePath), 'utf-8')
      .trim()
      .replace(/[ \t]+(?=\r?\n)/g, '');
  
  it('should match homepage snapshot', () => {
    const html = readPageHtml('index.html');
    expect(html).toMatchSnapshot('homepage.html');
  });

  it('should match about page snapshot', () => {
    const html = readPageHtml(join('about', 'index.html'));
    expect(html).toMatchSnapshot('about.html');
  });

  it('should match articles page snapshot', () => {
    const html = readPageHtml(join('articles', 'index.html'));
    expect(html).toMatchSnapshot('articles.html');
  });

  it('should match imprint page snapshot', () => {
    const html = readPageHtml(join('imprint', 'index.html'));
    expect(html).toMatchSnapshot('imprint.html');
  });
});