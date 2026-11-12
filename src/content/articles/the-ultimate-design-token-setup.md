---
title: "The ultimate Design Token setup"
url: "https://medium.com/user-experience-design-1/the-ultimate-design-token-setup-cdf50dc841c8"
published: "2024-09-25"
excerpt: "Learn how to best set up design tokens to be a reliable tool for designers and developers in your company."
---

---

Before we dive into this, let me tell you that there is no one right or perfect way to do design tokens. If what you are doing works for you — great. No need to change it. However, I do feel that one can learn from others and there are always things to improve.

![](https://cdn-images-1.medium.com/max/2400/1*hvX92Rptkd39EMm8GqU6Tg.jpeg)

## Goal

Every action has a cost. So, we need to think about the goals for our design token system. Which aspects do we want to optimize for? And what is not so important for us.

### **Resilience**

Design tokens are a core part of your design system and product building toolkit. Because of this a simple mistake can bring down your entire product suit or at least break the products. This is why it is so important to make your tokens as resilient as possible. This can be by using versioning or implementing rigorous testing.

### **Future proof**

The tooling landscape changes constantly. A few years ago, most of us were still using Sketch. You cannot see into the future, but you can try to rely as little on specific tools as possible. This way, you will have a much easier time adjusting, if a tool in your tool chain gets replaced.

### **Flexibility**

Companies grow and change and so do the requirements. Maybe you need to support iOS in the future or React gets replaced by Vue at your company. Design tokens must be set up in a technology agnostic manner. This allows you to adjust to those changes. Changes in output should never be a big change for your design tokens.

### **Ease of use**

Consuming design tokens must be easy, otherwise people don’t do it. Like installing a simple package or enabling a Figma library. Nothing more should be needed to start using design tokens.

### **Maintainability**

Design tokens rarely undergo large changes. But you need to be able to update individual tokens or add new ones with ease. Those changes, as well as keeping dependencies up to date must be simple and straight forward. Otherwise, you risk design tokens becoming a legacy project that nobody dares to touch.

Some of those aspects may be more important to you than others. For example, if your design system is very small, future proofing may not be a main concern. This is fine, it is just important to be aware of the trade-offs you are making.

## Source of truth

There is some debate about the idea of a single source of truth¹ ². No matter if you agree or disagree, it makes sense to have a single source of truth for your design tokens.

This means, if you want to know which design tokens exist and what the latest state is, there is one place to go. I’d argue that this place should NOT be Figma, but a git repository. This repository must be in the cloud or on a server to be accessible for all.

### Why use a git repository?

One huge benefit of using a git repository is that it forces you to version your stuff.

Git records every change you make. In git it takes quite some effort to make a change that does not show up in the version history.

This is great for multiple reasons:

**Resilience**

- If you discover an error, you can quickly revert to a previous state or use the recorded history to fix your error.
- Even if you don’t explicitly tag versions, consumers can use a hash (change) to keep a specific state of your tokens. This means updates don’t get installed automatically avoiding potential breaking of their code.

**Ease of use**

- If you do tag versions, as you should, consumers can install a specific version, which is easier than using a hash. If a new version breaks their code, they can downgrade to the latest working version.
- You can improve this by using Semantic Versioning³ for your releases. This allows folks to update automatically if you release a bugfix. However, breaking changes will not be installed.

**Maintainability**

- Git allows you to create branches (similar to a live copy) of the repo and work on changes. Once you are happy you merge those changes into the original token project. If you mess up (which happens to me a lot) you can just delete the branch without effecting your main code.
- Using *pull requests* allows others on your team to review changes made in a branch before they get merged. This way they can make sure the changes don’t break anything.
- On GitHub pull requests can also triggers actions. An action can test the contrasts of your token changes or show everything that this change affects. This makes it very easy to catch bugs before they are in production.
- If you use a UI, like GitHub, you can discuss changes using comments in a *pull request.* It also makes it easy to see the difference between the main code and your branch.

**One place for source and transformation**

Another great reason for keeping your source of truth in git, is that everything is in one place. In one repo you can store source token files and the transformation logic that creates consumable outputs.

While design tokens are platform agnostic in their initial state, they need to be transformed into platform dependent formats like `CSS`.

The transformations you have depend on the tokens you want to transform. So, tokens and transformation are closely related. Furthermore, design tokens are useless for consumers if they are not transformed. This is why I think it makes sense to keep this all in one repository.

## Ownership

### Who owns the design tokens

This is a complicated question, as there are different parts to design tokens.

For example, let’s look at the `color-brand` design token. The color value is defined by the brand team. But the token lives in the design token repo within the design system workspace and is managed by you.

The value for the token `color-link` may have been defined by product design. But you adjusted the specific blue to make sure it meets accessibility requirements.

Ownership must be decided in every organization individually, there is no general solution. My recommendation is that brand owns the general design direction but must work together with the design system designers to finalized the values. This is important as many brand teams forget about aspects like accessibility.

The involvement of product design depends on your company’s design process. If product design is expected to come up with new design solutions including new colors, etc. there must be some collaboration. E.g. once product design has a concept for a component with a new color, they must collaborate with system design. Together they can figure out how this can be represented as design tokens.

Finally, I’d say that the design system team must have ownership of the source files for the tokens. This goes hand in hand with the responsibility of maintaining those files. You decide how the files are structured, edited and stored.

### Who owns the repository and transformation pipeline

The other big part is the design token repository with the transformation logic. There are two groups of stakeholders for this: the design system team and the consumers.

Ideally, I’d recommend that this part is owned by the design system teams. This makes sense because the transformation logic and token source files rely on each other. I also believe that the design token team should deliver transformed design tokens.

This means consumers will import a package with something like CSS variables. They shouldn’t need to care or even know that there is a transformation process involved.

It seems to be an easy answer, the design system team owns the repo right? Well, it depends. This also means somebody in the team needs to know how to maintain this transformation pipeline. While it isn’t rocket science, it’s certainly not easy to do without programming knowledge.

If nobody in the team has a code editor installed on their machine, you probably need to get support. And this reliance on outside expertise makes it hard to own and maintain the transformation pipeline.

To truly own the transformation one team member must learn how to build it and if no developer is on the team, I suggest a designer does it.

## Source files

The source files are the most important part of your design token repository. This is where your tokens are defined.

![A json file with a simple design token definition](https://cdn-images-1.medium.com/max/1600/1*wgr5ECM7HgsFuuijwDz2Wg.png)

### File format

Traditionally both YAML⁴ and JSON⁵ have been used as source file formats to define design tokens. But the W3C design token standard now defines JSON⁶ as the only valid file format.

While this does not include supersets like JSONC⁷ or JSON5⁸, converting from them back to JSON is relatively easy. So you should be alright if your source files are only used internally.

Some tools, like Style Dictionary support JSON5⁹ out of the box.

### W3C design token format

The W3C is the main international standards org for the web¹⁰. The design token standard is still in draft state, but it is the best we have.

**Defining a standard design token**

A design token MUST consists of at least a name and a value. All standardized properties are prefixed with a `$`. This avoids naming collisions and allows tools to differentiate between groups, names and properties¹¹.

![](https://cdn-images-1.medium.com/max/1600/1*BEvGQlblsWA0F11dm8crMw.png)

Even though the `$type` property is optional, many tools don’t support tokens without it very well. So, a minimal token definition is more likely to be the following.

![](https://cdn-images-1.medium.com/max/1600/1*uyeL8ROYJU2xNTe0GrMrig.png)

At the moment there are two more standardized properties: `$description `and `$extensions`.

To find out more about groups and available token types, refer to the [standards document](https://design-tokens.github.io/community-group/format/#types)¹².

**Why should you use the w3c format?**

If your source tokens are only used internally, it does not really matter how you define them. However, a huge benefit of using a standard is that a lot of tooling gets built around it.

The w3c standard is still in draft state and will remain so for the near future. While tools are slow to adopt it, you can definitely see that it is accepted in the industry.

Style dictionary adds support for w3c design tokens with the latest release, v4¹³. Many other projects are adding support as well. Nearly all tools that were created after the standard was announced use it.

Many large companies like Adobe and Figma are involved in the standard, and it stands to reason that they will use it once published. So, by using the standard you make your design tokens future proof.

From personal experience I can say that the standard makes sense and is very easy to work with.

## Creating a design token file

### **Export from Figma**

I don’t recommend using Figma as your source of truth¹⁴. But it can make sense to initially export your tokens from Figma as a starting point, if you have all tokens in Figma.

At the moment there is no native way to export tokens form Figma, so you need to use plugins. The two options I know about are Token Studio¹⁵ (*free version)* or my own plugin Design Tokens¹⁶ for Figma* (only partially maintained)*.

If you export design tokens from Figma, your output will probably not match the w3c standard. You can use the [design token validator](https://animaapp.github.io/design-token-validator-site/)¹⁷ to check the exported json. Often all it takes is to rename `value`and `type` to `$value `and `$type`. This is a simple search an replace operation in `vscode` or your text editor of choice.

### Using a dedicated tool

There are a lot of tools that are directly built to create a design token system or do it as part of their offering.

When choosing one of those tools you must be very careful and check if you can actually export a JSON file. These tools profit from making it hard to switch, so not all of them offer this capability. As you may have guessed, I am not a big fan of those tools. The way I see it, design tokens take a lot of work initially. However, once established, maintaining them requires only little, infrequent changes. This makes tooling to manage your design tokens not necessary.

If you already use tools like zeroheight¹⁸, supernova¹⁹ or Zeplin²⁰ you can make use of their export features. But not all tools offer this.

### **Manually creating your json files**

My favourite and arguably the least convenient way to generate json token files is by hand in a code editor.

Yes, it is a lot of work. Yes, the output may end up very similar. But you don’t have to pay for a tool and you “*test*” your work while you do it. No need to verify it afterwards, like you have to with an export.

I like that you have full control. You know what is going on in your files, and you get a very good understanding of how design tokens actually work.

Additionally you can add meta data to your tokens. For example marking a token as deprecated or adding a description that will show up as a code comment.

If you decide to update your tokens in a code editor, you really commit to the idea that the code is the source of truth and not Figma.

But if I were to start with a system that already exists in Figma, I would probably export it once as a starting point. And afterwards move to doing manual changes.

## Design tokens vs. design system

Another decision you need to make is if you create a separate design token package or if they are part of the design system repository.

Again, there is no right answer here. But I strongly favour a separate package and repository.

### Why a separate package?

The main advantage of separating design tokens from the design system is that you can release them independently. If you need to push out a fix you don’t have to wait for the design system to release. And you can decide on a release cadence that works well for design tokens.

Additionally, it is easy to integrate into separate packages. E.g. if there is a react and a vue package or maybe one for iOS and another for Android, where would you put tokens?

It does not make sense for all platforms to import e.g. the react package just because it has the tokens. But you shouldn’t have the tokens in every package either. So having a package that every platform can import is the best solution.

If there are concerns about the size of a shared package, you can generate multiple packages from one repository. E.g. one only with the output for iOS, one for Android and one for the web.

This also helps to keep a mental separation. Your design tokens shouldn’t align closely to one specific implementation. They should be platform agnostic.

Lastly, there are legit use cases for only using design tokens without the design system. I worked at multiple companies that used legacy systems or WordPress. React components aren’t always easy to integrate into those environments. But adding design tokens via a CSS file was never a problem. This is more common than you might think.

### Why a separate repository?

If you subscribe to the idea of separating the package you have to make another choice. Create separate repositories or use a mono-repo with multiple packages.

I recommend NOT including design tokens into a mono-repo for a few reasons.

To begin with, your design token package is much simpler than a component package. Much of the tooling in a component repo is just not needed for design tokens and adds unneeded complexity. This is especially important since designers will create PRs in this repo. Having less development experience, a complex setup can be an insurmountable barrier.

Additionally, you have to be careful to separate tests so that you don’t have to run the entire test suit every time. if all you want is to check your tokens. Similarly, you need to make sure that Actions unrelated to tokens don’t run on a design token PR. While this is possible, it adds quite some complexity. The question is which benefit a mono-repo brings that is worth this cost.

Having a small, simple repo makes it easier for less experienced folks to maintain a package or create a PR. In my opinion, this is the biggest benefit of a separate design token repository.

**Disadvantages of a separate repository for design tokens.**

There is one downside to consider when separating design tokens from components. If you create a new component that needs component tokens, you need two PRs. One for the component and one to the design token repository to add the component tokens.

Personally, I feel this is fine, considering the benefits that separating your tokens brings.

## Transformation

Design tokens are only useful if they can be consumed. As mentioned before the work of transforming design tokens should be done by the design token maintainer. Not by the consumer.

### Supported formats

Like with all projects, anything you add comes with a maintenance cost. This is why you shouldn’t add all output formats that are available but only the ones that you need. If multiple formats are used at your company, try to agree on one that works for all.

CSS variables are a great candidate. They work with any web framework as well as with plain HTML and CSS.

If you have a product that is available on the web, iOS and Android a typical output would be:

- CSS variables for any web client
- swift files for iOS
- XML or Kotlin files for Android
- JSON for your docs

These four formats will require a lot of custom transforms and formats. Anything you add on top just means you have to spend more time maintaining for little to no return.

### Automatic transformation

The ideal setup includes a GitHub actions²¹ or a Gitlab pipeline²² for the transformation. Using an action is great because it means the transformed output isn’t in the version control. Instead, once a PR is merged, an action transforms the tokens and publishes it to NPM²³ or another package registry. In this section we will look at how that works.

**Setup Style Dictionary**

I will not go through the general setup process for Style Dictionary²⁴. Once you have it set up to your liking, add a script to run it. I am using `npm` so I add a build script to my `package.json`.

![NPM script in package.json to run the buildTokens.ts file](https://cdn-images-1.medium.com/max/1600/1*fGH_270-AlxPlOaUFUhjQg.png)

If you deliver your tokens to different platforms you may need to use different package services. In this case it may make sense to separate the build processes to only build what is needed.

![Separate build scripts for web, iOS and Android in the package.json](https://cdn-images-1.medium.com/max/1600/1*kOmhyj120UtH_6PQtFHYcQ.png)

This allows you to create an action for each platform. In the action you only transform the tokens to the required output formats. Afterwards you deliver them to the package registry for this platform.

### **Create an action**

Since I am using GitHub, I will explain how to set up an action for GitHub. However, the process is similar if you are using GitLab.

You create a GitHub action²¹ by adding a YAML⁴ file to the `.github/workflows/` directory in your repository. In a design token only repository I would name it `release.yml`.

Once created add the following code to your `.github/workflows/release.yml` file. Make sure to pay attention to the spacing and indentation, as this is important in a YAML file.

This example requires you to manually run `npm version patch|minor|major` to update the package version. Alternatively, you could implement changesets²⁵ to automate this.

![Code for the github action to release tokens automatically](https://cdn-images-1.medium.com/max/1600/1*VnxMtmJC-OsAMxPNZ1HvhA.png)

An action like this means your tokens will automatically be transformed. Since you don’t do this manually, you can’t forget it. Your consumers will always have the latest changes in the platform specific output files.

## How to keep tokens in design and code in sync

### Figma first

One approach is to make sure every change is done in Figma and exported to code.

This means if you want to adjust a design token you change it in Figma first. Afterwards you export the JSON file with a tool like token studio. This exported file must now be added to the GitHub repository via a PR.

Once merged packages for all other consumers will be generated.

While this is an easy approach it has a few downsides:

**Changes can’t be done via a PR outside of Figma
**If somebody creates a PR on your repo without having changed the token in Figma first, you get out of sync. But updating Figma first is hard to enforce. You probably need to make sure PRs are approved by a designer who checks that the change was in Figma first.

**Release coordination
**This may not be a problem for you, but you need to make sure to publish the Figma changes and release the new package version at the same time. Otherwise, designers may use tokens that are not available to the developers yet.

**Figma is neither the source of truth nor a real consumer
**In this scenario Figma is in a weird position. While changes are made in Figma first, the real source of truth is still your git repo. But Figma is not integrated into the token flow either, as changes can never move from code to Figma.

### Code first

In the code first approach your GitHub repo is the source of truth. This is where changes happen. **All** consumers use transformed outputs from this repo.

To make a change you must create a PR to this repo. It does not matter if the JSON change is created using Figma, a code editor or directly via the GitHub UI. This is a main benefit of this approach.

Once merged the packages will be generated and Figma as a consumer can import the changes. There are different ways to do this. You can build a web service that pushes the changes into Figma using the API²⁶. Or you use something like token studio to import the new tokens. You can of course also build your own Plugin to import tokens.

I prefer the code first approach. In it Figma is just another consumer and has no special role in the process. It is very clean and robust with little that can go wrong. But it still comes with its own downside:

**Changes must be imported into Figma
**In the code first approach, you need to bring changes into Figma manually if you don’t use the API. While this is a quick process, it is easy to forget. This is especially true if someone else makes the changes to the repository.

The plugin I created at my job (internal) to import tokens stores the latest installed version in Figma. Every time you open it, it checks against the latest package on NPM. This way it shows you if an update is available. While this is not fool proof either, since you still need to run the plugin, at least it tells you if there is an update or not.

## Using tokens in code

How developers import your tokens into their project depends a bit on your org and the platform they use. But the general concept should be the same no matter what.

Above we automatically transformed our tokens and created an NPM package. If you deliver tokens to Android and iOS you need to use different package providers. If your company blocks NPM you will also need to use another package solution.

Whatever you do, the result should be a package that includes the ready to use transformed design tokens.

This means once a developer installs the package, they have access to all design tokens.

For example, if you provide tokens as CSS variables via an NPM package, you may import them into a CSS file like this:

![The actual path depends on where your importing CSS file is in relation to the node_modules folder](https://cdn-images-1.medium.com/max/1600/1*3CNCFYpE9hbfYtD0X3u4lA.png)

## Enhancements

With the basic setup done you can now start to add to it. Since we have our source of truth in code, we can run scripts on it.

Using GitHub or a similar tool, you can disable direct changes of the main branch. This means everyone who wants to change anything must create a PR. Now you can set up your repo so that a PR can only be merged into the main branch once it passes all requirements. This is what we will use to bring some more security and guardrails to our token setup.

![GitHub branch protection settings](https://cdn-images-1.medium.com/max/2400/1*9rtO2SFNEKM0aLXUfj6ZUQ.jpeg)

### 4 eyes principle

A common practice is requiring a second person to **approve** a PR. This must be a collaborator on the project.

This is an important technique to guarantee our releases never break production. Anybody at your org should be allowed to create a PR to the design token repository. We want contributions. But even developers may not quite realize which change must be marked as major and which one as minor. And there are other “rules” in design tokens that are hard to enforce by code. This is why requiring approval from an expert is so important.

To enable this, check the **“Require approvals”** option.

### Unit tests

Creating unit tests (testing small pieces of code in isolation) is standard for code projects. Unit tests allow you to easily enhance your code without breaking expected behavior. The advantage of unit tests is that they are quick and easy to write and to run.

Our design tokens are effectively a code project, so we can create unit tests as well. While we don’t test the tokens, we can test the transformation functionality. This way we know that with an expected input we get the expected output.

For example, you could create a test for a hex to rgba transformer. In this test you can verify that the transformer works with `hex3`, `hex4`, `hex6` and `hex8`. You can also verify that non-hex values are ignored.

I recommend creating unit tests for all the custom code you add to Style Dictionary. This includes transforms, formats, filters, and parsers.

Unit tests can be run locally during development. However, by creating a GitHub Action in the `.github/workflows` folder you can also run the unit tests on every PR. I recommend this to avoid breaking the transformation logic accidentally.

Unit tests are also great for folks who want to understand how a specific piece of code works. If you need help with unit testing, any developer in your org should be able to help you.

### Lint token files

Another handy thing you can do to avoid hunting for bugs is to lint your JSON. For this I can recommend Zod²⁷. With Zod you can make sure that users don’t add incorrect properties to your tokens. It also helps find typos, like `colour` vs. `color`.

It takes a bit to set up, but once done, you can run it on every PR, and it can save you digging through files for hours.

The only downside is that the error messages are sometimes very bad, but you will learn how to deal with them.

![A schema for border design tokens written in zod.](https://cdn-images-1.medium.com/max/2400/1*Bv_qEqt4FkSmDCh8tl8fRQ.png)

### Validate build

Additionally, you should make sure that building the tokens works. If you diff the output in the next step there is no need to test the build separately. However, if you don’t have time to set up a diff script, you can run your normal build script in an action. This way you at least know when there are errors during build.

Keep in mind though, that it could still output an empty or broken file. This step is by no means foolproof.

### Diffing the output

While comparing the diff between two branches in an action is a bit complex, it is well worth the effort. It has saved us from merging broken PRs more than once.

The concept is pretty straight forward: You need to create a GitHub action that builds your design tokens on main and on the PR branch. Afterwards you compare the output. The steps needed in your action are the following:

1. Checkout main branch and run the build script

2. Checkout the PR branch and run the build script

3. Run `diff -u` on all files from one platform, I would recommend running it on your CSS files

4. Post the diffs in the PR as a comment

5. If no diff exists, remove the comment

You can generate an output like this, which allows you to quickly see what changes.

![A comment showing a diff in one line](https://cdn-images-1.medium.com/max/2400/1*RpuZCFCH4jAShF-nIFHq8g@2x.png)

### Check contrasts

Another very important safe guard is to test the [WCAG contrast](https://medium.com/user-experience-design-1/getting-the-wcag-color-contrast-right-799508389679)²⁸ of your design tokens. Specifically, between predefined token pairs. For example, `text-default` needs a `4.5:1` contrast against `canvas-default` as they are intended to be used together.

Your test should cover ALL of the pairs that can be used together. I’d recommend creating a script that uses a transformed JSON output from Style Dictionary. After importing this file you can find and compare the tokens using a library, like color2k²⁹. You need to do this for all color modes that have to pass those contrasts. Be careful with semi-transparent colors. You will need to `blend` those with a background color to get an adequate contrast calculation.

Once the script is working, you should also run it as an action for every PR.

## Summary

The ultimate design token setup uses code as the source of truth. This allows for maximum flexibility and versioning.

It is not always easy to decide who owns the design tokens and the transformation layer. But the design system team should definitely have at least partial ownership.

I recommend using industry standards when it comes to file format and transformation. This makes it easy to use most third-party tools and you are somewhat future proof.

To enhance your setup, add some actions that run on every PR. You can automatically test design token contrast, highlighting changes in the output and making sure the tokens follow a set schema.

In the end, design tokens are a tool. You need to make sure they are always available and never break consumers code.

---

## Resources

1. [https://beauulrey.medium.com/single-source-of-truth-is-a-lie-39eb36d5e302](https://beauulrey.medium.com/single-source-of-truth-is-a-lie-39eb36d5e302)

2. [https://uxdesign.cc/a-single-source-of-truth-and-other-design-system-lies-e5f7666da3f2](https://uxdesign.cc/a-single-source-of-truth-and-other-design-system-lies-e5f7666da3f2)

3. [https://semver.org/](https://semver.org/)

4. [https://yaml.org/](https://yaml.org/)

5. [https://www.json.org/json-en.html](https://www.json.org/json-en.html)

6. [https://design-tokens.github.io/community-group/format/#file-format](https://design-tokens.github.io/community-group/format/#file-format)

7. [https://github.com/komkom/jsonc](https://github.com/komkom/jsonc)

8. [https://json5.org/](https://json5.org/)

9. [https://styledictionary.com/info/tokens/#defining-design-tokens](https://styledictionary.com/info/tokens/#defining-design-tokens)

10. [https://en.wikipedia.org/wiki/World_Wide_Web_Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)

11. [https://design-tokens.github.io/community-group/format/#character-restrictions](https://design-tokens.github.io/community-group/format/#character-restrictions)

12. [https://design-tokens.github.io/community-group/format/#types](https://design-tokens.github.io/community-group/format/#types)

13. [https://github.com/amzn/style-dictionary/releases/tag/v4.0.0](https://github.com/amzn/style-dictionary/releases/tag/v4.0.0)

14. [https://github.com/lukasoppermann/design-tokens/discussions/29](https://github.com/lukasoppermann/design-tokens/discussions/29)

15. [https://tokens.studio/](https://tokens.studio/)

16. [https://www.figma.com/community/plugin/888356646278934516/design-tokens](https://www.figma.com/community/plugin/888356646278934516/design-tokens)

17. [https://animaapp.github.io/design-token-validator-site/](https://animaapp.github.io/design-token-validator-site/)

18. [https://zeroheight.com/help/article/exporting-design-tokens/](https://zeroheight.com/help/article/exporting-design-tokens/)

19. [https://github.com/Supernova-Studio/exporter-style-dictionary](https://github.com/Supernova-Studio/exporter-style-dictionary)

20. [https://support.zeplin.io/en/articles/5160298-exporting-design-tokens](https://support.zeplin.io/en/articles/5160298-exporting-design-tokens)

21. [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

22. [https://docs.gitlab.com/ee/ci/pipelines/](https://docs.gitlab.com/ee/ci/pipelines/)

23. [https://www.npmjs.com/](https://www.npmjs.com/)

24. [https://styledictionary.com/](https://styledictionary.com/)

25. [https://github.com/changesets/changesets](https://github.com/changesets/changesets)

26. [https://figma.com/developers/api#post-variables-endpoint](https://figma.com/developers/api#post-variables-endpoint)

27. [https://github.com/colinhacks/zod](https://github.com/colinhacks/zod)

28. [https://medium.com/user-experience-design-1/getting-the-wcag-color-contrast-right-799508389679](https://medium.com/user-experience-design-1/getting-the-wcag-color-contrast-right-799508389679)

29. [https://color2k.com/#get-contrast](https://color2k.com/#get-contrast)
