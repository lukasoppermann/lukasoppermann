---
title: "Getting WCAG color contrast right"
url: "https://medium.com/user-experience-design-1/getting-the-wcag-color-contrast-right-799508389679"
published: "2022-10-27"
excerpt: "Actionable tips on how to nail WCAG 2.1 color compliance"
---

![Cover illustration showing abstract mountains and a sunrise.](https://cdn-images-1.medium.com/max/1600/1*EMeNAt-OAwGVUSB0HicRCg.jpeg)

## What is WCAG

Web Content Accessibility Guidelines (*WCAG*) define rules, that make your product accessible to people with disabilities.¹*

The *WCAG* is an [open standard](https://www.w3.org/WAI/standards-guidelines/w3c-process/) developed by the w3c together with individuals and orgs around the world. (Like all other w3c standards).

* *Being general guidelines following the WCAG won’t make your product 100% accessible for everyone.*

### Why should I care about WCAG 2.1?

The [*WCAG 2.1*](https://www.w3.org/TR/WCAG21/)² ([3.0](https://www.w3.org/TR/wcag3/)³ is still a draft) is seen as the most accurate requirement to achieve an accessible product. So much so, that governments all over the world legally require it. This happens through laws like [Section 508](https://www.section508.gov/manage/laws-and-policies/)⁴ or the [European Accessibility Act (EAA)](https://ec.europa.eu/social/main.jsp?catId=1202&intPageId=5581&langId=en)⁵.

This means you need to be *WCAG 2.1* compliant if you offer your products to government organisations or if you want to be able to do so in the future.

It also opens your product up to a larger user base. Don’t forget that disabilities can be temporary⁶. For example if your product is used in a hectic environment, let’s say in a food truck or café. A more accessible product will be easier to use for people who are stressed.

Lastly, it is a lot easier and less time consuming to make your product accessible while you build it. Reworking your entire product to fulfil *WCAG 2.1* all at once, when you have a customer who requires it is a nightmare.

### AA vs. AAA conformance

The W3C defines 3 levels of conformance⁷: A, AA, and AAA. The high level includes all lower levels, so AA also includes A conformance.

Most organisations strive to achieve AA conformance. AA is a good balance between accessibility and a great visual design that fits with your brand. If possible, add a separate theme with partial AAA conformance. For example a high contrast theme. This is especially helpful if you are building a (web) software that is used by people in their daily work.

AAA conformance requires a `7:1` contrast ratios for text, sign language translations for pre-recorded videos and more. But the W3C does not recommend to strive for AAA conformance across your entire website⁸. If possible, key parts of your product should achieve the requirements.

> It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

![Image illustrating the difference between UI elements that conform to AA and AAA.](https://cdn-images-1.medium.com/max/1600/1*yPcNq7BdJHZ00kmxSCO8bw.jpeg)

## WCAG 2.1 color contrast requirements

*WCAG 2.1* has many different requirements. From allowing user to zoom up to 200% without breaking the layout to correct aria labels. But the requirements that designers have to deal with most, are for color contrast.

It can also be one of the hardest to solve. As a designer you standing between the accessibility team, the product team and brand. All want something different. So it is good if you know exactly what the color contrast requirements are. Sadly the *WCAG* doesn’t do a great job at providing a simple and straight forward answer. The specifics are buried in huge amounts of complicated text. So let’s look at it in a simple form.

![](https://cdn-images-1.medium.com/max/1600/1*Vh3iG8vKnfdEOqQ2fbl4Fw.jpeg)

### What is a contrast ratio?

A contrast ratio like `4.5:1` (read 4.5 to 1), `3:1` or `7:1` defines the **difference** in contrast of two colors. In most cases a foreground (e.g. text) and a background color.

To understand this in detail we first need to understand **contrast.**

> ***Contrast**** is the difference in *[*luminance*](https://en.wikipedia.org/wiki/Luminance)* or *[*colour*](https://en.wikipedia.org/wiki/Colour)* that makes an object distinguishable.⁹*

The problem we run into is that this is not true for people with [color vision deficiencies](https://en.wikipedia.org/wiki/Color_blindness) (color blindness). If red and green looks the same there is no hue-contrast at all.

That means, if everything dark and one object is light it has a strong contrast. But it also means if everything is green and one object is red, it has a strong contrast.

![Left circle shows normal vision while the right simulates protanopia (no red).](https://cdn-images-1.medium.com/max/1600/1*daGOd-gfZsPSUx7RAaDKoA.jpeg)

The solution that the w3c chose is to focus on only luminance contrast. Nearly all people can perceive luminance contrasts. This is why the recommended *contrast ratio* is in fact a *luminance contrast ratio*. It measures the difference in luminance (lightness or darkness) of two colors.

### How is a ratio calculated?

The contrast ratio is calculated through a very simple formula¹⁰.

> ***(L1 + 0.05) / (L2 + 0.05)**** = contrast ratio*

- **L1** is the *relative luminance* of the lighter color
- **L2** is the *relative luminance* of the darker color

The resulting ratio is between `1:1` (no contrast) and `21:1` (maximal contrast, black and white).

![Illustration showing the formular for calculating color contrast.](https://cdn-images-1.medium.com/max/1600/1*x6H8HFq6Ue1279Ev0QokZw.jpeg)

But what is *relative luminance*? W3C defines¹¹ it as:

> *The relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white.*

This is a complex way of saying *relative luminance* describes the luminance (≈ brightness) of a color within a given color space¹² on a scale from 0.0 (no luminance) to 1.0 (maximum luminance).

Luckily in your everyday work you don’t have to deal with this, as there are many tools that do the calculation for you.

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — The standard and “official” one
- [ColourContrast.cc](https://colourcontrast.cc/) — A fancier version that does the same thing

You can also check contrasts in your design tool, for example with [contrast for Figma](https://www.figma.com/community/plugin/748533339900865323).

But be careful with tools that use a color picker to get colors form the screen. They are highly influence by the *color profile* your screen is set to. This often results in wrong colors (different hex values) which results in wrong contrast. It’s best to avoid those tools all together.

## Contrast requirements

You can find the official w3c contrast requirements in the section: [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)¹³. This is why they are often referred to only as “*1.4.3”.*

![Illustrations of different colors and a text on top of the colors that meets or exceeds a 4.5:1 contrast ratio.](https://cdn-images-1.medium.com/max/1600/1*Uuc9HicgH44UQ6Ds1sggSw.jpeg)

### Text to background 4.5:1

> *The visual presentation of text and images of text has a contrast ratio of at least 4.5:1[…]*

*From Understanding Success Criterion 1.4.3: Contrast (Minimum)*¹³

The first statement simply means that any text has to have a `4.5:1` contrast ratio with the background. This includes text that is loaded as an image (e.g. png). As stated further down on the page, this also includes placeholder text.

> *The minimum contrast success criterion (1.4.3) applies to text in the page, ****including placeholder text**** and text that is shown when a pointer is hovering over an object or when an object has keyboard focus.*

**There are a few exceptions:**

- large scale text, defined as *18 point or 14 point bold* only needs a `3:1` contrast ratio
- text that is part of a logo has *no contrast requirements*
- text that is part of an inactive UI component (e.g. a disabled button) has *no contrast requirements*
- text that is purely decorative has *no contrast requirements*
- text that is part of an photo has *no contrast requirements*

### Text to links 3:1

> *G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them.*

This section means that you can have links or controls (e.g. buttons) that are only differentiated by color. For example a link without an underline or a button without a border. But only if both of the following two criteria are met.¹⁴

- The text color of the link or control has a `3:1` or larger contrast with the surrounding text. An a `4.5:1` contrast with the background.
- A visual change other than color is show when the user points or tabs to the element. For example an underline is shown on hover.

**Note:** The `3:1` contrast of a link with the surrounding text is only required if the link does **not** have another visual cue. A link with an underline in the resting state has no contrast requirement with surrounding text.

![“amber” is an underlined link, while “purple” has a 3:1 contrast to the surrounding text to meet WCAG 2.1](https://cdn-images-1.medium.com/max/1600/1*k0j7mO6FmVzL7BLnIKc0cg.jpeg)

### Form controls to background 3:1

[WCAG 1.4.11: non-text contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) states that any UI component must have a `3:1` contrast to its surrounding colors. Any visual element that indicates state (like borders, etc.) must meet the same ratio.¹⁵

> *This Success Criterion does not require that changes in color that differentiate between states of an individual component meet the 3:1 contrast ratio when they do not appear next to each other.*

This criterion does not require a border or background for all elements. It is also not required that a background or outline meets any contrast ratio, as long as there is a text (e.g. button label) that meets the required 4.5:1 ratio. But for example for an empty input field, a border or background with a 3:1 contrast IS required.

But showing the boundary of controls with an outline or background is recommended (not required). Backgrounds and borders aid in recognising controls and thus completing activities. This is especially important for people with cognitive disabilities. Being stress or using your phone in a noisy environment can create *temporary cognitive disabilities.*

When measuring adjacent colors, ignore any element that does not interfere with identifying the component. For example an outline of an input field that has insufficient contrast can be ignored if the background has sufficient contrast.

![Illustration showing UI controls that meet WCAG 2.1 in different ways.](https://cdn-images-1.medium.com/max/1600/1*aoT1GIEWN4xowO6DMB2VxQ.jpeg)

### Focus indicator to adjacent colors

Success Criterion 2.4.1¹¹⁶ specifies two sets of requirements for focus indicators. You have to meet at least one set completely to pass this requirement.

**Option one**

- The focus indicator encloses the UI component or sub-component that is focused
- And *the entire focus indicator* has a contrast ratio of at least `3:1` to the same pixels in the unfocused states. *This means the focus indicator color has a* `3:1` *contrast to the color of the pixels it is covering up.*
- And *the entire focus indicator* has a contrast ratio of at least `3:1` against adjacent colors. *This means the color on the inside and outside of the focus indicator has a* `3:1` contrast.

![Illustration of a focus outline that encloses the entire component.](https://cdn-images-1.medium.com/max/1600/1*TRV2zoEB5cqhYlSeaBYUqg.jpeg)

**Option two**

- The *entire focus indicator has a combine surface area* at least as large as the area of a 1px thick outline around the component¹⁷. Or it’s at least as large as a 4px line along the shortest side of the unfocused component.
- And *a part of the focus indicator* has a contrast ratio of at least `3:1` to the same pixels in the unfocused states.
- And *a part of the focus indicator* has a contrast ratio of at least `3:1` against adjacent non-focus-indicator colors, or is 2px or larger.

**Exception:** If you the unmodified systems focus indicator, you automatically pass this criterion.

![Illustration of a focus outline is placed along one side of the component but has a surface area of an outline around the entire component.](https://cdn-images-1.medium.com/max/1600/1*NQLVQbwik5Ed1yMLKvMTAw.jpeg)

### Interaction states

Unlike focus outlines, hover states don’t have any requirements¹⁸. For a hover state it is only required that the text still has a `4.5:1` contrast ratio. As the *Success Criterion 1.4.3: Contrast (Minimum)¹³ applies to all interaction states as well.*

To be explicit an interactive state:

- doesn’t need a specific contrast ratio of the BG color to adjacent colors
- doesn’t need a specific contrast ratio of the BG color the BG color in the default/resting state
- doesn’t need change of the BG color or the element

**Note:** While not required, good contrast between states is still recommended to improve the user experience.

![Illustration of different states of a button](https://cdn-images-1.medium.com/max/1600/1*crIZsNZoU9Db-jUVR-W6QQ.jpeg)

## Summary

*WCAG 2.1* is the standard that is required to sell software to governmental organisations. Meeting *WCAG 2.1* makes your product usable for most people with and without disabilities.

Fulfilling the AA standard is recommended. It a good balance between accessibility and not being too prescriptive. If your org requires AAA, it’s recommended to implement this at key points in the process and not across the entire product.

Disabilities can be temporary (e.g. having a lot of glare on you screen from the sun) as well as permanent. This means the audience that profits from an accessible product is huge and can at times include anyone.

## References

1. [https://www.w3.org/TR/WCAG21/#:~:text=Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make](https://www.w3.org/TR/WCAG21/#:~:text=Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make)
2. [https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)
3. [https://www.w3.org/TR/wcag3/](https://www.w3.org/TR/wcag3/)
4. [https://www.section508.gov/manage/laws-and-policies/](https://www.section508.gov/manage/laws-and-policies/)
5. [https://ec.europa.eu/social/main.jsp?catId=1202&intPageId=5581&langId=en](https://ec.europa.eu/social/main.jsp?catId=1202&intPageId=5581&langId=en)
6. [https://download.microsoft.com/download/b/0/d/b0d4bf87-09ce-4417-8f28-d60703d672ed/inclusive_toolkit_manual_final.pdf](https://download.microsoft.com/download/b/0/d/b0d4bf87-09ce-4417-8f28-d60703d672ed/inclusive_toolkit_manual_final.pdf)
7. [https://www.w3.org/WAI/WCAG2AAA-Conformance](https://www.w3.org/WAI/WCAG2AAA-Conformance)
8. [https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req1-head](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conf-req1-head)
9. [https://en.wikipedia.org/wiki/Contrast_(vision)](https://en.wikipedia.org/wiki/Contrast_(vision))
10. [https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/how-to-calculate/](https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/how-to-calculate/)
11. [https://www.w3.org/TR/WCAG20/#relativeluminancedef](https://www.w3.org/TR/WCAG20/#relativeluminancedef)
12. [https://en.wikipedia.org/wiki/Color_space](https://en.wikipedia.org/wiki/Color_space)
13. [https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
14. [https://www.w3.org/TR/WCAG20-TECHS/G183.html](https://www.w3.org/TR/WCAG20-TECHS/G183.html)
15. [https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
16. [https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum)
17. [https://www.w3.org/TR/WCAG22/#focus-appearance](https://www.w3.org/TR/WCAG22/#focus-appearance)
18. [https://github.com/w3c/wcag/issues/849](https://github.com/w3c/wcag/issues/849)
