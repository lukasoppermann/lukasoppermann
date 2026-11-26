// @vitest-environment node
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer, type Server } from 'node:http';
import { extname, join, relative, resolve, sep } from 'node:path';
import puppeteer, { type Browser, type Page } from 'puppeteer';

const dist = resolve('dist');
const routeFile = (pathname: string) =>
  resolve(dist, `.${extname(pathname) ? pathname : `${pathname.replace(/\/$/, '')}/index.html`}`);
const pages = readdirSync(dist, { recursive: true, withFileTypes: true })
  .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
  .map(entry => `/${relative(dist, join(entry.parentPath, entry.name))}`.replace(/index\.html$/, ''));
const articleRoutes = readdirSync('src/content/articles')
  .filter(file => /\.mdx?$/.test(file))
  .filter(file => readFileSync(join('src/content/articles', file), 'utf8')
    .replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '').trim())
  .map(file => `/articles/${file.replace(/\.mdx?$/, '')}/`);

describe('Site behavior', () => {
  let browser: Browser;
  let server: Server;
  let page: Page;
  let url: string;
  let failures: string[];

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    server = createServer(async (request, response) => {
      try {
        const path = routeFile(decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname));
        if (!path.startsWith(`${dist}${sep}`)) {
          response.writeHead(403).end('Forbidden');
          return;
        }
        const content = await readFile(path);
        const types: Record<string, string> = {
          '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
          '.svg': 'image/svg+xml', '.webp': 'image/webp',
          '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2',
        };
        response.writeHead(200, {
          'Content-Type': types[extname(path)] ?? 'application/octet-stream',
        }).end(content);
      } catch (error) {
        response.writeHead(500).end(String(error));
      }
    });
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });
    const address = server.address();
    if (!address || typeof address === 'string') throw new Error('Expected a TCP server address');
    url = `http://127.0.0.1:${address.port}`;
  }, 30_000);

  beforeEach(async () => {
    failures = [];
    page = await browser.newPage();
    page.on('pageerror', error => failures.push(String(error)));
    page.on('response', response => {
      if (response.url().startsWith(url) && response.status() >= 400) {
        failures.push(`${response.status()} ${response.url()}`);
      }
    });
    page.on('requestfailed', request => {
      if (request.url().startsWith(url)) failures.push(`Failed request: ${request.url()}`);
    });
    await page.setRequestInterception(true);
    page.on('request', request => {
      const target = new URL(request.url());
      // Analytics and third-party availability are not part of the site's smoke checks.
      if (target.origin !== url || target.pathname.startsWith('/_vercel/insights/')) {
        void request.respond({ status: 204 });
      } else {
        void request.continue();
      }
    });
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  });

  afterEach(async () => {
    try {
      expect(failures).toEqual([]);
    } finally {
      await page?.close();
    }
  });

  afterAll(async () => {
    await browser?.close();
    if (server?.listening) await new Promise<void>((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
    });
  });

  it.each([390, 1280])('loads every page, local link and local image at %ipx', async width => {
    expect(pages).toEqual(expect.arrayContaining(['/', '/about/', '/articles/', '/imprint/']));
    expect(articleRoutes.length).toBeGreaterThan(0);
    expect(pages.filter(path => path.startsWith('/articles/') && path !== '/articles/').sort())
      .toEqual([...articleRoutes].sort());
    await page.setViewport({ width, height: 900 });
    for (const path of pages) {
      expect((await page.goto(`${url}${path}`, { waitUntil: 'load' }))?.status(), path).toBe(200);
      expect(await page.title(), path).not.toBe('');
      expect(await page.$$('main'), path).toHaveLength(1);
      expect(await page.$eval('main', main => main.textContent?.trim()), path).toBeTruthy();
      const links = await page.$$eval('a[href]', links => links.map(link => (link as HTMLAnchorElement).href));
      for (const href of links) {
        const target = new URL(href);
        if (target.origin === url) expect(existsSync(routeFile(decodeURIComponent(target.pathname))), href).toBe(true);
      }
      if (articleRoutes.includes(path)) {
        expect(await page.$eval('.article-content', content => content.children.length), path).toBeGreaterThan(0);
      }
      for (const image of await page.$$('img')) {
        const source = await image.evaluate(image => image.currentSrc || image.src || image.dataset.src);
        if (!source || new URL(source, url).origin !== url) continue;
        await image.evaluate(image => image.parentElement!.scrollIntoView({ block: 'center' }));
        await page.waitForFunction(image => {
          const style = getComputedStyle(image);
          return image.complete && image.naturalWidth > 0 && !image.hidden &&
            style.visibility === 'visible' && Number(style.opacity) > 0;
        }, { timeout: 5_000 }, image).catch(error => {
          throw new Error(`Image did not load or become visible on ${path}: ${source}`, { cause: error });
        });
      }
    }
  }, 30_000);

  it.each([390, 1024, 1280])('positions every case study image in display order at %ipx', async width => {
    await page.setViewport({ width, height: 900 });
    await page.goto(`${url}/`);
    const positions = await page.$$eval('.Selected-work .Project', projects =>
      projects.map(project => {
        const summary = project.querySelector('.Project-summary')!.getBoundingClientRect();
        const visual = project.querySelector('.Project-visual')!.getBoundingClientRect();
        return {
          imageLeft: visual.right <= summary.left,
          imageRight: visual.left >= summary.right,
          imageBelow: visual.top >= summary.bottom,
          summaryWidth: summary.width,
          visualWidth: visual.width,
        };
      }));
    expect(positions.length).toBeGreaterThan(1);
    for (const [index, position] of positions.entries()) {
      if (width >= 1024) {
        expect(position.imageLeft, `Case study ${index + 1}`).toBe(index % 2 === 0);
        expect(position.imageRight, `Case study ${index + 1}`).toBe(index % 2 === 1);
        expect(position.visualWidth, `Case study ${index + 1}: equal columns`)
          .toBeCloseTo(position.summaryWidth, 1);
        expect(position.visualWidth, `Case study ${index + 1}: consistent image width`)
          .toBeCloseTo(positions[0].visualWidth, 1);
      } else {
        expect(position.imageBelow, `Case study ${index + 1}`).toBe(true);
      }
    }
  });

  it('opens an article from the overview, follows a related article and returns', async () => {
    await page.goto(`${url}/articles/`);
    const articles = await page.$$eval('main .post-preview', links => links
      .map(link => link.getAttribute('href')!)
      .filter(href => href.startsWith('/articles/')));
    expect(articles.sort()).toEqual([...articleRoutes].sort());
    await Promise.all([
      page.waitForNavigation(),
      page.click(`main .post-preview[href="${articles[0]}"]`),
    ]);
    expect(new URL(page.url()).pathname).toBe(articles[0]);
    const related = await page.$eval('.more-articles .post-preview', link => link.getAttribute('href')!);
    expect(related).not.toBe(articles[0]);
    expect(articleRoutes).toContain(related);
    await Promise.all([page.waitForNavigation(), page.click('.more-articles .post-preview')]);
    expect(new URL(page.url()).pathname).toBe(related);
    await Promise.all([page.waitForNavigation(), page.click('.eyebrow a')]);
    expect(new URL(page.url()).pathname.replace(/\/$/, '')).toBe('/articles');
  });

  it.each([390, 1280])('shows speaking entries and opens image cards at %ipx', async width => {
    await page.setViewport({ width, height: 900 });
    await page.goto(`${url}/about/`);
    const speaking = '.talks';
    expect(await page.$eval(speaking, section =>
      Boolean(section.previousElementSibling?.classList.contains('work-experience')))).toBe(true);
    expect(await page.$$(`${speaking} .talk`)).toHaveLength(23);
    const years = await page.$$eval(`${speaking} time`, elements =>
      elements.map(element => Number(element.textContent)));
    expect(years).toEqual([...years].sort((a, b) => b - a));
    expect(await page.$eval(`${speaking} .talk:first-child .talk-title`, link =>
      link.getAttribute('href'))).toContain('hellodigital.com');
    expect(await page.$eval(`${speaking} .talk:first-child .talk-meta`, element =>
      element.textContent)).toBe('HelloDigital · Berlin, Germany');
    expect(await page.$$(`${speaking} [data-talk-image]`)).toHaveLength(23);
    expect(await page.$$eval(`${speaking} .talk`, talks => talks.some(talk =>
      talk.querySelector('h3')?.textContent?.includes('Getting started with design systems') &&
      !talk.querySelector('h3 a') && !talk.querySelector('.talk-media')))).toBe(true);
    expect(await page.$$eval(`${speaking} .talk-speakers`, elements =>
      elements.some(element => element.textContent?.includes('Katie Langerman')))).toBe(true);
    expect(await page.$$eval(`${speaking} .image-card`, cards =>
      cards.every(card => card.textContent?.trim() === ''))).toBe(true);
    expect(await page.$$eval(`${speaking} .talk-description + .talk-media`, lists =>
      lists.length)).toBeGreaterThan(0);
    expect(await page.$$eval(`${speaking} .talk-description a`, links =>
      links.length > 0 && links.every(link =>
        getComputedStyle(link).textDecorationLine.includes('underline')))).toBe(true);
    for (const selector of [
      '.talk:first-child .image-media:first-child img',
      '.talk:nth-child(7) .image-media:last-child img',
    ]) {
      await page.$eval(`${speaking} ${selector}`, image => image.scrollIntoView({ block: 'center' }));
      await page.waitForFunction(selector => {
        const image = document.querySelector<HTMLImageElement>(selector);
        return image?.complete && image.naturalWidth > 0;
      }, {}, `${speaking} ${selector}`);
      const ratios = await page.$eval(`${speaking} ${selector}`, element => {
        const image = element as HTMLImageElement;
        const rect = image.getBoundingClientRect();
        return { displayed: rect.width / rect.height, source: image.naturalWidth / image.naturalHeight };
      });
      expect(ratios.displayed).toBeCloseTo(ratios.source, 2);
    }
    await page.$eval(`${speaking} [data-talk-image]`, link => link.scrollIntoView({ block: 'center' }));
    await page.click(`${speaking} [data-talk-image]`);
    await page.waitForFunction(() => {
      const dialog = document.querySelector<HTMLDialogElement>('.talk-viewer');
      const image = dialog?.querySelector('img');
      return dialog?.open && image?.complete && image.naturalWidth > 0;
    });
    expect(await page.$eval('.talk-viewer img', image => image.getAttribute('alt'))).toContain('HelloDigital');
    expect(await page.$eval('.viewer-image', button => ({
      focused: document.activeElement === button,
      label: button.getAttribute('aria-label'),
    }))).toEqual({ focused: true, label: expect.stringContaining('Close image viewer:') });
    expect(await page.$eval('.talk-viewer', dialog => {
      const bounds = dialog.getBoundingClientRect();
      const image = dialog.querySelector('img')!.getBoundingClientRect();
      return bounds.width <= innerWidth - 31 && bounds.height <= innerHeight - 31 &&
        Math.abs(image.width - bounds.width) < 1 && Math.abs(image.height - bounds.height) < 1 &&
        Math.abs(image.top - bounds.top) < 1 && Math.abs(image.left - bounds.left) < 1;
    })).toBe(true);
    expect(await page.$$('.viewer-footer, .viewer-close')).toHaveLength(0);
    await page.click('.viewer-image img');
    await page.waitForFunction(() =>
      !document.querySelector<HTMLDialogElement>('.talk-viewer')?.open &&
      !document.querySelector('.talk-viewer img'));
    expect(await page.$eval(`${speaking} [data-talk-image]`, link => document.activeElement === link)).toBe(true);
    for (const action of ['Escape', 'Enter', 'Space', 'backdrop'] as const) {
      await page.keyboard.press('Enter');
      await page.waitForSelector('.talk-viewer[open]');
      if (action === 'backdrop') {
        await page.mouse.click(4, 4);
      } else {
        await page.keyboard.press(action);
      }
      await page.waitForFunction(() =>
        !document.querySelector<HTMLDialogElement>('.talk-viewer')?.open &&
        !document.querySelector('.talk-viewer img'));
      expect(await page.$eval(`${speaking} [data-talk-image]`, link => document.activeElement === link)).toBe(true);
    }
    expect(await page.$$('.talk-viewer img')).toHaveLength(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });

  it.each([false, true])('raises image thumbnails on hover with reduced motion %s', async reduced => {
    await page.setViewport({ width: 1280, height: 900 });
    await page.emulateMediaFeatures([{
      name: 'prefers-reduced-motion', value: reduced ? 'reduce' : 'no-preference',
    }]);
    await page.goto(`${url}/about/`);
    await page.$eval('.image-card', card => card.scrollIntoView({ block: 'center' }));
    await page.waitForFunction(() => {
      const image = document.querySelector<HTMLImageElement>('.image-card img');
      return image?.complete && image.naturalWidth > 0;
    });
    const measure = () => page.$eval('.image-card', card => {
      const bounds = card.getBoundingClientRect();
      const style = getComputedStyle(card);
      return {
        width: bounds.width, top: bounds.top, border: style.borderColor,
        shadow: style.boxShadow, transition: style.transitionDuration,
      };
    });
    const resting = await measure();
    await page.hover('.image-card');
    await page.$eval('.image-card', async card => {
      await Promise.all(card.getAnimations().map(animation => animation.finished));
    });
    const hovered = await measure();
    expect(hovered.border).toBe(resting.border);
    expect(hovered.shadow).not.toBe(resting.shadow);
    if (reduced) {
      expect(hovered.width).toBeCloseTo(resting.width, 2);
      expect(hovered.top).toBeCloseTo(resting.top, 2);
      expect(hovered.transition).toBe('0s');
    } else {
      expect(hovered.width - resting.width).toBeGreaterThan(2);
      expect(hovered.width - resting.width).toBeLessThan(6);
      expect(hovered.top).toBeLessThan(resting.top);
    }
  });

  it('keeps an image load failure dismissible without a separate Close button', async () => {
    await page.goto(`${url}/about/`);
    await page.$eval('.talks [data-talk-image]', link => link.setAttribute('href', '/about/'));
    await page.click('.talks [data-talk-image]');
    await page.waitForSelector('.viewer-error:not([hidden])', { visible: true });
    expect(await page.$eval('.viewer-image', button => document.activeElement === button)).toBe(true);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() =>
      !document.querySelector<HTMLDialogElement>('.talk-viewer')?.open &&
      document.activeElement === document.querySelector('.talks [data-talk-image]'));
    expect(await page.$eval('.talks [data-talk-image]', link => document.activeElement === link)).toBe(true);
  });

  it('keeps talk titles and image links available without JavaScript', async () => {
    await page.setJavaScriptEnabled(false);
    await page.goto(`${url}/about/`);
    expect(await page.$$('.talks .talk')).toHaveLength(23);
    const image = await page.$eval('.talks [data-talk-image]', link => ({
      href: link.getAttribute('href')!, popup: link.getAttribute('aria-haspopup'),
    }));
    expect(image.popup).toBeNull();
    const response = await page.goto(new URL(image.href, url).href);
    expect(response?.status()).toBe(200);
    expect(response?.headers()['content-type']).toBe('image/webp');
  });

  it.each([false, true])('supports mobile navigation and project details with reduced motion %s', async reduced => {
    await page.setViewport({ width: 390, height: 844 });
    await page.emulateMediaFeatures([{
      name: 'prefers-reduced-motion', value: reduced ? 'reduce' : 'no-preference',
    }]);
    await page.goto(url);
    await page.click('.NavigationToggle');
    await page.waitForSelector('nav.Navigation a', { visible: true });
    expect(await page.$eval('.NavigationToggle', button => button.getAttribute('aria-expanded'))).toBe('true');
    await page.keyboard.press('Escape');
    expect(await page.$eval('.NavigationToggle', button =>
      [button.getAttribute('aria-expanded'), document.activeElement === button],
    )).toEqual(['false', true]);
    await page.click('.NavigationToggle');
    await page.waitForSelector('nav.Navigation a[href="/about"]', { visible: true });
    await Promise.all([page.waitForNavigation(), page.click('nav.Navigation a[href="/about"]')]);
    expect(new URL(page.url()).pathname.replace(/\/$/, '')).toBe('/about');
    expect(await page.$eval('nav a[href="/about"]', link => link.getAttribute('aria-current'))).toBe('page');
    const descriptions = await page.$$eval('.work-experience .description', descriptions =>
      descriptions.map(description => description.children.length));
    expect(descriptions.length).toBeGreaterThan(0);
    expect(descriptions.every(count => count > 0)).toBe(true);
    await page.goto(url);
    await page.waitForFunction(() => document.querySelector<HTMLDetailsElement>('details.Project-details')?.open === false);
    await page.click('details.Project-details summary');
    await page.waitForFunction(() => {
      const details = document.querySelector<HTMLDetailsElement>('details.Project-details');
      return details?.open && !details.dataset.animating;
    });
    expect(await page.$eval('.Project-narrative', content => content.children.length)).toBeGreaterThan(0);
    await page.click('details.Project-details summary');
    await page.waitForFunction(() => document.querySelector<HTMLDetailsElement>('details.Project-details')?.open === false);
    await page.setViewport({ width: 1280, height: 900 });
    await page.waitForFunction(() =>
      [...document.querySelectorAll<HTMLDetailsElement>('details.Project-details')].every(details => !details.open));
    await page.click('.Project:has(.Project-link) details.Project-details summary');
    await page.waitForFunction(() => document.querySelector<HTMLDetailsElement>('.Project:has(.Project-link) details.Project-details')?.open === true);
    expect(await page.$eval('.Project-link a', link => link.closest('details')?.open)).toBe(true);
    await page.click('.Project:has(.Project-link) details.Project-details summary');
    await page.waitForFunction(() => document.querySelector<HTMLDetailsElement>('.Project:has(.Project-link) details.Project-details')?.open === false);
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    expect(await page.$eval('.Header--intro__roles', element => getComputedStyle(element).opacity)).toBe('1');
  });

  it('keeps content and project images available without JavaScript', async () => {
    await page.setJavaScriptEnabled(false);
    await page.goto(url);
    const images = await page.$$('.Project-visual img:not([data-project-image])');
    expect(images.length).toBeGreaterThan(0);
    for (const image of images) {
      await image.evaluate(image => image.scrollIntoView({ block: 'center' }));
      await page.waitForFunction(image => image.complete && image.naturalWidth > 0, {}, image);
    }
    const details = await page.$$('details.Project-details');
    expect(details.length).toBeGreaterThan(0);
    expect(await page.$$eval('details.Project-details', details => details.every(detail => detail.open))).toBe(true);
  });
});
