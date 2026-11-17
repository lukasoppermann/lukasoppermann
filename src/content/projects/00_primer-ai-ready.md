---
title: Making GitHub's design system AI-ready
client: GITHUB
challenge: Help AI agents use Primer correctly instead of choosing the wrong tokens, rebuilding existing components, and taking too long to produce results.
role: Led a two-quarter initiative from research and exploration through implementation as the directly responsible individual.
outcome: Shipped AI-ready token documentation, specialized MCP token discovery, component building blocks, and styling APIs. The tested setup reached 100% correct token selection.
class: project-primer
responsibilities:
  - Leading AI and design system strategy
  - Technical architecture and prototyping
  - AI agent development and evaluation
  - Design token architecture and tooling
  - Component API design
  - User research and experimentation
  - Cross-functional collaboration
  - Driving engineering alignment
image: /src/assets/images/Design_Tokens.svg
imageAlt: A diagram illustrating design tokens and their relationships
startDate: "2025-01-01"
endDate: "2026-12-31"
---
##### My role
As the directly responsible individual (DRI), I led the initiative from research and exploration through implementation. I worked hands-on across design and engineering, built agent tooling and evaluations, developed technical solutions, and collaborated with engineers to bring architectural changes into production.

##### Making design knowledge accessible to AI
Design tokens contain more than values. Their names, relationships, and intended usage carry context that designers and developers understand, but AI agents often miss.

I introduced structured descriptions and LLM-specific guidance directly into Primer's token definitions. This included when to use a token, which tokens to combine, and which ones to avoid.

By keeping this information alongside the tokens themselves, we could generate AI-ready documentation during the build process without maintaining a separate source of truth.

I also built specialized token discovery capabilities for Primer's MCP server. Instead of searching through large lists of tokens, agents could request tokens for specific purposes, such as forms or error states. When agents requested nonexistent tokens, the tools provided guidance to help them find suitable alternatives.

##### Testing what actually works
I built evaluations to test token selection and component generation, using the results to identify incorrect decisions and performance bottlenecks.

One experiment explored using Tailwind CSS instead of Primer tokens. AI agents worked well with Tailwind out of the box, but that advantage disappeared when we replaced its defaults with our own tokens.

Instead, we found that providing Primer's documentation through the MCP and explicitly instructing agents to use it produced better results. In our token evaluation, we reached **100% correct token selection**, with no invalid tokens.

This demonstrated that we didn't need to replace our design system to make it work with AI. We needed to make its existing knowledge accessible in a way agents could reliably use.

##### Making components easier to work with
Agents also struggled when existing components didn't support what they needed. They would often rebuild components instead of reusing them, creating inconsistencies and unnecessary code.

I developed an approach based on smaller, composable building blocks that agents could combine into more complex components. I also proposed exposing internal component elements through data attributes, allowing agents and developers to customize individual parts without rebuilding entire components.

These changes raised concerns about maintenance and the additional work required. I organized a workshop with engineers to explore the trade-offs and align on an approach.

My argument was simple: if Primer couldn't support how people wanted to build with AI, they would work around it. Providing controlled flexibility was better than encouraging entirely custom implementations.

The team adopted the approach and implemented the new component capabilities.

##### Optimizing for speed over perfection
One of the biggest challenges was balancing the quality of AI-generated interfaces with the time agents needed to produce them.

Through user feedback and experimentation, we learned that developers often preferred fast results they could iterate on rather than waiting longer for a more complete solution.

This influenced how we designed our agents. For example, instead of running accessibility audits during every iteration, we made them a separate step once an interface was ready for review and eventual production.

This reduced unnecessary work during prototyping while keeping accessibility validation in the workflow before shipping.

##### Outcome
We shipped improved token documentation, specialized MCP token discovery, new component building blocks, and styling APIs.

These improvements became part of Primer's tooling in GitHub's main repository, making them available by default to teams building interfaces with AI agents.

The project helped Primer move beyond a design system primarily documented for people toward one that AI agents could also understand and use.

**Evaluation results:** 100% correct token selection in the tested setup.

**Additional metrics to add:** Token discovery speed, agent execution time, and component generation improvements.
