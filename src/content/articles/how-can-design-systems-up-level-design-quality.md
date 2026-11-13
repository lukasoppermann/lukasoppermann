---
title: "How can design systems up-level design quality?"
url: "https://lukasoppermann.medium.com/how-can-design-systems-up-level-design-quality-018edd7021c3"
published: "2025-10-14"
excerpt: "Exploring the role of design systems in achieving high-quality designs."
---

![](https://cdn-images-1.medium.com/max/2400/1*6Rh0zGDTf4qngoz-KGoOAg.png)

Before we dive in, if you haven’t read my introductory post about design quality, you may want to do this first.

Some things are very hard to achieve with a design system and even harder to measure. For example, while we can have an impact on business goals by reducing time to market or increasing accessibility, a design system’s impact on a users purchase decision is very hard to measure in a real world situation. So we need to pick the parts we can have an impact on.

![Define your Goals](https://cdn-images-1.medium.com/max/1600/1*kUxENpL0GW2_lbRT91zMew.png)

## Define your Goals

By focussing on why design quality is important from my previous article [**“What is design quality?”**](https://medium.com/design-bootcamp/what-is-design-quality-703387a1d081)¹ we extract the following goals.

### Meeting User Needs

While a design system does not impact the user flow directly, the components that are used in the flow have an important influence on the experience. This way the design system impacts the user needs.

**Be accessible**
This is an area where design systems shine. We start by providing an accessible set of design tokens, laying the foundation for an accessible experience.

Furthermore we provide accessible components, making it easy for designers and developers to create fully accessible products when using the design system.

**Be intuitive to use**
A design system provides components that are intuitive to use by aligning to what is commonly used in the industry were possible. If custom patterns need to be created, we can assure that they are intuitive by testing with real users and adjusting until we get good results in our tests.

**Cater to a diverse range of preferences**
By shipping a design system that flexibly reacts to user changes, like adjusting the font size, changing to dark mode or setting their computer to high contrast mode, we make sure that users preferences and needs are met from the beginning.

### Achieving Business Goals

Depending on the business goals a design system may have a design impact.

But this only works if the business goals are actually design specific. For example if a brand redesign has to integrated into the product, accessibility has to be improved or if the overall visual text hierarchy should be adjusted.

Generally speaking it is hard to directly impact business goals with a design system, as those are typically focused on revenue or user numbers.

### Adhering to Standards

Systems in general are great to standardize and to push standards.

A design system can provide accessible tokens and components to adhere to wcag² standards. It can provide components that follow standard patterns on the respective platform, like web or iOS. And it can even provide development and design tools like configurations for linter or test suits so as to standardize the internal workflow.

### Raise visual quality

By providing tokens, components and guidelines a design system can have a great impact on the visual design quality of the products that use it. For example components should look similar, use adequate typography and follow design principals like gestalt principles.

![Evaluate the Design Quality](https://cdn-images-1.medium.com/max/1600/1*v5T0G9kG-lMEYo4z6gb79g.png)

## Evaluate the Design Quality

With our goals defined we can start to evaluate design work. But this is easier said than done, especially for design systems. So lets look into the details for each goal.

### Do we meet accessibility needs?

A tangible and measurable subgoal we can aim for is *accessibility.* Unlike many vague ambitions, Accessibility is rooted in clear, fact-based standards, which makes it straightforward to track and evaluate. For our design system, this goal revolves around four key areas: design tokens, components, patterns, and guidelines.

**Design tokens**
Accessibility starts at the foundational level with our design tokens. Color contrast is critical: body text needs at least a [***4.5:1* *contrast ratio***](https://uxdesign.cc/getting-the-wcag-color-contrast-right-799508389679)³, while borders and other key visual elements, like chart columns, should meet at least ***3:1***. Font styles should respect minimum size requirements, and spacing must be generous enough to make elements both easily scannable and comfortably clickable.

**Components**
On the component level, the bulk of accessibility requirements usually live in the code, but our design responsibilities still matter. Links should always be distinguishable as links, interactive elements must have sufficient contrast, and all components need large enough hit areas for easy interaction. Importantly, information should never rely on color alone, there should always be a supporting text label, icon (e.g. for success or failure), or another clear differentiator to help everyone understand the intent.

**Patterns**
Patterns carry all the same requirements as components, but with an added layer of complexity. Since they often involve multiple components combined with logic or intent, patterns act more like vetted instructions for solving design challenges. Think of error handling, where patterns can guide how to correctly inform users under different conditions while maintaining accessibility. In this instance a design system acts more like a tutor, explaining the accessibility challenges and helping others learn how to think of them and address them in specific situations.

**Guidelines**
Finally, a design system isn’t just a set of assets, it’s a knowledge hub. Including clear guidelines on accessibility ensures designers can go beyond the provided components and build new ones that still meet standards. Since custom components are inevitable, designers need a reliable reference for the rules and best practices that make components accessible, so they can maintain consistency and inclusivity across new work.

### Are components easy to use?

Making a UI intuitive to use is less straightforward than measuring accessibility, but it’s still relatively easy to measure. You can evaluating the system against usability heuristics, observing real user behavior, and checking how well the design aligns with user expectations.

**Heuristics**
We can assess our design system’s components and patterns by measuring them against well-established usability principles. The first step is to collaborate with product teams and managers to define a clear list of heuristics that everyone agrees on. Once finalized, these principles should be documented in the design system’s website, making them an official reference point for future design decisions.

Some heuristics I find helpful are:

- **Visibility of System State**
 Users should always know what’s happening. Components must clearly convey their state: loading indicators, progress bars, status messages, and notifications with explicit states are all essential to keep users informed.
- **Match Between System and the World **
 Components should use familiar metaphors and conventions, both from general platforms (web, mobile) and specific industry contexts. This includes state colors, recognizable icons, and expected interaction behaviors.
- **Consistency and Standards**
 Stick to platform conventions. Avoid inventing new UI patterns for well-known functionalities, and ensure visual consistency. Buttons should share visual traits with inputs or dropdowns to help users intuitively connect their functions.
- **Error Prevention**
Make it easy for developers to apply sensible defaults and constraints, such as providing a `defaultValue` for inputs or built-in validation patterns to prevent mistakes before they happen.
- **Aesthetic and Minimalist Design**
Provide components that naturally draw attention to the primary task. Steer clear of overly flashy visuals or cluttered patterns. While they may look appealing on their own, they can distract users and pull focus away from the core workflow when integrated into a full layout.

**User Testing**
Observing actual users is key to spotting friction. This is done best in realistic, task-based user tests, where components or patterns are used in context. Observe whether users can complete tasks without confusion, hesitation, or errors. If multiple participants struggle with the same parts, it’s a sign the design isn’t yet intuitive.

During interviews, pay attention to:

- Hesitation at specific steps
- Repeated questions
- Frequent or similar errors
- Points where users get stuck

User testing won’t tell you the *correct *design solution though. They will only reveal where issues exist. If users encounter no problems, you can be confident in the intuitiveness of your design.

**Predictability**
Controls and actions should behave as users expect based on prior experience. The easiest way to test this is to include this as part of your users tests.

Simply ask users what they expect a component to do before they interact with it. Compare predictions to actual behavior.

**Low Cognitive Load**
We want our interfaces to feel obvious, not mentally taxing. This can also be part of the user tests. Using the **Think-Aloud Protocol**, have users narrate their thought process. Confusion or frustration indicates high cognitive load during the entire user tests. Keep reminding them if they forget to tell you what they are thinking, seeing and expecting.

By combining heuristics, real-world testing, and careful attention to user expectations, we can measure and improve intuitiveness. This helps us create a design system that feels effortless to learn and use.

A great design system goes beyond consistency — it needs to cater to the diverse preferences and needs of its users. That might mean supporting multiple themes, letting people adjust font sizes, or even changing the density of the entire UI to fit different working styles or accessibility requirements.

The simplest way to evaluate whether your system is adaptable is to create a checklist of customization options you want to support. Then check if your tokens (like color, typography, spacing) and components are flexible enough to handle those changes. This helps ensure the product can easily adjust to different user needs without adding friction, making the experience more inclusive and user-friendly

### Designed for Flexible Experiences

A great design system goes beyond consistency, it needs to cater to the diverse preferences and needs of its users. That might mean supporting multiple themes, letting people adjust font sizes, or even changing the density of the entire UI to fit different working styles or accessibility requirements.

The simplest way to evaluate whether your system is adaptable is to create a checklist of customization options you want to support. This list should help evaluate if both, your tokens (like color, typography, spacing) and components are flexible enough to handle those changes.

If the design system is flexible, the product can easily adjust to different user needs without adding friction, making the experience more inclusive and user-friendly.

An example checklist to evaluate whether your design system supports customization needs could be the one below. This of course depends on which of those options is relevant for your system and products.

- Can users choose between multiple themes (e.g. light/dark)?
- Is it possible to adjust font size and type for readability / accessibility?
- Can the UI density be changed (comfortable vs. compact spacing)?
- Are color tokens flexible enough for brand adaptations?
- Do components expose customization options (e.g. button variants, input styles)?
- Is there a way to customize icons and imagery for different audiences or markets?
- Does the system support localization and right-to-left layouts?
- Can developers easily override styles to meet specific user or business needs?

### Do we follow or allow designers to follow design principles

Using a clear set of design principles can make design reviews much more objective and constructive. Start by collaborating with the product team to create a set of principles that reflect your company’s values and preferred practices. These can be entirely original, borrowed from design leaders like *Dieter Rams*, or adapted from what works well at other companies.​

Once agreed on, publish your principles on the design system website so everyone can easily reference them. This is especially helpful for designers, who can use them to validate and refine their layouts during the creative process.

With an official, company-wide set of principles in place, the whole team can measure design decisions against shared standards, making feedback clearer and reducing the subjectivity in the process. It’s a simple way to guide everyone toward better, more consistent design outcomes.

**Example:** Dieter Rams Principles of Good Design
1. **Good design is innovative.**
It leverages new technology and possibilities, but never for its own sake.

2.** Good design makes a product useful. **
The product must satisfy both functional and psychological criteria.

3. **Good design is aesthetic. **
Only well-executed objects can be beautiful.

4. **Good design makes a product understandable. **
It clarifies the product’s structure and function.

5. **Good design is unobtrusive. **
Products fulfilling a purpose are like tools — they are neither decorative objects nor works of art.

6. **Good design is honest.**
It does not make a product appear more innovative, powerful, or valuable than it really is.

7. **Good design is long-lasting.**
It avoids being fashionable and therefore never appears antiquated.

8. **Good design is thorough down to the last detail.**
Nothing should be arbitrary or left to chance.

9. **Good design is environmentally friendly.**
It conserves resources and minimizes physical and visual pollution.

10. **Good design is as little design as possible.**
Less, but better — focus on the essential aspects.

---

## **Conclusion**

Design systems play a powerful role in shaping and maintaining high-quality digital products. By providing accessible tokens, intuitive components, and clear guidelines, they help teams deliver experiences that meet real user needs while supporting business goals.

With standardized processes in place, design systems reduce the subjectivity of design decisions, improve collaboration, and make it easier for designers and engineers to work together. Whether it’s ensuring accessibility, fostering intuitive interfaces, supporting customization, or setting out clear design principles, design systems create a shared foundation for teams to build consistent, scalable, and user-focused products. When used well, the result is not just greater efficiency, but products that delight users and stand out for their cohesion and reliability.

**Ready to take your design system to the next level? **
Get your team together, define your core principles, and start measuring what matters most to your users. Make your design system a true foundation for collaboration, quality, and innovation, let’s build products that everyone loves to use.

---

1. [https://medium.com/design-bootcamp/what-is-design-quality-703387a1d081](https://medium.com/design-bootcamp/what-is-design-quality-703387a1d081)
2. [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
3. [https://medium.com/user-experience-design-1/getting-the-wcag-color-contrast-right-799508389679](https://medium.com/user-experience-design-1/getting-the-wcag-color-contrast-right-799508389679)
