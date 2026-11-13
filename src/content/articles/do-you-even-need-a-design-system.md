---
title: "Do you even need a design system?"
url: "https://lukasoppermann.medium.com/do-you-even-need-a-design-system-e7f79a07fd75"
published: "2024-12-18"
excerpt: "Analyzing the costs and benefits to determine if a design system is worth the investment."
---

![Picture from Matrix with two hands, one holding a red pill the other one a blue pill, symbolizing a fundamental decision.](https://cdn-images-1.medium.com/max/2400/1*m8Y6YTztz2Jo29lgLlShdg.jpeg)

## Preface

A design system has become a synonym of successful product design. But this is of course not true. You can build great products without a design system and awful ones even though you have an extensive design system.

Building a design system demands significant time and resources. Without proper planning and execution, you risk accumulating technical and design debt with no return on investment.

This article cuts through the hype to examine when building a design system truly makes sense for your organization — and when it doesn’t.

![Graphic showing your options: Design System, Design Tokens, Design Library, Code Library](https://cdn-images-1.medium.com/max/2400/1*gbHou9tzXauq-T_1ZyG9iA.jpeg)

## There is more out there than design systems: Understanding the difference

### Design System

A design system is the most comprehensive solution, including patterns, guidelines, documentation, reusable components, and design tokens.¹
A design system exposes components and design tokens to designers in the form of a design library (e.g. Figma library) and developers as a pattern library / code components (e.g. a package with react components).
Furthermore, a design system is the only solution that requires some form of documentation, focusing on more than just artefacts to be used in product development.

### Design tokens

While [design tokens](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)² are part of a design system, they can also be exposed separately. Design tokens are basic codified design decisions, like the hex code that is used for a link or the size of the default border radius.
Designers use design tokens as styles or variables in their design tool. Developers can import a design token package which provides design tokens as CSS variables, a JSON object, or a different format.

### Figma / Sketch library

A design library is a solution that exclusively focuses on designers, provide components and possibly design tokens in the design tool of choice. While they can provide similar benefits as a design system, those benefits are only available to designers, possibly getting lost when the designs get translated to code.

### Pattern library / code components

A pattern library, in contrast to a design library, focuses on code. Patterns may be provided as fully functional components (e.g. react components) or as HTML and CSS code that may need some tweaking.

Sometimes, more complex patterns are shared as guidelines explaining how to build them from basic components.

![Photo: Warner Bros. Pictures](https://cdn-images-1.medium.com/max/2400/1*nOd63NT_rvS41YVcc5PtaQ.jpeg)

## Challenges in product development

Now that we understand the different possibilities let's look at typical issues that we need to solve during product development and which solutions can help.

### Consistency

One of the fundamental challenges a design system solves is inconsistency³. Even in products maintained by just a single designer, design elements tend to multiply over time. New colors, text styles, and components emerge despite existing alternatives.

The solution to this problem is a central, shared repository of design decisions (e.g. design tokens) and components.

A design system effectively resolves this by providing design tokens and components that both designers and developers can reference.

A Figma library can help keep all design consistent just as a code component library keeps the code aligned. However, you still have inconsistencies when translating from code to design. Only if you keep the libs in sync, like you would in a design system, can you guarantee consistency.

Design tokens alone can address a big part of the inconsistency. However, this approach requires designers and developers to rebuild components using tokens repeatedly, inevitably leading to more errors than a library would.

**Solution:** Design system, design tokens (partially), design or code library (partially)

### Design-Development Handoff

The transition from design to code has traditionally been a major pain point in product development. The process often requires multiple review cycles before the implementation accurately reflects the design.

Design systems fundamentally transform this workflow by providing a library of pre-built components & design tokens. Instead of recreating designs from scratch, developers can assemble interfaces using existing, standardized elements. While some implementation details still require discussion, this approach speeds up development significantly and yields more consistent results.

Standalone design tokens solve the handoff for design primitives like colors and text styles. But since developers still need to build components from these elements, there’s more room for errors.

Using either a Figma library or code components in isolation falls does not solve the handoff issue. Only when both exist in parallel and remain synchronized can they be similarly efficient as a design system. However, maintaining this synchronization essentially means you’ve already built most of what constitutes a design system.

**Solution:** Design system, design tokens (partially)

### Increasing product development speed

In today’s competitive landscape, whether you’re a startup or an enterprise, velocity is crucial. There’s constant pressure to ship faster — whether to validate ideas, deliver missing features, or maintain competitive advantage.

The ready-to-use building blocks that a design system delivers, dramatically improve product development speed. Teams spend less time creating basic elements and more time solving unique challenges. This acceleration applies to the entire building process — from initial design to development.

While design tokens, standalone component, or design libraries offer some speed benefits, they can’t match the benefit of a design system that delivers synced components to everyone.

**Solution:** Design system

### Increase efficiency / decrease cost

Building everything from scratch repeatedly isn’t just time-consuming — it’s expensive. Organizations can achieve significant cost savings by enabling teams to accomplish more with fewer resources or deliver projects faster with existing teams.

A design system excels at driving these efficiencies through its comprehensive approach from design to development. However, alternative solutions can also deliver meaningful cost benefits. For instance, a shared code component library allows developers to avoid rebuilding common elements, generating substantial time savings. Even agencies working on custom websites can leverage a core component library, adapting the styling through design tokens or custom themes while maintaining the fundamental component architecture.

While design libraries and tokens can improve efficiency, their impact on cost reduction is more modest. This is because creating a component in Figma typically requires far less time and effort than building its coded counterpart. The same principle applies to design tokens, which offer convenience but don’t match the comprehensive cost benefits of reusable code components.

**Solution:** Design system, code components (partially)

### Scalability and Maintenance

With a growing company and more products to build scaling design across multiple feature teams and keeping everything up to date becomes increasingly challenging. Simple updates like changing the brand color or an accessibility fix become near impossible when designers are spread across many projects and locations.

A design system offers a solution to this scaling challenge. By centralizing design decisions and components in a unified system, changes can be implemented once and automatically propagate across all products. This centralized approach transforms what would be a massive undertaking into a streamlined process.

Design tokens on their own can already solve a big part of the problem. Anything from color changes, border radius or spacing can be done via tokens. Even contrasts can be solved this way. However, there is still a lot that can’t be done via tokens: most accessibility features, behaviours, layout, etc.

While standalone design and code libraries provide partial solutions, they require dedicated maintenance to ensure changes are consistently implemented across all libraries. Their effectiveness depends heavily on having dedicated resources to manage synchronization.

**Solution:** Design system, design tokens (partially), code components (partially), design library (partially)

### Faster prototyping

For startups and innovation teams, rapid idea validation is crucial. In these scenarios, perfect code quality and design consistency take a back seat to speed, as prototypes are often discarded or completely rebuilt after testing.

A design system, particularly one with complex, customizable components, can dramatically accelerate prototyping. When components can be modified through tokens or CSS overrides, teams can work like they’re using building blocks — quickly assembling interfaces while focusing their energy on unique elements that differentiate their product.

However, since prototype quality and consistency aren’t primary concerns, simpler solutions can be equally effective. Independent design and code libraries, even if not perfectly synchronized, provide enough structure for rapid prototyping. As long as the final product is functional enough to test concepts, these lighter solutions often suffice.

Design tokens on the other side, deliver close to no benefit for fast prototyping.

**Solution:** Design system, code components, design library

## Required investment for a design system

Quantifying the cost of a design system is tough as it depends on many factors. Authentika’s analysis suggests that building a design system with 40 components requires approximately 4,800 manhours — equivalent to three full-time employees working for 10 months, with an estimated cost of $288,000⁴.

While these numbers are a good reference point, the key takeaway is that a design system demands a substantial number of resources. From my experience, more than creating standalone design and code libraries. This increased investment is due to it being an official product that carries organizational commitments. A design system requires documentation, stakeholder alignment, and continuous synchronization between design and development.

Unlike design and code libraries that teams can develop incrementally as side projects, a design system typically demands a dedicated team that can focus on the design system. The major difference is that a design library is often a “can use” whereas a design system should be a “must use” tool.

For organizations facing challenges that only a design system can address, it is totally worth making the investment, given its broad impact on product development, consistency, and team efficiency. However, if your primary need is sharing components among designers, implementing a full design system might be unnecessarily complex and resource intensive.

![Photo: Warner Bros. Pictures](https://cdn-images-1.medium.com/max/2400/0*RmtHMjKbLuFJeQ3v)

## How team size and should influence your decision

### Small teams

For startups and projects with just a few designers and developers, investing in a design system rarely provides sufficient return on investment. While the benefits exist, the resources required often outweigh the advantages.

A more practical approach combines a design library and code library maintained within the team, potentially enhanced by a design token layer. With a small team, maintaining alignment between these components is easily manageable through direct communication.

### Medium teams

When your team expands beyond 20 designers and developers, typically organizing into feature or project teams, coordination becomes more challenging. However, with dedicated owners for both code and design libraries, maintaining consistency is still possible.

For teams focused on a single product, like a mobile app, a quality assurance processes can effectively maintain design consistency across the entire application.

If the team works on multiple different products or platforms, this becomes more of a challenge. If you notice increasing issues and inconsistencies, it is probably time to upgrade to a design system.

### Organization

Large organizations face significant challenges with design consistency and quality across multiple teams and products. Manual synchronization becomes impractical at this scale and implementing a design system becomes essential for efficient operation.

At this scale, the return on investment also increases significantly as more teams utilize the system. And typically, resources are available to invest in a comprehensive design system. The bigger hurdle could be company politics.

I would argue that having a design system is simply good business practice for organizations of this size.

### Agencies

Agencies present a unique case. Those building similar products for multiple clients can benefit significantly from a design system, even with smaller teams. By creating a foundational system that can be customized through design tokens for each client, agencies can dramatically reduce effort across projects.
This approach essentially creates a customizable component toolkit for client work, making a design system valuable even for the smallest agency teams.

![Photo: Warner Bros. Pictures](https://cdn-images-1.medium.com/max/1600/0*yjjjFBH_qmmLGF2d.jpg)

## Off-the-shelf design system vs. building your own

Off-the-shelf design systems like Material Design present a compelling middle ground by offering pre-built components customizable through design tokens. This approach can deliver significant advantages, especially for teams with little resources to spare.

The immediate benefits are substantial: quick implementation of battle-tested components requiring minimal initial investment. Teams gain access to professionally maintained solutions with comprehensive documentation and community support.
For teams prioritizing functionality over distinctive user experiences, this approach proves especially valuable.

However, several critical limitations must be considered. The primary risk lies in vendor dependency — if support discontinues, you must maintenance everything yourself. Additionally, component extension and modification can present challenges, varying significantly between systems. You should thoroughly evaluate a system’s flexibility, e.g. by customizing a component before you commit to one specific system.

Another crucial point is that a standardized design systems may not address your special requirements. For instance, accessibility features might be limited if the system originates from regions where such considerations aren’t prioritized. With pre-built solutions, teams must accept the available functionality and constraints.

Despite these limitations, off-the-shelf design systems provide an excellent foundation for teams lacking resources for a custom design system. Many teams successfully begin with these solutions before transitioning to custom systems as their needs evolve.

However, enterprise organizations requiring precise brand control or teams developing unique experiences may find pre-built solutions restrictive. Other issues like licensing, ownership, and customization flexibility become particularly significant at scale.

## Summary

A design system is a great solution for product development, but it’s not always the right choice.

It offers significant advantages in consistency, development speed, and maintenance efficiency and streamlines the design-to-code handoff.

However, both design tokens and design libraries on their own can already provide a significant improvement. Especially in small teams where synchronisation is less of an issue.

Smaller teams tend to work well without a design system. Medium teams start to struggle, especially when working on multiple products or platforms. At a large organization level, a design system becomes essential. And the require investment becomes less of an issue.

Agencies are a bit of a snowflake, profiting from design systems even at very small sizes, if they build lots of similar projects where they can reuse their design system.

## Resources

1. [https://en.wikipedia.org/wiki/Design_system](https://en.wikipedia.org/wiki/Design_system)
2. [https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)
3. [https://medium.com/design-bootcamp/11-fantastic-benefits-of-design-systems-793ab3a65394](https://medium.com/design-bootcamp/11-fantastic-benefits-of-design-systems-793ab3a65394)
4. [https://autentika.com/blog/how-much-is-a-design-system-we-counted-and-here-s-the-price-tag](https://autentika.com/blog/how-much-is-a-design-system-we-counted-and-here-s-the-price-tag)
