# Visual Regression Testing

This project includes automated visual regression testing to detect unexpected changes in the website's content structure.

## Overview

The visual regression testing system:
- Captures HTML snapshots of all main pages
- Compares current content against baseline snapshots
- Detects structural changes in the HTML
- Generates detailed reports with diffs
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
1. Build the project
2. Compare current HTML snapshots with baselines
3. Generate a detailed report
4. Exit with error code 1 if differences are found

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
- ❌ One or more pages have changed
- Detailed diff files are generated
- HTML report is created
- Exit code 1 (failure)

### Viewing Reports

After running tests, open the generated report:
```
tests/snapshots/report.html
```

The report includes:
- Summary of all tests
- Pass/fail status for each page
- Content hashes for comparison
- Links to detailed diff files

## Files and Directories

```
tests/
├── visual-regression.js     # Main test script
└── snapshots/
    ├── baseline/           # Baseline HTML snapshots (tracked in git)
    ├── current/            # Current HTML snapshots (ignored by git)
    ├── diff/               # Diff files (ignored by git)
    └── report.html         # Test report (ignored by git)
```

## How It Works

1. **Build**: The script works with the built static files in `dist/`
2. **Normalize**: HTML content is normalized to ignore formatting differences
3. **Compare**: Content hashes are compared between baseline and current
4. **Report**: Differences are logged and detailed diffs are generated

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

## Limitations

- Currently tests HTML content structure only (not visual appearance)
- Requires manual baseline updates for intentional changes
- Does not test interactive elements or JavaScript behavior

## Future Enhancements

Potential improvements:
- Screenshot-based visual testing
- Multiple viewport testing
- Automated baseline updates for specific change types
- Integration with visual diff tools