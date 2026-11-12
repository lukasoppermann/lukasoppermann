---
title: "Optimizing Figma variables and components"
url: "https://medium.com/user-experience-design-1/optimizing-figma-variables-and-components-e22534c4330e"
published: "2024-06-27"
excerpt: "Learn how to build a flexible and responsive design system in Figma using tokens and components."
---

---

---

Our goal is to build a design library that represents our code components as closely as possible. We also want users to be able to change between themes and viewport sizes without having to manually set the properties on every component.

## Approach

Using a `Card` component, I will demonstrate some ideas, techniques and conventions that help us achieve our goal.

The focus is first on a combination of achieving a close match to code with a great user experience for consumers. The secondary focus is on making it easy to maintain. The best case is to achieve both of course.

We start with a new Figma file and add a basic `Card` component.

![A simple card component with a button](https://cdn-images-1.medium.com/max/2400/1*tPcC_0uh-wNl4LLzJplVMA.jpeg)

### Configuration

Currently the component is static. It does not react to any change in our design system or to a change of mode. If we want to use it in a different context, we have to override all its properties.

This approach is called *customization*¹ and is enabled for all components in Figma by default. In fact, you can’t even disable it. However, *customization* is something we hardly ever want consumers of a design system to do.

The very idea of a design system is to avoid *custom* designs in favor of consistent designs.

To allow users to adjust our component e.g. for a *dark scheme* we employ another approach called *configuration*¹.

A component that is open to configuration allows consumers to change predefined properties to specific values to achieve different results. Instead of overriding the colors of a component, users can set it to *dark scheme* and all colors adjust to predefined values.

The idea behind this approach is to allow flexibility or responding to different contexts without losing the consistency a design system is supposed to achieve. The dark and light version of the card may look different, but all dark cards look alike.

![Card component in light and dark](https://cdn-images-1.medium.com/max/2400/1*-c8zHJa0UwvrACqB-1vlcQ.jpeg)

**Using variants**

The traditional implementation strategy for this approach is by using variants. To achieve this, add a variant called `theme` with two properties, `light` and `dark`. You can now change the colors of the card to the `dark` variations.

![Card with theme property](https://cdn-images-1.medium.com/max/2400/1*t8QDdpZAjfFm-Efkr_KhUg.jpeg)

The downside of this approach is that the consumer has to change every component manually between light and dark mode. Luckily, there is a better way, using `variables` and `collection modes`.

However, in some cases the variant approach is still needed, specifically if you need to change the structure of the component. For example, if you have components that change across viewports, you may want to create a desktop and mobile variant.

### Collection modes

To improve our card component, we will replace the variant by using a mode. The first step is to create variables that represent our colors. If you haven’t added your design tokens to Figma yet, you can learn how in my article on [getting started with native design tokens in Figma](https://uxdesign.cc/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7)².

You either need your [functional tokens](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab#:~:text=Decision%20(semantic%20/%20functional%20tokens))³ or [component tokens](https://medium.com/user-experience-design-1/naming-design-tokens-9454818ed7cb#:~:text=semantic%20tokens.-,Third%20Tier%20Tokens,-Tokens%20in%20this)⁴ to have different representations for the themes we want to implement. I strongly suggest focusing on functional tokens and only using component tokens for exceptions. My functional tokens inherit their values from [base tokens](https://uxdesign.cc/naming-design-tokens-9454818ed7cb#:~:text=one%20or%20two.-,First%20Tier%20Tokens,-Token%20in%20this)⁴.

I prefer to encode all possible values as tokens, this includes `border radius`, `gap` and `padding`.

![Card in light and dark mode using variants](https://cdn-images-1.medium.com/max/2400/1*kTdPgaHpWA6UodqIUXRYIw.jpeg)

Once we have our tokens defined as Figma variables we are ready to improve our component further. First, we remove the `theme` variant property including the dark mode variant.
Now we can replace the colors on the card component with our variables.

To change the component to the dark theme, all you need to do is select it from the `mode` dropdown. This is hidden behind the mode icon in the *layer panel*. Once a mode is selected, the dropdown will stay visible.

![Shows a card component with the mode dropdown open](https://cdn-images-1.medium.com/max/1600/1*1F0EDf3NQMe75RP6M13cxg.jpeg)

The best part about modes is that they can be inherited. To make this work it is important that all our components are set to use the `Auto` mode. This means that by default it will be the first mode in the variable matrix which is shown in parentheses e.g. `Auto (Light)`. However, if any of the components parent frames have a mode set, it will be inherited.

You can now even use a *Section *and change the `mode` on it to preview all nested screens and flows in different mode.

### Shadows

One thing that is not ideal is the shadow. In light mode it looks fine, but in dark mode it is nearly invisible. This also means that it is harder to see in dark mode where the `Card` ends and the background begins. We also don’t want our consumers to have to manually add shadows, as this will lead to inconsistencies. The solution is a good old *effect style*[⁵].

Styles in Figma are like w3c [composite tokens](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=0.72%2C%201%2C%200.5%5D-,Composite%20tokens,-The%20more%20complex)⁶ whereas Figma variables are more like [simple design token](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=W3c%20standardised%20token%20types)⁷ in the w3c specs.

However, by now Figma supports variables within effect styles, and this allows us to change the style with our mode.

An *effect style* can have multiple shadow layers and each of those layers can have variable applied to:

- x and y offset
- blur
- spread
- color

![Shadow style with variables applied to it](https://cdn-images-1.medium.com/max/1600/1*tPx3TOX0sGterDxnRkL1sw.jpeg)

The only big limitation is that you still can’t apply an opacity value to a color token. This means you need to create specific shadow colors that include the desired opacity.

We start by setting up our shadow for the light theme with two shadow properties. Once created, we can apply it to our card.

![Card uses an effect style that is built with variables](https://cdn-images-1.medium.com/max/2400/1*CAFavEis54cnejMC3dnvRg.jpeg)

However, even with an effect style it does not change when switching to dark mode. For this we need to add dark mode values to the variables.

![](https://cdn-images-1.medium.com/max/1600/1*33JVsB93T9I6S4hGnLFldg.jpeg)

Now it is working. The problem we sometimes run into, is that a component may not have a border. But we still need a 1px outline in dark mode, that helps separate our component from the background. The problem is that we don’t want it to show up in light mode. Luckily, this is not as problematic as it may appear at first. All we need to do is create a variable for the outline color, which has a color dark mode but is transparent in light mode or has a spread of `0`. Afterwards we can add a new shadow layer using this variable and get our desired effect.

![Shows the variable window and the cards with a 1px shadow that is only visible in dark mode](https://cdn-images-1.medium.com/max/2400/1*yDMTygF34u_ilxKoDbXpnw.jpeg)

### Typography

Typographic styles work very similar to effect styles. They are both like [composite design tokens](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=0.72%2C%201%2C%200.5%5D-,Composite%20tokens,-The%20more%20complex)⁶, meaning a token that represents multiple values. You typically want to encode font weight, font size and line height into variables. Even though you can use percentage values in the line height field, a variable that is used for line height must be a pixel value.
This will hopefully be improved in the future. But for now, just calculate your `font size ✕ line height` and you get the correct value.

![Typestyle window with variables applied to values of style](https://cdn-images-1.medium.com/max/1600/1*pkM7QUYDL4M6CRZCAIsS1g.jpeg)

You can also create variables for the font family. This is especially interesting if you have different headlines and body text or if you use different font families on different platforms.

Using a similar method to before, you can adjust the variables used in the text styles across modes, for example to adjust them to different device sizes.

![Variable window with type variables, modes represent mobile, tablet and desktop size](https://cdn-images-1.medium.com/max/2400/1*PA9UG8GzAEK1544M3u72aw.jpeg)

One way to utilize this is you rely on users to change two modes: `theme` and `device`. However, if you have dedicated components or variants for the different devices, you can set the mode on each variant.

### Size

Size variables are used for different things. Common uses are `border radius`, `gap` and `padding`in *auto layouts*, as well as `width`, `height` and the *min* and *max* versions of both.

Using variables allows you to utilize modes as well. For example, we can adjust the `maxWidth` of our card depending on the device.
For this case I would either use a component token, like `card-maxWidth` or a semantic token like `floating-ui-maxWidth`. We can do the same with the `minWidth` for example, to make the card a fixed size on mobile, but flexible on other devices.

Another great approach is to adjust `padding` and `gap` variables based on a mode called something like `density`. This mode could be affected by user preference or depending on the context in which a component is used.

![Variable window with size variables](https://cdn-images-1.medium.com/max/2400/1*nvGXtnRpBW4Q0vmafiO0hQ.jpeg)

At the moment there are no styles to combine `padding` and `gap` sizes.
The styles you can improve by using variables are grid styles. This allows you to define a grid that changes with a mode, for example if you just have one grid style it could have 4 columns on mobile 12 on tablet and 16 on desktop.

![Grid style using variables](https://cdn-images-1.medium.com/max/1600/1*7U2zSqt8mH6kbbSwu4kQmg.jpeg)

### Composability

Composability is another great way to keep your maintenance effort low. The concept is pretty straight forward. You compose more complex components from less complex components.

For example, an `Icon` component is used within a `Button` component the `Button` component gets used within our `Card` component.

![Screenshot of icon component, nested in button component, nested in card component to show composibility.](https://cdn-images-1.medium.com/max/2400/1*Rt523bq9QCelpzP6So9s4Q.jpeg)

Now if you update the `Button` component it gets updated everywhere, including within the `Card`. The alternative would be to create the button as part of the `Card` component. But this means, whenever the `Button` component gets updated, you need to update the `Card` component by changing the internal button or risk inconsistency.

Using the composability approach the `Card` gets updated automatically.

### Designer Experience

When building a library in Figma, other Designers are your main audience. This means you should try to make their experience using your library as good as possible. While this mainly includes making sure all components and tokens are available and up to date, there are a few other things you can do.

**Naming**

Styles and variables should match the name of the CSS variable or however they are uses as closely as possible.

For example, a design token that is transformed to a CSS variable named `--bgColor-default`corresponds to a Figma variable named `bgColor/default`. As you probably know, a `/` denotes a layer of nesting, similar to a folder.

![View of color window showing an example naming scheme for the colors](https://cdn-images-1.medium.com/max/1600/1*i5xlJz4TWqFTAScMqgSmfw.jpeg)

However, it is not always as easy as replacing any `—` with a `/`as this may lead to a lot of groups with only a few members. In this case you may decide to keep the `—` in some parts of the name.

For example, colors like`--bgColor-accent-muted` and `--bgColor-accent-emphasis` don’t need to be group under `accent`. For users it is much better to find them as `bgColor/accent-muted` and `bgColor/accent-emphasis`.

In short, use groups for colors of a similar type, but avoid inflationary use of groups.

**Components** work in a similar manner. However, the page a component is on is the first layer of nesting. This means if the component `Button/Default` is placed on a page called `Button`, its name in the sidebar will be `Button/Button/Default`. But since the page is shown as an accordion, it does not really matter.

![Screenshot of the Assets sidebar in Figma](https://cdn-images-1.medium.com/max/1600/1*XvvPIP5R8jdwDqNua5AYiQ.jpeg)

When the component is used in a design, only the name you give to the component will be shown, `Button/Default` in our case. To make working easier for your peers you should try to keep names short and simple, e.g. `Button` or `IconButton`.

Any component (or style or variable) that is prefixed with a `_` or `.` will not be published. This is perfect for when you have components that are only used within other components. As a rule, you should never publish anything that should not be used by consumers of your library. While it is possible to hide any component from being published, using a prefix makes it easy to recognize. Just remember to rename it within the components you do publish.

**Keywords**

Some users prefer to find components, styles and variables via the search. However, this means they need to know what to search for.
Was it `danger` or `alert`? Is it called a `Tag` or `Pill`? To make things easy you can add keywords to the description field in Figma. Since this field is also used in the search.

To separate keywords from the rest of the description I prefer to place it at the very bottom and prefix it. You could use anything that fits for you like `keywords:` or `tags:`

![Screenshot of the component description window with tags at the end of the description](https://cdn-images-1.medium.com/max/1600/1*11Ny6vjo9ggtYwoH7dV3hw.jpeg)

Once added you can search for any keyword and will get the result you expect.

![Screenshot showing the color window with a search for “alert”. One shows no result and the window with the colors that have tags in their description show the danger colors which were tagged with alert](https://cdn-images-1.medium.com/max/1600/1*XemfOvIwj4o9XK8TNyk7vw.jpeg)

**Scope**

Scoping is a powerful option for variables. All variables, apart from typographic variables, can be restricted to a specific scope. This means they will only be shown for the dedicated use case. This makes it much easier for consumers to apply the correct tokens.

Scoping is available for color, string and numeric variables. Both have the option to *“Show in all supported properties”*. This means that where-ever a variable of this type can be used now or in the future (if new possibilities are added), this variable will be available.

You should try to avoid this scope whenever possible and prefer variables that are dedicated to specific scopes whenever possible.

![Screenshot of the scope windows for string, color and number](https://cdn-images-1.medium.com/max/1600/1*H0Popf9HrOZkDgSax1Nnaw.jpeg)

**Color variable scopes**

Color variables can have the following scopes:

- Fill: Select all nested fills
- — **Frame:** As a background color for Frames
- — **Shape:** As a background color for shapes. Not that even though lines and arrows are within the shape menu, this scope only works on the *fill* property of those elements, which is normally not used.
- — **Text:** As the color for text
- **Stroke:** As the color for lines and arrows as well as the border color for any element.
- **Effects:** As the color for inner and drop shadows. Note that you can’t change the opacity of color variables.

![Screenshot showing both fill and stroke in the sidebar.](https://cdn-images-1.medium.com/max/1600/1*THgVyVuK6mQQsJep-EzpwA.jpeg)

**Numeric variable scopes**

Numeric variables can have the following scopes:

- **Corner radius: **For the corner radius also known as border radius
- **Width and height:** For the width and height of an element but also for the max and min width and height.
- **Gap:** Available for all Autolayout spacing properties, gap as well as horizontal and vertical padding
- **Text content:** This is NOT for typographic variables but only for numbers that should be used as text in a text element.
- **Stroke:** The width of a stroke / border.
- **Layer opacity:** Sadly, this is only applicable for the opacity in the ***Layer panel*** and nothing else.
- **Effect:** This can be applied to any field in an effect style, apart from the color opacity.

![Screenshot of the layer panel in the sidebar](https://cdn-images-1.medium.com/max/1600/1*kTJNiiyrrQPAJhcUtZKQIQ.jpeg)

**String variable scope**

String variables can have the following scopes:

- **Text content: **To use the variable as the content of a text field, e.g. a button label
- **Font Family: **For font family names
- **Font weight or style: **To define font styles like *italic* or font weights like *bold*

## Development handover

For the best handover you should keep the Figma components in sync with the code components. This can be hard at times, because code works differently, but it works in many cases.

The closer you align code and design, the easier it will be for developers to translate the information they get from devMode into real code. This is especially important for design tokens. Components are fairly flexible if you use code connect.

### Variables & design tokens

The variables you use in Figma should represent the design token in your design system. By default, Figma will translate your variable names into css variables, replacing the `/` that indicated nesting with a `-`. The variable `fgColor/default` will be `— fgColor-default`.

If you use a different convention, like camelCase ( `— fgColorDefault`) you can use the *Code syntax* section in the variable settings for an individual variable. You can add a custom output for Web, iOS and Android.

![Screenshot showing the color variable window with a custom code syntax for web added.](https://cdn-images-1.medium.com/max/1600/1*ivwH0fuU-MqI3Onz89Ff_g.jpeg)

However, since you have to define this for every variable individually, this is only feasible if you have a small number of tokens that need to be customized, or if you import your tokens using a plugin that fills in this property for you.

### Naming components and properties

The important things to align with are the component and property names as well as the values.
For this reason, you should avoid using emojis in any property name that is not exclusive to Figma.

But not all properties can be aligned. A key difference in code that trips up many people is that setting a property can enables an option and set its value at the same time.
For example, by setting `Icon=”Warning”` you could enable the icon in the `Banner` React component and set it to `Warning`.
This does not work in Figma. To implement something similar you have two options.

**Using two properties**

Using something like a nested `Icon` component with an instance swap `Icon` property allows you to change the icon, but not to disable it.

A simple option is to add a `boolean` property to the parent component to toggle it. I like the convention of using a *“?”* suffix to denote toggle properties. This allows you to have both `Icon?` to toggle an icon and `Icon` to choose the icon on the same component.

![Screenshots of Figma’s sidebar showing a boolean prop for icon suffixed with a “?” and an instance swap property named icon](https://cdn-images-1.medium.com/max/1600/1*iTG6fRQth-zL8ugq141RjQ.jpeg)

Note that the `Icon` property will only show up if the `Icon?` toggle is set to `true`.

If you establish this convention, developers can simply ignore the props with the *“?”* suffix in the handover.

**Using a disabled option**

Another solution is to add a `disabled` variant. I used this when I was still working in Sketch, since there was no option to hide a nested component. `disabled` is simply an empty component that is part of the option for an instance swap.

The benefit is that you only need one property, and it works very similar to code. The downside is that the component still exists, even if it is not visible. It may interfere with other things in an _auto layout_. However, if everything is absolutely positioned it should not be an issue.

![Screenshot showing a swap property with an icon and a disabled component.](https://cdn-images-1.medium.com/max/1600/1*PQjkYzHdPgvH9Q-KYIphZw.jpeg)

**States & more**

Some concepts are so different that it makes no sense to try to align them. For example, states like *hover*, *pressed* or *focus* are interactions, others, like *disabled* are properties. But all of them lead to different variants, so in Figma they are on one axis. For this reason, I would combine them in one property in Figma, even though they are different in code.

A simple rule is, that if states can’t be combined like *disabled* and *pressed*, they should be part of the same property in Figma.

My priorities for aligning Figma and code are:

1. Make sure it has great UX for Figma users
2. Align it as closely to the code as makes sense
3. Make it easy to maintain

In the end, Figma design users are our main audience so they should be considered first.

### DevMode

The dev mode offers a code preview for Figma elements. It offers a box model view and the CSS needed to replicate the design. Whenever you use Figma variables, they will be replaced by CSS variables in the code preview.

![Sidebar showing css code to build the selected design from Figma](https://cdn-images-1.medium.com/max/1600/1*OteYpGH4qhwCVWVxQIGefQ.jpeg)

If your developers use Figma for vs code, which allows them to open a Figma instance within their vs code editor, they get this CSS as autocomplete. This can make it a lot quicker to code up a UI.

However, if you or a designer uses normal colors, size values, etc. instead of Figma variables, this will be reflected here as well. So, since we have a nearly direct translation from Figma to code, it is important to use Figma variables for everything and to use the correct variables as well.

While the default code preview from devMode is great for custom layouts, it is useless for components as you don’t want folks to reimplement the components using CSS. Luckily the Figma team is working on a feature called [code connect](https://www.figma.com/developers/code-connect)⁸ to solve this.

## Summary

To make the best out of your Figma library you can do a few things:

- use variables for everything and use modes to change between different themes
- use variables in styles to make styles respond to the modes as well
- use scopes for your variables to make finding the right variable easier
- make components composable and use them within other components
- use the same name for Figma variables and design tokens
- align property names and values in Figma and the code implementation
- use code connect to get ready to copy code preview

---

## References

1. [https://engineering.atspotify.com/2021/04/customization-vs-configuration-in-evolving-design-systems/](https://engineering.atspotify.com/2021/04/customization-vs-configuration-in-evolving-design-systems/)
2. [https://uxdesign.cc/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7](https://uxdesign.cc/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7)
3. [https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab#:~:text=Decision%20(semantic%20/%20functional%20tokens)](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab#:~:text=Decision%20(semantic%20/%20functional%20tokens))
4. [https://medium.com/user-experience-design-1/naming-design-tokens-9454818ed7cb#:~:text=semantic%20tokens.-,Third%20Tier%20Tokens,-Tokens%20in%20this](https://medium.com/user-experience-design-1/naming-design-tokens-9454818ed7cb#:~:text=semantic%20tokens.-,Third%20Tier%20Tokens,-Tokens%20in%20this)
5. [https://help.figma.com/hc/en-us/articles/360038746534-Create-color-text-effect-and-layout-grid-styles#:~:text=to%20the%20style.-,Effects,-%3A%20drop%20shadow%2C%20inner](https://help.figma.com/hc/en-us/articles/360038746534-Create-color-text-effect-and-layout-grid-styles#:~:text=to%20the%20style.-,Effects,-%3A%20drop%20shadow%2C%20inner)
6. [https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=0.72%2C%201%2C%200.5%5D-,Composite%20tokens,-The%20more%20complex](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=0.72%2C%201%2C%200.5%5D-,Composite%20tokens,-The%20more%20complex)
7. [https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=W3c%20standardised%20token%20types](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=W3c%20standardised%20token%20types)
8. [https://www.figma.com/developers/code-connect](https://www.figma.com/developers/code-connect)
