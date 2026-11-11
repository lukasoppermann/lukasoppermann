import { describe, expect, it } from 'vitest';
import { cleanSvg } from '../src/utilities/cleanSvg';

describe('cleanSvg', () => {
  it('removes active content, event handlers, and external resource references', () => {
    const result = cleanSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" onload="run()">
        <script>run()</script>
        <foreignObject><iframe src="https://example.com"></iframe></foreignObject>
        <path onclick="run()" d="M0 0" style="fill:url(https://example.com/a.svg#paint)"/>
        <use href="https://example.com/a.svg#shape"/>
        <feImage src="https://example.com/image.png"/>
        <g filter="url(https://example.com/filter.svg#filter)"/>
        <use href="#local-shape"/>
      </svg>
    `);

    expect(result.attributes).not.toHaveProperty('onload');
    expect(result.innerHTML).not.toMatch(/script|foreignObject|iframe|onclick|https:/i);
    expect(result.innerHTML).toContain('href="#local-shape"');
  });

  it('rejects markup without an SVG root element', () => {
    expect(() => cleanSvg('<div>not an svg</div>')).toThrow('Expected an SVG root element');
  });
});
