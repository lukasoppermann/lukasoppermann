import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Page Snapshots', () => {
  const distDir = join(process.cwd(), 'dist');
  
  it('should match homepage snapshot', () => {
    const html = readFileSync(join(distDir, 'index.html'), 'utf-8');
    expect(html).toMatchSnapshot('homepage.html');
  });

  it('should match about page snapshot', () => {
    const html = readFileSync(join(distDir, 'about', 'index.html'), 'utf-8');
    expect(html).toMatchSnapshot('about.html');
  });

  it('should match articles page snapshot', () => {
    const html = readFileSync(join(distDir, 'articles', 'index.html'), 'utf-8');
    expect(html).toMatchSnapshot('articles.html');
  });

  it('should match imprint page snapshot', () => {
    const html = readFileSync(join(distDir, 'imprint', 'index.html'), 'utf-8');
    expect(html).toMatchSnapshot('imprint.html');
  });
});