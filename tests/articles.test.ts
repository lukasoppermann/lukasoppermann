import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = join(process.cwd(), 'src/content/articles');
const files = readdirSync(sourceDir).filter(file => file.endsWith('.md'));
const readArticle = (slug: string) => {
  const html = readFileSync(join(process.cwd(), 'dist/articles', slug, 'index.html'), 'utf8');
  return new DOMParser().parseFromString(html, 'text/html');
};

describe('Article content', () => {
  it.each(files)('%s renders without Medium editor artifacts or a leading divider', file => {
    const source = readFileSync(join(sourceDir, file), 'utf8');
    expect(source).not.toContain('pre--content');
    expect(source).not.toContain('codeBlockMenu');
    const article = readArticle(file.slice(0, -3));
    const content = article.querySelector('.article-content')!;
    expect(content.firstElementChild?.tagName).not.toBe('HR');
    for (const code of content.querySelectorAll('code')) {
      expect(code.textContent).not.toMatch(/^\[[^\n]+\]\(https?:\/\/.+\)$/);
    }
    expect(article.querySelector('h1')?.textContent?.trim()).toBeTruthy();
    expect(article.querySelector('link[rel="canonical"]')?.getAttribute('href'))
      .toBe(source.match(/^url: "([^"]+)"$/m)?.[1]);
  });

  it('renders code-styled link labels as clickable links', () => {
    const article = readArticle('running-multiple-ai-agents-at-once-using-git-worktrees');
    const links = article.querySelectorAll(
      '.article-content a[href="https://www.npmjs.com/package/@johnlindquist/worktree"] > code'
    );
    expect(links).toHaveLength(2);
    expect(links[0].textContent).toBe('@johnlindquist/worktree');
  });

  it.each(files)('%s renders bold formatting without literal markers in prose', file => {
    const article = readArticle(file.slice(0, -3));
    const content = article.querySelector('.article-content')!;
    content.querySelectorAll('pre, code').forEach(element => element.remove());
    expect(content.textContent).not.toContain('**');
  });

  it('keeps all ten design principles and their descriptions in one ordered list', () => {
    const article = readArticle('how-can-design-systems-up-level-design-quality');
    const principles = [...article.querySelectorAll('.article-content ol')]
      .find(list => list.querySelector('strong')?.textContent === 'Good design is innovative.')!;
    const items = [...principles.children];
    expect(items).toHaveLength(10);
    expect(items.every(item => item.tagName === 'LI' && item.querySelector('strong'))).toBe(true);
    expect(items[1].querySelector('strong')?.textContent).toBe('Good design makes a product useful.');
    expect(items[1].textContent).toContain('The product must satisfy both functional and psychological criteria.');
    expect(items[9].textContent).toContain('Less, but better');
    expect(items.every(item => item.textContent!.trim().length >
      item.querySelector('strong')!.textContent!.length)).toBe(true);
    const heuristics = [...article.querySelectorAll('.article-content ul')]
      .find(list => list.textContent?.includes('Visibility of System State'))!;
    expect(heuristics.children).toHaveLength(5);
    expect(heuristics.children[1].querySelector('strong')?.textContent)
      .toBe('Match Between System and the World');
    expect(heuristics.children[4].textContent).toContain('Provide components');
  });

  it('links back to the articles overview and to other local articles', () => {
    const slug = 'running-multiple-ai-agents-at-once-using-git-worktrees';
    const article = readArticle(slug);
    expect(article.querySelector('.eyebrow a')?.getAttribute('href')).toBe('/articles');
    const more = [...article.querySelectorAll('.more-articles .post-preview')]
      .map(link => link.getAttribute('href'));
    expect(more).toHaveLength(3);
    expect(more).not.toContain(`/articles/${slug}/`);
    expect(more.every(href => href?.startsWith('/articles/'))).toBe(true);
    expect(article.querySelector('.more-articles .all-articles')?.getAttribute('href')).toBe('/articles');
  });

  it('renders commands and multiline examples as code rather than editor HTML', () => {
    const article = readArticle('running-multiple-ai-agents-at-once-using-git-worktrees');
    const blocks = [...article.querySelectorAll('.article-content pre code')];
    expect(blocks).toHaveLength(11);
    expect(blocks[0].textContent?.trim()).toBe(
      'git worktree add ../agent-folder feature-branch'
    );
    const setup = blocks.find(block => block.textContent?.includes('"setup-worktree"'))!;
    expect(JSON.parse(setup.textContent!)).toEqual({
      'setup-worktree': [
        'npm install',
        'cp $ROOT_WORKTREE_PATH/.local.env .local.env',
        "echo 'Setup complete'",
      ],
    });
  });
});
