# Case studies

When adding or reordering a case study in `src/content/projects/`, preserve
filename-based display order and verify the entire Selected work list at desktop
widths (1024px and above): images alternate left, right, left, right, starting
with the first case study on the left. Keep placement based on list position in
an equal-width, 50/50 desktop grid so image size stays consistent on either side.
Implement the layout in
`src/components/home/Project.astro`, counting articles with `nth-of-type` so
injected scripts do not affect the pattern and new entries follow it automatically.
On smaller screens, keep each summary above its image.
