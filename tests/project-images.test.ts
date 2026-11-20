import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { initProjectImages } from '../src/assets/scripts/projectImages';

describe('Project image loading', () => {
  let images: HTMLImageElement[];
  let intersect: (entries: Partial<IntersectionObserverEntry>[]) => void;
  let idleCallbacks: (() => void)[];
  const unobserve = vi.fn();

  const enter = (index: number, ratio = 1) => intersect([{
    target: images[index].parentElement!,
    isIntersecting: true,
    intersectionRatio: ratio,
  }]);
  const complete = (index: number, success = true) => {
    Object.defineProperty(images[index], 'naturalWidth', { value: success ? 800 : 0 });
    images[index].dispatchEvent(new Event(success ? 'load' : 'error'));
  };
  const runIdle = async () => {
    expect(idleCallbacks.length).toBeGreaterThan(0);
    idleCallbacks.shift()!();
    await Promise.resolve();
  };

  beforeEach(() => {
    document.body.innerHTML = [0, 1, 2].map(index =>
      `<div><img data-project-image data-src="/${index}.webp"
        data-srcset="/${index}-400.webp 400w, /${index}.webp 800w"
        sizes="50vw" hidden></div>`,
    ).join('');
    images = [...document.querySelectorAll('img')];
    for (const image of images) {
      vi.spyOn(image.parentElement!, 'getBoundingClientRect')
        .mockReturnValue(DOMRect.fromRect({ y: 2000, height: 500 }));
    }
    idleCallbacks = [];
    vi.stubGlobal('IntersectionObserver', class {
      constructor(callback: typeof intersect) { intersect = callback; }
      observe() {}
      unobserve = unobserve;
    });
    vi.stubGlobal('requestIdleCallback', (callback: () => void) => {
      idleCallbacks.push(callback);
      return idleCallbacks.length;
    });
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('complete');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.useRealTimers();
    unobserve.mockClear();
    document.body.innerHTML = '';
  });

  it('loads visible images first and reveals only after loading', () => {
    vi.mocked(images[0].parentElement!.getBoundingClientRect)
      .mockReturnValue(DOMRect.fromRect({ y: 100, height: 500 }));
    initProjectImages();
    expect(images.map(image => image.hasAttribute('src'))).toEqual([true, false, false]);
    expect(images[0].fetchPriority).toBe('high');
    expect(images[0].srcset).toContain('400w');
    expect(images[0].dataset.state).toBe('pending');
    complete(0);
    expect(images[0].dataset.state).toBe('ready');
    expect(unobserve).toHaveBeenCalledWith(images[0].parentElement);
  });

  it('reveals layered images together even when the overlay loads first', () => {
    images[0].parentElement!.append(images[1]);
    initProjectImages();
    enter(0);
    expect(images.slice(0, 2).every(image => image.hasAttribute('src'))).toBe(true);
    complete(1);
    expect(images[1].dataset.state).toBe('pending');
    expect(unobserve).not.toHaveBeenCalled();
    complete(0);
    expect(images.slice(0, 2).map(image => image.dataset.state)).toEqual(['ready', 'ready']);
  });

  it('still reveals a loaded layer when the other layer fails', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    images[0].parentElement!.append(images[1]);
    initProjectImages();
    enter(0);
    complete(0);
    expect(images[0].dataset.state).toBe('pending');
    complete(1, false);
    expect(images[0].dataset.state).toBe('ready');
    expect(images[1].dataset.state).toBe('error');
  });

  it('preloads one image per idle period, waiting for the preceding load', async () => {
    initProjectImages();
    expect(images.every(image => !image.hasAttribute('src'))).toBe(true);
    await runIdle();
    expect(images.map(image => image.hasAttribute('src'))).toEqual([true, false, false]);
    expect(images[0].fetchPriority).toBe('low');
    expect(idleCallbacks).toHaveLength(0);
    complete(0);
    await Promise.resolve();
    expect(images[0].dataset.state).toBe('pending');
    await runIdle();
    expect(images.map(image => image.hasAttribute('src'))).toEqual([true, true, false]);
    enter(0);
    expect(images[0].dataset.state).toBe('ready');
  });

  it.each([true, false])('coordinates HTML artwork with overlay loading (success: %s)', success => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const artwork = document.createElement('div');
    artwork.dataset.projectArtwork = '';
    images[0].parentElement!.prepend(artwork);
    initProjectImages();
    expect(artwork.dataset.state).toBe('pending');
    enter(0, 0.1);
    complete(0, success);
    expect(artwork.dataset.state).toBe('pending');
    enter(0);
    expect(artwork.dataset.state).toBe('ready');
  });

  it('loads on first intersection but waits until 35% visible to reveal', () => {
    initProjectImages();
    enter(0, 0.01);
    expect(images[0].hasAttribute('src')).toBe(true);
    complete(0);
    expect(images[0].dataset.state).toBe('pending');
    enter(0, 0.34);
    expect(images[0].dataset.state).toBe('pending');
    enter(0, 0.35);
    expect(images[0].dataset.state).toBe('ready');
  });

  it('also defers the reveal of initially partially visible images', () => {
    vi.mocked(images[0].parentElement!.getBoundingClientRect)
      .mockReturnValue(DOMRect.fromRect({ y: window.innerHeight - 100, height: 500 }));
    initProjectImages();
    expect(images[0].hasAttribute('src')).toBe(true);
    complete(0);
    expect(images[0].dataset.state).toBe('pending');
    enter(0, 0.35);
    expect(images[0].dataset.state).toBe('ready');
  });

  it('waits for the page load before scheduling offscreen work', () => {
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading');
    initProjectImages();
    expect(idleCallbacks).toHaveLength(0);
    expect(images.every(image => !image.hasAttribute('src'))).toBe(true);
    window.dispatchEvent(new Event('load'));
    expect(idleCallbacks).toHaveLength(1);
  });

  it('uses a delayed fallback when idle callbacks are unavailable', async () => {
    vi.useFakeTimers();
    vi.stubGlobal('requestIdleCallback', undefined);
    Reflect.deleteProperty(window, 'requestIdleCallback');
    initProjectImages();
    expect(images[0].hasAttribute('src')).toBe(false);
    await vi.advanceTimersByTimeAsync(200);
    expect(images.map(image => image.hasAttribute('src'))).toEqual([true, false, false]);
  });

  it('loads a newly visible image without waiting for an idle preload', async () => {
    initProjectImages();
    await runIdle();
    enter(2);
    expect(images[2].fetchPriority).toBe('high');
    expect(images[2].hasAttribute('src')).toBe(true);
    expect(images[1].hasAttribute('src')).toBe(false);
    complete(2);
    expect(images[2].dataset.state).toBe('ready');
    enter(0);
    expect(images[0].fetchPriority).toBe('high');
  });

  it('shows failed images rather than leaving them transparent and continues preloading', async () => {
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => {});
    initProjectImages();
    await runIdle();
    complete(0, false);
    await Promise.resolve();
    expect(images[0].dataset.state).toBe('error');
    expect(warning).toHaveBeenCalledWith('Could not load project image:', '/0.webp');
    await runIdle();
    expect(images[1].hasAttribute('src')).toBe(true);
  });

  it('falls back to loading all images when intersection observation is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    Reflect.deleteProperty(window, 'IntersectionObserver');
    initProjectImages();
    expect(images.every(image => image.hasAttribute('src') && !image.hidden)).toBe(true);
    complete(1);
    expect(images[1].dataset.state).toBe('ready');
  });
});
