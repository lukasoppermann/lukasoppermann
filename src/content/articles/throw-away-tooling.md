---
title: "Throw-away tooling"
url: "https://lukasoppermann.medium.com/throw-away-tooling-07c27dab19d4"
published: "2024-11-21"
excerpt: "Building lean, single-purpose tools effectively."
---

---

![Source of 3D illustration: OpenAI](https://cdn-images-1.medium.com/max/2400/1*JGEywSDp3MVkMy4ue9tPHA.jpeg)

## What is a throw-away tool

A throw-away tool is a custom solution developed to address a specific problem. Despite its name, these tools can see frequent and long-term use. The “throw-away” aspect refers not to the tool’s lifespan, but to its intended scope and audience.

These tools are built to solve the developer’s own problems. Because of this they focus on solving specific issues over broad applicability. They’re characterized by their focus on functionality rather than polish or scalability.

The key distinction of a throw-away tool lies in the understanding that it can be discarded once it’s no longer needed. There is no need to look out for other users or long-term maintenance. This allows for rapid development, free from the constraints of building for a wider audience.

## Why do we build tools?

There is a famous quote attributed to Theodore Levitt While¹

> People don’t want a quarter-inch drill bit; they want a quarter-inch hole.

To transfer this idea to our tools: We build tools to solve problems. This is it. The hope is that with a little work upfront, we can make a mundane, repetitive or laborious task easier.

Yet, once a tool is built, we often succumb to the desire to share this tool. Of this is not (just) because we think it may be useful to others. People crave positive feedback, and we want to gain recognition for our work.

There is nothing inherently wrong with these goals. But they push us from building a throw-away tool to building a polished tool.

## The problem with polished tools

Building polished tools and sharing them is great. If this is what you want, go for it.

However, if your intention is to quickly whip up something to solve a specific problem, polished tools are problematic. It adds a lot of things to your to-do list:

- finding a good, catchy name
- creating a logo
- coming up with a nice and intuitive UI
- testing and solving for edge cases and possible bugs
- making it customizable to allow for differences, e.g. a different output structure
- promoting it on social media
- maintaining the tool
- fixing bugs
- dealing with feedback
- delivering a high code quality

This list can feel overwhelming, especially for non-developers. As a result, you may decide against building something altogether. This leaves you with nothing. But it does not have to be scary. Just build a throw-away tool instead.

## Throw-away tools to the rescue

Solving the same problem, but with a throw-away tool removes a lot of the requirements.

Since you build it only for you or your team, you don’t need a logo, name or marketing.

You can define how the input and output must look. This removes a lot of complexity since you only build the happy path. No edge cases. Just throw an error if anything is wrong.

What this leaves you with is just writing the simplest code that solves the problem.

Also, as long as it works, nobody cares about the code quality. This means you can use AI to build this tool for you. So, if you are a designer or PM who does not know how to code, you can still build a throw-away tool. Awesome!

## Examples of throw-away tools

### Search and replace

If you want to transform data, the simplest way is often to use the search and replace functionality in a tool like *vscode*² that supports `regex`³.

```plaintext
<span class="pre--content">peterschmidt - peter@schmidt.org<br>mikethedev - m.derren@gmail.com<br>tkeys - tanya.dev@corp.com</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Plain Text<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

We can use the following `regex` to find the `username` and the `email` part:

```shell
<span class="pre--content">^(.*?)\s-\s(.*)</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Shell<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

This `regex` finds anything before the `-` (space dash space) and anything afterwards. It also stores this information in two variables.

In the replace box in *vscode* we can use the variables. We just add `$1` and `$2` to fill in the variables like this:

```javascript
<span class="pre--content">{<span class="hljs-attr">username</span>: <span class="hljs-string">"$1"</span>, <span class="hljs-attr">email</span>: <span class="hljs-string">"$2"</span>},</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JavaScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Leaving us with the desired result:

```javascript
<span class="pre--content">{<span class="hljs-attr">username</span>: <span class="hljs-string">"peterschmidt"</span>, <span class="hljs-attr">email</span>: <span class="hljs-string">"peter@schmidt.org"</span>},<br>{<span class="hljs-attr">username</span>: <span class="hljs-string">"mikethedev"</span>, <span class="hljs-attr">email</span>: <span class="hljs-string">"m.derren@gmail.com"</span>},<br>{<span class="hljs-attr">username</span>: <span class="hljs-string">"tkeys"</span>, <span class="hljs-attr">email</span>: <span class="hljs-string">"tanya.dev@corp.com"</span>},</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JavaScript<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Save the `regex` and the replace string in a text file somewhere and you have your *“tool”*.

This is how easy it is to get started. Just consider what you would have to do to turn this into something polished that you can share.

### Command line script

Sometimes, you need a quick solution for a project-specific task. Take upgrading design tokens, for instance. You might need to generate color variations with specific contrast ratios from a single `hex` value.

Instead of building a full-fledged tool, you can create a simple Node.js script. This approach lets you use `npm` packages and accept inputs when running the script.

Since you are building a throw-away tool, you can skip the bells and whistles like making it executable or adding a `— help` command. You don’t need to worry about handling every possible user error either.

Just run the script with `node` or `tsx` like this:

```bash
<span class="pre--content">npx tsx scripts/generateColors.ts <span class="hljs-comment">#0978DB</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

You know the argument is the `hex` value, and you can hardcode other parameters like steps and contrast values directly in the script, since it is just for your use case.

This type of quick, project-specific tool can often be created in under an hour. It’s perfect for those times when you need a custom solution without a UI.

### Figma plugins

When we think of Figma plugins, we often picture the polished plugins from the community. But did you know you can create and run plugins locally just for your own use?

These personal plugins don’t need to be approved by Figma. They also don’t need to be as polished as public plugin. You can keep them simple and focused on solving your specific problems.

A simple plugin may not even need a UI. You can run it using only parameters.

![The plugin uses the selection when choosing the “copy” action, otherwise it uses the center of the current viewport to paste squares with the hex codes from the clipboard.](https://cdn-images-1.medium.com/max/1600/1*XXzua0ndEQVh8x7Cndug-A.jpeg)

When creating a more complex tool, you can use a UI for only some features. The UI doesn’t need to be fancy — just functional. This approach allows you to quickly build a solution.

For example, I developed a Figma plugin to generate color scales. It has a simple UI with an input field for getting colors from a selection or pasting colors into Figma. For most other features, I rely on parameters instead of UI elements.

![Showing the UI of a Figma plugin and the actions available only via parameters.](https://cdn-images-1.medium.com/max/1600/1*z-_dy05AjFyxzGIGRKKjmw.jpeg)

### Web tools

A web tool requires a user interface, but when building it for personal use, you can keep it simple. Using default browser styling or a CSS frameworks like Tailwind is enough to make it functional and enjoyable to use. There’s no need to create an overly polished design.

Web tools are particularly useful for non-Figma related tasks that need interactivity. Something like reordering elements. They’re also great for providing instant previews. For instance, when editing images, seeing a live preview in the web tool is more convenient than having to open the edited image in a separate folder.

![Screenshot of my color scale tool, that is based on contrast.](https://cdn-images-1.medium.com/max/2400/1*Z7lSFAQmgjfMxqKJ-Ej7FQ.jpeg)

I created a web tool to generate color scales based on contrast ratios. This tool includes adjustable settings and various export options. I also added a visual preview, allowing me to see the color scales instantly to better fine-tune them until they’re just right.

Building this tool took a few hours, which is more time-consuming than a CLI script. However, it was a worthwhile investment considering how much time it saves compared to doing the same task manually in Figma. For me, the efficiency gained in the long run justifies the initial effort.

## Building tools in the age of AI

I’m cautious about relying on AI to build things from scratch. While I use Copilot⁴ at work and find it helpful as an assistant, AI can be hit-or-miss. If you don’t fully understand what you’re doing, this is a dangerous situation to be in.

While this is a major concern for projects you release publicly, it’s less critical for internal tools used by you and your team. For these tools, as long as you can verify that the output is correct, the underlying code becomes less important.

This opens up the world of throw-away tools to people who haven’t traditionally built tools, like designers or PMs. It’s an exciting development, and I’m keen to explore how AI can help me build tools more quickly in the future.

## Summary

Tools are simply aids to help us complete tasks. What truly matters is the end result, not the tool itself. In our world of plugin ecosystems and open-source overload, we might feel pressured to publish everything we create. But this isn’t necessary.

There’s great value in small, simple tools that are only meant for you or your immediate team. They solve one specific problem and thus make your work easier — that’s their entire purpose.

Thanks to AI, you can now create such tools even without extensive coding skills. For these “throw-away” tools, code quality isn’t crucial. The only thing that matters is whether the tool works and serves its intended purpose. This approach to tool-building can significantly improve your work. Try it.

## References

1. [https://en.wikipedia.org/wiki/Theodore_Levitt](https://en.wikipedia.org/wiki/Theodore_Levitt)
2. [https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace)
3. [https://en.wikipedia.org/wiki/Regular_expression](https://en.wikipedia.org/wiki/Regular_expression)
4. [https://code.visualstudio.com/docs/copilot/overview#:~:text=With%20GitHub%20Copilot%20in%20VS,comments%2C%20or%20generate%20unit%20tests](https://code.visualstudio.com/docs/copilot/overview#:~:text=With%20GitHub%20Copilot%20in%20VS,comments%2C%20or%20generate%20unit%20tests).
