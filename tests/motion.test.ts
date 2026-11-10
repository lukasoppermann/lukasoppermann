// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createServer, type Server } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import puppeteer, { type Browser } from 'puppeteer';

describe('Homepage motion and experience link', () => {
  let browser: Browser;
  let server: Server;
  let url: string;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    server = createServer(async (request, response) => {
      const pathname = new URL(request.url ?? '/', 'http://localhost').pathname;
      const path = join(process.cwd(), 'dist', pathname === '/' ? 'index.html' : pathname);
      const contentTypes: Record<string, string> = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
      };
      try {
        const content = await readFile(path);
        response.writeHead(200, {
          'Content-Type': contentTypes[extname(path)] ?? 'application/octet-stream',
        });
        response.end(content);
      } catch (error) {
        response.writeHead(500);
        response.end(String(error));
      }
    });
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });
    const address = server.address();
    if (!address || typeof address === 'string') {
      throw new Error('Expected a TCP server address');
    }
    url = `http://127.0.0.1:${address.port}`;
  }, 30_000);

  afterAll(async () => {
    await browser?.close();
    if (server?.listening) {
      await new Promise<void>((resolve, reject) => {
        server.close(error => error ? reject(error) : resolve());
      });
    }
  });

  it.each([390, 1280])('shows reduced-motion content immediately at %ipx', async width => {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width, height: 900 });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.goto(url, { waitUntil: 'load' });

      const intro = await page.$$eval(
        '.Header--intro__info, .Header--intro__headline, .Header--intro__slogan, .Header--intro__roles, .Header__background',
        elements => elements.map(element => {
          const style = getComputedStyle(element);
          return [style.opacity, style.transform, style.animationName];
        }),
      );
      expect(intro).toHaveLength(7);
      expect(intro.every(style => style.join(',') === '1,none,none')).toBe(true);
      expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
      expect(await page.$eval('main a[href="/about"]', link => link.textContent?.trim())).toBe('Experience');
      expect(await page.$$eval('nav a', links => links.some(
        link => link.textContent?.trim() === 'Resume' && link.getAttribute('href') !== '/about',
      ))).toBe(true);

      if (width === 390) {
        const menuTransform = () => page.$eval('nav', nav => getComputedStyle(nav).transform);
        const closedTransform = await menuTransform();
        await page.click('.NavigationToggle');
        expect(await menuTransform()).toBe('matrix(1, 0, 0, 1, 0, 0)');
        expect(await page.$$eval('nav a', links => links.every(link => {
          const style = getComputedStyle(link);
          return style.opacity === '1' && style.transitionDuration === '0s' && style.transitionDelay === '0s';
        }))).toBe(true);
        expect(await page.$eval('.NavigationToggle', button => button.getAttribute('aria-expanded'))).toBe('true');
        expect(await page.$$eval('.menu-icon path', paths => paths.every(path =>
          Math.abs(parseFloat(getComputedStyle(path).strokeDashoffset) -
            parseFloat(getComputedStyle(path).getPropertyValue('--open-offset'))) < 0.001 &&
          getComputedStyle(path).transitionDuration === '0s',
        ))).toBe(true);
        await page.click('.NavigationToggle');
        expect(await menuTransform()).toBe(closedTransform);
        expect(await page.$eval('.NavigationToggle', button => button.getAttribute('aria-expanded'))).toBe('false');
        expect(await page.$$eval('.menu-icon path', paths =>
          paths.map(path => getComputedStyle(path).strokeDashoffset),
        )).toEqual(['0px', '0px']);
      }

      const link = await page.$('main a[href="/about"]');
      if (!link) throw new Error('Experience link not found');
      await link.hover();
      const underline = await link.evaluate(element => {
        const underline = getComputedStyle(element, '::before');
        return {
          duration: underline.transitionDuration,
          width: parseFloat(underline.width),
          linkWidth: element.getBoundingClientRect().width,
        };
      });
      expect(underline.duration).toBe('0s');
      expect(underline.width).toBeCloseTo(underline.linkWidth, 2);
    } finally {
      await page.close();
    }
  });

  it('animates the icon along opposite curves while preserving original timings', async () => {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 390, height: 900 });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
      await page.goto(url, { waitUntil: 'load' });
      expect(await page.$eval('.Header--intro__roles', element => {
        const style = getComputedStyle(element);
        return [style.animationDuration, style.animationDelay];
      })).toEqual(['1.5s', '1.75s']);
      expect(await page.$eval('main a[href="/about"]', element =>
        getComputedStyle(element, '::before').transitionDuration,
      )).toBe('1.25s');
      const sampleIcon = () => page.$$eval('.menu-icon path', paths => paths.map(path => {
          if (!(path instanceof SVGPathElement)) throw new Error('Expected an SVG path');
          const style = getComputedStyle(path);
          const offset = -parseFloat(style.strokeDashoffset);
          const length = parseFloat(style.strokeDasharray);
          const start = path.getPointAtLength(offset);
          const end = path.getPointAtLength(offset + length);
          return { offset, length, start: [start.x, start.y], end: [end.x, end.y] };
        }),
      );
      const closed = await sampleIcon();
      expect(closed.map(line => [line.start, line.end])).toEqual([
        [[0, 9], [24, 9]], [[8, 15], [24, 15]],
      ]);
      const curves = await page.$$eval('.menu-icon path', paths => paths.map(path => {
        if (!(path instanceof SVGPathElement)) throw new Error('Expected an SVG path');
        const start = Number(path.dataset.closedLength);
        const end = path.getTotalLength() - 22;
        return Array.from({ length: 101 }, (_, index) => {
          const point = path.getPointAtLength(start + (end - start) * index / 100);
          return [point.x, point.y];
        });
      }));
      curves.forEach((curve, index) => {
        expect(Math.max(...curve.map(point => point[0]))).toBeLessThanOrEqual(27.01);
        const horizontalDirections = curve.slice(1).map((point, step) =>
          Math.sign(point[0] - curve[step][0]),
        ).filter(direction => direction !== 0);
        expect(horizontalDirections[0]).toBe(1);
        expect(horizontalDirections.at(-1)).toBe(-1);
        expect(horizontalDirections.slice(1).filter((direction, step) =>
          direction !== horizontalDirections[step],
        )).toHaveLength(1);
        curve.forEach((point, step) => {
          expect(point[0]).toBeCloseTo(curves[1 - index][step][0], 2);
          expect(point[1] + curves[1 - index][step][1]).toBeCloseTo(24, 2);
        });
      });
      await page.click('.NavigationToggle');
      const timings = await page.$$eval('nav a', links => links.map(link => {
        const style = getComputedStyle(link);
        return parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay);
      }));
      expect(Math.max(...timings)).toBeCloseTo(1.95, 2);
      await page.waitForFunction(() => {
        const distance = -parseFloat(getComputedStyle(document.querySelector('.menu-icon path')!).strokeDashoffset);
        return distance > 10 && distance < 30;
      });
      const middle = await sampleIcon();
      expect(middle[0].start[0]).toBeGreaterThan(0);
      expect(middle[1].start[0]).toBeGreaterThan(8);
      await page.waitForFunction(() =>
        [...document.querySelectorAll('.menu-icon path')].every(path => path.getAnimations().length === 0),
      );
      const crossed = await sampleIcon();
      crossed.forEach(line => {
        expect(line.length).toBeCloseTo(22, 3);
        expect((line.start[0] + line.end[0]) / 2).toBeCloseTo(12, 2);
        expect((line.start[1] + line.end[1]) / 2).toBeCloseTo(12, 2);
        expect(Math.abs(line.end[0] - line.start[0])).toBeCloseTo(Math.abs(line.end[1] - line.start[1]), 2);
      });
      expect(crossed[0].end[0] - crossed[0].start[0]).toBeLessThan(0);
      expect(crossed[1].end[0] - crossed[1].start[0]).toBeLessThan(0);
      expect(crossed[0].end[1] - crossed[0].start[1]).toBeGreaterThan(0);
      expect(crossed[1].end[1] - crossed[1].start[1]).toBeLessThan(0);
      await page.click('.NavigationToggle');
      expect(await page.$eval('nav', element => getComputedStyle(element).transitionDelay)).toBe('0.32s');
      await page.waitForFunction(() =>
        getComputedStyle(document.querySelector('.menu-icon path')!).strokeDashoffset === '0px',
      );
      expect(await sampleIcon()).toEqual(closed);
      await page.click('.NavigationToggle');
      await page.click('.NavigationToggle');
      await page.waitForFunction(() =>
        getComputedStyle(document.querySelector('.menu-icon path')!).strokeDashoffset === '0px',
      );
      expect(await sampleIcon()).toEqual(closed);
    } finally {
      await page.close();
    }
  });

  it('closes text bottom-to-top with a quick fade before collapsing the panel', async () => {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 390, height: 844 });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
      await page.goto(url, { waitUntil: 'load' });
      await page.click('.NavigationToggle');
      await page.waitForFunction(() =>
        [...document.querySelectorAll('nav.Navigation a')].every(link =>
          getComputedStyle(link).opacity === '1'),
      );
      await page.click('.NavigationToggle');
      const closing = await page.$$eval('nav.Navigation a', links => links.map(link => {
        const style = getComputedStyle(link);
        return { duration: style.transitionDuration, delay: style.transitionDelay };
      }));
      expect(closing.map(link => link.duration)).toEqual(Array(5).fill('0.12s, 0.2s, 0.25s'));
      expect(closing.map(link => link.delay)).toEqual(['0.12s', '0.09s', '0.06s', '0.03s', '0s']);
      await page.waitForFunction(() =>
        [...document.querySelectorAll('nav.Navigation a')].every(link =>
          getComputedStyle(link).opacity === '0'),
      );
      await page.waitForFunction(() =>
        getComputedStyle(document.querySelector('nav.Navigation')!).transform === 'matrix(1, 0, 0, 0, 0, 0)',
      );
      await page.click('.NavigationToggle');
      await page.click('.NavigationToggle');
      await page.click('.NavigationToggle');
      await page.waitForFunction(() =>
        [...document.querySelectorAll('nav.Navigation a')].every(link =>
          getComputedStyle(link).opacity === '1'),
      );
      expect(await page.$eval('nav.Navigation', nav => getComputedStyle(nav).transform))
        .toBe('matrix(1, 0, 0, 1, 0, 0)');
    } finally {
      await page.close();
    }
  });

  it.each([
    [320, 568], [390, 844], [390, 1200], [768, 1024], [1023, 768], [667, 375], [320, 240],
  ])('fits grouped mobile menu rows at %ix%i', async (width, height) => {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width, height });
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.goto(url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.click('.NavigationToggle');
      const layout = await page.$eval('nav', nav => {
        const bounds = nav.getBoundingClientRect();
        return {
          height: bounds.height,
          scrollWidth: nav.scrollWidth,
          clientWidth: nav.clientWidth,
          scrollHeight: nav.scrollHeight,
          links: [...nav.querySelectorAll('a')].map(link => {
            const rect = link.getBoundingClientRect();
            const span = link.querySelector('span')!.getBoundingClientRect();
            return { top: rect.top - bounds.top, bottom: rect.bottom - bounds.top,
              height: rect.height, textLeft: span.left, textRight: span.right,
              textHeight: span.height, fontSize: parseFloat(getComputedStyle(link).fontSize) };
          }),
        };
      });
      expect(layout.height).toBeCloseTo(height - 64, 0);
      expect(layout.scrollWidth).toBe(layout.clientWidth);
      expect(layout.links).toHaveLength(5);
      layout.links.forEach((link, index) => {
        expect(link.height).toBeGreaterThanOrEqual(48);
        expect(link.height).toBeLessThanOrEqual(112);
        expect(link.textLeft).toBeGreaterThanOrEqual(16);
        expect(link.textRight).toBeLessThanOrEqual(width - 16);
        expect(link.textHeight).toBeLessThanOrEqual(link.height);
        if (index) expect(link.top).toBeCloseTo(layout.links[index - 1].bottom, 1);
      });
      expect(layout.links[0].top).toBeCloseTo(24, 1);
      if (height >= 844) {
        expect(layout.height - layout.links[4].bottom).toBeGreaterThan(100);
      }
      if (height === 240) {
        expect(layout.scrollHeight).toBeGreaterThan(layout.height);
        await page.$eval('nav', nav => { nav.scrollTop = nav.scrollHeight; });
        expect(await page.$eval('nav a:last-child', link =>
          link.getBoundingClientRect().bottom <= window.innerHeight,
        )).toBe(true);
      }
    } finally {
      await page.close();
    }
  });

  it('preserves normal motion and responds to a preference change', async () => {
    const page = await browser.newPage();
    try {
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
      await page.goto(url, { waitUntil: 'load' });
      expect(await page.$eval('.Header--intro__roles', element => getComputedStyle(element).animationName)).toBe('fadeSlideIn');
      await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      expect(await page.$eval('.Header--intro__roles', element => {
        const style = getComputedStyle(element);
        return [style.opacity, style.transform, style.animationName];
      })).toEqual(['1', 'none', 'none']);
      expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
    } finally {
      await page.close();
    }
  });
});
