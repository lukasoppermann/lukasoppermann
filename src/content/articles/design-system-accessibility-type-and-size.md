---
title: "Design System Accessibility: Typography & Size"
url: "https://lukasoppermann.medium.com/picture-showing-design-system-accessibility-typography-size-2c1a438d359"
published: "2023-02-14"
excerpt: "If you can’t see it, you can’t use it."
---

Presbyopia¹ is a physiological condition which makes it harder to focus on close objects. This is a side-effect of your eyes ageing and currently effects about a quarter of the worlds population¹.

According to some sources everyones eyesight worsens after the age of 4⁰². This is why it is important for us to design experiences that are accessible for people with farsightedness³. They are a huge part of nearly everybody’s audience.

There are three main aspects to designing for farsightedness. Readability, allowing users to zoom and the size of interactive elements.

## Readability & typography

### Font size

There is no official minimum size for text⁴. This is probably at least in part due to typefaces having a different size appearance depending on their design.

However it is generally agreed that 16px or more is a good size for body copy⁵.

It is also recommended to never use any font-size smaller than 12px⁶ as your text may be illegible.

### Desktop vs. mobile

When choosing a font size, the viewing distance is much more important the viewport size⁷. A mobile phone is normally held at arms length. This creates a viewing distance similar to a desktop screens. As a result, even though the screen is much smaller, your mobile body font-size should be the same or than for normal desktop. The larger the desktop screens the great the typical viewing distance. So you should increase your font size with the viewport as well⁸.

However, headlines must be treated different. On a small screen you need to reduce your headline sizes so that they don’t run on more than two or maximum three lines.

### Point vs. Pixel

A common point of confusion is that sizes are often recommend in `pt` (point). Many people transfer those 1:1 into `px` (pixel). But this is wrong.

As describe on Penn State’s accessibility website, a `px` measures 1/96th of one inch, while a `pt` measures only 1/72nd of an inch⁶.

This means that `12pt` equal `16px`.

So be careful to check if measurements are made in point or pixel.

## Font size vs. visual size

![Visual font size differs depending on the font family.](https://cdn-images-1.medium.com/max/1600/1*1X9-fVwsAJaPhXxQuyWtkA.jpeg)

When working with text you must pay attention to the difference between the visual size of a font and the `px` value. Depending on the specific font it may appear larger or smaller than usual. For example fonts with a very large x-height appear larger than those with a very small one⁸.

If your font appears rather small you may want to increase your default font-size to `17px` or more⁹.

Standard web fonts like `Helvetica` or `Arial` are a good measure of a visual size users expect for a standard font.

## Differentiating text hierarchies through size

Size is a common tool to differentiate text hierarchies like body copy and headlines. The size difference per level of hierarchy should be clearly visible but not hinder the reading experience.

Normally this means per level in hierarchy you want an increase of 1.3 to 1.5. In practise this means if your body text is `16px` a one level higher headline would be between `21px` to `24px`

The exact size depends on your use case. Is the headline used in a large editorial website or for example a compact web app? It also depends on the number of hierarchy levels you have and the max size you want to use.

Apple recommends sizes from 17 to 34 for headlines on iOS¹⁰. On the web however sizes up to `64px` or larger are common for titles.

**Modular scale**

![Screenshot of a modular scale](https://cdn-images-1.medium.com/max/1600/1*uP6cyoEEBrceOoU8BBoK4w.jpeg)

> *A modular scale, like a musical scale, is a prearranged set of harmonious proportions. *— Robert Bringhurst

You can also use a modular scale¹¹ to define your individual font sizes.

To create your own modular scale, you first pick a ratio, e.g. the golden ratio¹² `1:1.618`. Now choose your base font size, for example `10`. By multiplying your base size with the ratio you get the next item in the scale `10 * 1.618 = 11.618`. To get the following item of the scale, multiply `11.618` with the ratio again. There are many plugins and tools¹³ that do the work for you.

## Line length

Adequate line length is critical to assure optimal readability¹⁴. Swiss graphic designer, Emil Ruder¹⁵, suggests that 50–60 characters per line is best for body text¹⁶. However anything from 45 to 75 characters¹⁷ is often seen as acceptable. There is no ideal number that always works¹⁸. Within the above mentioned range its more a less a personal preference.

**Too short lines** hinder the reading flow. This is because the eyes move from the back of a line to the front of the next line too much.

**Too long lines** make it hard to jump to the next line because it becomes harder to see which line is the next.

## Line-Height

A well chosen line-height makes your text readable while a bad one makes it hard to read. Too large and users get lost in the white space between the lines. To little line height and the text is squished together, appearing like one large block.

Both too little and too much line height make it hard to find the next line. The specific line height depends on your chosen font as well as the font size and line length¹⁸. Longer lines need more line height than shorter lines.

There are different approaches to line height, either based on a grid like the `8px` grid or a multiplier.

![](https://cdn-images-1.medium.com/max/1600/1*XDpFMgjiGkAyMwtdl8fFsg.png)

**Multiplier**
A good multiplier is roughly `1.35`–`1.5` for desktop¹⁸ and up to `1.6` or `1.7` on mobile¹⁸.

Note that the optimal line height depends on the specific font. In most tools you can directly use the multiplier as a line-height. Otherwise calculate the pixel line-height by multiplying it `[font size in px] * [multiplier]`. The line-height may be a float value like `58.8px` this is fine. You can also round to the closest integer value `59px` in this case.

While there is a lot of debate about the perfect line height, there is no such thing. Within a “acceptable” range it comes down to personal preference.

**Grid**
Within a baseline grid choose the line-height that is within your grid and closest to your desired multiplier¹⁹. Let’s assume you have an `8px` grid, a font size of `40px` and a desired modifier of `1.3`.
`40px * 1.3 = 52px` so we can either use a line-height of `8px * 6 = 48px` or `8px * 7 = 56px`.

For a headline `1.2` is still fine so you can choose which ever fits bet in your typographic system.

There are tools like [thegoodlineheight.com](https://www.thegoodlineheight.com/) that can help you with that.

## Tracking & Kerning

**Tracking** (*letter-spacing* in css²⁰*)* adjust the space between all letters equally²¹.

In contrast **kerning** adjust the space between individual characters²¹ depending on the letter pairings. The goal is to create the appearance of even visual space between all characters.

Bad tracking and kerning makes it harder to read a text²² as gaps become actively noticeable. This hinders the reading flow and tires the reader over time. In extreme cases it can even lead to words becoming unreadable due to letters merging together²³.

If you use a professional font you should not run into any problems for your body text though. Much more comment are problems with all uppercase text. It is recommended to add a small amount of tracking to words in all caps. A small amount like `0.1em`²⁴ is normally enough.

## Text alignment

![Justified text has large gaps that are bad for the reading flow.](https://cdn-images-1.medium.com/max/1600/1*381vZDdAWojJkascE_WdEQ.jpeg)

Use left alignment for languages that read left to right. Use right alignment for languages that read right to left. Never use justified text.

Justified text (text that has a straight edge on both sides) is created by adjusting the gaps between individual words. While this is common in printed media where the gaps can be adjusted by hand, it must be avoided in digital media. Without control over viewport and text size you can not assure that text is adequately spaced.

This often results in uneven gaps in justified text. Those gaps make the text very hard to read²⁵. The eye skips over tiny spaces or gets stuck on too large spaces, hindering an optimal reading flow.

## Interactive Elements

![](https://cdn-images-1.medium.com/max/1600/1*Pwu7bwR98BQPz93zWvugPw.jpeg)

The size of interactive element is especially important on touch devices. People may have a hard time taping on small touch targets. Commonly referred to as the “fat finger” problem²⁶. But even on desktop computers users can experience problems with small elements. Diseases like arthritis²⁷ or temporary injuries like a broken arm may limited a users motor skills making targets hard to click.

WCAG 2.1 recommends a minimum touch target size of 44px * 44px²⁸. While not required this size is also recommended for mouse interactions²⁹.

If this feels visually out of place, you may add an invisible space that is part of the interactive element. Make sure hovering over this space shows the same hover effect as when hovering over the item itself.

Another important aspect is the space between interactive element. WCAG 2.2 recommends at least 24px between interactive elements³⁰.

This space helps avoid accidentally clicking on a wrong element.

## Resizing / Zoom

WCAG requires that a UI can be zoomed up to 200% without breaking the UI³¹. You must make sure your product and components don’t break when they are zoomed.

Use `rem` or `em` for your text and text related components like icons so that everything scales together.

Don’t restrict zooming via the `viewport` meta tag³². And make sure content reflows and does not cause horizontal scrolling. Tables need special attention as their content can't easily reflow.

Luckily the viewport width changes when zoomed, so that you can use `media queries` to adjust content like you would for different screen sizes. Maybe your mobile media queries already cover the zoomed state as well.

## Summary

**Interactive elements** should have a size of at least 44px*44px. A space of 24px between UI elements is recommended to avoid accidental clicks.

**Zoom** of up to 200% must be fully supported to fulfil WCAG accessibility requirements.

To assure good **readability** create a proper font size scale starting with 16px as your body size. Make sure line height, line length, tracking and kerning are adequate for your chosen font family and sizes.

**Avoid justifying text** as the gaps it creates hinder reading flow.

If you follow the above points you are on a good path towards an accessible design.

## References

1. [https://en.wikipedia.org/wiki/Presbyopia](https://en.wikipedia.org/wiki/Presbyopia)
2. [https://www.webmd.com/connect-to-care/lasik/facts-about-age-related-farsightedness](https://www.webmd.com/connect-to-care/lasik/facts-about-age-related-farsightedness)
3. [https://en.wikipedia.org/wiki/Far-sightedness](https://en.wikipedia.org/wiki/Far-sightedness)
4. [https://accessibleweb.com/question-answer/minimum-font-size/](https://accessibleweb.com/question-answer/minimum-font-size/)
5. [https://accessibility.digital.gov/visual-design/typography/](https://accessibility.digital.gov/visual-design/typography/)
6. [https://accessibility.psu.edu/fontsizehtml/](https://accessibility.psu.edu/fontsizehtml/)
7. [https://ia.net/topics/responsive-typography-the-basics](https://ia.net/topics/responsive-typography-the-basics)
8. [https://www.leserlich.info/werkzeuge/schriftgroessenrechner/index-en.php](https://www.leserlich.info/werkzeuge/schriftgroessenrechner/index-en.php)
9. [https://pimpmytype.com/font-size/](https://pimpmytype.com/font-size/)
10. [https://developer.apple.com/design/human-interface-guidelines/foundations/typography#platform-considerations](https://developer.apple.com/design/human-interface-guidelines/foundations/typography#platform-considerations)
11. [https://alistapart.com/article/more-meaningful-typography/](https://alistapart.com/article/more-meaningful-typography/)
12. [https://en.wikipedia.org/wiki/Golden_ratio](https://en.wikipedia.org/wiki/Golden_ratio)
13. [https://www.modularscale.com/](https://www.modularscale.com/)
14. [https://baymard.com/blog/line-length-readability](https://baymard.com/blog/line-length-readability)
15. [https://de.wikipedia.org/wiki/Emil_Ruder](https://de.wikipedia.org/wiki/Emil_Ruder)
16. Typographie, book by Emil Ruder
17. [http://webtypography.net/2.1.2](http://webtypography.net/2.1.2)
18. [https://pimpmytype.com/line-length-line-height/](https://pimpmytype.com/line-length-line-height/)
19. [https://www.thegoodlineheight.com/](https://www.thegoodlineheight.com/)
20. [https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
21. [https://www.makerandmoxie.com/blog/kerning-tracking-leading](https://www.makerandmoxie.com/blog/kerning-tracking-leading)
22. [https://pimpmytype.com/bad-kerning/](https://pimpmytype.com/bad-kerning/)
23. [https://www.canva.com/learn/kerning/#:~:text=The purpose of-,kerning,-Kerning may seem](https://www.canva.com/learn/kerning/#:~:text=The purpose of-,kerning,-Kerning may seem)
24. [https://pimpmytype.com/spacing-all-caps/](https://pimpmytype.com/spacing-all-caps/)
25. [https://www.coop.co.uk/experience-library/accessibility/digital-accessibility-standards.html#justified-text](https://www.coop.co.uk/experience-library/accessibility/digital-accessibility-standards.html#justified-text)
26. [https://www.nngroup.com/articles/touch-target-size/#:~:text=as a “fat-,finger,-” problem because users](https://www.nngroup.com/articles/touch-target-size/#:~:text=as a "fat-,finger,-" problem because users)
27. [https://www.cdc.gov/arthritis/basics/arthritis-fast-facts.html](https://www.cdc.gov/arthritis/basics/arthritis-fast-facts.html)
28. [https://www.accessguide.io/guide/large-target-size](https://www.accessguide.io/guide/large-target-size)
29. [https://m2.material.io/design/usability/accessibility.html#layout-and-typography](https://m2.material.io/design/usability/accessibility.html#layout-and-typography)
30. [https://www.boia.org/blog/understanding-target-size-under-wcag-2.2-and-how-it-affects-people-with-disabilities](https://www.boia.org/blog/understanding-target-size-under-wcag-2.2-and-how-it-affects-people-with-disabilities)
31. [https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html#:~:text=Criterion if it-,can,-be scaled up](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html#:~:text=Criterion if it-,can,-be scaled up)
32. [https://digitalaccessibility.uoregon.edu/guidelines/zoom](https://digitalaccessibility.uoregon.edu/guidelines/zoom)
