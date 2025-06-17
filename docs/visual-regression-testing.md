# Visual Regression Testing

This project includes automated visual regression testing to detect unexpected changes in the website's appearance using screenshot comparisons.

## Overview

The visual regression testing system:
- Captures screenshots of all main pages
- Compares current screenshots against baseline screenshots
- Detects visual changes using pixel-level comparison
- Generates detailed reports with visual diffs
- Provides an easy way to update baselines

## Setup

The testing system is already configured and ready to use. No additional setup is required.

### Tested Pages

The following pages are automatically tested:
- Homepage (`/`)
- About page (`/about/`)
- Articles page (`/articles/`)
- Imprint page (`/imprint/`)

## Usage

### Running Tests

```bash
# Run visual regression tests
npm run test:visual
```

This will:
1. Start a local static file server to serve the built website
2. Take screenshots of all pages using Chrome headless
3. Compare current screenshots with baselines
4. Generate a detailed report
5. Exit with error code 1 if differences are found

### Creating Baselines

```bash
# Create initial baselines (first time setup)
npm run test:visual:baseline

# Update baselines after intentional changes
npm run test:visual:update
```

### Understanding Results

When tests pass:
- ✅ All pages match their baselines
- Exit code 0 (success)

When tests fail:
- ❌ One or more pages have visual changes
- Detailed diff images are generated
- HTML report is created
- Exit code 1 (failure)

### Viewing Reports

After running tests, open the generated report:
```
tests/screenshots/report.html
```

The report includes:
- Summary of all tests
- Pass/fail status for each page
- Side-by-side image comparisons
- Visual diff highlighting changes
- Pixel difference statistics

## Files and Directories

```
tests/
├── visual-regression.js      # Main test script
└── screenshots/
    ├── baseline/           # Baseline screenshots (tracked in git)
    ├── current/            # Current screenshots (ignored by git)
    ├── diff/               # Diff images (ignored by git)
    └── report.html         # Test report (ignored by git)
```

## How It Works

1. **Build**: Ensure the website is built with `npm run build` (creates `dist/` directory)
2. **Server**: Starts a local Python HTTP server to serve the static files
3. **Screenshot**: Takes full-page screenshots using Chrome headless browser
4. **Compare**: Uses pixel-perfect comparison with configurable threshold
5. **Diff**: Generates visual diff images highlighting changes
6. **Report**: Creates HTML reports with side-by-side comparisons

## Integration

### Continuous Integration

Add to your CI pipeline:
```bash
npm run build
npm run test:visual
```

The test will fail (exit code 1) if visual regressions are detected.

### Pre-commit Hook

You can add this to your pre-commit hooks to catch regressions early:
```bash
npm run build && npm run test:visual
```

## Troubleshooting

### "No baseline found" error
Run `npm run test:visual:baseline` to create initial baselines.

### Tests fail after intentional changes
Run `npm run test:visual:update` to update baselines with your changes.

### Build errors
Ensure `npm run build` completes successfully before running tests.

## Configuration

The test script can be customized by editing `tests/visual-regression.js`:

- **Viewport size**: Default is 1920x1080
- **Pages to test**: Add/remove pages in the config
- **Comparison threshold**: Adjust pixel difference sensitivity
- **Browser options**: Modify Chrome launch arguments

## Limitations

- Tests visual appearance, not functionality
- Requires manual baseline updates for intentional changes
- Does not test interactive elements or JavaScript behavior
- Screenshots are taken in headless Chrome only

## Future Enhancements

Potential improvements:
- Multiple viewport testing (mobile, tablet, desktop)
- Cross-browser screenshot testing
- Automated baseline updates for specific change types
- Integration with visual diff tools