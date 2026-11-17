---
title: Making GitHub's design system AI-ready
client: GITHUB
challenge: AI agents struggled to use GitHub's design system, Primer, correctly. They selected wrong tokens, rebuilt existing components, and took too long to produce results.
role: Led a two-quarter initiative as DRI, defining the strategy, building AI tooling, and working with engineers to improve Primer's architecture.
outcome: Shipped AI-ready tooling available to GitHub teams, reducing agent execution time by up to 65% and improving the accuracy and quality of generated UI.
class: project-primer
responsibilities:
  - AI & design system strategy
  - Technical architecture & prototyping
  - AI agent development & evaluation
  - Design token architecture & tooling
  - Component API design
  - User research & experimentation
  - Cross-functional leadership
  - Engineering collaboration
image: /src/assets/images/primer-ai-ready.png
imageAlt: Primer design token definition with structured usage guidance for AI
startDate: "2025-01-01"
endDate: "2026-12-31"
---
##### Making Primer understandable to AI
Design systems contain knowledge that isn't always explicit in their documentation. I added structured usage guidance directly to Primer's design tokens and built specialized MCP search capabilities to help agents find the right tokens faster.

In our evaluations, the MCP reduced execution time by 65%, used 52% fewer input tokens, and achieved 100% valid token selection.

##### Adapting Primer for AI-generated interfaces
Agents often rebuilt components when they couldn't customize existing ones. I developed an approach using smaller, composable components and styling APIs that offered more flexibility without sacrificing consistency.

I worked with engineers to address maintenance concerns and align on the changes. I also built and optimized a component creation agent, reducing build times by roughly 50% while improving quality scores by 12–15 points in our benchmarks.
