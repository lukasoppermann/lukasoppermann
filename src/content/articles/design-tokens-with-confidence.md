---
title: "Design tokens with confidence"
url: "https://lukasoppermann.medium.com/design-tokens-with-confidence-862119eb819b"
published: "2026-01-19"
excerpt: "Why the W3C design token standard is your new foundation."
---

---

![Cover: Design Tokens with confidence](https://cdn-images-1.medium.com/max/2400/1*lECNuPy3Z-7fP4OwXUS2dA.jpeg)

In this article you’ll learn why aligning with the official standard make your tokens work across the entire product spectrum and how you set up design tokens that follow the new standard.

## The problem with design token so far

### The Promise of Design Tokens

Design tokens are all your **design decisions**, that define a design system’s aesthetic properties, everything from **colors and font sizes to spacing units and border radii**. They are the modern evolution of hard-coded values.

They are stored in a **central, platform-agnostic repository**, establishing a **single source of truth** for your entire digital product suite.

This central management allows teams to consume the exact same design values across all platforms (web, native apps, documentation). Crucially, updating a token, e.g. changing the value of `$color-brand-primary`, instantly triggers that change to **propagate consistently** throughout the entire system. This not only guarantees brand consistency but dramatically reduces maintenance time and the risk of visual regression.

### The pain point of diverse formats

When we first embraced design tokens, we knew one thing for sure: they wouldn’t just plug-and-play everywhere. It was understood that to get them from a central repo into platforms like **Web, iOS, and Android**, there would need to be some transformation logic. That was expected.

What wasn’t expected, was the cross-tool incompatibility due to a missing, stable standard for how to define design tokens.

In the early days, there was no recognized, universal standard and the ecosystem went wild. We got definitions in `JSON`, `YAML`and other languages with all kinds of shapes and properties.

Some important tools, notably design software like Figma, opted out entirely, deciding to wait for an official standard before investing in robust import/export capabilities.

This lack of consensus created a high maintenance burden for design system teams. They were forced to maintain a complex set of **custom transformations**, not just for deploying tokens, but often just to move data between different _authoring_ tools. The promised efficiency of tokens was constantly dampened by the overhead of format translation.

### The Solution: The W3C Design Token Specification

A while ago, the **W3C Design Tokens Specification** started to emerge. However, it is just a working group and the progress was pretty slow at times, given that everyone on the team has a day job as well. The specification was shaping up to something great, but was in draft mode for a long time, with considerable changes along the way. While better than nothing, the constant, breaking changes, and unpredictable timeline meant sticking to the specs draft was high maintenance and tools like Figma didn’t even bother.

But this changes now, the **Design Tokens Community Group (DTCG)** has released the first stable version of the standard¹ [release 2025.10](https://www.designtokens.org/tr/2025.10/). We finally have a solid, vendor-neutral target to build against, something all tools can agree on that won’t change overnight.

The impact is immediate. Figma is now [shipped native variable import and export](https://www.figma.com/blog/schema-2025-design-systems-recap/#importing-and-exporting-variables)² functionality based on this specification. And I am sure that many projects and tools will follow soon.

In the next sections I will show you how to set up tokens that follow the new standard and how you can use style dictionary to transform those tokens for any platform you need to support.

## Why standardization matters

### **Interoperability**

The shift to an official W3C standard isn’t just a technical win, it’s a massive workflow upgrade that unlocks true **interoperability**.

When you have a universal standard, everyone falls in line:

- **Design Tools** (like Figma)
- **Design Token Management Platforms**
- **Design Token Pipeline** Packages (like Style Dictionary)

This common standard means we can now move our tokens **freely and seamlessly** across our entire workflow **without needing custom transformations** for every single step.

If your team decides to switch from one token management platform to another, the migration is vastly simplified. You won’t have to rewrite your core token files or complex transformation logic, because your tokens are already in the standardized format the new tool understands. This stability makes switching tools cheaper, faster, and much less scary!

### Business Impact: Maintainability and Stability

But the W3C standard doesn’t just have a technical effect. It also changes the impact on the bottom line! This standardization delivers massive improvements for **maintainability and stability**.

### Reduced Maintenance Overhead

Once your key tools adopt the W3C standard, your maintenance effort will reduce to half or less:

- **Retire Custom Scripts:** You can finally ditch those brittle, homegrown plugins and custom workflows you built just to shove tokens into and out of design tools. Fewer scripts mean fewer things to break!
- **Simplify Your Pipeline:** Your transformation setup becomes vastly cleaner. You can strip out all that custom logic you needed to handle non-standard formats, leaving a lean, efficient token pipeline. Most of the logic will be done by the tool you choose, out of the box.

### Improved Pipeline Stability

A standard reduces the a major risk to your design system. When tools adopt an official specification, they are committed to it:

**No Sudden Breakage:** You gain confidence that tool vendors won’t suddenly deprecate their custom APIs, because they are now adhering to an industry-wide specification. Your core token pipeline is no longer one undocumented API change away from total collapse (looking at you Figma 🤨). Adopting the standard means sticking to the standard.

### Future-Proofing Your Investment

Finally, a standard is the ultimate form of digital insurance. Your investment in tokens today will pay off for years to come:

**Universal Compatibility:** Any new design tool or new token package will likely adopt the official W3C standard. This means your current set of well-defined tokens will **just work** anywhere you choose to expand, ensuring your design system remains flexible and scalable for the future.

---

## Diving Into the Standard: The W3C JSON Format

The W3C Design Token Specification utilizes **JSON** (JavaScript Object Notation) as its serialization format, as it is both human-readabe and machine-parseable. Token files are typically saved as `.token.json`.

### A simple design token

At its most basic, every design token must contain two properties:

- **Name:** This is the key used in the JSON structure. It often reflects a logical name like `primary` or `medium`.
- **Value** (`value`): This is the actual value the token represents, such as a specific color, pixel value or a font family.

Note that the `$` prefix is required. This is to avoid collision with other data, as some of the property names are very common for JSON formats.

![Basic design token](https://cdn-images-1.medium.com/max/2400/1*99NhvHdMAeu2CIrE3zXMTQ.png)

### Optional Token Fields

The standard specifies several optional fields, but for interoperability’s sake, at least the `$type` property should be defined.

- `$type`: Defines the category of the token (e.g., `color`, `dimension`, `fontFamily` or `duration`). This helps tools understand how to process the value of the token.
- `$description`: Provides human-readable context about the token’s purpose and usage, which could be surfaced in the final output e.g. a css file. Adding a deprecation notice is a typical use case for that.
- `$extensions`: Used to attach non-standard, tool-specific metadata to a token without violating the core specification. This property is an object and it is recommend to define any sub-property as `org.[yourOrg].[tool/use case]` to avoid naming collisions.

![A design token with optional fields](https://cdn-images-1.medium.com/max/2400/1*TS3U2rUlfN37DBE-ySN7yg.png)

### Grouping and Nesting

Tokens are structured and organized using **nesting** within *JSON*. But more than just organization, the nesting typically contributes to the token’s final, canonical name.

- **Nesting:** You group related tokens under parent objects (e.g., all size tokens under a *size* group, or all brand colors under a *color.brand* group).
- **Final Name:** By default, the final, usable name of a token is created by combining the names of its parent groups and its own name, usually joined by a delimiter (like a *hyphen* or *underscore*).

In the example below, the final name generated for the token might be `typography-body-lineHeight-medium`.

![Grouping and nesting tokens](https://cdn-images-1.medium.com/max/2400/1*uxqziNpm5S-BKcgSyG0Jnw.png)

### Alias (or Reference Token)

An **Alias** (often called a **reference** in the specification) is a token whose `$value` points to the name of another token. This is fundamental for theme creation and ensuring consistency. If the source token changes, all aliases update automatically.

To define an alias use the entire token path including all parents in dot notation and wrap it in curly brackets, e.g. `{typography.body.fontSize.medium}`

You can reference tokens from other files, if in your transformation process you make sure that those tokens are available at transformation time. How this is done depends on the specific tool you use.

![Example of a token alias](https://cdn-images-1.medium.com/max/2400/1*bAJLX5WPvVucVCJ2cuFipQ.png)

### Composite Token

A **Composite Token** is a single more complex token that groups multiple distinct values. They are used for things like typography or shadow styles. Instead of defining separate tokens for a shadow’s color, offset, and blur, you define one composite token.

Importantly every property of the `$value` object can reference a raw value or alias.

![Example of a composite token](https://cdn-images-1.medium.com/max/2400/1*_qWGISx61Frt0tn8xw0A3Q.png)

When converted to languages that support combined outputs like css, you will be able to set the entire shadow with one variable.

![Composite token usage in css](https://cdn-images-1.medium.com/max/1600/1*TfJDmb01Jy5Y0JSGBvjFzA.png)

## W3C Token Types

### Color

A color token represents a color value defined as a **structured object**. This format ensures tools can accurately convert the color across [all supported color spaces](https://www.designtokens.org/tr/drafts/color/#supported-color-spaces)³ (sRGB, Display P3, OKLCH, etc.).

To get the correct values for your desired colorspace from a hex value, you can use [online tools](https://www.rapidtables.com/convert/color/hex-to-rgb.html)⁴. This makes creating tokens a bit cumbersome, but it will be no issue if you export your tokens from Figma or use a token management tool.

The `$type` has to be set to `color` and the `$value` object **must** define the `colorSpace` and `components`, and ***may*** include `alpha` (transparency) and a 6-digit `hex` string as a fallback.

![Example color token](https://cdn-images-1.medium.com/max/2400/1*P2Iv57Ux0qVbMdp2v5kX_A.png)

### Dimension

This token defines a numeric size value that is either a *float* like `1.2` or an *integer* like `5` with a unit that is either `px` or `rem`. Dimensions are mainly used for things spacing, sizing, border widths, shadow blur or font sizes.

The `$type` has to be set to `dimension` and the `$value` object **must **define the `value` and `unit`. The unit must be defined even if the value is `0`.

![Example dimension tokens](https://cdn-images-1.medium.com/max/2400/1*CV7tBT0a9ayjpUd1WOvFtw.png)

### Font Family

The `$type` has to be set to `fontFamily` and the `$value` **must** be either a `string` or an `array` of strings.

![Example font-family tokens](https://cdn-images-1.medium.com/max/2400/1*1-104ijiSVu2LFsWYNXStA.png)

### Font Weight

The `$type` has to be set to `fontWeight` and the `$value` **must** be either a recognized keyword like `bold` or a numeric value like `500` of strings.

![Example font-weight token](https://cdn-images-1.medium.com/max/2400/1*BhDuQvNP6ZTAI-6Os8xNEA.png)

### Duration

The `$type` has to be set to `duration` and the `$value` object **must** define the `value` as an integer and `unit` as either `"ms"` (milliseconds) or `"s" `(seconds). The unit must be defined even if the value is `0`.

![Example JSON for a duration token](https://cdn-images-1.medium.com/max/2400/1*-vhpkA4VDtmGtgN_DjTSZQ.png)

### Cubic Bézier

Used to define custom easing curves for animations. The `$type` has to be set to `cubicBezier` and the `$value` **must** be an array of four numbers representing the control points: *P*₁*(x, y)* and *P*₂*(x, y)*.

![Example JSON for a cubicBezier token](https://cdn-images-1.medium.com/max/2400/1*-6DD9rt7bzNYFcd2xc3OJg.png)

### Number

This is a pure numeric value without any unit attached. It’s used for unitless properties like opacity, line height ratios, or z-index values.
The `$type` has to be set to `number` and the `$value` **must** be an integer or float.

![Example JSON for a number token](https://cdn-images-1.medium.com/max/2400/1*uKFjcGDXJCOTFbfZ9Iz3IQ.png)

### Typography

This composite token bundles all necessary text styling properties (family, size, weight, line height, etc.) into one reusable token.

The `$type` has to be set to `typography` and the `$value` object **must** define the following properties:

- `fontFamily`— fontFamily token value
- `fontSize`— dimension token value
- `fontWeight`— fontWeight token value
- `letterSpacing`— dimension toen value
- `lineHeight` — number token value

According to the specifications all properties must be defined.

![Example JSON for a typography token](https://cdn-images-1.medium.com/max/2400/1*KftyEncMFOG4u2aPPP5xdw.png)

### Shadow

A shadow token bundles all necessary properties for a shadow (color, offset, blur, spread and inset).

The `$type` has to be set to `shadow` and the `$value` is either an shadow value object or an array of shadow value objects.

A shadow value object **must** define the following properties:

- `color` — color token value
- `offsetX` — dimension token value
- `offsetY` — dimension token value
- `blur` — dimension token value
- `spread` — dimension token value

The `inset` property is optional. If present it **must** be a `boolean`.

All of the properties must be set, but you can set them to `0px` if you e.g. don’t want a blur.

![Example JSON for a shadow token](https://cdn-images-1.medium.com/max/1600/1*RZ-Iuspd6k8DcwvA_zCC9A.png)

### Border

A complete border definition, combining `color`, `width` and `style` into one token.

The `$type` has to be set to `border` and the `$value` object **must** have the following properties:

- `color` — color token value
- `width` — dimension token value
- `style` — a strokeStyle token value *(see below)*

![Example JSON for a border token](https://cdn-images-1.medium.com/max/1600/1*CrrAoKKrUV-s_FnWXznFvg.png)

### Stroke Style

Defines the pattern of a stroke, specifying the dash and gap sequence.

The `$type` has to be set to `strokeStyle` and the `$value` **must** be either one of the defined stroke style strings or a strokeStyle object. The following strings are valid:

- solid
- dashed
- dotted
- double
- groove
- ridge
- outset
- inset

When defining a `strokeStyle` object value instead, you **must** define the `dashArray` and the `lineCap` property.

The `dashArray` is an array of dimension values defining the lines and gap part of the border.

The `lineCap` property can be set to `"round"`, `"butt"` or `"square"` which are defined in the [svg specs](https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty)⁵.

![Example JSON for a strokeStyle token](https://cdn-images-1.medium.com/max/2400/1*IMPaAOi6M6Dw0R_jazWMbg.png)

### Transition

Used to define an animation transition, combining a `duration`, a timing function and an optional delay.

The `$type` has to be set to `transition` and the `$value` object **must** have the following properties:

- `duration` — duration value
- `delay` — duration value
- `timingFunction` — cubicBezier value

![Example JSON for a transition token](https://cdn-images-1.medium.com/max/2400/1*S_d8TWqw7K2RqCVuxqgH7Q.png)

### Gradient

Defines a color gradient, between two or more colors.

The `$type` has to be set to `gradient` and the `$value` **must** be an array of objects with the following properties:

- `color` — a color token value
- `position` — a value between `0` and `1` representing a percentage value

![Example JSON for a gradient token](https://cdn-images-1.medium.com/max/2400/1*6afRWY40_1QVMEmUNMrULg.png)

---

## The Practical Setup: Migrating to the Standard

If you are just beginning to create design tokens, you have the advantage of starting with best practices.

However, most folks will be migrating an existing token set which requires a good amount of effort. Unfortunately, while the W3C Design Tokens Specification has been released, tool support is still catching up.

Notably, Style Dictionary does not yet support the official release version. Let’s explore how we can implement and work with W3C tokens today.

### Update your tokens using AI

You can efficiently update your tokens using AI tools like Copilot. Because tokens follow very clear rules, AI is well-suited for this task.

I suggest performing updates in steps, focusing on one token type per iteration. Be prepared to adjust your AI prompt for complex composite tokens that involve multiple required changes.

I had great success with the prompt below, to update dimension tokens.

> There is a new standard for dimension design tokens: [https://www.designtokens.org/tr/drafts/format/#dimension](https://www.designtokens.org/tr/drafts/format/#dimension))

> Update all dimension tokens to use the new standard.

> Every dimension token’s value should be split into: value which is a number and a unit which is for example ‘px’

### Setting up your token transformation

I just released the latest version of my [style-dictionary-utils](https://github.com/lukasoppermann/style-dictionary-utils)⁶ package which fully supports the finalized w3c design token spec. So let’s set it up.

**Install package**

You need to install both style dictionary and [style-dictionary-utils](https://github.com/lukasoppermann/style-dictionary-utils).

```bash
<span class="pre--content">npm i -D style-dictionary-utils style-dictionary</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Bash<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

**Create the build process**

The build process is the same that you may already know from style dictionary, with a few things to keep in mind so that you use the new utils.

Below is the full script for a simple process. We will run through the individual parts afterwards.

```typescript
<span class="pre--content"><span class="hljs-comment">// file ./scripts/buildTokens.ts</span><br><span class="hljs-keyword">import</span> { <span class="hljs-title class_">StyleDictionary</span> <span class="hljs-keyword">as</span> <span class="hljs-variable constant_">SD</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"style-dictionary-utils"</span>;<br><span class="hljs-comment">// create a new style dictionary instance</span><br><span class="hljs-keyword">const</span> <span class="hljs-title class_">StyleDictionary</span> = <span class="hljs-keyword">new</span> <span class="hljs-title function_">SD</span>();<br><span class="hljs-comment">// extend with the transforms you need</span><br><span class="hljs-keyword">const</span> extendSd = <span class="hljs-keyword">await</span> <span class="hljs-title class_">StyleDictionary</span>.<span class="hljs-title function_">extend</span>({<br>  <span class="hljs-attr">source</span>: [<span class="hljs-string">"./src/tokens/**/*.json5"</span>, <span class="hljs-string">"./src/tokens/**/*.json"</span>],<br>  <span class="hljs-attr">platforms</span>: {<br>    <span class="hljs-attr">cssAdvanced</span>: {<br>      <span class="hljs-attr">prefix</span>: <span class="hljs-string">"PREFIX"</span>,<br>      <span class="hljs-attr">buildPath</span>: <span class="hljs-string">"./dist/css/"</span>,<br>      <span class="hljs-attr">preprocessors</span>: [<span class="hljs-string">"extract-letterSpacing-preprocessor"</span>],<br>      <span class="hljs-attr">transforms</span>: [<br>        <span class="hljs-string">"name/kebab"</span>,<br>        <span class="hljs-string">"w3c-color/css"</span>,<br>        <span class="hljs-string">"w3c-border/css"</span>,<br>        <span class="hljs-string">"dimension/css"</span>,<br>        <span class="hljs-string">"duration/css"</span>,<br>        <span class="hljs-string">"cubicBezier/css"</span>,<br>        <span class="hljs-string">"transition/css"</span>,<br>        <span class="hljs-string">"fontWeight/css"</span>,<br>        <span class="hljs-string">"fontFamily/css"</span>,<br>        <span class="hljs-string">"typography/css"</span>,<br>        <span class="hljs-string">"gradient/css"</span>,<br>        <span class="hljs-string">"shadow/css"</span>,<br>        <span class="hljs-string">"strokeStyle/css"</span>,<br>      ],<br>      <span class="hljs-attr">files</span>: [<br>        {<br>          <span class="hljs-attr">format</span>: <span class="hljs-string">"css/advanced"</span>,<br>          <span class="hljs-attr">destination</span>: <span class="hljs-string">"variables.css"</span>,<br>          <span class="hljs-attr">options</span>: {<br>            <span class="hljs-attr">outputReferences</span>: <span class="hljs-literal">true</span>,<br>          },<br>        },<br>      ],<br>    },<br>  },<br>});<br><span class="hljs-comment">// run the build</span><br>extendSd.<span class="hljs-title function_">cleanAllPlatforms</span>();<br>extendSd.<span class="hljs-title function_">buildAllPlatforms</span>();</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">TypeScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Create a style dictionary with the utils loaded by first importing `StyleDictionary` from the `style-dictionary-utils` package and run `new` to initialize an instance.

```typescript
<span class="pre--content"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">StyleDictionary</span> <span class="hljs-keyword">as</span> <span class="hljs-variable constant_">SD</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"style-dictionary-utils"</span>;<br><span class="hljs-comment">// create a new style dictionary instance</span><br><span class="hljs-keyword">const</span> <span class="hljs-title class_">StyleDictionary</span> = <span class="hljs-keyword">new</span> <span class="hljs-title function_">SD</span>();</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">TypeScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

The `prefix` is added before every token name in a css variable this would look like `--PREFIX-fgColor-link` for the token `fgColor.link`.

The `buildPath` is where your converted files will be saved.

```typescript
<span class="pre--content">{<br>  <span class="hljs-comment">//...</span><br>   <span class="hljs-attr">prefix</span>: <span class="hljs-string">"PREFIX"</span>, <span class="hljs-comment">// e.g. --blue-500 -> --PREFIX-blue-500</span><br>   <span class="hljs-attr">buildPath</span>: <span class="hljs-string">"./dist/css/"</span>,<br>  <span class="hljs-comment">//...</span><br>}</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">TypeScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Afterwards you must extend the StyleDictionary with some or all of the transformers from the `style-dictionary-utils` package.

The following transformers are available:

- **w3c-color/css**: Converts structured color objects into CSS strings like `rgb()` or `oklch()`.
- **w3c-border/css**: Transforms composite border objects into a shorthand CSS `border` string.
- **dimension/css**: Formats numerical values into CSS-ready strings with units (e.g., `1rem`).
- **duration/css**: Converts time values into valid CSS formats (e.g., `150ms`).
- **cubicBezier/css**: Maps coordinate arrays into the standard `cubic-bezier()` function syntax.
- **transition/css:** Combines duration, delay, and timing functions into a shorthand `transition` string.
- **fontWeight/css**: Maps weights to valid numeric CSS `font-weight` values.
- **fontFamily/css**: Joins typeface strings or fallback arrays into a comma-separated CSS stack.
- **typography/css**: Flattens composite typography objects into `font` shorthands.
- **gradient/css**: Processes color stop arrays into `linear-gradient` functions.
- **shadow/css**: Formats composite shadow definitions into standard CSS `box-shadow` strings.
- **strokeStyle/css**: Translates stroke patterns into CSS border styles or SVG dash-arrays.

You can also add the *extract-letterSpacing-preprocessor* preprocessor which will extract the `letterSpacing` from a typography token and turn it into a dimension token. If you don’t use custom letter-spacing or define dimension tokens already, you can skip this step.

Lastly you need to define the output files. In our case, it is a single file called `variable.css`. Keep in mind that the `destination` is inside the `buildPath`, so you will find the output in `.dist/css/variables.css`.

By setting `outputReferences` to true, we will keep references to css variables (e.g. `var(--blue-500)`) that are part of our output. If set to false, all references will be flattened to raw values, like a hex code for colors.

```typescript
<span class="pre--content"><span class="hljs-attr">files</span>: [<br> {<br>  <span class="hljs-attr">format</span>: “css/advanced”,<br>  <span class="hljs-attr">destination</span>: “variables.<span class="hljs-property">css</span>”,<br>  <span class="hljs-attr">options</span>: {<br>   <span class="hljs-attr">outputReferences</span>: <span class="hljs-literal">true</span>,<br>  },<br> },<br>],</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">TypeScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

With this done, you should be able to convert all valid w3c tokens in `./src/tokens` by running the script:

```bash
<span class="pre--content">node scripts/buildTokens.ts</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

## Conclusion: The End of Fragmented Workflows

The adoption of the W3C Design Token Standard marks a shift from proprietary, high-maintenance pipelines to a stable, universal ecosystem. By moving away from custom JSON structures and brittle transformation scripts, teams can finally achieve true interoperability between design tools like Figma and diverse production environments.

Building on this foundation provides three immediate advantages:

- **Reduced Overhead:** Native tool support eliminates the need for maintaining custom plugins and internal translation logic.
- **Technical Stability:** Relying on an official specification protects your design system from breaking changes caused by unannounced tool API updates.
- **Scalability:** Standardized tokens are inherently future-proof, ensuring that as your product spectrum grows, your design decisions remain consistent and portable.

Standardization is no longer a theoretical goal. With stable releases and native platform support, it is the new baseline for design systems. Aligning your tokens with the W3C standard today ensures your infrastructure remains resilient, accessible, and ready for the next generation of design and development tools.

---

1. [https://www.designtokens.org/tr/2025.10/](https://www.designtokens.org/tr/2025.10/)
2. [https://www.figma.com/blog/schema-2025-design-systems-recap/#importing-and-exporting-variables](https://www.figma.com/blog/schema-2025-design-systems-recap/#importing-and-exporting-variables)
3. [https://www.designtokens.org/tr/drafts/color/#supported-color-spaces](https://www.designtokens.org/tr/drafts/color/#supported-color-spaces)
4. [https://www.rapidtables.com/convert/color/hex-to-rgb.html](https://www.rapidtables.com/convert/color/hex-to-rgb.html)
5. [https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty](https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty)
6. [https://github.com/lukasoppermann/style-dictionary-utils](https://github.com/lukasoppermann/style-dictionary-utils)
