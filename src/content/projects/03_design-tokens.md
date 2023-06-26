---
title: Design Tokens
client: Figma workflow plugin
class: project-figma
buttonLabel: Open Project
buttonTarget: _blank
url: https://www.figma.com/community/plugin/888356646278934516/Design-Tokens
responsibilities:
  - Concept
  - Design
  - Development
startDate: 01.09.2020
endDate: 01.10.2020
image: /src/assets/images/Design_Tokens_2x.jpg
imageAlt: Figma Design Token Plugin
---
###### Problem
If you are building a modern design system in Figma you probably use design tokens. External design token solutions add complexity as they don't sync well with Figma. Using an external tool & Figma to specify tokens means you have two sources of truth — not the idea behind design tokens.
###### Solution
To solve this problem I developed the [Figma Design Tokens plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens). It allows you to export styles and specific token elements as a json file. You can transform the file for any platform (mobile, web, etc.) using amazon style dictionary. To further improve your workflow the plugin can directly publish the tokens to a github. It comes with a [template](https://github.com/lukasoppermann/design-token-transformer) that automatically transforms tokens using github action. Your development team can use the token repository as a dependency. This creates a perfect sync between design and development — making sure the dev team always has the latest tokens. You can read more about this approach in my article on [building a better design token pipeline](https://uxdesign.cc/building-better-products-with-the-design-token-pipeline-faa86aa068e8).
