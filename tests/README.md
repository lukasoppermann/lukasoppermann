# Testing

## Snapshot Testing

This project includes snapshot testing for all pages to ensure content consistency and catch unintended changes.

### Running Tests

```bash
# Run all tests
npm test

# Run snapshot tests only
npm run test:snapshots

# Update snapshots (use after intentional changes)
npm run test:snapshots:update
```

### What's Tested

The snapshot tests capture and compare the full HTML output of all pages:

- Homepage (`/`)
- About page (`/about/`)
- Articles page (`/articles/`)
- Imprint page (`/imprint/`)

### When to Update Snapshots

Update snapshots when you make intentional changes to:
- Page content
- HTML structure
- Styling that affects rendered output

### Test Files

- `tests/snapshots.test.ts` - Main snapshot test file
- `tests/__snapshots__/` - Generated snapshot files (committed to git)

## Motion and Link Behavior

After building the site, run the browser checks with:

```bash
npm run build && npm run test:run -- tests/motion.test.ts
```

These checks use Puppeteer to verify immediate hero visibility with reduced motion,
instant mobile menu and hover state changes, live motion-preference changes, and
the distinction between the Experience link and the navigation's Resume link.
Normal-motion reveals remain unchanged.
Normal-motion interaction checks preserve the original menu and underline timings
and verify the 800 ms SVG icon animation: visible stroke segments travel through
mirrored rightward curves above and below into a centered X, and reverse when
closing or interrupted. Geometry checks limit the outward excursion and verify
each curve turns inward only once.

Mobile layout checks cover narrow, tall, tablet, and landscape viewports. Rows
scale from 48 to 112 px, remain grouped at the top, and leave surplus space below.
CSS caps text by row height and a width allowance for the longest current label;
recheck that allowance when changing labels or the menu font. Short viewports
scroll instead of clipping links. No JavaScript measurements drive the layout.

Closing reverses the link stagger with 30 ms steps from bottom to top: 120 ms
opacity fades and 200 ms movement finish before the panel collapses at 320 ms.
Opening retains its original timings. Browser checks also cover rapid toggling.

For a manual check, enable reduced motion in the operating system or browser
devtools and reload the homepage: all hero content and its background should be
visible immediately. At a mobile width, open and close the menu and hover links;
states should change without animation. Disable reduced motion and reload to
confirm the original reveals still run.