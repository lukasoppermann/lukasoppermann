import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
const document = new DOMParser().parseFromString(html, 'text/html');
const projects = [...document.querySelectorAll('#selected-work .Project')];

describe('Selected work', () => {
  it('links from the introduction to work before the resume', () => {
    expect(document.querySelector('.Header--intro a[href="#selected-work"]')).not.toBeNull();
    const work = document.querySelector('#selected-work')!;
    const resume = document.querySelector('#about-me')!;
    expect(work.compareDocumentPosition(resume) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(document.querySelector('.Header--intro a[href="#about-me"]')).not.toBeNull();
  });

  it('shows challenge, role, outcome, and a single image for every project', () => {
    expect(projects).toHaveLength(4);
    for (const project of projects) {
      expect([...project.querySelectorAll('.Project-facts dt')].map(el => el.textContent))
        .toEqual(['Challenge', 'My role', 'Outcome']);
      for (const fact of project.querySelectorAll('.Project-facts dd')) {
        expect(fact.textContent?.trim().length).toBeGreaterThan(0);
        expect(fact.closest('details')).toBeNull();
      }
      expect(project.querySelectorAll('img')).toHaveLength(1);
      expect(project.querySelector('img')?.getAttribute('alt')).toBeTruthy();
      expect(project.querySelector('.Project-meta .dateTime')).not.toBeNull();
      const headingId = project.getAttribute('aria-labelledby')!;
      expect(document.getElementById(headingId)?.tagName).toBe('H3');
    }
  });

  it('provides native project details and keeps external links visible', () => {
    for (const project of projects) {
      const details = project.querySelector('details')!;
      expect(details.hasAttribute('open')).toBe(true);
      expect(details.querySelector('summary')?.textContent).toContain('Project details');
      expect(project.querySelector('.Project-details-heading')?.textContent).toBe('Project details');
      expect(details.querySelector('.Project-narrative h5')).not.toBeNull();
      expect(details.querySelector('aside h5')?.textContent).toBe('Responsibilities');
      expect(details.querySelector('aside li')).not.toBeNull();
      const link = project.querySelector('.Project-link a')!;
      expect(link.closest('details')).toBeNull();
      if (link.getAttribute('href')?.startsWith('https:')) {
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toContain('noopener');
      }
    }
  });

  it('preserves the published Bosch outcome figures', () => {
    const outcome = document.querySelector('.project-bosch .Project-outcome dd')?.textContent;
    expect(outcome).toContain('30%');
    expect(outcome).toContain('2-star');
  });
});
