---
title: "Design tokens for non-designers"
url: "https://lukasoppermann.medium.com/design-tokens-for-non-designers-f68b8b0fbf0a"
published: "2025-04-23"
excerpt: "Understanding tokens from the perspective of developers, product owners, and project managers."
---

---

![](https://cdn-images-1.medium.com/max/2400/1*Nce0Ff_pkzGnkGBUOvZj0w.jpeg)

Design tokens represent a fundamental shift in how we manage design decisions in modern software development. They serve as the smallest building blocks of visual design, storing and distributing design decisions across platforms and teams¹.

They are defined once in a central place in a structured text format like JSON² and can be converted to be used by developers e.g. as CSS and designers e.g. imported into Figma.

## Understanding Design Tokens

Design tokens contain UI data like colors, text styles, spacing, and animations for building cross-platform UI³. Instead of hard-coding values for each platform, tokens provide a centralized way to manage design decisions that work across all platforms and applications.

![Design token inheritance pyramid from raw values to base tokens to semantic and lastly component tokens.](https://cdn-images-1.medium.com/max/2400/1*2f8pWUHqfbfxaIj3HYQGGA.jpeg)

### **Types of Design Tokens**

- **Base Tokens**: Store base values that are referenced in other tokens like color and sizes scales, font weight or font families⁴.
- **Semantic Tokens**: Define which base token to use for specific scenarios⁴ for example the text color for a link.
- **Component Tokens**: Define specific component-level tokens⁴ for example the background for a primary button.

![Decorational: The value proposition](https://cdn-images-1.medium.com/max/2400/1*p43XK-YjO58BUKbAKtFEUA.jpeg)

## The Value Proposition

Design tokens significantly improve development efficiency and design consistency in several ways:

### Cross-Platform Consistency

Teams can maintain visual consistency across different platforms and devices by using tokens as a single source of truth⁵. When changes are needed, updating a token automatically propagates the change everywhere it’s used⁶. This allows teams to address 80–90% of the consistency challenges with significantly less effort.

### Development Speed

Developers can work more efficiently with pre-defined token values rather than manually implementing styles⁶. This reduces the time spent on design implementation and QA reviews.

### Financial Impact

Design tokens can create significant cost savings, particularly for large organizations. Major design changes that traditionally took months and required large teams can now be implemented more efficiently⁷. This translates to reduced development costs and faster time-to-market for updates.

### Team Collaboration

Design Tokens act as a common language between designers and developers, reducing miscommunication and implementation errors⁶. They serve as a bridge between design tools and development environments as they can be imported into both from a single source of truth.

### Scalability

Design tokens enable rapid scaling by providing a standardized design language that grows with the company. They streamline onboarding, support quick product launches, and maintain brand consistency across platforms without requiring additional overhead for each new initiative. This makes design tokens particularly valuable during periods of rapid growth, where maintaining design quality could otherwise become a bottleneck.

### Quality Improvements

By providing a single source of truth for design values, tokens significantly reduce styling-related bugs while ensuring visual consistency across different platforms. This structured approach results in more predictable design implementation, ultimately leading to higher quality products.

### Accessibility

Design tokens encode accessibility standards for color contrast, font sizes, and spacing directly into the design system. This approach ensures accessibility requirements are built in from the start, making it easier to maintain WCAG compliance and create inclusive experiences across all platforms without additional overhead.

### Automated design updates across

Tokens allow to make design token updates in one central place and release them to all products at once. This not only saves a lot of time and effort but allows to implement accessibility fixes or brand updates without the need for product teams to plan any time for implementing the changes. It all happens in the design token repository.

![](https://cdn-images-1.medium.com/max/2400/1*Wi2uF5dYwOkY4L8cYmJzkQ.jpeg)

## The Technical Side of Design Tokens

Design tokens are typically stored in platform-agnostic formats like JSON, which serve as a centralized source of truth⁸ for design decisions. These token files contain key-value pairs that define everything from colors and typography to spacing and animations⁵. The tokens are then transformed into platform-specific formats through automated build processes, allowing them to be consumed as CSS custom properties, JS variables, or native platform variables depending on the target environment². The converted tokens are made available as packages to be consumed by platforms like web or iOS.

When designers update tokens in tools like Figma⁹, automated pipelines can detect these changes and trigger builds that generate updated token files across all platforms¹⁰. This automation ensures that design changes propagate consistently throughout the entire product ecosystem without manual intervention, significantly reducing the potential for errors and inconsistencies in implementation¹¹.

## Common Use Cases

Design tokens excel in several scenarios:

- **Color management**: Design tokens establish a single source of truth for color values, ensuring brand colors are consistently applied across all touchpoints.
- **Typography standardization and hierarchy**: Tokens define font families, sizes, weights, and line heights in a systematic way that maintains clear visual hierarchy across all interfaces.
- **Spacing and layout consistency**: By codifying spacing units and layout rules as tokens, teams can maintain consistent component spacing and page layouts without manual calculations.
- **Color accessibility through contrast ratios of color pairs**: Tokens can enforce WCAG-compliant color combinations by storing pre-validated color pairs that meet minimum contrast requirements.
- **Theme implementation**: Design tokens simplify dark mode and custom themes by organizing color schemes and styling rules into swappable token sets that can be switched dynamically without any engineering needed by the feature teams.
- **Cross-platform design consistency**: Using tokens ensures that design values remain consistent whether they’re implemented in iOS, Android, or web platforms, despite different underlying technologies.

## Working with Design Tokens

In practical implementation, design tokens are typically consumed as packages within development environments, that provide tokens as language specific variables. This approach significantly reduces the cognitive load on developers, who can focus on functionality while maintaining design fidelity.

Meanwhile, designers work with these same tokens within design tools like Figma or Sketch. Modern design tools support token-based workflows, allowing designers to apply consistent styles across their work by referencing the same token values that developers will ultimately use.

With this approach design tokens have no negative impact on build time. However, they can drastically speed up development through better communication, shared primitive values and a common vocabulary.

![Workflow integration decorative image](https://cdn-images-1.medium.com/max/2400/1*5rkrXUkRyRWQ36fC2QQGgw.jpeg)

## Integration with Development Workflow

Integrating design tokens into the development workflow requires a thoughtful approach that aligns with modern software practices. Design tokens should be treated as a critical part of the codebase, stored in version control. However, they should live in their own repository⁸.

This allows teams to track changes, manage conflicts, and roll back updates if necessary. Build process automation is essential for seamlessly incorporating tokens into the development pipeline.

Automated scripts can transform token definitions into platform-specific formats and distribute them to various parts of the system during the build process. It can also be used for testing and validating that tokens work and conform to specific standards like wcag contrast ratios¹².

Clear documentation is equally important, providing teams with a shared understanding of how to use and maintain the token system. This documentation should be easily accessible and regularly updated to reflect changes in the token ecosystem, ensuring that all team members can effectively work with the design tokens regardless of their role or expertise.

## When to Use Design Tokens

Design tokens are particularly valuable for teams seeking to maintain design consistency. They are useful for teams with and without a design system. For small teams, tokens provide a lightweight solution to unify design and development, ensuring that visual elements remain consistent across projects. They are also ideal for organizations managing products on multiple platforms, such as web, iOS, and Android, as tokens allow for centralized updates that propagate seamlessly across all environments.

Additionally, design tokens shine in scenarios where brand updates, accessibility improvements or frequent design changes are required. Instead of manually updating styles across every component or platform, teams can make quick adjustments by modifying token values, saving time and reducing errors.

For teams that lack the resources to implement and maintain a comprehensive design system, tokens offer an efficient alternative that delivers many of the same benefits without the complexity. This makes them an excellent choice for fast-moving teams or projects with evolving design needs.

## Summary

Design tokens are a fundamental tool in modern software development, centralizing design decisions for consistent implementation across platforms. They store primitive values like colors, typography, and spacing, which can be transformed into platform-specific formats.

Using design tokens improves development efficiency, design consistency, and team collaboration while supporting scalability, quality improvements, and accessibility. Tokens are valuable at any size they work extraordinarily well together with a design system but can also be used as a lightweight alternative to full design systems.

1. [https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)

2. [https://medium.com/@lukasoppermann/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c](https://medium.com/@lukasoppermann/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c)

3. [https://www.uxpin.com/studio/blog/what-are-design-tokens/](https://www.uxpin.com/studio/blog/what-are-design-tokens/)

4. [https://medium.com/user-experience-design-1/naming-design-tokens-9454818ed7cb](https://medium.com/user-experience-design-1/naming-design-tokens-9454818ed7cb)

5. [https://martinfowler.com/articles/design-token-based-ui-architecture.html](https://martinfowler.com/articles/design-token-based-ui-architecture.html)

6. [https://erikfiala.com/blog/design-tokens-ui-consistency/](https://erikfiala.com/blog/design-tokens-ui-consistency/)

7. [https://thestory.is/en/journal/design-token/](https://thestory.is/en/journal/design-token/)

8. [https://medium.com/user-experience-design-1/the-ultimate-design-token-setup-cdf50dc841c8](https://medium.com/user-experience-design-1/the-ultimate-design-token-setup-cdf50dc841c8)

9. [https://medium.com/user-experience-design-1/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7](https://medium.com/user-experience-design-1/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7)

10. [https://www.ableneo.com/insight/the-power-of-design-tokens-a-ux-ui-designers-perspective](https://www.ableneo.com/insight/the-power-of-design-tokens-a-ux-ui-designers-perspective)

11. [https://blog.pixelfreestudio.com/the-importance-of-design-tokens-in-modern-design-systems/](https://blog.pixelfreestudio.com/the-importance-of-design-tokens-in-modern-design-systems/)

12. [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
