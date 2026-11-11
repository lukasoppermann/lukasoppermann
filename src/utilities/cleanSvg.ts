import { parse } from 'node-html-parser';
import { optimize } from 'svgo';

export type ImportedSvg = {
  innerHTML: string;
  attributes: Record<string, string>;
};

const unsafeElements = new Set([
  'script',
  'foreignobject',
  'iframe',
  'object',
  'embed',
  'style',
  'animate',
  'animatemotion',
  'animatetransform',
  'set',
]);
const externalUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/gi;

export const cleanSvg = (svgString: string): ImportedSvg => {
  const optimizedSvg = optimize(svgString, {
    plugins: [
      { name: 'cleanupAttrs' },
      { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
    ],
  });
  const root = parse(optimizedSvg.data);
  const svg = root.querySelector('svg');

  if (!svg) {
    throw new Error('Expected an SVG root element');
  }

  const elements = [svg, ...svg.querySelectorAll('*')].reverse();

  for (const element of elements) {
    if (element !== svg && unsafeElements.has(element.tagName.toLowerCase())) {
      element.remove();
      continue;
    }

    for (const [name, value] of Object.entries(element.attributes)) {
      if (/^on/i.test(name)) {
        element.removeAttribute(name);
        continue;
      }

      if (name === 'href' || name === 'xlink:href' || name === 'src') {
        if (!value.startsWith('#')) {
          element.removeAttribute(name);
        }
        continue;
      }

      const references = [...value.matchAll(externalUrl)];
      if (references.some(([, , reference]) => !reference.trim().startsWith('#'))) {
        element.removeAttribute(name);
        continue;
      }

      if (name === 'style') {
        if (
          /expression\s*\(|javascript:|@import/i.test(value)
        ) {
          element.removeAttribute(name);
        }
      }
    }
  }

  return {
    innerHTML: svg.innerHTML,
    attributes: svg.attributes,
  };
};
