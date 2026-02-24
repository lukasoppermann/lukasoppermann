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

### Syncing Medium Articles

To automatically fetch and add new articles from Medium to the website:

```bash
npm run sync-articles
```

This script:
- Fetches articles from the Medium RSS feed at https://lukasoppermann.medium.com/feed
- Compares them with existing articles in `src/content/articles/`
- Creates markdown files for any new articles not already present
- Preserves existing article files

The script is idempotent - it's safe to run multiple times and will only add articles that don't already exist.

### Testing

The website includes automated visual regression testing to catch unintended changes:

```bash
# Run visual regression tests
npm run test:visual

# Update baselines after intentional changes  
npm run test:visual:update
```

See [docs/visual-regression-testing.md](docs/visual-regression-testing.md) for detailed information.
