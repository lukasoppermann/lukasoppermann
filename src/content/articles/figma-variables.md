---
title: "Getting started with native design tokens in Figma"
url: "https://medium.com/user-experience-design-1/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7"
published: "2023-06-28"
excerpt: "How to use Figma variables to implement different design token strategies"
---

![Screenshot of Figma showing a complex component in light and dark mode using variables.](https://cdn-images-1.medium.com/max/2400/1*p2VfyhIuXeNL-ahEpJpk0A.jpeg)

## What are design tokens anyway?

> Design tokens are named entities that store raw, indivisible design values like colors or pixel sizes. They are the core pieces of a design system. Stored in a technology agnostic format they can be transformed for use on any platform, replacing hard-coded values. ~ [Design tokens — What are they & how will they help you?](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)¹

Your text and color styles, shadows, etc. can be represented as design tokens. The important part is to share design tokens between all parts of the product team. The goal is for design and development to use the same tokens from the same *source of truth*.

With design tokens, both hand-off and global changes get easier. If set up correctly, any design token change must be done at one place only, the design token *source of truth*. And this change will still affect the entire system, e.g. changing the brand color everywhere all at once.

## Variables vs. design tokens

Figma introduced [variables](https://help.figma.com/hc/en-us/articles/14506821864087)². They work well as *design tokens*, but they are more, they can also be used for [prototyping](https://help.figma.com/hc/en-us/articles/14506587589399)³.

This article focuses on using the Figma variables feature to implement design tokens. I may refer to it as either variables or design tokens.

Variables can be one of four types: solid color, number, string, and Boolean.

## Color

Color variables can be applied as fills, text fills or stroke color².

Currently, variables can’t be used in effects like shadows, in layout grids or in gradients.

Color variables can only be solid colors. Gradients are not supported, and you can’t change the opacity of a color variable.

You can use color variable in styles, but you can’t change its opacity. You can, however, add another layer on top of the color variable. If you created a style with a variable and add a 60% white on top, you could create a muted version of your variable.

## Number

Number variables can be used as text, for sizes, paddings, gaps, and border radii². This covers most things you would need design tokens for.

The three things currently not supported are border-width, opacities, and effects. This means you can’t make styles or components semi-transparent using a variable. And you can’t define shadows with number variables from your design system. 😢

## String / Text

Text can be used in text layers and for variant names². They are useful for translations or to tokenize UI copy.

To translate your entire app, create a collection with a mode for each language you support. Now you can switch the language of your entire app from a dropdown.

You can also use text strings to switch between variants. For example, you could set a text string to `mobile` or `desktop`. With this you can change a component variant between `mobile` or `desktop`. This is great if instead of different token values, you use different tokens on the two platforms.

## Boolean

Boolean variables don’t seem to have a lot of use for design tokens.

They are great at toggling things within component depending on specific modes though. For example, to show or hide icons depending on the screen size.

At the time of writing Boolean variables can only be used for Boolean variants. Not for Boolean component properties.

## Design tokens vs. styles

*Styles* in Figma are similar to design tokens. But they have some capabilities that design tokens are lacking. For example, design tokens don’t support blend modes or mutations like alpha changes. But they can be referenced in other tokens or even styles⁴. This is not possible using styles.

While some of those functionalities may come to design tokens at some point, many may not. And this is a good thing. Design tokens are purposely kept close to the w3c design token specs⁵.

Styles however are a Figma primitive, similar to classes in CSS. Maybe styles will get more capabilities in the future. For example, being able to set the opacity of a referenced variable.

## When to use tokens?

At the moment styles have little unique use cases. I suggest using variables for all design tokens that can be represented as variables.

For now, only simple tokens can be created, composite tokens are not available in Figma.

You will also not be able to replicate tokens if you stray away from the [`w3c design token draft`](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c)⁶ ⁵.

That being said, tokens should still most of your needs for color, and size base values.

## When to use styles?

Use styles for anything that tokens can’t do. For example, you can use styles to replicate [composite tokens](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c#:~:text=0.72%2C%201%2C%200.5%5D-,Composite%20tokens,-The%20more%20complex)⁶ for typography, shadows, or borders.

Typographic tokens are supposed to come to Figma at the end of 2023. But if this happens there are still borders and shadows left.

## Design tokens in Figma libraries

Design tokens can be shared as part of a library just like styles. They also have the same limitations. This means they don’t get passed on through files.

Imagine you have three files: *design tokens, components, app*

- The *components* file imports *design tokens* and uses it on the components, which get exported
- *app* imports *components*, this will allow it to use the exported components. But the design tokens will NOT be available.
- *app* needs to additionally import the *design tokens* file to be able to use the design tokens directly.

![Tokens are NOT passed through a file, so you need to import tokens directly into any file you want to use them in.](https://cdn-images-1.medium.com/max/2400/1*vT7xqu402lD_sopfKrpn9Q.jpeg)

You can import tokens from multiple files. The only thing you can’t do with tokens is use the *swap library* feature. This feature is only available for styles.

To create something like themes, you need to instead use **collections**.

## Creating design tokens in Figma

To create design tokens, you need to open the `local variables` modal from the right sidebar with nothing selected⁷.

![Open the local variables modal via the settings button from the right sidebar](https://cdn-images-1.medium.com/max/1600/1*Wj7VZxq1laH3VR_zYOnKZQ.jpeg)

You can now create a new variable with the button on the bottom (2). To edit a variable and access advanced options, use the button on the right that shows on hover (1).

![Screenshot of the variables modal showing how to create and edit variables.](https://cdn-images-1.medium.com/max/2400/1*M1yPxfBqFSiOQmHvcmPkbg.jpeg)

The variable options differ slightly per type, but only in the `scoping` area. You can add the name that shows up in the variable selection as well as a description. The value for each mode is the same value you assign in the table view.

![Screenshot of the edit view for a variable, you can edit the name and description, values for each mode, scope in which the variable will show up and decide if it should be exported or not.](https://cdn-images-1.medium.com/max/2400/1*NqcjQsrlH6wIwTncbJoMpg.jpeg)

Scoping is very interesting, it only exists for `color` and `number` variables at the moment. It allows you to define where those tokens can be used. For example, a color scoped to `text fills` only shows up when selecting a color on a text element.

Note that at the time of writing this feature is not fully implemented. So even though you can select the options, the token shows up everywhere. This will change once the feature is implemented.

The last option `Hide from publishing` is especially useful for design tokens. It is equivalent to prefixing a style or component with a period `.` or underscore `_`. When selected it stops the variable from being exported. This is perfect for things like `base` tokens that should not be used directly.

> **Tip:** You can prefix a collection name with a `.` or `_` to hide the whole collection from publishing, like groups in styles.

## Theming with collections

![Collections are created, deleted, and renamed via the dropdown on the left (1). Modes can be added via the plus (2) and deleted with a right click on the header of the mode column you want to delete.](https://cdn-images-1.medium.com/max/2400/1*Cp18fjte9w9b6909YJFFcA.jpeg)

### Collections

Collections are a bit like libraries within libraries⁸. You can add variables to collections and group them into subgroups. This is just how you create groups by naming your styles with a `/` between the groups.

You create a new collection via the dropdown (1) on the left. Here you can also rename and delete collections.

What is special about collections is that you can have `modes` (2) within collections. `Modes` are what you can change between using a dropdown. In the variable modal, modes are the columns.

If you are on a Pro or Org account you get `4` modes per collection. On the enterprise org you can use `40` modes per collection⁹. While it is a bit limiting, `4` modes are enough to cover the most common cases, like light and dark mode.

If you use a variable from a collection with multiple modes on a layer, it will show up in the layer section. You can change between modes using a dropdown.

![You can switch between the two modes with this dropdown.](https://cdn-images-1.medium.com/max/1600/1*8rPpBVOJlRr3rt4Us25QdQ.jpeg)

If you leave it set to `auto`, the dropdown does not show up. To change between `modes`, use the `change variable mode` icon next to the `Layer` title in the right sidebar.

### Modes vs. themes

There is no standardized definition of `modes` and `themes`. For this article `modes` refer to `dark` and `light` and if applicable `dark high contrast` and `light high contrast`. Modes are about dark vs. light or default vs. high contrast.

So, in the most basic case you just have your design system in `light` and `dark`.

![Screenshot with dark and light mode in the collection](https://cdn-images-1.medium.com/max/1600/1*-s7c2D24NHtYrNs-WaZp9Q.jpeg)

If you also have high contrast modes, you just add them here. Still pretty easy.

![A third mode was added for high contrast.](https://cdn-images-1.medium.com/max/1600/1*oXSntFIDkgw6wAljdIj2Jg.jpeg)

If you are building a multi-brand design system, then we are getting into `themes`. Themes are not about contrast. They are about changing the entire color palette.

A `theme` in this context represents a brand and within the `theme` you support some, or all of the `modes`.

So, if you have `Brand A` and `Brand B` it can quickly get complex.

![Matrix shows colors for light and dark modes for two brands. Each color is an individual variable.](https://cdn-images-1.medium.com/max/1600/1*3oLjNBmiPORmzEsdWJMK0Q.jpeg)

## Collection

If you want to create a matrix like this in Figma you need to connect multiple collections together.

While you can technically create a very complex system with deep nesting, it gets confusing for your users. Every layer adds another dropdown your users will need to change.

I recommend sticking to a maximum of two collections. If you need more layers to represent the system at your company, consider if you really need to make all themes and modes available in Figma.

In any case, you should make sure to explain collection state inheritance to your users. It makes working with multiple layers a lot easier. (See next section)

## Using collections to preview your work

The great part about collections is that you can simply change them from the sidebar on a per frame basis. This lets you easily preview a component or screen in different modes.

It also makes it possible to mix modes. For example, if you want to add a dark mode section on your homepage but keep the rest in light mode.

### Collection state inheritance

One important feature to know about is collection state inheritance. This means that a frame with a collection set `auto` (which is the default value), will inherit the value of its parent.

![If mode is set to auto it will inherit the value from its parent.](https://cdn-images-1.medium.com/max/1600/1*ILh0N7miLRtNR63BAM_wAQ.jpeg)

This inheritance chain can go up multiple levels. This allows you to set a whole screen to `dark` mode by changing just the top frame. All nested frames and components will inherit the mode.

Another possibility this opens up is to instantly preview a screen in all modes. Simply turn your screen into a component and place instances into frames with different collection settings. Now you can change the main component and get previews in all modes.

![Component “screen” and all its children automatically inherits the mode “dark” from the parent frame for an instant preview of a screen in any other mode.](https://cdn-images-1.medium.com/max/1600/1*fm4ZFNkRK22uKLA7A6EMiA.jpeg)

## Collection recipes

Depending on your needs there are different approaches to structure your tokens into collections.

The way tokens are structured in Figma may not reflect the way tokens are structured in your code. This is fine. Your focus should be to make the experience for designers easy and understandable. If necessary, you can create a plugin¹⁰ or script that generates the structure needed for Figma from your source of truth `json` files¹¹.

### Base and semantic tokens

A very simple approach is a product with only one `mode`. If you use design tokens you should still have at least [two layers](https://uxdesign.cc/naming-design-tokens-9454818ed7cb#:~:text=types%20of%20tokens.-,Token%20tiers,-There%20are%20three): `base` tokens and `semantic` tokens¹².

![Semantic scale referencing base tokens](https://cdn-images-1.medium.com/max/2400/1*oVmkUPngJP3A0uPT4xM11Q.jpeg)

`Base` tokens are your raw colors. You probably want to set them to `hide from publishing` so that they are not exposed to your users.

In your semantic layer you reference the `base` tokens and don't use raw values. This is the layer you expose to your users so they can create UIs and components with those tokens.

You can group your tokens for example into foreground and background as well as border colors.

### Component tokens *(optional)*

If you are using component tokens as well, you can create another `collection` for this layer. In here you can reference `base` or `semantic` tokens, although semantic tokens are preferred.

![Component group in collection](https://cdn-images-1.medium.com/max/2400/1*ujQFvGIHIra9iuRveOrrvA.jpeg)

It makes sense to organize tokens into component groups. In the screenshot the tokens for the `Card` component are within a `Card` group. This allows users to search for the component in the token selector.

![By grouping component tokens users can search for the component name](https://cdn-images-1.medium.com/max/2400/1*ZmK3ieGKYlAGzt5piV8a1A.jpeg)

Note: If a collection has only one mode, it will not show up in the layer section of the sidebar, so a user does not have to select anything.

### Simple dark & light mode

For a simple dark and light mode, you use one or two collections. The main collection is called `Modes` and has a `Light` and a `Dark` mode. This will allow your users to select the mode from the `Layer` section in the sidebar.

Single collection: If you only want to use a single collection, you can add your semantic tokens with raw values directly inside the `Modes` collection.

Two collections: I recommend working with base and semantic tokens. For this you create a `Base` collection with all your color scales. In your `Modes` collection you reference those colors within the `Light` and `Dark` mode.

![Tokens are grouped inside a base scale collection without modes and used in this “Modes” collection.](https://cdn-images-1.medium.com/max/1600/1*kpJjLgGLHEd1cO9AoohgBQ.jpeg)

### Different base scales

If you have different base scales for light and dark, the above approach does not work. You could add a dark and a light `mode` to the `Base` collection, but this would mean your users need to change two modes to change from light to dark.

I’d recommend creating three collections instead:

- `Base Light`
- `Base Dark`
- `Modes`

Within modes you now reference colors from `Base Light` for light mode and from `Base Dark` for dark mode. This allows you to represent your tokens correctly without the user having to change multiple collections. Remember, a collection with only one mode will not show up in the right sidebar.

Alternatively you can also add groups for `Dark` and `Light` to your base collection.

### Multi-brand

A simple multi-brand setup with only one mode per brand. This is very similar to the light and dark mode implementation. Depending on how the brands differ, you have two options:

**Option 1: Adjusted base tokens**

If your brands have scales with the same names and just differ in hues, you can add the `brands` in the base token layer. This is common, especially for brands that use only a few colors apart from their brand color.

![Using colors directly in the brand layer works if you only need to support a single theme per brand.](https://cdn-images-1.medium.com/max/1600/1*ApL9WSTrNeN7__schYIFMg.jpeg)

In the semantic layer you don’t need any mode. Just reference the colors from the `base` layer which change depending on the selected brand.

**Option 2: Separate semantic tokens**

If your brands differ strongly, it makes more sense to add the brands in the semantic layer. You can create individual collections for the base tokens of Brand A and B or groups in the `Base` collection to organize them. In the `semantic` collection you reference colors from the `base` collection.

![Using separate collections for brand A and brand B base scales, which are used in the semantic collection](https://cdn-images-1.medium.com/max/2400/1*mc_wl7U9CkhJheJlmPYR_w.jpeg)

### Multi-brand multi-mode

Imagine you have two brands, `A` and B, both having a `light` and a `dark` mode. This is the setup we are building now.

Our users should be able to switch between brands with one dropdown and between `light` and `dark` mode with another one.

To achieve it, we need to create two collections `Mode` and `Brand`.

![With two collections we can get one dropdown to choose the brand and another to choose between the modes.](https://cdn-images-1.medium.com/max/2400/1*o2gHPbLgB-w_Wz3cb2Hx_g.jpeg)

**Mode**

The `mode` collection has all possible permutations of our semantic tokens. This means we need to add semantic tokens for all brands in all modes. But we only have two dimensions, one for the variable names and one for the modes. Luckily, we can use groups to add a third dimension, the brands.

**Brand**

We need the `brand` collection to switch between the different brands. It is fairly straight forward.

We add all semantic tokens, referencing colors from the corresponding brand `group` in the `Mode` collection. The dark and light mode switch is already covered in the `Mode` collection. With this done, we have our multi-dimensional setup.

![The multi-brand multi mode setup with just two collections](https://cdn-images-1.medium.com/max/2400/1*zcl-diBFdq6zu0ZZye0s8Q.jpeg)

## Export / import

Figma doesn’t have native variable export and import yet. But you can use plugins like [token studio](https://docs.tokens.studio/sync/sync)¹³ or build your own¹⁰. I imagine this feature will be added in the future. Maybe the team is waiting for the w3c spec⁵ to come out of the draft phase.

## Source of truth

Generally I recommend to NOT use Figma as the *source of truth* for your design tokens. Figma is just not a stable enough environment and does not have a good versioning.

Instead, you should use a git repository. I use one on GitHub, but you can use any provider or an internally hosted git solution if your company has one.

I’d also not allow pushing directly to the repository. Instead, you should require pull requests to make changes to the design token repository.

The benefits of pull requests are that they can be double checked before merging them into the production code.

On GitHub you can even require a certain number of people to accept a PR before it can be merged. Additionally, you can automatically run scripts on pull request code. This is called `actions` on GitHub but other providers support this as well.

You could for example run a [style dictionary compiler](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c)⁶ on a pull request. This verifies that the pull request does not break your tokens. For my work I created a script that [automatically checks the color contrast](https://github.blog/2023-05-11-unlocking-inclusive-design-how-primers-color-system-is-making-github-com-more-inclusive/)¹⁴ between tokens on every pull request.

It’s best to store design tokens as `json` files for maximum compatibility. This is also recommended in the w3c spec⁶. You can create a `json` file by hand, or by exporting your tokens from Figma using a plugin. Either way is fine, as long as they get pushed to your git repository afterwards.

## Summary

While design tokens in Figma are not as powerful as you may have hoped, they are very compatible with the w3c draft for the design token standard. This will be extremely helpful for interoperability. I expect more tools, like style dictionary, to ship w3c support out of the box. Until then, you can use [my library to use w3c tokens in style dictionary](https://github.com/lukasoppermann/style-dictionary-utils).

Even so, variables and collections completely revolutionize the way we build design systems in Figma. And they are expected to just get better over time. So, make the switch now.

## References

1. [https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)
2. [https://help.figma.com/hc/en-us/articles/14506821864087](https://help.figma.com/hc/en-us/articles/14506821864087)
3. [https://help.figma.com/hc/en-us/articles/14506587589399](https://help.figma.com/hc/en-us/articles/14506587589399)
4. [https://help.figma.com/hc/en-us/articles/14506821864087#:~:text=A%20style%20can%20be%20used%20for%20properties%20that%20are%20made%20up%20of%20multiple%20values%2C%20such%20as%20gradients%20or%20shadows.%20Although%20styles%20cannot%20reference%20other%20styles%2C%20they%20can%20reference%20variables](https://help.figma.com/hc/en-us/articles/14506821864087#:~:text=A%20style%20can%20be%20used%20for%20properties%20that%20are%20made%20up%20of%20multiple%20values%2C%20such%20as%20gradients%20or%20shadows.%20Although%20styles%20cannot%20reference%20other%20styles%2C%20they%20can%20reference%20variables)
5. [https://design-tokens.github.io/community-group/format/#design-token](https://design-tokens.github.io/community-group/format/#design-token)
6. [https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c)
7. [https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables](https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables)
8. [https://help.figma.com/hc/en-us/articles/15145852043927#Create_and_manage_variable_collections](https://help.figma.com/hc/en-us/articles/15145852043927#Create_and_manage_variable_collections)
9. [https://www.figma.com/pricing/](https://www.figma.com/pricing/)
10. [https://github.com/figma/plugin-samples/tree/master/variables-import-export](https://github.com/figma/plugin-samples/tree/master/variables-import-export)
11. [https://www.figma.com/plugin-docs/working-with-variables](https://www.figma.com/plugin-docs/working-with-variables)
12. [https://uxdesign.cc/naming-design-tokens-9454818ed7cb#:~:text=types%20of%20tokens.-,Token%20tiers,-There%20are%20three](https://uxdesign.cc/naming-design-tokens-9454818ed7cb#:~:text=types%20of%20tokens.-,Token%20tiers,-There%20are%20three)
13. [https://docs.tokens.studio/sync/sync](https://docs.tokens.studio/sync/sync)
14. [https://github.blog/2023-05-11-unlocking-inclusive-design-how-primers-color-system-is-making-github-com-more-inclusive/](https://github.blog/2023-05-11-unlocking-inclusive-design-how-primers-color-system-is-making-github-com-more-inclusive/)
