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