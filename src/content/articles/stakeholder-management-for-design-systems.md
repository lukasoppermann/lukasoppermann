---
title: "Stakeholder management for design systems"
url: "https://uxdesign.cc/stakeholder-management-for-design-systems-3841edfdb136"
published: "2023-08-24"
excerpt: "The success of a design system depends more on stakeholder management than on the quality of its components."
---

---

![Cover picture with title and abstract shapes](https://cdn-images-1.medium.com/max/2400/1*tmRrq0iWplY5Gg44j8sMWA.jpeg)

> ***Stakeholder management*** (also project stakeholder management) is a ***critical component*** in the ***successful delivery of any project***, program or activity.

> ~ wikipedia¹

Stakeholder management is a **continuous process** of developing a communication strategy² for your project and **influencing stakeholders through engagement**.

**Stakeholders** are people or organizations that have a legitimate interest in a project³. This can be users of the product you are building or managers that provide the budget.

![Simple 6-step stakeholder management](https://cdn-images-1.medium.com/max/2400/1*SWogQQ57KUuyTmVPLA2h7w.jpeg)

### Why should you care about stakeholders?

Stakeholders, by definition, have an interest in your project and some kind of influence to impact its success.

Some stakeholders will have a higher impact on your project than others. However, the impact is not always tied to the position or power an individual has within an organization.

For example, a developer can convince her PM that using the design system will slow down the project. If this happens multiple times, it drastically reduces your adoption rate. This has a big impact, even though the same developer may be low in your company’s org chart.

Stakeholders can influence your project in different ways. For example, by providing or withdrawing resources like budget or people. Or by cooperating with your team or blocking all cooperation. Advocating for your design system is another way in which a stakeholder can support your success.

A design system changes the way people do their work. But most people are afraid of change. This poses a problem as a design system must be accepted and used to be successful.

As a consequence, a huge part of creating a successful design system is working with the people in your org. Convincing them that this change is good and in their best interest. In short: stakeholder management.

## Managing Stakeholders

### Who is a stakeholder?

> A [stakeholder](https://en.wikipedia.org/wiki/Project_stakeholders)⁴ is any individual, group or organization that can affect, be affected by, or perceive itself to be affected by a programme.

> ~ [w](https://en.wikipedia.org/wiki/Stakeholder_management*)ikipedia¹

In short, a stakeholder is someone who is impacted by your project.

Some stakeholders are only indirectly affected. For example, a manager of another department fearing your *innovative* project makes her department look bad. This could lead to sabotage and thus you need to include her in your stakeholder management efforts.

Other stakeholders are directly affected. For example, the designers and developers working with your design system.

### Who are your stakeholders?

When you begin to manage your stakeholders, it’s important to make a list of all stakeholders⁵. This is the first step in stakeholder management: Identify your stakeholders.

Repeat this step occasionally, to make sure your list is up to date.

Typical stakeholders for design systems include:

- Designers using the system
- Developers using the system
- PMs of teams using the system
- Brand design
- Accessibility team
- Lead developers / head of development / CTO
- CEO / Product manager

It may be that only some of the people above are active stakeholders in your org. Either because you don’t have an e.g., accessibility team or because of internal politics, the maturity of your system, the size of your org, etc.

Take this list as a starting point and figure out who really is a stakeholder for you.

### Understand your stakeholders

Stakeholder management means influencing stakeholders to have a positive opinion towards your project. To do this it is important to understand what your stakeholders fear and what their goals and needs are.

A great method for this is to create profiles, similar to UX personas. When you start, you may need to guess what fears and goals they have. Over time you can fine tune those profiles by talking to your stakeholders.

Below you can find example profiles with typical needs and fears. They are based on my experience working on design systems in different companies.

You must understand how your design system can help solve the problems of your stakeholders. At the same time, you must make sure to explain why their fears will not become reality to bring them to your side.

![Illustration to represent designers](https://cdn-images-1.medium.com/max/1600/1*qJC6uaxYnpp7nM216JBTmg.png)

### Designer

Product designers at your org will use the design system to build products. They are critical stakeholders as one of the two primary design system users. This gives them a strong influence on the adoption rate of your system as they can block it by not using the system.

Many designers see a design system as a means to an end, a tool to get their work done. As a result, it needs to be easy and helpful. Ti should have a flat learning curve and little knowledge required to get started.

**Needs**

- Design tokens that are accessible and brand conform. Using them should make products accessible and pass the brand check.
- An exhaustive set of components. This helps designers focus on building custom components and their user flows.
- Up to date components that support all available themes and can be customized

**Fears**

- No creative freedom due to “design system dictatorship”
- Low quality design components that make their designs look bad
- Missing components that lead to waiting for the design system team to build them because designers are not allowed to build custom components

![Illustration to represent developers](https://cdn-images-1.medium.com/max/1600/1*OL9xrrHMMVXooISsfAp3SQ.png)

## Developers

Developers will use the design system to implement the layouts, designers create. They often have a good standing in the company and profit a lot from a good design system. But a bad or complicated system can drastically decrease their productivity. If they feel the system is bad, they will probably try to block the design system as much as possible.

This can make them a great adoption driver or one of the biggest adoption blockers.

Like designers, many developers see a design system as a tool. They may accept a slightly more complex setup if they are convinced that the system will increase their productivity.

**Needs**

- Coding product UI based on designs without a lot of back and forth with the designers
- Easy updating of colors, spaces, etc. e.g. when brand changes the colors again
- Ready to use, accessible and brand conform UI components. This is especially interesting for complex components like date pickers
- Easy to implement dark / light mode or theming

**Fears**

- Using the design system will make building products more complicated and slower
- Constant unexpected updated that break production
- negative performance impact from using the design system
- If a component doesn’t exist you need to wait for the design system team to add it, which may take weeks
- Lots of constraints and workflows that lock you into a certain way of building apps

![Illustration to represent PMs and POs](https://cdn-images-1.medium.com/max/1600/1*V0bC8qf39S1r4uvYkhot7Q.png)

## Product managers / product owners

Product owners have a large influence on the product teams. If they are convinced the design system will be good for them, they can convince their team.

But if the design system goes against their goals, they will block it.

**Needs**

- Improved development speed due to pre-build components and design tokens
- Avoiding back and forth with the a11y and brand teams
- Team should spend most time on backend / custom user flows, not on UI / frontend
- Build prototypes / UIs for users tests very quickly
- Building future proof products that are easy to update when technology, OS versions or design requirements change

**Fears**

- Getting blocked because the design system “can’t do something”
- Loosing time because it takes longer to build a product with the design system than without
- Unable to update to new versions of react or iOS because the design system doesn’t work with the new versions

![Illustration representing brand design](https://cdn-images-1.medium.com/max/1600/1*YIgZoD842TdboLt8p3zUuQ.png)

## Brand design

The brand team normally has similar goals like creating a holistic visual appearance. For the brand team digital products are important, as they are the main touch point for many users. This means the brand personality and recognition is in a large part created by digital products. The design system allows the brand team to control this.

**Needs**

- A digital design language that captures the corporate identity and brand personality
- Product designers to adhere to the brand guidelines
- Updates to the corporate identity must be quickly visible in the digital products
- Products must be of high quality including good code without bugs. They must be accessible to users, have great UX and a modern design.

**Fears**

- Losing control over the look and feel of the company’s products
- All products looking different or use different versions of the corporate identity
- Products shipping without a brand sign-off
- Accessibility requirements leading to boring / off-brand designs

![Illustration representing accessibility team](https://cdn-images-1.medium.com/max/1600/1*I78LJ1UThHZK9KE2mfnNDA.png)

## Accessibility team

Accessibility is very important, but hard to implement. This is why the accessibility team must deal with a lot of resistance. It’s also a legal requirement for big companies.

By providing accessible components you can help the accessibility team reduce their workload. This is because most components are accessible and need to be reviewed only once.

**Needs**

- All products that ship must be accessible
- A design system with accessible components
- Custom components build by product teams must be accessible

**Fears**

- Products shipping without accessibility testing
- PMs or managers dismissing accessibility requirements due to time constraints

> *“We don’t have time for that. Our deadline is tomorrow.”*

- People coming to the team with a ready (but not accessible) product instead of involving the team from the beginning
- Designers who have no idea of accessibility at all.

![Illustration representing CTO and lead developers](https://cdn-images-1.medium.com/max/1600/1*1SedKHkOR7oObXyerenmHg.png)

## CTO / Lead developers

In general, they are interested in stability and easy development. Being responsible for the developers, they want to make your company a good place to work for them.

**Needs**

- Stable development environment
- Avoiding tech dept
- Easy to upgrade products
- Detaching data from UI and often detaching the data layer from the products via APIs, etc.

**Fears**

- Complex development environment due to the design system
- Being locked into specific software versions, because of the design system
- Loosing ownership to the design system team

![Illustration representing business](https://cdn-images-1.medium.com/max/1600/1*GvVx89mOJeZZSnD7CctI8w.png)

## CEO / Managers / Business

CEOs and managers at a higher level are often not concerned with details. Their job is to move the entire org into a specific direction. As long as the pieces seem to align to the big picture, they have in mind they are happy.

**Needs**

- Improving development speed
- Reducing costs
- Reducing the amount of people needed to do something
- Making failures less costly
- Making changes easier (they often hear, “we can’t due this”, or “it will take too long”)

**Fears**

- The design being a big drain on budget
- Slowing down product development

![Abstract illustration symbolizing design systems delivering things to projects](https://cdn-images-1.medium.com/max/1600/1*zQDQusoZelzACf-VGq-Lww.jpeg)

## What can a design system deliver for stakeholders?

### Standardisation

A design system is used and created across many teams and disciplines. This makes it perfect to define and share standards that should be used at your company.

This may include much more than the typical component standards. For example:

- ux principles
- patterns
- accessibility requirements
- brand expressions
- language and tone
- code style
- testing frameworks and approaches
- processes and workflows for product development
- presentations and keynotes
- marketing assets
- emails
- ….

Using the design system as a platform to push standards can help engage stakeholders. It also gives the design system a purpose outside of the design and development disciplines.

But be careful that you don’t end up maintaining all the content. You just create connections and provide the platform. The content should come from the teams who own a specific topic.

### Setting expectation for components

If people work on a project that is accessible and has great test coverage it becomes the norm. They will focus on those aspects and try to keep it up. It’s a bit like the streak system⁶, where you don’t want to break a running streak.

A design system can set expectations in two ways:

1. Ship accessible components and design tokens with good test coverage. This is the standard that others should hold their work against
2. Create starter kits that people use when setting up a new project. Those kits come with a test suit set up and an accessible demo component with tests.

### Better collaboration

One of the main goals of design systems is to make it easier for designers and developers to work together.

Components and design tokens in code and design tools make handovers easy and fun. Developers can look at a design and grab the components from the system.

This makes building faster and cheaper. It also reduces friction between designers and developers. More time can be spent on figuring out the hard parts of the products you build.

This overall improvement to collaboration and project work is very important for PMs, managers and even the CEO.

## Stakeholder communication

The communication strategy differs depending on the message, the stakeholder, and their importance. It also depends on if a specific stakeholder sees themselves as a stakeholder or not.

![Illustration: 1 to 1 meetings](https://cdn-images-1.medium.com/max/1600/1*wCuOpn6DzH3rQ3CpLzCW9w.png)

### 1:1 meetings

1:1 meetings are reserved for very important stakeholders, because they take up a lot of your time.

Important stakeholders can be people high up in your organisational hierarchy. But also, people who are important for your design system like a lead developer who has a good standing in the team. This developer may become an advocate for your design system and thus is very important.

People who are important in the orgs hierarchy often don’t have time for a 1:1. They may prefer indirect communication or quarterly or even bi-yearly presentations.

However, stakeholders who are also users of the system, e.g. some developers or designers may love to have a 1:1. They may not be important in the org chart, but important with their peers.

A 1:1 shows them they are valued and allows them to dive deeper into some details they care about. This meeting can be much more technical than the more general info that a manager wants to hear. When scheduling 1:1s make sure you are the right person. If you don’t have the expertise to answer detailed questions, get a design system developer or designer to join the meeting.

![Illustration: status meetings](https://cdn-images-1.medium.com/max/1600/1*-iUMg0UA388jHIrApGcgbQ.png)

### Project status meetings

A short, bi-yearly, or quarterly meeting for managers and other stakeholders. The goal of this meeting is to provide a general overview of the design system’s progress.

It should be about 30 minutes including 5 min for questions. The meeting should be time box. Don’t waste any of the participants’ time. Offer to answer additional questions in the follow-up email with the meeting notes.

Status meetings must be high level and focus on three things: Progress, metrics, and upcoming work

**Progress**
A quick overview of what the team added to the design system (go through a list) since the last status meeting.

Include **2–3 highlights** that had a significant impact on real projects. Make sure the impact is easy to understand and meaningful for managers. For example, quicker development, reduced budget, etc.

**Metrics**
Show metrics proving that the design system is bringing value and you are doing your job. For example, usage & adoption, number of components used. Bugs closed, etc.

Show metrics in valuable units. For example: 10 components added to 5 new projects = 50 components = X hours of dev & design time saved.

Include a case study if possible. E.g. a new project that uses the design system and saved X days or was able to release in under X month.

**Upcoming work**
A brief overview of major work packages you will be working on until the next status meeting. Include the benefits you expect from this work.

E.g. a date picker component which is complex. Custom implementations always need at least 3 rounds with the accessibility team. Our component will save time for the accessibility team and product teams at the same time.

Include upcoming events e.g. research or a user engagement day. Also mention projects that will start to use the design system.

![Illustration: Newsletter](https://cdn-images-1.medium.com/max/1600/1*cXRusVy7QbE9uHz_UNs7ow.png)

### Newsletter

Internal newsletters are common in many companies. They are an effective way of keeping everyone informed. Include a high-level overview of all updates with links for people who want more details. This way the newsletter can serve people with different information needs.

If your design system has only a small user base, consider joining forces with another team. Maybe you can add a design system section in the brand or design newsletter. This helps you reach a larger audience.

Starting a newsletter with a TL;DR summary is a great way of bringing value to managers. Designers and developers can read the rest of the newsletter to get the details. For long form information, like the changelog or blog posts, include the highlights and link to the full content.

Include some metrics as well as an “upcoming” section that mentions what the team will work on next. This is great info for everyone. Make sure to place it so that managers who only read the TL;DR see it as well.

![Illustration: Articles](https://cdn-images-1.medium.com/max/1600/1*gW5o0OdTNBtTlg-FCHMycw.png)

### Articles and blog posts

Articles are a fantastic way to highlight specific efforts, completed projects or insights. Tell the story of how you built a new component to show the work that goes into it and your considerations.

Your audience will differ depending on if your blog is internal or public. Public articles include more marketing and less critical notes but can still be educational. Look for example at the [spotify design blog](https://spotify.design/article/performance-cards-designing-with-empathy-and-meaning)⁷.

Posts are great to explain unpopular decisions. Often people can come to terms with a decision once they know the reason, even if they don’t like it. For example, many forget that a design system has a lot more to consider than their individual project.

Another great type of articles are guest or co-authored posts from project teams. For example, about their experience adopting the design system or upstreaming their components. This highlights their efforts and builds trust in the design system.

![Illustration: Changelog](https://cdn-images-1.medium.com/max/1600/1*ILzcsk4T-81w3MGJRniAOQ.png)

### Changelog

The changelog is one of the most important documents for users of the design system. Every version should have a changelog. You can store it on GitHub or as part of the documentation page.

A nice changelog has the highlights (major and minor changes) at the top and a list of all fixes below. Most users will only care for the highlights. Some will scan the fixes to see if a particular issue they had was fixed.

Additional details, like extensive migration instructions, should be linked. Don’t add them directly to the changelog. It’s better to create a separate post explaining the details.

The same is true for new components. Instead of adding details to the changelog, link to the component page in the docs.

Changes to the design library (Figma or Sketch) should be included if you don’t have a separate changelog.

![Illustration: Social media](https://cdn-images-1.medium.com/max/1600/1*3ywqS19aitDe4vdy3DczTQ.png)

### Social media

Design systems are a hot topic in the community. The more attention your design system gets in the outside world, the more important it gets in your org as well. This is why it makes sense to share highlights of your team’s work, articles, and similar content.

If your org has a design or brand social media account, try to use it instead of having a dedicated account to post design system content. This will give you a bigger audience.

---

## Alliances

Corporations are a bit like medieval kingdoms. Everyone wants more power, and you need to create alliances to survive.

The easiest way to get people to your side is to offer them a way to further their own interests. For example, by aligning specific design system goals with their goals.

In some cases, these goals are official and can be openly discussed. For example, the brand teams’ goal of making sure products adhere to brand guidelines. This makes it easy to highlight how the brand and design system team can cooperate to achieve this goal together.

Sometimes it is not as easy, and goals cannot be publicly discussed. In this case you can include the goals you expect a stakeholder to have as a side note in a conversation. By showing that the design system can solve a specific problem without specifically mentioning it you might pique their interest.

## Opening infrastructure for stakeholders

One important aspect of building a design system is sharing knowledge. Typically, this happens through communication and documentation. The documentation happens through some kind of platform. If you get enough users onto the documentation platform, it can be an asset as well.

Some stakeholders, like the brand and accessibility team also need to share content with designers and developers. But the teams are often too small to build their own platform. If you offer them a section on your well-established design system platform it can be the start of a partnership. They get a platform, and you get some more users as well as the goodwill of whoever you partner with.

To make this work you should measure engagement with your documentation. You also need to work on increasing engagement. Treat your documentation like a web project with the goal to increase engagement. This will turn your docs into a valuable asset for stakeholder management.

---

## Summary

Stakeholder management is essential to the success of your design system. Without it even the best design system is likely to fail.

A design system has many stakeholders with different goals and fears. To turn them into allies that support you in your efforts you need to understand their needs. Then you can show them how the design system helps them achieve their goals.

The best communication channels and required level of detail differ for each stakeholder. Make sure to offer each stakeholder a fitting way to stay informed and engage with you.

A design system that creates value for stakeholders will be able to succeed in the political jungle of any org.

## References

1. [https://en.wikipedia.org/wiki/Stakeholder_management](https://en.wikipedia.org/wiki/Stakeholder_management)
2. [https://en.wikipedia.org/wiki/Communication_management](https://en.wikipedia.org/wiki/Communication_management)
3. [https://en.wikipedia.org/wiki/Stakeholder_(corporate)#:~:text=commonly%20used%20to%20mean%20a%20person%20or%20organization%20that%20has%20a%20legitimate%20interest%20in%20a%20project%20or%20entity](https://en.wikipedia.org/wiki/Stakeholder_(corporate)#:~:text=commonly%20used%20to%20mean%20a%20person%20or%20organization%20that%20has%20a%20legitimate%20interest%20in%20a%20project%20or%20entity)
4. [https://en.wikipedia.org/wiki/Project_stakeholders](https://en.wikipedia.org/wiki/Project_stakeholders)
5. [https://blog.hubspot.com/marketing/stakeholder-management](https://blog.hubspot.com/marketing/stakeholder-management)
6. [https://medium.com/the-ascent/how-habit-streaks-can-help-change-your-life-for-the-better-a194b1a22980](https://medium.com/the-ascent/how-habit-streaks-can-help-change-your-life-for-the-better-a194b1a22980)
7. [https://spotify.design/article/performance-cards-designing-with-empathy-and-meaning](https://spotify.design/article/performance-cards-designing-with-empathy-and-meaning)
