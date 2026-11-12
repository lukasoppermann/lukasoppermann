---
title: "W3C Design Tokens with Style Dictionary"
url: "https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c"
published: "2022-12-07"
excerpt: "Building your w3c standard design tokens with style dictionary"
---

---

![](https://cdn-images-1.medium.com/max/1600/1*3IaluWlBSuCJKMdz_YPm2w.jpeg)

## Who is the w3c and who is working on design tokens?

The World Wide Web Consortium (W3C) is an international community¹. It’s led by [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/)² and [Jeffrey Jaffe](https://www.w3.org/People/Jeff/). Together with [organizations](https://www.w3.org/Consortium/Member/List), a full-time [staff](https://www.w3.org/People/), and individual developers they develop web standards³. Founded in 1994, as of march 2022, the W3C had 459 members¹. This includes businesses, nonprofit organizations, universities, governmental entities, and individuals like³:

- Wikimedia Foundation
- Mozilla Foundation
- Google
- Microsoft
- Meta
- Amazon
- Adobe
- Stanford University
- University of Edinburgh
- Vienna University of Economics and Business

## Why should you use the w3c standard?

The current draft of the w3c design token standard is all we have. It’s as closes as we can get to an industry agreed interchange format for design tokens.

> ***NOTE:**** At the moment the standard is still a draft and subject to change. While I believe this to be the future there is no guarantee for that. I heard from members of the working group that they believe the first version of the draft will be published without major changes. But this is also not guaranteed.*

You may not share your design tokens outside your org, so why should you care? Because tools you use like Figma, sketch or style dictionary, will at some point consume and/or export design tokens. While there is currently a plethora of formats, it is likely that tool makers will move towards a standard if there is one.

So by using the w3c design token standard draft you are making your tokens as future-proof as possible.

## The w3c design token format and extension

When storing design tokens in a file, you MUST use `json` notation (syntax). The file extension must be either `.tokens` or `.tokens.json`

> ***TIP:**** If you use vs code you can make it threat *`*.tokens*`* files like *`*json*`* files by adding the following line to you *`*settings.json*`

```json
<span class="pre--content"><span class="hljs-attr">"files.associations"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"*.tokens"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"json"</span><br>  <span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (JSON)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

When sending tokens via `https` e.g. from an api you SHOULD use the MIME type `application/design-tokens+json`. If this is not possible you MAY use `application/json`.

## W3c standardised properties

Every w3c design token MUST consist of at least a *name* and a *value¹⁰*. Standardised properties are all prefixed with a `$`¹¹. Currently only four properties are standardised: `$value`, `$description`, `$type` and `$extensions`⁹.

```json
<span class="pre--content"><span class="hljs-attr">"token name"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"#224477"</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"color"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$description"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"A description of this token"</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

This helps us understand what to expect as an input when making w3c tokens work with style dictionary.

### **Character restrictions for token and group names**

Since predefined properties start with a `$` tokens and groups MUST NOT start with a `$`. Additionally tokens MUST NOT use `.`, `{` or `}` at all. Those characters are used when referencing token values¹¹.

## Token value reference / alias

Where ever a design token value is use, you may use a reference¹² to a valid token instead. This means a reference can be used as the value for the `$value` property but also as a value for a sub-property of `$value` in a composite token¹⁴.

A reference is defined¹² as a string of the *dot notation* of the path through the JSON tree wrapped in curly brackets. For example `"{tokens.color.red.500}"` would reference the following token in your `.json` file:

```json
<span class="pre--content"><span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"tokens"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"color"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>      <span class="hljs-attr">"red"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>        <span class="hljs-attr">"500"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>          <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"..."</span><br>        <span class="hljs-punctuation">}</span><br>      <span class="hljs-punctuation">}</span><br>    <span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

**Note:** Since a reference is a string we can use `500` as part of the dot notation, which would be invalid in javascript.

You can only reference an entire token, not individual properties of it. It is assumed that you only ever access the token to get its the value.

## W3c standardised token types

W3c specifies two types of tokens: `simple tokens`¹³ that have a basic value like a `string` or a **number** as a value and `composite tokens`¹⁴ that have an object with multiple properties as a value.

## Simple tokens

### [Color](https://design-tokens.github.io/community-group/format/#color)

**$type:** `color`

**$value:** `hex6` or `hex8 string` including the `#`

**Example values:** `"#445566"` or `"#44556699"`

### [Dimension](https://design-tokens.github.io/community-group/format/#dimension)

**$type:** `dimension`

**$value:** `px` or `rem` string

**Example values:** `"10px"` or `"0.5rem"`

### [Font family](https://design-tokens.github.io/community-group/format/#font-family)

**$type:** `fontFamily`

**$value:** a `string` or `array` of `strings` with font names

**Example values:** `"Noto Sans"` or `["Helvetica Neue", "Inter"]`

### [Font weight](https://design-tokens.github.io/community-group/format/#font-weight)

**$type:** `fontWeight`

**$value:** a `number` between 1 and 1000 or a [pre-defined string value](https://design-tokens.github.io/community-group/format/#font-weight)¹⁵

**Example values:** `400` or `"semi-bold"`

### [Duration](https://design-tokens.github.io/community-group/format/#duration)

**$type:** `duration`

**$value:** `ms` string

**Example values: **`"200ms"` or `"10.5ms"`

### [Cubic Bézier](https://design-tokens.github.io/community-group/format/#cubic-bezier)

**$type:** `cubicBezier`

**$value: **tuple¹⁶ (`array`) with 4 coordinates (`number`) to describe the curve¹⁷

**Example values:** `[0.24, 0.72, 1, 0.5]`

## Composite tokens

The more complex composite tokens have an object with a specific schema as their value. Every value property can also be a valid token reference for a token of the given type. At the moment all properties of the composite token values are required. While in css values may be omitted, requiring them makes it easier for tools to work with the token structure.

The composite types defined so far are:

### [Typography](https://design-tokens.github.io/community-group/format/#typography)

**$type: **`typography`

**$value:**

- fontFamily — `fontFamily`
- fontSize — `dimension`
- fontWeight — `fontWeight`
- letterSpacing — `dimension`
- lineHeight — floating point `string` like `"1.2"` without a unit. This is still being discussed and may be changed to use a custom lineHeight type in the future¹⁸.

```json
<span class="pre--content"><span class="hljs-attr">"body"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"typography"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"fontFamily"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"Noto Sans"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"fontSize"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"{font.size.default}"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"fontWeight"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"700"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"letterSpacing"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"0.1px"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"lineHeight"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"1.2"</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### [Shadow](https://design-tokens.github.io/community-group/format/#shadow)

There is an ongoing discussion on the shadow specs, especially how *inset* shadows and shadows with multiple layers can be defined¹⁹.

**$type:** `shadow`

**$value:**

- color — `color`
- offsetX — `dimension`
- offsetY — `dimension`
- blur — `dimension`
- spread — `dimension`

```json
<span class="pre--content"><span class="hljs-attr">"dropShadow"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"shadow"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"color"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"{color.black.005}"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"offsetX"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"0px"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"offsetY"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"1px"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"blur"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2px"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"spread"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"0px"</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### [Border](https://design-tokens.github.io/community-group/format/#border)

**$type:** `border`

**$value:**

- color — `color`
- width — `dimension`
- style — `[stroke style string](https://design-tokens.github.io/community-group/format/#string-value)`²⁰ or *stroke style token*

```json
<span class="pre--content"><span class="hljs-attr">"focusOutline"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"border"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"color"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"{color.focus}"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"width"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2px"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"style"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"solid"</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br><span class="hljs-attr">"imageDrop"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"border"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"color"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"{color.gray.400}"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"width"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"2px"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"style"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>      <span class="hljs-attr">"dashArray"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">"0.5rem"</span><span class="hljs-punctuation">,</span> <span class="hljs-string">"0.25rem"</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><br>      <span class="hljs-attr">"lineCap"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"round"</span><br>    <span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### [Gradient](https://design-tokens.github.io/community-group/format/#gradient)

**$type:** `gradient`

**$value:** an `array` of color stops, each color stop has two properties:

- color — `color`
- position — `number`

```json
<span class="pre--content"><span class="hljs-attr">"gradients"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"position"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"end"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>      <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><br>    <span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"linear"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"gradient"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><br>      <span class="hljs-punctuation">{</span><br>        <span class="hljs-attr">"color"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"#0000ff"</span><span class="hljs-punctuation">,</span><br>        <span class="hljs-attr">"position"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><br>      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br>      <span class="hljs-punctuation">{</span><br>        <span class="hljs-attr">"color"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"{color.blue}"</span><span class="hljs-punctuation">,</span><br>        <span class="hljs-attr">"position"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"{gradients.position.end}"</span><br>      <span class="hljs-punctuation">}</span><br>    <span class="hljs-punctuation">]</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### [Transition](https://design-tokens.github.io/community-group/format/#transition)

**$type:** `transition`

**$value:**

- duration — `ms` string
- delay — `ms` string
- timingFunction — `cubicBezier`

```json
<span class="pre--content"><span class="hljs-attr">"easeInAndOut"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"transition"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"duration"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"300ms"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"delay"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"0ms"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"timingFunction"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.4</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.6</span><span class="hljs-punctuation">,</span> <span class="hljs-number">1</span><span class="hljs-punctuation">]</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### [Stroke style](https://design-tokens.github.io/community-group/format/#stroke-style)

**$type:** `strokeStyle`

**$value:**

[*stringStrokeStyle*](https://design-tokens.github.io/community-group/format/#string-value)*²⁰: *A string like `solid` or `dashed`

or

[*objectStrokeStyle*](https://design-tokens.github.io/community-group/format/#object-value)*²¹*

- dashArray — array of `dimension` tokens
- lineCap — one of the `string` values: `"round"`, `"butt"` or `"square"`

```json
<span class="pre--content"><span class="hljs-comment">// string stroke style</span><br><span class="hljs-attr">"focus-stroke-style"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"strokeStyle"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"solid"</span><br><span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br><span class="hljs-comment">// object style</span><br><span class="hljs-attr">"info-border-style"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"strokeStyle"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"dashArray"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">"{dash-short}"</span><span class="hljs-punctuation">,</span> <span class="hljs-string">"0.15rem"</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"lineCap"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"round"</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br><span class="hljs-attr">"stroke-short"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"$type"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"dimension"</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-attr">"$value"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"5px"</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

## What is style dictionary?

[Style dictionary](https://amzn.github.io/style-dictionary/#/)²² is one of the most used tools to transform design tokens from a source file like `json` into `css` or `js`. It is a simple node script that can be executed via the `CLI`. A *build file* is used to configure style dictionary.

The tokens follow a simple flow:

1. Source file is read and parsed
2. For every output format (*Platform*), tokens are run through `n` transforms. A transform can change a tokens `name`, `value` or additional `attributes`.
3. Finally the transformed tokens brought into a specific shape by formatter. This could be css with variables or a javascript file in the commonJs format.

![Style dictionary flow: source files are read, transfomed and turned into output like js or css via a formatter.](https://cdn-images-1.medium.com/max/1600/1*3IaluWlBSuCJKMdz_YPm2w.jpeg)

One reason for style dictionary’s popularity is the hooks that allow you to add custom code into each of the three steps.

A `parser`²³ lets us control the reading of source files. `Transformers`²⁴ allow us to modify the tokens in the second step. And with `format`²⁵ we define the shape of the output.

## Creating a build flow with style dictionary

The goal for our build flow is to consume `.json` files with w3c design tokens and turn them into any of our desired output formats, like `.css` or `.js`. But before this works we have to handle a few problems.

## Problems

> ***Note:**** Some of those problems may be resolved in the future if style dictionary becomes w3c design token compatible²⁶.*

### Style dictionary can’t parse w3c tokens

Style dictionary expects a token to have a `value` property, but we have a `$value` property. It also uses a `comment` property to output comments in some formats, but w3c tokens use `$description`.

### Style dictionary uses a custom CTI convention

Style dictionary uses a `category → type → item`²⁷ (CTI) convention to identify design tokens. This encodes information about the token implicitly into the nesting. The w3c standard opted for an explicit way, through a `$type` property. Currently style dictionary does not understand this property.

### Style dictionary does not understand w3c types

The transformers that are shipped with style dictionary rely on the CTI convention. But we need style dictionary to understand the `$type` property. And also the types that the w3c standard defines, like `dimension` or `shadow`.

We could transform our `$type` property into a `category` property which style dictionary uses to filter tokens in its transformers²⁸. However, many `types` both `simple` and `composite` will not be understood.

## Solution

Style dictionary is very extendable! We can solve all the above problems via the style dictionary hooks. And since it is a node script written in JavaScript, that is fairly easy to do.

### A custom parsers to read w3c json files

The first step is to read our w3c json files and interpret them in a way that style dictionary can understand them. Since we will not rely on the CTI method to identify tokens, we only have to work around two problems:

- Style dictionary expects a `value` property on a token but we have `$value`
- Style dictionary uses the `comment` field in some formats but we have `$description`

Replacing text in a `string` using a `regex` is much easier than it is to replace property names in a nested `object`. This is why we do the following:

1. Read the json file as a `string`
2. Replace `$value` and `$description`
3. Parse json `string` into an `object` and hand this to style dictionary

### Implementing the w3c token parser

While it sounds daunting, a parser for style dictionary is actually a pretty simple object with two properties: a `pattern` and a `parse` function.

**Pattern**

The `pattern` property holds a simple regex to match a file extension, in our case this would be `/\\.json$/` to match files with the `.json` extension. If you want to allow all extensions⁸ that are defined in the standard, your regex will look like this:

```javascript
<span class="pre--content">/\\.<span class="hljs-property">json</span>|\\.<span class="hljs-property">tokens</span>\\.<span class="hljs-property">json</span>|\\.<span class="hljs-property">tokens$</span>/</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JavaScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

**Parse function**

The `parse` property holds a function that gets an object with two `strings` as the argument. The object contains the `filePath` and the `contents` of the file you want to parse. The function must return an object of tokens (an object with a `value` property is a token).

Since `contents` is a `string` we can use the js `replace` operations on it. Keep in mind that we are working with json, so we must preserve double quotes `"` around the property names.

```javascript
<span class="pre--content">contents = contents<br>  <span class="hljs-comment">// replace "$value" with "value"</span><br>  .<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/"$value"/g</span>, <span class="hljs-string">'"value"'</span>)<br>  <span class="hljs-comment">// replace "$description" with "comment"</span><br>  .<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/"$description"/g</span>, <span class="hljs-string">'"comment"'</span>)</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JavaScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Once we have our properties replaced we simply return a parsed json object using the built in `JSON.parse` method:

```javascript
<span class="pre--content"><span class="hljs-comment">//....</span><br> <span class="hljs-keyword">return</span> <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">parse</span>(contents)<br>}</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (JavaScript)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

You can find a complete implementation including one for `JSON5` on github: [w3c-token-json-parser.ts](https://github.com/lukasoppermann/style-dictionary-utils/blob/main/src/parser/w3c-token-json-parser.ts).

### Custom style dictionary transformers for w3c tokens

A transformer in style dictionary is an object with four properties: `type`, `transitive`, `matcher` and `transformer`.

- `type` can be `name`, `value` or `attribute` but we will focus on value transformers.
- `transitive` is a `boolean` that only exists for value transformers. If `true` the transformer will be run AFTER references are resolved. If a token is defined as `{color.red}` you get the resolved value `#ff0000` in the transformer.
- `matcher` filters through all tokens so only transform specific tokens with the current transformer, e.g. only color tokens
- `transformer` is the function that transforms the token value and must return it again

To transform our w3c tokens we must create matchers that filter tokens by their `$type` property. The transformer works the same way it does for the built-in transforms as our parser converted `$value` to `value`.

Instead of defining the matcher within the transformer we can create a filter and reuse it. The benefit of filters is, that they can be used separately as well. For example to filter tokens into different files²⁹. For example to create a `color.css` file with only color tokens.

### How to write a filter for w3c tokens

A filter is a simple function that returns a `boolean`. It must return `true` if the token passes and `false` if the token should be removed.

An implementation of a filter for `color` tokens in typescript looks like this:

```javascript
<span class="pre--content"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> isColor = (<span class="hljs-attr">token</span>: <span class="hljs-title class_">StyleDictionary</span>.<span class="hljs-property">TransformedToken</span>): <span class="hljs-function"><span class="hljs-params">boolean</span> =></span> {<br>  <span class="hljs-keyword">return</span> token?.<span class="hljs-property">$type</span> === <span class="hljs-string">'color'</span><br>}</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (JavaScript)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

A short overview in case you are not familiar with typescript. The parts after the colon `:` are types, which the typescript complier uses to check for errors. They are removed from the output. The question mark after `token` in the return value tells typescript to return `undefined` if `token` is `undefined`. This is simply to prevent errors.

You can find filters for all design tokens in the GitHub repo: [style-dictionary-utils/filter](https://github.com/lukasoppermann/style-dictionary-utils/tree/main/src/filter)

### How to write a transformer for w3c tokens

We already transformed `$value` to `value` in the parser. And we created the matcher logic using `$type` in out filter. The rest of the transformers is a standard style dictionary transformer²⁴.

A style dictionary transformer is an object with a matcher and a transformer function. The matcher is out `filter`. The transformer takes in the `token` as an argument and returns the transformed value.

Below is an example of a color transformer that converts all colors into an `rgba` format.

```javascript
<span class="pre--content"><span class="hljs-keyword">import</span> <span class="hljs-title class_">StyleDictionary</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'style-dictionary'</span><br><span class="hljs-keyword">import</span> { toRgba } <span class="hljs-keyword">from</span> <span class="hljs-string">'color2k'</span><br><span class="hljs-keyword">import</span> { isColor } <span class="hljs-keyword">from</span> <span class="hljs-string">'../filter/isColor'</span><br><br><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">colorToRgba</span>: <span class="hljs-title class_">StyleDictionary</span>.<span class="hljs-property">Transform</span> = {<br>  <span class="hljs-attr">type</span>: <span class="hljs-string">`value`</span>,<br>  <span class="hljs-attr">transitive</span>: <span class="hljs-literal">true</span>,<br>  <span class="hljs-comment">// the filter is used to match the correct tokens</span><br>  <span class="hljs-attr">matcher</span>: isColor,<br>  <span class="hljs-comment">// we take the token as the argument but only return the value</span><br>  <span class="hljs-attr">transformer</span>: <span class="hljs-function">(<span class="hljs-params">token: StyleDictionary.TransformedToken</span>) =></span> {<br>    <span class="hljs-keyword">return</span> <span class="hljs-title function_">toRgba</span>(token.<span class="hljs-property">value</span>)<br>  }<br>}</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (JavaScript)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

You can find transformers for all w3c design tokens in the GitHub repo: [style-dictionary-utils/transformers](https://github.com/lukasoppermann/style-dictionary-utils/tree/main/src/transformer)

## Summary

Thanks to style dictionaries extendability you can easily build a token transformation workflow for w3c tokens.

However, if you don’t want to start from scratch, use [style-dictionary-utils](https://github.com/lukasoppermann/style-dictionary-utils). I created this repository to collect filters and transformers for style dictionary, starting with w3c design token transformers. If you are missing something, please create an issue or send a PR. I am looking forward to collaborating on this.

## References

1. [https://en.wikipedia.org/wiki/World_Wide_Web_Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)
2. [https://en.wikipedia.org/wiki/Tim_Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee)
3. [https://www.w3.org/Consortium/Member/List](https://www.w3.org/Consortium/Member/List)
4. [https://design-tokens.github.io/community-group/format/#abstract](https://design-tokens.github.io/community-group/format/#abstract)
5. [https://github.com/design-tokens/community-group#companies-and-open-source-projects-represented-on-the-dtcg](https://github.com/design-tokens/community-group#companies-and-open-source-projects-represented-on-the-dtcg)
6. [https://github.com/design-tokens/community-group](https://github.com/design-tokens/community-group)
7. [https://design-tokens.github.io/community-group/format/#file-format](https://design-tokens.github.io/community-group/format/#file-format)
8. [https://design-tokens.github.io/community-group/format/#file-extensions](https://design-tokens.github.io/community-group/format/#file-extensions)
9. [https://design-tokens.github.io/community-group/format/#design-token-0](https://design-tokens.github.io/community-group/format/#design-token-0)
10. [https://design-tokens.github.io/community-group/format/#name-and-value](https://design-tokens.github.io/community-group/format/#name-and-value)
11. [https://design-tokens.github.io/community-group/format/#character-restrictions](https://design-tokens.github.io/community-group/format/#character-restrictions)
12. [https://design-tokens.github.io/community-group/format/#aliases-references](https://design-tokens.github.io/community-group/format/#aliases-references)
13. [https://design-tokens.github.io/community-group/format/#types](https://design-tokens.github.io/community-group/format/#types)
14. [https://design-tokens.github.io/community-group/format/#composite-types](https://design-tokens.github.io/community-group/format/#composite-types)
15. [https://design-tokens.github.io/community-group/format/#font-weight](https://design-tokens.github.io/community-group/format/#font-weight)
16. [https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
17. [https://cubic-bezier.com/](https://cubic-bezier.com/)
18. [https://github.com/design-tokens/community-group/pull/86#discussion_r780073692](https://github.com/design-tokens/community-group/pull/86#discussion_r780073692)
19. [https://github.com/design-tokens/community-group/issues/100](https://github.com/design-tokens/community-group/issues/100)
20. [https://design-tokens.github.io/community-group/format/#string-value](https://design-tokens.github.io/community-group/format/#string-value)
21. [https://design-tokens.github.io/community-group/format/#object-value](https://design-tokens.github.io/community-group/format/#object-value)
22. [https://amzn.github.io/style-dictionary/#/](https://amzn.github.io/style-dictionary/#/)
23. [https://amzn.github.io/style-dictionary/#/parsers?id=registerparser](https://amzn.github.io/style-dictionary/#/parsers?id=registerparser)
24. [https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms](https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms)
25. [https://amzn.github.io/style-dictionary/#/formats?id=custom-format-with-output-references](https://amzn.github.io/style-dictionary/#/formats?id=custom-format-with-output-references)
26. [https://github.com/amzn/style-dictionary/issues/643](https://github.com/amzn/style-dictionary/issues/643)
27. [https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item](https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item)
28. [https://amzn.github.io/style-dictionary/#/transforms?id=attributecti](https://amzn.github.io/style-dictionary/#/transforms?id=attributecti)
29. [https://amzn.github.io/style-dictionary/#/config?id=file](https://amzn.github.io/style-dictionary/#/config?id=file)
