# Hi there 👋
![me-working](https://user-images.githubusercontent.com/813754/183907598-d18d505d-56fd-4af4-8d9c-0f723bb05e60.gif)

#### I'm Lukas,
I am a staff design system designer working on GitHub's design system [primer](https://primer.style/). My focus is on design tokens and color but I also work on other design system aspects like components and tooling. I also maintain our Figma libraries.

🔭 I constantly [refresh my portfolio](https://lukasoppermann.com) try out new react stuff and work on my Figma plugins: [design tokens](https://github.com/lukasoppermann/design-tokens) & [elevation scale](https://github.com/lukasoppermann/elevation-scale)

#### 🌱 I am learning
- how to use screen readers
- productivly using an ANSI keyboard (I switched from a german layout)

#### 🤔 I’m looking for help with my open source projects
- [Figma design tokens export plugin](https://github.com/lukasoppermann/design-tokens)
- [Figma elevation system plugin](https://github.com/lukasoppermann/elevation-scale)
- [HTML5 Sortable (drag & drop) package](https://github.com/lukasoppermann/html5sortable)

#### 💬 Ask me about
- design systems
- design tokens
- espresso based drinks 

📫 Reach me on twitter: https://twitter.com/lukasoppermann

🦋 Find me on Bluesky: https://bsky.app/profile/lukasoppermann.com

📚 Read my thoughts on [medium.com/@lukasoppermann](https://medium.com/@lukasoppermann)

🧪 Check out my work: https://lukasoppermann.com
 
😄 Pronouns: he/him

## Development

This repository includes my personal portfolio website built with Astro.

### Homepage project summaries

Projects in `src/content/projects/` appear in filename order under Selected work,
before the resume. Each project's frontmatter includes `challenge`, `role`, and
`outcome` summaries that remain visible on mobile and desktop. Keep these short
and use only supported outcome claims.

The Markdown body contains the deeper process story and responsibilities under
"Project details". Below 1024px this is a disclosure, initially collapsed when
JavaScript is available. On desktop it is always visible with no collapse control.
Resizing preserves the mobile disclosure state. Without JavaScript, details start
open so all content remains available. The project link is always visible.
Opening and closing animate height and content opacity over 420ms, with a
rotating plus/minus stroke. The disclosure label stays fully visible.
Reduced-motion preferences disable both animations. Process subheadings use
level-five Markdown headings (`#####`) beneath the Project details heading.

Primer, Lab1886, Bosch, and Copra keep their image backgrounds visible while images load.
Images fade in over 1200ms with ease-in-out and slide up 64px over 1500ms with a
long ease-out once loaded and at least 35% visible, only once per page visit.
Primer combines its token panel with an optional `imageOverlay` and
`imageOverlayAlt`. Both layers load before revealing; the dark overlay follows
the white panel by 180ms.
Visible images load first; after the page loads, offscreen images
preload one at a time during browser idle periods (with a timer fallback).
Reduced-motion preferences disable the transition. Without JavaScript, native
lazy-loaded images remain available. Other project images are unchanged.

### Medium Articles

The article index is populated from Medium's RSS feed:

```bash
npm run sync-articles
```

This script:
- Fetches articles from the Medium RSS feed at https://lukasoppermann.medium.com/feed
- Parses and validates the RSS XML, HTTPS URLs, and publication dates
- Compares them with existing articles in `src/content/articles/`
- Creates safely escaped Markdown frontmatter for new articles and disambiguates filename collisions
- Preserves existing article files

The feed contains article metadata, but not full article text. Articles without
a local body link directly to Medium. To publish a readable copy on this site,
add the article text below its frontmatter in the corresponding Markdown file
in `src/content/articles/`. Astro then creates `/articles/<slug>/`, and the
index links to that page. Local copies identify Medium as the canonical source
and link back to the original.

Article pages use a centered reading column on desktop and the full content
width on smaller screens. Write links as `[label](url)` (or ``[`code`](url)``),
not with backticks around the entire link. Fenced code blocks must contain
plain code, not Medium's editor HTML or syntax-highlighting markup.
Section dividers use the site's subtle gray border style; do not start an
article body with a divider beneath the publication date.

Keep emphasis markers tight to their content: `**bold text**` and `*italic text*`,
never `** bold text **`. Put a space after every list marker (`- ` or `1. `)
and indent continuation paragraphs to align with the list item's content.
Keep numbered sequences in one list rather than separating their descriptions
into unindented paragraphs.

Article links animate their underlines on hover and keyboard focus without moving
the text or icons. Resource links and the original Medium link have no underline
at rest. Reduced-motion preferences make underline changes immediate.

The sync script is idempotent and preserves existing article files.

### Speaking

The About page lists talks below work experience, newest year first. Entries in
`src/content/talks/` were imported from the Read.cv export through May 2025,
including workshops, panels, internal sessions, and a podcast. Add newer talks
as Markdown files. `order` controls ordering within a year (lower numbers first);
filenames break ties. Only years are displayed, so exact dates are not required.

Each entry has a `title`, `event`, and numeric `year`. Optional fields are `url`
(the title's external link), `location`, `speakers` (co-speaker names), and `media`.
The Markdown body is the short description; missing details are omitted.

```yaml
---
title: "Async/Await: Close collaboration across non-overlapping time zones"
event: "LGTM by GitHub"
year: 2024
order: 8
url: "https://www.youtube.com/watch?v=LN6dGGBfDYs"
location: "Seattle, USA"
speakers:
  - "Katie Langerman"
media:
  - type: image
    image: "../../assets/images/talks/08-01.webp"
    alt: "Async/Await at LGTM by GitHub, image 1"
  - type: video
    title: "Session recording"
    url: "https://www.youtube.com/watch?v=LN6dGGBfDYs"
---

Lessons from two years of asynchronous collaboration.
```

Store images in `src/assets/images/talks/`; paths are relative to the entry.
Every image gets its own unlabeled, uncropped thumbnail below the description,
with a light border and subtle shadow. Description links are underlined.
Hovering or keyboard-focusing a thumbnail enlarges it slightly and lifts it
with a broader, darker shadow; the border stays unchanged. Reduced-motion
preferences keep the shadow change but disable movement and transitions.
The viewer fits the image within the viewport, with no caption, padded
background, or separate Close button. The image itself is a labeled close
button: clicking the image or backdrop, Escape, or Enter/Space on the focused
image dismisses the viewer and returns focus to the card. A zoom-out cursor
signals click-to-close. Without JavaScript,
the card links directly to the image. Images are optimized locally, and no
third-party media is embedded. Video and slide cards use `type: video` or
`type: slides`, plus `title` and an HTTP(S) `url`, and open the original resource.
Title links do not automatically create media cards.

### Testing

Build the site and run the behavior and focused unit tests with:

```bash
npm run test:run
```

See [tests/README.md](tests/README.md) for coverage and focused commands.
Optional visual comparisons are available separately, not required by the default suite:

```bash
# Run visual regression tests
npm run test:visual

# Update baselines after intentional changes  
npm run test:visual:update
```

See [docs/visual-regression-testing.md](docs/visual-regression-testing.md) for detailed information.
