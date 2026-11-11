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

The sync script is idempotent and preserves existing article files.

### Testing

Run the unit, build-snapshot, and browser behavior tests with:

```bash
npm run build
npm run test:run
```

The website includes automated visual regression testing to catch unintended changes:

```bash
# Run visual regression tests
npm run test:visual

# Update baselines after intentional changes  
npm run test:visual:update
```

See [docs/visual-regression-testing.md](docs/visual-regression-testing.md) for detailed information.
