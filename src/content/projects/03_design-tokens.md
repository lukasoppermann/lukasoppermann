---
title: Design Tokens
client: Figma workflow plugin
challenge: Keep design tokens in sync without maintaining separate sources of truth in Figma and external tools.
role: Conceived, designed, and built the open-source Figma plugin.
outcome: A direct pipeline from Figma to platform-ready tokens, with JSON export and GitHub publishing.
class: project-figma
buttonLabel: Open Project
buttonTarget: _blank
url: https://www.figma.com/community/plugin/888356646278934516/Design-Tokens
responsibilities:
  - Concept
  - Design
  - Development
startDate: "2020-09-01"
endDate: "2020-10-01"
image: /src/assets/images/Design_Tokens_2x.jpg
imageAlt: Figma Design Token Plugin
---
##### Keeping Figma as the source
I built the [Design Tokens plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) to export Figma styles and token elements as JSON. Teams can transform that file for web and mobile using Style Dictionary rather than specifying the same tokens in another tool.

##### Taking tokens into development
The plugin can publish directly to GitHub. A [companion template](https://github.com/lukasoppermann/design-token-transformer) transforms tokens with GitHub Actions so development teams can consume the token repository as a dependency. I documented the approach in [building a better design token pipeline](https://uxdesign.cc/building-better-products-with-the-design-token-pipeline-faa86aa068e8).
