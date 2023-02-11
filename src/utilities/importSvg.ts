import { parse } from 'node-html-parser';
import { optimize } from 'svgo';
export type importedSvg = {
  innerHTML: string
  attributes: { [key: string]: string }
}

export const importSvg = async (filepath: string): Promise<importedSvg> => {
  try {
    // import
    /* @vite-ignore */
    const { default: svgString } = await import(/* @vite-ignore */`${filepath}?raw`)
    const optimizedSvg = optimize(svgString, {
      plugins: [{
        name: "cleanupAttrs"
      }, {
        name: "removeAttrs",
        params: { attrs: '(stroke|fill)' },
      }]
    });
    // parse
    const root = parse(optimizedSvg.data);
    const svg = root.querySelector('svg');
    // return
    // @ts-ignore
    const { attributes, innerHTML } = svg;
    return {
      innerHTML,
      attributes,
    }
  } catch (e) {
    throw new Error(`${filepath} not found`);
  }
}