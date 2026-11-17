# Testing

The default suite checks behavior, not editorial content or exact visual output.
It does not snapshot HTML, lock down article wording, or assert animation timings.

## Running tests

```bash
# Build, type-check, and run every test
npm run test:run

# Build and run only the browser smoke checks
npm run test:smoke

# Watch tests during development (build first for browser checks)
npm run build
npm test
```

Browser tests require Puppeteer's matching Chrome installation. If it is missing:

```bash
npx puppeteer browsers install chrome
```

The smoke suite starts and stops its own local server on an available port.
External requests and analytics are stubbed; it does not depend on third-party uptime.

## Coverage

- Every generated page loads at mobile and desktop widths without script errors or
  failed local resource requests. Local link targets exist, and local images load and
  become visible when scrolled into view.
- All articles with a body produce routes and appear in the overview. A real
  click-through exercises the overview, article rendering, related articles,
  and return navigation without depending on specific text or article names.
- Mobile navigation opens, closes with Escape, restores focus, and follows links.
  Project details expand/collapse on mobile and remain expanded on desktop.
  These interactions run with normal and reduced motion.
- Project and work-experience collection bodies render, and project content/images
  remain available without JavaScript.
- Focused unit tests cover image-loading scheduling and failure recovery, date
  parsing, SVG sanitization, and RSS parsing/filename collision handling using
  synthetic inputs. Astro's build validates real collection schemas.

This is a regression safety net, not proof that every possible failure is covered.
Pixel-level appearance, exact animation choreography, and external services are
intentionally outside the default suite. The optional visual comparison tool is
documented in [visual regression testing](../docs/visual-regression-testing.md).
