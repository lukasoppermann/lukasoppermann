---
title: "How to start building a design system"
url: "https://medium.com/user-experience-design-1/how-to-start-building-a-design-system-445f6239be3e"
published: "2023-11-06"
excerpt: "A step-by-step guide to bring a design system into your company without losing your mind."
---

![Cover showing the title and a crane lifting a container](https://cdn-images-1.medium.com/max/2400/1*zg1-lY8CwARl-p_5yu1DEQ.jpeg)

A design system can solve your problems with quality, speed, maintainability, and more. It is seen as a drop-in solution that everyone should have. But is this actually true?

Should you start building a design system for your company? And if so, how do you start?

This article provides steps to evaluate if you need a design system. It also shares my recommended steps to start building your design system.

## Benefits of design Systems

Design systems are great at solving some specific problems¹. A design system can be a great solution if you encounter those problems at your company. If you don’t experience any of those issues, a design system will probably not help much.

But maybe you’re so used to certain problems that you don’t notice them anymore. So, investigate carefully.

I will outline some of the biggest challenges a design system can help with below.

![Abstract illustration of consistency](https://cdn-images-1.medium.com/max/2400/1*yp32RygxQmjeou6JhHA8Dg.jpeg)

### Ensuring consistency and quality while scaling

A design system is a great tool to improve consistency² through components, tokens, and patterns.

Keeping everything in sync is easy when you only have one app, and the team is so small. One person can sign off everything and assure high product quality. But when the team and the number of products grow this gets harder and the sign-off becomes a bottleneck.

A design system solves this by providing components, colors, text styles, and more. If everyone uses the design system, you only need to make sure it is consistent and of high quality. Instead of signing off every product you focus on the design system.

![Abstract illustration of how devs working on different components and sharing increase speed.](https://cdn-images-1.medium.com/max/2400/1*yTS02-PPkfZh75R0hJGhig.jpeg)

### Improving speed with synergy

In product design and development, we solve the same things over and over again. How does a button look like and work, an input, a dropdown? And how does it have to behave when interacted with using the keyboard only or a screen reader?

People in different teams across the company solve the same thing multiple times.

This takes time. It stands to reason that solving everything only once and sharing it will speed up the work.

This is the major way a design system speeds up your development. You are building a box full of Lego pieces that solve a specific need and can be quickly assembled.

### Implementing accessibility requirements

We should all build accessible products. And larger organizations are even required by law to do so.

Making components accessible both in design and code can be very hard. Not all projects have designers and developers who are knowledgeable about accessibility.

However, when the design system team builds or checks most components, a few experts can ensure accessibility.

Now folks from the product teams just use components and design tokens³ provided by the design system. This way they can build accessible products without having to know about the details.

![Fixing a bug or a11y issue in one place propagates to every project using the design system.](https://cdn-images-1.medium.com/max/2400/1*YyBWgmWAw2SAzONNklV_3Q.jpeg)

### Simplifying maintainability

The last big aspect I want to discuss is maintainability. When a framework like react gets a major update it can mean a lot of work to update all products. The same is true when the brand team changes what colors and typefaces should be used.

In those situations, you have two options. You either stop all product development efforts to work on updating frameworks or design. Or you leave some products / parts of some products outdated and focus on new features.

Both options are bad, and this is where a design system comes in. Most of the work updating the framework or design can be done in one place. If the design system has implemented the new design or framework consumers just get it. By loading the latest release of the design system every component, they use gets updated. This drastically reduces the effort, especially since these scales with the number of projects. Instead of having to update every project you only update one design system. In reality it is a bit more complicated, but the general idea is true.

## Do you need a design system?

Having understood the main benefits of a design system, the question remains, do **YOU** need a design system at your company?

### Required effort

If the benefits can help your company, you need to understand the effort required to build and maintain a design system. This allows you to evaluate if it is worth the effort.

First you have to understand that building a design system is a lot of work. You have to create, manage and transform⁴ design tokens⁵ and assure colors⁶, styles⁷, assets⁸ and components⁹ are accessible. You need to build components¹⁰ and document everything¹¹. And most importantly you will need to spend a lot of time [managing stakeholders](https://medium.com/user-experience-design-1/stakeholder-management-for-design-systems-3841edfdb136)¹².

While it is possible to take some shortcuts, it will nevertheless be a lot of work. Be prepared for that.

### Identify pain points

Start identifying issues in the product development workflow before building the first components. Then evaluate if a design system can solve them.

This exercise has an added benefit: it helps you prioritize which issues to tackle first. This is great, should you decide that a design system can solve your problems.

To identify these issues, host a workshop with folks from different teams and professions. Inviting colleagues and managers from important departments will help the project. Some of the most important benefits are:

**Different perspectives**
The workshop brings together designers, developers, project managers, strategists, and finance experts. They should come from different project teams in your organization. They will have a multitude of ideas, requirements, and problems. It is unlikely that you could come up with all of them alone.

Furthermore, every person prioritizes things differently depending on their job and background. While a great user experience may be your focus, a PM may be worried about costs or time to market. In contrast developers often worry about maintaining the software they write over time.

After considering all opinions you can discuss priorities. With a diverse group, you should arrive at a well-rounded decision. You can use this to answer tough questions about why certain decisions were made.

**Visibility of your efforts**
A design system needs people who use it, beta testers, early adopters, champions. And it needs to be known in the company that a design system exists. Involving many different people in the beginning will help you spread the word early.

**Building buy-in and good-will**
People don’t like new things and they don’t like it if things change. That is, if they are not the ones who create the change. Involving everyone from the beginning means teams will feel heard. People can share concerns early and find solutions for specific problems together.

It also shows you as a person who listens to the opinions of the users and who builds a system for everyone. Getting buy-in¹² is the most important job when building a design system, so it is good to start early.

### Planning the evaluation workshop

**Participants**
As mentioned above it is important to invite a diverse group of people. Diverse across three axes:

**Profession:**

- People like designers and developers how work with the design system every day
- People like PMs and POs who work with teams that use the design system
- People from brand, accessibility, finance, strategy, etc. who are impacted indirectly by a design system

**Seniority:**

- Managers, like lead developers or a head of design. They look at this from a higher elevation and consider the bigger picture for the company.
- Junior and senior folks who do the actual work of building products every day. They will bring in the hands on, practical opinion.

**Projects:**

- Involve people from different projects across your entire organization. Don’t just ask people from the one innovative project at your company. This will give you a well-rounded perspective.

**Agenda**
You can add to the agenda however you see fit. But the main goal should be that everyone knows you / the design system team. Furthermore, people should understand what a design system is and its benefits.

You also need to find out the main problems your company is facing when developing products. After prioritizing them you can explore which of them a design system can solve.

Below I outlined an agenda that I have had good experience with.

**Welcome & workshop intro:**

- Start with a brief explanation of what a design system is and what benefit it brings
- Tell everyone why they are here
- Let them know how you will involve them after this workshop. And how they can reach out to you if they have feedback or want to be more involved.

**Short introductions:**

- Everyone should introduce themselves: Name, Job & Project
- And say how they think a design system could benefit them / their work (if they have no idea, it’s okay to skip)

**Exercise 1: Collect issues:**

![Illustration of post-its](https://cdn-images-1.medium.com/max/1600/1*Ky8QUn7tcE44LO6chXLNJQ.jpeg)

- create groups with people from different teams and different professions.
- each group uses big cards / big post-its to collect as many issues as possible that come up during product related work.

**Exercise 2: Connect issues**

![Illustration of post-its with small post-its attached](https://cdn-images-1.medium.com/max/1600/1*P_-S_bgDOlE5oTGS5aRhEA.jpeg)

- Afterwards let them the add small post-its with the aspect of a design system that may help with the issue to the cards (if any)
- It’s probably best to provide the parts of a design system with a short description as big cards on the wall. Some typical ones are:
- design tokens
- components
- shared styles
- documentation
- style guide & patterns
- accessibility guidelines
- automatic dark mode

**Coffee break:**

- You and your team members should cluster the issues from all groups together including the related design system aspects.
- One card for every unique issue including all design system related aspects
- Create a big matrix to prioritize the issues

![Create this matrix and add all the issues that the teams have captured on post-its.](https://cdn-images-1.medium.com/max/1600/1*LvZjBgjr0bo591GaUeyV5g.jpeg)

**Dot voting:**

- Everyone gets the same number of dots (~3–4 depending on the number of issues you have). People stick them onto the cards they find most important to be resolved.
- Afterwards everyone says where they put their dots and why. This is great to gain insight into everyone’s unique perspective.

![Dot voting is a great method as it is interactive and allows everyone to have an opinion in a very short amount of time.](https://cdn-images-1.medium.com/max/1600/1*RzxGxg7Gy0WWoN5Yy6TBiA.jpeg)

**Matrix:**

- Now take the cards (starting with the most voted one) and suggest a position in the matrix. If anyone disagrees, they can speak up and you discuss the position in the group.

**Outro**

- Thank everyone for the participation
- Talk about next step that you will take
- Talk about how you will involve them (e.g. next workshop, email status, etc.)
- Talk about optional involvement and how they should reach out to you to be more involved

**Duration**
The duration varies with the number of participants. Try to keep it so that you only need a short coffee break and don’t block an entire day.

However, you need to plan enough time for the exercises and make sure everyone has some time to talk.

With more people you will need to make sure to timebox everything and keep up the pace.

## Start building

Assuming your own research and a successful kick-off workshop resulted in issues a design system can solve, what comes next?

Deciding which technologies to use is a fundamental decision, don’t take it lightly.

I recommend a set of workshops with some developers from different projects. Both developers of lead / management level as well as those working on code every day.

The goal is to decide on a strategy based on what technologies are in use and where you want to go in the future.

Make sure to consider are large legacy projects that will stick around for some years. You probably need to support them. But don’t let them dictate the entirety of your technology choice.

Think about how new projects will be set up and what requirements they have.

You want to work towards the future but make it usable for legacy projects as well. For example, you could decide to move to react as new projects in your org are react based. But you can make design tokens available in a format that can be used by your legacy Angular projects. As Angular are slowly fading out, components will only be built in react.

It is hard to support multiple platforms from the start, so you need to decide what to focus on.

If consistency is most important, focus on design tokens first and deliver them to all platforms (e.g. web, iOS and Android).

But maybe you mainly focus on web, and need to improve accessibility? Start building components for your web products and deal with mobile later.

**Embrace the platform**
I personally recommend trying to stick close to the platform wherever possible. This makes it easier to change frameworks later.

For example, use css or css modules¹³ instead of css-in-js¹⁴. This will make it much easier to switch between different web frameworks.

Another strategy is to build web components¹⁵ and wrap¹⁶ them to create framework components. This makes switching between frameworks or supporting multiple frameworks much easier. But it can make development more complex. It’s up to you to evaluate which solution is best for your circumstances.

## What to build first

Choosing what to start with depends a bit on your situation. Can you spend some time to build the foundations first? Or are you already in fire fighter mode and need some solutions quick?

### Fixing consistency & accessibility issues

If you need to improve consistency or accessibility quickly, start with design tokens.

Define accessible tokens starting with color⁶ and typography⁷. Work with teams from all platforms during the development phase to make sure the tokens will be usable for everyone. Start an early access release with the most important platform. This will provide good insights. Slowly fix issues and move to a more stable beta phase. Now roll out the beta to other platforms and start moving towards the initial release.

This approach provides a great return for comparatively little time investment.

### Proving the value of a design system

If you need to prove that a design system can bring value, it’s best to solve some big problems for teams. For example, i a team wants to add dark mode in their product, you could take on this work and solve it for everyone instead. Make sure to discuss this with the team first and involve them constantly.

Another great approach is to start as a task force to build complex components for teams. For example, if a date picker is needed, your team can build it, make sure it is accessible and release it for everyone.

This approach will get you a lot of goodwill and can be a great start. You also instantly get users and gain experience and understanding of the products using the design system.

During times of low work, you can add easier components like buttons and checkboxes.

### Solid foundations

If you’re not in firefighting mode, consider yourself lucky. In this case start with high priority components and design tokens at the same time.

Design tokens are important so you can use them in your components. This makes sure your components are easy to maintain and you only must build them once.

Component priority can be evaluated with a matrix¹⁷. I’d suggest building about five frequently needed components that are easy to build. Once released, build 1–2 complex components to make sure your system works for those as well.

Easy to build components help you grow the system quickly. Users often don’t feel confident using a design system if too many components are missing. It’s okay in the very beginning but after a while it looks like a red flag for your users.

But a design system that only provides easy to build components is not that useful. People may feel like they could have done this themselves. Aka, why do I need a design system if I need to build all the complicated components myself?

Thats why you should start working on complex components from the beginning as well.

Continue adding components in a similar manner. Add a handful of easy components mixed with a few complex ones until you are done.

## How to start building

In the end your design systems must be both wide and deep. But how do you start?

![It’s important to focus on the important components that have an impact on people's daily work](https://cdn-images-1.medium.com/max/2400/1*C6FUhfxQbLGTjYjtqrgK5A.jpeg)

Wide means that you have a lot of components, tokens, etc. that cover most if not all needs of your users.

Deep means that you have completed every aspect along the entire maturity path. This means a component is available in design and code. The component must use design tokens and may allow styles to be overwritten.

It should also have at least unit tests. This makes it easy to add fixes and improve the component without breaking existing use cases.

The accessibility team must have verified the component. Alternatively accessible must be assured through whatever other process you have.

You should have at least basic documentation available.

Lastly it must be available via NPM (or whatever you use for distribution) and must be used in production.

My recommendation is to always start deep. This has a few benefits:

- It allows you to make sure that everything will work. Any issues with the technology setup or your concept will be available immediately. Still ample time to adjust.
- It shows everyone that the system is working, which will make it more real and get you some buy-in.
- You can connect with some teams who are early adopters. This will provide you with feedback to optimize early in the process.
- If teams are starting to use just a few components, you can already state that the system is “used in production”. This can make a huge difference for teams who are thinking about using the design system.

The idea behind starting *deep* is to build one component across the whole depth of the system. This way you can prove it works. It also means you have set up all the different parts, making it easier to add new components.

I recommend adding every component using the deep method. However, in some cases it makes sense to focus on width once the systems are in place. For example, when you need to quickly scale up the design tokens or code components.

Example of starting a design system with the “deep” strategy
Let’s assume that you choose the button as the first component, as it has some states but is fairly simple. Once the team has agreed on a design and property API both the design and development team start working.

![Abstract icon for designers](https://cdn-images-1.medium.com/max/1600/1*Qk4Yc8AbSvSWWC_PvF9y7A.jpeg)

### Design workflow

The designers will create a library file in the design tool and add the button component. Colors, sizes, border radius, etc. must be chosen from the design tokens. This means thinking about a naming scheme⁵ for tokens. Your tokens will evolve, especially while building the first few components. So don’t obsess about a perfect setup yet but do give it some thought.

It’s important to consider how other designers at your company will use components and tokens. For example, if you use Figma you need to find a fitting variable strategy¹⁸ to represent your design tokens.

![Abstract icon for developer](https://cdn-images-1.medium.com/max/1600/1*RF3Hi_kJtZnLTRqQpSDGdw.jpeg)

### Development workflow

The development process is very front-loaded meaning it requires intense setup. First you need to set up a repo with the framework you use and start adding the component.

You should also add your testing library of choice and add at least a few tests. Next, talk to your accessibility team. Together you create a workflow for checking and verifying component accessibility. This may include some automated accessibility tests like axe¹⁹.

At the same time, it makes sense to setup the design token flow. This involves creating a design token repository with a JSON structure for tokens and setting up style dictionary²⁰.

![Abstract icon for documentation](https://cdn-images-1.medium.com/max/1600/1*fynuoWcF0-EYpETNvVJRhw.jpeg)

### Documentation

It’s best to include documentation in the process from the beginning. Storybook is a great way to get started. Your default component story shows the possibilities of the component. Add a content page per component with the overview, best practices, and design documentation.

When you start building a design system it is not important to have fancy documentation. What is important is a place where users can find details about available components. Where they can learn about the API, if a component is stable or still in beta and component accessibility.

Also add a section on setting up the design system for designers and developers.

![Abstract icon for release flow](https://cdn-images-1.medium.com/max/1600/1*zJ8IQVB4JLYoIgGZRnpclw.jpeg)

### Release flow

The last thing to run through for your first deep component is your release flow.

On the technical side this probably means merging a branch, creating a new version and releasing it to NPM.

But there is more to a release. You must define which internal channels to use to communicate updates. Slack or the intranet? Do you have an email newsletter, or can you add some content to another team’s newsletter?

You also need to create good release notes in your repository.

If your design system is open source, use social media to communicate updates.

Even though you only added one component, this is a big deal. You just put down the foundation for your new design system. Tell this story. Make this an event and loudly tell everyone that this is the start of something great.

### Exception to the rule

There are a few situations were starting wide makes sense:

- You don’t have any designers or developers or a very unbalanced team. In this case it makes sense to use the available people to their full potential.
- You use a pre-built design system without a design library. In this case quickly update the appearance of the code components using tokens. Once done, designers can start building a design library.
- If it takes a very long time to make a technology decision at your company, start building the design library and design tokens. Once the technology is defined put all effort into building code components.

## Start from scratch or use a pre-built system

The last important question is if you should use a pre-built design system and customize it or roll your own. This depends on your needs and time constraints. There are good reasons to use a pre-built²² design system. But you may need absolute flexibility or want to provide the best developer experience within your company’s conventions. This is a reason to start from scratch.

### Pre-Built

Especially designers are often unhappy about customizing an existing solution. They often feel like it limits their possibilities. However, if it uses design tokens you should be able to visually adjust everything.

This being said, a pre-built system comes with a few key benefits:

Most systems are already set up.

This means the system comes with components that use tokens. With existing tests to make it easy to add features without breaking things. And with workflows to compile tokens and components into a package you can release on NPM.

Most prebuilt systems come with light and dark mode. And if you are lucky, it even comes with a library for your design tool of choice.

This will save a lot of time and allow you to hit the ground running. You can get to a very good and usable design system in just a few weeks. This is especially great for small teams that otherwise drown in the amount of work needed to build a design system.

### Profit from others experience

If your team is new to design systems, you can profit a lot from somebody who has built design systems for years. So just by looking at a pre-built system you and your team may be able to learn a great deal.

If the design system (open source or paid) is used by many teams, they all will provide feedback and discover bugs. Once fixed you will get the updates as well. This means everyone who uses the system and files bugs is a quality tester. This often results in a very high quality of code.

This approach can also be helpful to bridge missing competencies in the team. For example, if you don’t have an accessibility engineer, a design system that comes with great a11y support can help you overcome this problem.

### Great for small teams

Building a design system involves a lot of work which can quickly overwhelm a small team. So, it is good to start from a system that only needs to be customized.

To get the most out of it there are a few things to look out for when choosing a pre-built design system:

- If accessibility is a requirement the system should come with accessible components. Making components accessible is arguably the hardest part of building a component.
- Make sure all major platforms you need are supported. While adding platform support afterwards is possible, if you build a react app, make sure the system is react and not e.g. angular. Mobile support is often hard to find, so for iOS and Android you may need to start from scratch.
- Test that the system can be customized enough to meet your needs. For example, I would never choose a system without a good design token implementation.
- Make sure most components you need exist in the system.
- If a Figma or Sketch library (whatever you need) is available, that is a plus (but shouldn’t be a hard requirement). Building a design library is fairly simple compared to a lot of other tasks.
- Validate that the system has a good community or at least gets regular updates from the creators. The benefit of getting fixes and improves that are uncovered by other users is hard to overstate.

### Roll your own

There are some good reasons to build your own design system from scratch. Some companies aren’t allowed to use open-source software due to licensing concerns. Maybe your platform mix does not work with any of the available solutions. Or you have so many special components that no off-the-shelf system works.

Starting from scratch means you will need a bigger team. You also need to have experts on accessibility and systems thinking. And of course designers and developers for the platforms you need to support. But if this is no problem, there are a few benefits to this approach.

### Perfect fit

Open source or paid systems have to work for teams with very different setups. There is often little in common between companies apart from the platforms they use.

If you build a custom system for your company, you can make it fit your needs perfectly.

The styling solution can possibly be less complex. You can reduce code complexity by only supporting one way of doing things. If you need to allow overrides you can add it, if not components can be closed. And by researching which properties are needed you can drastically shrink component APIs.

### Optimised performance

Knowing exactly what is needed can help improve performance. You can also decide together with your company that you e.g., ditch on solution in favour of a more performant one. E.g. using `css modules`²³ instead²⁴ of `css-in-js`²⁵.

Working together with the developers at your company you can decide which sacrifices you can make to shave a few more seconds off the load time.

This could lead to products being faster if they use the design system. This would be a fantastic selling point to get buy-in.

### Known coding patterns and style

People don’t like change. Making a new system as familiar as possible can help with this issue. Most companies have specific coding styles and code patterns. Often a linter is used to enforce those rules. Your own components can adhere to those rules. The familiar style will make it easier for developers to send PRs.

### Data layer integration

Many companies have specific endpoints that components consume. For example, a `user` or `user selection` component needs access to the correct database. A custom component can be set up to access the correct endpoints. Developers don't need to wire up the components themselves but just pass in some properties that are used in the query.

Things like this are harder to do with pre-built design systems. But they are extremely convenient, especially if your products heavily rely on data.

Building the data access into the components means you can optimize for performance. For example, instead of using APIs directly, you could use a GraphQL query to get data from different sources.

Headless Design Systems: The best of both?
Headless design systems²⁶, like radix²⁷ are an interesting compromise. The heavy lifting, like accessibility and functionality is done for you, but without styling. This means you can come in with your own styling solution, design tokens, etc. and make it yours.

As far as I can remember HeadlessUI²⁸ was the first prominent solution like that. It’s a great approach if you have complex styling needs that can’t be met with an existing solution. But you don’t have the team or time to build everything from scratch.

However, this means of course that the coding style, etc. is out of your control.

## Hiring external help to build your system

Getting external experts to help with your work is common practice in our industry. This approach is also very common in design system work. Especially if there is no one with experience at your company.

External experts have specific knowledge in the field and experience from their work on multiple design systems. They can quickly provide the expertise needed to start your design system efforts. They may also be able to warn you about pitfalls that you don’t have to experience yourself.

However, there is a danger associated with hiring out your design system work. If you are not careful the knowledge about the design system is built up outside of your company. Decisions may be made without a deeper understanding of your organization’s internal workings. The worst outcome is that you have to rely on an agency to update your design system because they have all the knowledge and are reluctant to part with it.

To avoid this, I recommend hiring experts or agencies as consultants. They should work as part of an internal design system team. Sometimes it is even enough to have a consultant review work and suggest ideas.

While a bit slower, you still profit from the expertise and experience of the consultant. But the internal team does most of the work and builds up internal knowledge at your company. Once the system is in place, you will be able to maintain your design system without external help.

---

## Summary

Before you start building a design system, take stock of the issues you hope to solve. This is best done in a workshop together with folks from different teams and disciplines.

Once you are sure a design system can solve some of the most pressing issues it’s time to prioritize.

Choose components that are used often and start building a few of them. I recommend the deep method. This means you start with one component and go through every phase with it. This could involve the following steps:

1. creating it in the design software
2. creating a code component using design tokens
3. writing tests
4. getting an accessibility review
5. writing documentation
6. publishing on NPM

This forces you to set up the entire process. It also allows users to consume the first components in the production environment.

Getting feedback from production is a major win and will get you buy-in from stakeholders. Once you do this, you can add more components over time.

If you need external help, I recommend hiring consultants that work with an internal team. This ensures that the design system knowledge stays within the organization. This way you don’t need pay consultants or agencies to update and maintain the system. The knowledge is within your team and organization.

---

## References

1. [https://medium.com/design-bootcamp/11-fantastic-benefits-of-design-systems-793ab3a65394](https://medium.com/design-bootcamp/11-fantastic-benefits-of-design-systems-793ab3a65394)↩︎
2. [https://amyhupe.co.uk/articles/should-consistency-be-a-goal-for-design-systems/](https://amyhupe.co.uk/articles/should-consistency-be-a-goal-for-design-systems/)↩︎
3. [https://medium.com/@lukasoppermann/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab](https://medium.com/@lukasoppermann/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)↩︎
4. [https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c](https://lukasoppermann.medium.com/w3c-design-tokens-with-style-dictionary-f7ff5f2ba98c)↩︎
5. [https://uxdesign.cc/naming-design-tokens-9454818ed7cb](https://uxdesign.cc/naming-design-tokens-9454818ed7cb)↩︎↩︎
6. [https://uxdesign.cc/design-system-accessibility-color-26834083a3a2](https://uxdesign.cc/design-system-accessibility-color-26834083a3a2)↩︎↩︎
7. [https://lukasoppermann.medium.com/picture-showing-design-system-accessibility-typography-size-2c1a438d359](https://lukasoppermann.medium.com/picture-showing-design-system-accessibility-typography-size-2c1a438d359)↩︎↩︎
8. [https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a](https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a)↩︎
9. [https://uxdesign.cc/getting-the-wcag-color-contrast-right-799508389679](https://uxdesign.cc/getting-the-wcag-color-contrast-right-799508389679)↩︎
10. [https://medium.com/eightshapes-llc/crafting-ui-component-api-together-81946d140371](https://medium.com/eightshapes-llc/crafting-ui-component-api-together-81946d140371)↩︎
11. [https://medium.com/eightshapes-llc/authoring-component-documentation-6f894b498b88](https://medium.com/eightshapes-llc/authoring-component-documentation-6f894b498b88)↩︎
12. [https://medium.com/user-experience-design-1/stakeholder-management-for-design-systems-3841edfdb136](https://medium.com/user-experience-design-1/stakeholder-management-for-design-systems-3841edfdb136)↩︎↩︎
13. [https://github.com/css-modules/css-modules](https://github.com/css-modules/css-modules)↩︎
14. [https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757](https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757)↩︎
15. [https://ionic.io/resources/articles/building-design-systems-with-web-components](https://ionic.io/resources/articles/building-design-systems-with-web-components)↩︎
16. [https://lit.dev/docs/frameworks/react/](https://lit.dev/docs/frameworks/react/)↩︎
17. [https://medium.com/ideas-by-idean/workshop-how-to-prioritize-your-design-system-components-d7fc8334b712](https://medium.com/ideas-by-idean/workshop-how-to-prioritize-your-design-system-components-d7fc8334b712)↩︎
18. [https://www.npmjs.com/](https://www.npmjs.com/)↩︎
19. [https://medium.com/user-experience-design-1/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7](https://medium.com/user-experience-design-1/getting-started-with-native-design-tokens-in-figma-5d9c5fcdd9f7)↩︎
20. [https://github.com/dequelabs/axe-core](https://github.com/dequelabs/axe-core)↩︎
21. [https://github.com/amzn/style-dictionary](https://github.com/amzn/style-dictionary)↩︎
22. [https://www.reddit.com/r/UI_Design/comments/cyngqt/are_you_using_a_pre_built_design_system_or_your/](https://www.reddit.com/r/UI_Design/comments/cyngqt/are_you_using_a_pre_built_design_system_or_your/)↩︎
23. [https://github.com/css-modules/css-modules](https://github.com/css-modules/css-modules)↩︎
24. [https://blog.bitsrc.io/css-vs-css-in-js-what-you-should-choose-in-2023-392a600cb977](https://blog.bitsrc.io/css-vs-css-in-js-what-you-should-choose-in-2023-392a600cb977)↩︎
25. [https://cssinjs.org/?v=v10.10.0](https://cssinjs.org/?v=v10.10.0)↩︎
26. [https://ui-tokens.com/blog/what-is-headless-design-system.html](https://ui-tokens.com/blog/what-is-headless-design-system.html)↩︎
27. [https://www.radix-ui.com/](https://www.radix-ui.com/)↩︎
28. [https://headlessui.com/](https://headlessui.com/)↩︎
