---
title: "Dark mode with design tokens"
url: "https://uxdesign.cc/dark-mode-with-design-tokens-8d7b9d9753a"
published: "2022-09-19"
excerpt: "How to implement dark mode with as little effort as possible"
---

---

![Cover illustration showing a stepped gradient of colors mimiking the sky from monring to night](https://cdn-images-1.medium.com/max/1600/1*Ng2J87aJBTLzv_oYiCsCKg.jpeg)

This article discusses everything from triggering dark mode, to setting up design tokens to get automatic dark mode for all components.

**This is a two part series:**
1. **Implementing dark mode**
*2. *[Designing dark mode](https://lukasoppermann.medium.com/designing-dark-mode-c7bd200eaa64)

## Introduction: Dark mode — what is it?

> *Dark modes emit low levels of light while maintaining a high standard of usability.*

*Source: *[*Material.io*](https://material.io/design/color/dark-theme.html#usage)¹

You can guess it from the quote of the googles material design documentation, it is simply a dark theme. With a color palette that consist mainly of black and greys. The occasional desaturated accent color brings your brand back into the product.

The resulting lower levels of light can result in improved battery performance, reduced eye strain and better accessibility.

### Should dark mode be low or high contrast?

There is some confusion around dark mode and high contrast themes. Generally both is fine. As long as the foreground to background contrast passes WCAG ratios².

In some products the dark mode doubles as a high contrast mode. Other designers create a low contrast dark mode for people who want it less intense. This could be due conditions like photophobia (discomfort in bright light) or personal preference.

Another interesting approach is, mixing low background contrasts with high foreground contrast. This means that cards, buttons and headers have a low contrast with the background like a dark grey. But text and icons use 100% white or similar. This creates a calm experience with great readability.

### What is the difference to high contrast mode?

High contrast mode is a dedicated mode that users can enable independent of dark or light mode.

However, it works a little bit different on every operating system.

### Mac OSX

Activating *increase contrast* on mac OSX increases the contrast of UI elements from apples own UI library are adjusted to have dark outlines and stronger contrast³.

![Example of Apples implementation of high contrast mode.](https://cdn-images-1.medium.com/max/1600/1*-fhvynDwATOhvh-wHfeiGA.jpeg)

This increase in contrast does not effect websites or apps that use frameworks other than Apples UIKit like electron. However you can detect if the option is enabled with the `prefers-contrast` media query.

![Example usage of prefer-contrast media query](https://cdn-images-1.medium.com/max/1600/1*1aaZIQALqbx8IwPLig8XUQ.png)

If supported, make sure high contrast mode works for both dark and light mode.

![Code snippet for prefer-contrast for dark and light](https://cdn-images-1.medium.com/max/1600/1*W9CneVM1faer_op_fTUIGw.png)

### Windows

The high contrast mode implementation on Windows is a bit more advanced. It even allows the user to customize the *forced* colors.

Forced colors replace all colors that are used. The idea is that colors from a very limited palette are used for specific properties. One color is used for all backgrounds, another for all text, etc.

If you want to learn more, there is an [article by polypane on forced colors](https://polypane.app/blog/forced-colors-explained-a-practical-guide/)⁴.

![Windows high contrast mode settings with live preview](https://cdn-images-1.medium.com/max/1600/1*VzBBrB9k4XQJM8avVg5uqA.jpeg)

Most websites work fine with forced colors out of the box. But if you use custom components you may need some minor adjustments. This is only to make sure the correct colors are used.

In forced color mode you can only use colors from the [system color palette](https://www.stefanjudis.com/today-i-learned/css-defines-color-values-that-follow-system-preferences/)⁵.

Try to mimic native behavior and don’t try to “design” this mode. Otherwise it will break the experience for people who actually use forced color mode.

**Detecting forced color mode**

You can detect if forced color mode is active via the [forced-colors media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)⁶. Browser support is fine but it only works on windows.

With the media query you can change things other then color. Or you could set your tokens or components to use system colors.

![Code snippet showing the use for the forced-colors media query.](https://cdn-images-1.medium.com/max/1600/1*fmF2tkOv0ChpE7_aBYyvFQ.png)

## Benefits: Why do you need dark mode?

While a product is usable even without dark mode, there are many arguments in favor of adding a dark mode.

### Your users expect it

Implementing dark mode has gotten so easy that it has become a standard. User expect every product to offer it.

Without dark mode your product will stick out in a negative way. A missing dark mode may be associated with low product quality. Even if not true, it may impact your users feeling towards your product and by extension your brand.

Automatic light-dark-mode-switching makes dark mode very convenient, increasing the use of it.

Additionally some users simply prefer dark mode. Not offering it will disappoint them. In a highly competitive market this may even be a reason why users move to a competitor.

### Accessibility

While not generally better for accessibility, many sources suggest that [dark mode helps people with some conditions](https://www.nngroup.com/articles/dark-mode/*](https://www.nngroup.com/articles/dark-mode/)⁹. For example for people who experience:

- flickering
- photophobia (discomfort due to bright light)
- eye strain
- cloudy vision

But dark mode can also improve visual ergonomics for users without a vision deficiency. E.g. by reducing eye strain especially in darker environments. This is due to reduced luminance emission by the screen when using dark mode.

> Dark themes reduce the luminance emitted by device screens […]. They help improve visual ergonomics by reducing eye strain […]

*source: *[*material.io*](https://material.io/design/color/dark-theme.html#usage)¹

### Improved battery life

On some screens, specifically OLED screens (e.g. in smart watches), black pixels are completely turned off. This reduces the amount of energy needed by the screen and thus extends the time until the device needs to be charged again.

![Illustration of a dark mode toggle with the shape of the moon](https://cdn-images-1.medium.com/max/1600/1*6_yY6JTl5Rryujqr7cfndQ.png)

## Implementation: How to enable dark mode?

To allow user to view your product in dark mode you need to provide a way to toggle between light and dark mode. This used to be done via a toggle in the settings or within the header or menu.

But since dark mode has a system feature, you can piggy-back on the system settings. Most systems allow you switch between modes manually or automatic. Automatic switching works via a custom schedule or according to sunset and sunrise in your location.

![Apple iOS dark and light mode system settings](https://cdn-images-1.medium.com/max/1600/1*n3JjpRjlheCjmjGhQwl-9A.jpeg)

Instead of implementing this yourself you can read out the current system state. This is what user expect from a product by now in any case¹⁰.

Some products may profit from allowing users to overwrite the system settings. For example reader and media apps as well as products that are used for long periods throughout the day. User may generally enjoy automatic dark and light mode, but favour dark mode for their watching or working experience.

## Implementing the dark and light theme

### The concept: Semantic tokens make dark mode free

It is possible to detect the current mode inside your components and style them accordingly. But I strongly advice against this approach as a general solution. It makes maintenance a nightmare and adds a lot of complexity to your system.

What we want is a “free” dark mode for every new component we build. For this we rely on [semantic design tokens](https://uxdesign.cc/naming-design-tokens-9454818ed7cb)¹¹. The semantic tokens reference a different base token (read: color value) depending on the current mode.

### Dark & light mode with semantic tokens

The idea of semantic tokens is, that their name implies their use (e.g. `color-bg-canvas` or `color-text-default`). In contrast the name of a base token refers to their value (e.g. `color-blue-500`).

Choose token names that don’t reference a mode (e.g. `color-text-primary`) and avoid words like *light* and *dark.* This way you can swap the value of the token depending on the mode but keep the same names.

As an example `color-text-primary` could be black in the light mode and white in the dark mode. We do this by referencing different values (base tokens) from our palette depending on the mode.

![Schema of how base tokens are referenced in dark and light mode](https://cdn-images-1.medium.com/max/1600/1*w8rggJ20siC7skFapKmg8g.jpeg)

While this makes defining and naming your tokens a bit more complex, it pays out in the long run. This way you don’t have to worry about implementing a dark mode style for every component and it makes everything consistent. It also allows users to work with semantic tokens that automatically adjust to the modes.

For example when somebody builds a card component she would use `color-surfaces` for the fill of the card. This would automatically turn it white in light mode and a slightly brighter than black grey (`grey-800`) in dark mode.

### On the web

Let’s see how we can implement this concept into our web product. If you only use a few colors and shadows a single file with a `prefers-color-scheme` media query is a valid option.

As you can see in the example the semantic tokens for your default style are defined first. Than you add the tokens for the other mode, wrapped in the `prefers-color-scheme` media query. This way the default tokens get overwritten if the media query is triggered.

![semantic-tokens.css](https://cdn-images-1.medium.com/max/1600/1*uKViktd25__GTInWRDTubw.png)

Bigger projects often use more than a handful of colors that change between dark and light mode. In this case a single file may be less ideal.

A common solution is to conditionally load a css file with the appropriate values for either light or dark mode.

The two main benefits of this approach are:

- Simpler and shorter files that are easier to edit as they have only tokens for one mode
- Optimised download size as only the needed files get downloaded

![Using media queries to conditionally load css](https://cdn-images-1.medium.com/max/1600/1*JPMSKzvanq7bb65nLdOhmA.png)

With conditional loading you don’t need the media query within the `light.tokens.css` and `dark.tokens.css`. So your dark mode file would look like this:

![dark.tokens.css](https://cdn-images-1.medium.com/max/1600/1*nNdc9fj4YMhsR5Es0PTd2w.png)

### Detecting dark mode on the web

It is possible to detect the current mode within your components. This can be helpful to add custom styling. For example for a header that uses the primary color in light mode, but a dark grey in dark mode.

If at all possible, avoid this approach as it makes maintenance more complex. You will have to look through each component file, defeating or at least reducing the benefit of design tokens. But for the rare cases were there is no good other way, this is how you do it.

**CSS: using a media query**

The `prefers-color-scheme` media query we used in our token file can also be used in a component. Within the media query you can specifically target light or dark mode.

![The prefers-color-scheme media query can also be used within a component to specifically adjust css for one mode.](https://cdn-images-1.medium.com/max/1600/1*n71vC6PIkLmQmnSeP1BQXA.png)

**JS: detect dark mode with matchMedia**

Using `matchMedia` you can check if a specific media query is active. In our case this will be the `prefers-color-scheme` media query for either dark or light mode. `matchMedia` returns true or false, we can store this in a variable like `darkMode`.

![matchMedia allows to check if a media query is true in js](https://cdn-images-1.medium.com/max/1600/1*gYK_CwTuWmhQMhyPgzLW3w.png)

This is a good way to get the user preferences without writing a custom mode switch in js. Keep in mind that a user may have no preferences set. It is best to only check for the none-default mode. If false assume the default is true.

![The darkMode variable with the result from matchMedia can be used to create an if clause to do something if darkmode is true or false.](https://cdn-images-1.medium.com/max/1600/1*4sbrBk27_KJDON9XCGXgsw.png)

### The color-scheme meta tag

If you use standard form elements like *checkboxes* or *radio buttons* you will run into an issue. When the users changes their settings to dark mode, the form elements don’t change. You can of course build custom components or rely on [modern ways to style form elements](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/)¹² but there is an easier way. The `color-scheme` meta tag¹³.

![Code showing how to use the color-scheme meta tag.](https://cdn-images-1.medium.com/max/1600/1*vMkoandf7RNU-FTnMsx4rg.png)

By adding it to the html head the browser knows that your website supports dark and light mode. The browser will now switch form elements to dark or light mode to work with you website.

If the `prefers-color-scheme` property from the user is not set, the default theme is used. Make sure to align this with your css strategy.

## On Mobile

The approach on mobile is a little different. Both iOS and Android have a resource focused approach. This means that the framework automatically loads the correct file or variable. In your code you always have the same variables and files available. But the values may differ depending on the mode.

This is a very handy approach as you can somewhat easily add dark mode to an existing app. At least if you have set up your colors in an agnostic way.

### Android

Android uses xml resources that placed in a predefined folder structure.

There are different folders like color, values and drawables to store resources. You can suffix folder with the `-night` qualifier to tell android its for dark mode. The system uses folders without this qualifier for light mode and as defaults (e.g. if no `drawable-night` exists).

The system is very convenient. You place an xml with color definitions (e.g. “background”) into `color` and `color-night`. The developers reference background and android will provide the correct value for dark or light mode.

![Some common folders for android xml and drawable resources](https://cdn-images-1.medium.com/max/1600/1*Mzl3INS325ftSIJcIFY9Yg.png)

### Detecting dark mode on android

It is generally best to use resources that change according to the current mode. But sometimes you need to detect which mode is active from within a component.

In Android this is possible by [reading out the configuration](https://stackoverflow.com/questions/44170028/android-how-to-detect-if-night-mode-is-on-when-using-appcompatdelegate-mode-ni)¹⁴.

![Detecting dark mode on android](https://cdn-images-1.medium.com/max/1600/1*Zs36Gjzj9W7lzxSS9Zt1ug.png)

You can get a more detailed insight into how to detect the current mode in the [android documentation](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#:~:text=Use the system setting(Settings,theme%20at%20the%20same%20time.)¹⁵.

### iOS

Like android, iOS (and probably macOS, watchOS and tvOS?) has a file based system called xCode asset catalogs. Unlike android, iOS uses a dedicated file for every color or image. No folders.

You are also limited to the two types `ColorSet` and `ImageSet`.

A `ColorSet` asset catalog is simply a folder with a `.colorset` extension that holds a `Contents.json`¹⁶. Within this json file the different colors for your modes are defined.

![Example Contents.json](https://cdn-images-1.medium.com/max/1600/1*rrslkipFuHwDIN5X2qQ0LA.png)

You can either create the assets by code, e.g. using style dictionary¹⁷ or manually in xCode.

Within the apps code, the developer references a color or image like they always do. iOS will find out which mode is active and provide the correct value.

### Detecting dark mode in iOS

Using iOS 13+ you can detect the current mode via the `ColorScheme`¹⁸ environment value. A good side-effect of using this value is, that any view depending on it will be redraw when the value changes.

![Detecting dark mode in Swift](https://cdn-images-1.medium.com/max/1600/1*RzIwnpFG3ulrMnoIsxk6IQ.png)

### Converting JSON to iOS and Android

With [style dictionary](https://amzn.github.io/style-dictionary)¹⁹ turning json into css or js it is pretty straight forward.

Creating *Xcode assets *or *android xml resources *is a bit more complicated. Luckily Danny Banks write a fantastic article that covers exactly how to do this. I highly recommend reading “[Dark Mode with Style Dictionary](https://dbanks.design/blog/dark-mode-with-style-dictionary/)”¹⁷.

You can find a working code implementation in the [design token plugin for figma examples](https://github.com/lukasoppermann/design-tokens/tree/main/examples/libs)²⁰.

## Summary

To conclude, dark mode is a theme that uses a dark and desaturated palette. It can be high or low contrast, but should be accessible in either case.

Some of the main benefits include:

- battery saving on OLED screens
- fulfilling user expectations and fitting into a modern OS
- reduced eye strain especially when used in darker environments
- potential accessibility improvements for some users. For example users with cloudy vision, photophobia or who experience flickering in light mode

The easiest implementation is to read out the current system mode and switch your design tokens accordingly. This is enough for most products. Media or reading apps or products that are used all day may consider a manual mode switch.

## Resources

Below I listed references and articles that could be of interest to you.

1. [https://material.io/design/color/dark-theme.html#usage](https://material.io/design/color/dark-theme.html#usage)
2. [https://css-tricks.com/understanding-web-accessibility-color-contrast-guidelines-and-ratios/](https://css-tricks.com/understanding-web-accessibility-color-contrast-guidelines-and-ratios/)
3. [https://support.apple.com/lv-lv/guide/mac-help/unac089/mac](https://support.apple.com/lv-lv/guide/mac-help/unac089/mac#:~:text=To%20quickly%20turn%20Invert%20Colors,press%20Touch%20ID%20three%20times)
4. [https://polypane.app/blog/forced-colors-explained-a-practical-guide/](https://polypane.app/blog/forced-colors-explained-a-practical-guide/)
5. [https://www.stefanjudis.com/today-i-learned/css-defines-color-values-that-follow-system-preferences/](https://www.stefanjudis.com/today-i-learned/css-defines-color-values-that-follow-system-preferences/)
6. [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
7. [https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/](https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/)
8. [https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
9. [https://www.nngroup.com/articles/dark-mode/](https://www.nngroup.com/articles/dark-mode/*)
10. [https://developer.apple.com/design/human-interface-guidelines/foundations/dark-mode](https://developer.apple.com/design/human-interface-guidelines/foundations/dark-mode)
11. [https://uxdesign.cc/naming-design-tokens-9454818ed7cb](https://uxdesign.cc/naming-design-tokens-9454818ed7cb)
12. [https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/)
13. [https://web.dev/color-scheme/](https://web.dev/color-scheme/)
14. [https://stackoverflow.com/questions/44170028/android-how-to-detect-if-night-mode-is-on-when-using-appcompatdelegate-mode-ni](https://stackoverflow.com/questions/44170028/android-how-to-detect-if-night-mode-is-on-when-using-appcompatdelegate-mode-ni)
15. [https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#:~:text=Use the system setting(Settings,theme%20at%20the%20same%20time.](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#kotlin)
16. [https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs/](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs/)
17. [https://dbanks.design/blog/dark-mode-with-style-dictionary/](https://dbanks.design/blog/dark-mode-with-style-dictionary/)
18. [https://developer.apple.com/documentation/swiftui/colorscheme](https://developer.apple.com/documentation/swiftui/colorscheme)
19. [https://amzn.github.io/style-dictionary](https://amzn.github.io/style-dictionary)
20. [https://github.com/lukasoppermann/design-tokens/tree/main/examples/libs](https://github.com/lukasoppermann/design-tokens/tree/main/examples/libs)
