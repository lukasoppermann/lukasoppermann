---
title: "Maintaining a design system in Figma"
url: "https://medium.com/user-experience-design-1/maintaining-a-design-system-in-figma-f8656a0839bb"
published: "2024-04-25"
excerpt: "Design systems evolve over time and so do the platforms they are built on. As maintainers, we need to make sure to keep them up to date…"
---

![Cover showing two Lego bricks and the title of the post.](https://cdn-images-1.medium.com/max/2400/1*nv8XICXoiaWGucezuUfuAA.jpeg)

Design systems evolve over time and so do the platforms they are built on. As maintainers, we need to make sure to keep them up to date. This includes Figma and your Figma design system library. Figma has only a basic versioning, so we need to be careful with changes. But there are some techniques to make sure we don’t release updates that break consumers Figma projects.

In this article I will explain what I find to be the best process to make sure you can keep your library up to date without breaking designers’ files.

## Figma branch PR process

I have often seen Figma files, especially for design systems, turn into chaos. Since it is relevant for everyone the whole team works in the same file. Adding new components, fixing bugs, exploring what components can do.

While this seems logical, it does come with a few problems:

- components may be published in a half-changed state together with other changes
- it is hard to write change notes as you don’t know what was changed and why
- no review process for changes
- noise in the publish window makes it impossible to tell what changed

![Many changes in the publish window create anxiety in library maintainers.](https://cdn-images-1.medium.com/max/1600/1*cgHA7q5cAlKatB1IHUP5BA.jpeg)

The solution is to lock down the process similar to a GitHub repository. In most repos only a select few are allowed to merge changes into the main branch. Or there are other safeguards in place, like requiring approvals.

In Figma we can implement a similar flow by locking down the main file and requiring [branching](https://www.figma.com/best-practices/branching-in-figma/)¹ for every change.

You may initially get some pushback from designers as they are not used to branches and this makes their workflow more complicated. While true, it is only a minor inconvenience that will be forgotten in a week or two.

The benefits greatly outweigh the downsides:

### Encapsulation

Every change is encapsulated as a pull request² (PR) so there is no interference between folks working on the file at the same time.

### Reduced noise in updates

Designers often explore components by toggling properties or changing settings. If they forget to revert all the changes this leads to a lot of noise. Worse still, it can break consumers designs if they rely on default options that got changed. This can be completely avoided with the branch approach. The new devMode³ removes the need for exploring components in the library file with the component playground³. It allows folks to preview and test components in any file that imports the library.

![Gif showing the component playground](https://cdn-images-1.medium.com/max/1600/1*RpS56oEqnC2K74h8oZfw1A.gif)

### Reviews

Using branches, every change must be reviewed before it gets merged. In the review UI you see exactly what has changed. This allows you to find unexpected side effects. For example, a component change that breaks another component that relies on the changed component.

![Screenshot of the review window showing the before and after state of a button component.](https://cdn-images-1.medium.com/max/1600/1*EmWRDRrgjGyQo-P6bnxXqg.jpeg)

### Easy changelogs

Every merged PR is tracked in the [version history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history)⁴. You can edit the title and description. I strongly recommend you do this immediately upon merging. Give it a descriptive title and a short summary of the changes this PR introduces as the description. This way you can scan the version history when you draft your changelog and quickly see what changed.

![Screenshot of Figma’s version history with named versions and descriptions.](https://cdn-images-1.medium.com/max/1600/1*6SangQfV_kxWTL_YpyyGjA.jpeg)

## Setup

To enable this process all you need to do is lock the Figma library files.

First make sure that being part of the Figma team your libraries are in only grants view access and not edit access.

To do this, navigate into the team or project and click the *“Share”* button. In the share dialog make sure the *“Members of YOURCOMPANY”* item is set to *“can view”*.

![Screenshot of Figma’s share project view, setting the team and org to “can view” permissions.](https://cdn-images-1.medium.com/max/1600/1*vExeAxdi-VBj6PJrOYXYFw.jpeg)

Now right click on a file and select share from the dropdown or open the share dialog from within the file.

![Illustration showing the context menu for an individual file which has a “Share” option.](https://cdn-images-1.medium.com/max/1600/1*k-mwEqNyYrNoBAlg-8GZzg.jpeg)

In the dialog set the item *“Anyone at YOURCOMPANY”* to *“can view”*. Now make sure only a few people who are supposed to merge pull requests have *“can edit”* rights.

![Screenshot of “Share this file” window](https://cdn-images-1.medium.com/max/1600/1*owmd1AHtNiuuO7ewILCYdA.jpeg)

You can grant edit rights by searching for the users in the input field and selecting “can edit” in the dropdown. Now press the *“Invite”* button.

If you want to see everyone with specific access rights, press on the third list item with the usernames. This will bring you to a list like the one shown here. Make sure to remove anyone who should not be able to directly edit the file or set their access rights to *“can view”*. E.g. if you need to grant view access to external users.

![Collaborator view with a few folks who have “can edit” permissions.](https://cdn-images-1.medium.com/max/1600/1*L7Ydu7xe6bvTMd8Ja5-6hg.jpeg)

With this change, only the people in the list can directly change the Figma file or merge pull requests.

## Workflow for making changes to the file

The workflow to change the library is pretty straight forward. Nevertheless, designers may be confused or annoyed in the beginning. In my experience it helps to explain the benefits of this approach and the problems it solves. I had no lasting issue with adoption.

To make any change it is a simple three step process:

### **1. Create a branch**

To create a branch, you simply open the file and click on *“X branches”* next to the filename.

![Screenshot of Figma’s header with the branches button](https://cdn-images-1.medium.com/max/1600/1*jdfT8bkX527BWcEXpSgOdg.jpeg)

In the window that opens you click on the *“+”* button and give the branch a name. I recommend encouraging folks to prefix their branches with their own name or handle. This avoids naming collisions and makes it easier to see who started a branch.

![Screenshot of the branch window in Figma](https://cdn-images-1.medium.com/max/1600/1*C8FooLegomq3JBezS0nGUw.jpeg)

Personally, I think there is no need for other naming conventions. `[Username]/[easy to understand title]` should do it. But this may differ for you.

![Screenshot of the create branch window in Figma](https://cdn-images-1.medium.com/max/1600/1*FqA7_Gq4qQVNaANL7-MZog.jpeg)

It is also good to introduce a policy for archiving old branches. For example, anything older than 12 months gets archived. Otherwise, you end up with a lot of unused branches.

### **2. Make your change**

Once your branch is created it opens as a new tab. You now have all edit rights in this branch and can go ahead and make any change you want to make.

I’d recommend keeping branches as small as possible. Try to only change one aspect per branch. For example, if you want to fix the banner and create a new card component, do this in two branches instead of one. `@username/banner-fix` and `@username/adding-card-component`.

### **3. Make a merge request**

Once you or whoever creates a branch is happy with the changes, it is time to send a merge request. To start this, simply press on the dropdown next to the branch title and select *“Review and merge changes…”*.

![Screenshot of the dropdown menu next to the file name](https://cdn-images-1.medium.com/max/1600/1*IllShC3YzFimwrtUIerCNA.jpeg)

The “Branch review” dialog that opens allows you to do two things:

**Update from main**

You can pull in updates from the main branch, for example if other branches have been merged in the meantime.

There is a flow for when merge conflicts arise. While it works fine most of the time, it can be a hassle. This is why you should try to keep branches open for as short as possible to avoid conflicts. It is better to merge multiple small changes, than to work on something large and run into a lot of conflicts.

**Request a review**

The other thing you can do in this dialog is to request a review. To do this, add one or multiple reviewers on the left and click the “Request review” button.

![Screenshot of the branch review window](https://cdn-images-1.medium.com/max/1600/1*Vgkq5QLN-xD8muCD-6MNUg.jpeg)

Another dialog will open, which allows you to add some notes.
You should describe all changes you made in bullet points, to help folks review your work.

![](https://cdn-images-1.medium.com/max/1600/1*czgLKM1n05bwDYS43AZ-7A.jpeg)

At least one of the reviewers should be an “owner” of the main library. This means they have the permissions to merge your branch once reviewed. However, you may want to add other reviewers who have specific domain knowledge. This could be another UX designers, an accessibility designer, a PM or a dev. It highly depends on the process in your company and the type of change you are trying to merge.

### **4. Merge the branch**

**Only file owners can perform this step.**
Once a merge request was sent, you get a notification in Figma and depending on your settings via email.

At work I set up a [slack integration](https://help.figma.com/hc/en-us/articles/360039829154-Get-Figma-notifications-in-Slack)⁵ so that every merge request gets posted in a channel for Figma library owners/maintainers.

When you open the merge request, you see the `Branch review` dialog. This allows you to review all changes. But you can also close it and directly review the branch file. Which one is better depends on the change.

For newly added components I would recommend checking out the file and testing an instance of the component.

If there are questions or things that need to be changed, you can leave some review notes.

To reopen the *“Branch review”* dialog open the dropdown next to the branch title and select *“Review and merge changes…”.*

Once you are happy with the changes simply click the `Merge branch` button in the `Branch review` dialog.

### 5. Rewrite history

While this is not strictly necessary I recommend naming every version resulting from a merge. This makes writing changelogs a lot easier.

To do this, open the version history by clicking the `Show version history` item in the dropdown next to the file name.

![Screenshot of Figma file dropdown menu, with the item “Show version history” included](https://cdn-images-1.medium.com/max/1600/1*meIl4MZmHORKK7fFn-zjtg.jpeg)

The version history will open in the right sidebar. Merge branches are indicated by an arrow that bends from the right onto the gray line.

Right click the item and select `Name this version` from the dropdown. A dialog opens that allows you to add a title and description.

![Screenshot of the edit version history dialog](https://cdn-images-1.medium.com/max/1600/1*munsOKr0xV-YYAqBJMYrhw.jpeg)

Add the information you would add to your changelog, so you can copy it later. Once you confirm your update with the `Save` button the item will be updated in the version history.

## Deprecation workflow

Trust is one of the most important things to acquire from your users. They need to trust that the Design System is a reliable tool in their workflow. Something that helps them work fast and efficiently. Not something that is making work harder and stands in their way.

This means you must be really careful to only break things when there is no other way. Try to make changes in a way that ensures backwards compatibility. But sometimes you can’t make a change in a backwards compatible way. In code you simply tag a new major version, but what do you do in Figma? You use the _deprecation workflow_.

The deprecation workflow means you add a new component and delete the existing one instead of changing it.

The benefit is that users who have the old component in their file can continue to work with it while getting the latest updates from the library. At the same time, you can change everything about the new component including layers and nesting.

### 1. Update vs. deprecation

The depreciation workflow has its own downsides, so you should only use it when necessary.

As a first step, evaluate if you should *update* or *deprecate* a component.

Always favor updating a component if the changes can be made without breaking existing instances of the component.

**Updates are great when:**

- renaming the component
- renaming existing properties
- changing the order of property values
- renaming existing property values including variant names
- updating descriptions or documentation links
- you change the preferred items of a switch instance property
- you expose nested properties
- adding new boolean, text or switch instance properties
- adding new variants without changing existing ones
- removing variants
- adding elements to a variant WITHOUT changing nesting of existing elements
- removing elements WITHOUT changing nesting of existing elements
- a component set (variants) is split into individual components
- components are combined into a component set (variants)

**Use deprecation when:**

- changing the nesting by adding or removing frames or groups
- a component is deleted without a replacement
- removing nested properties
- removing boolean, text or switch instance properties

### 2. add new component

Skip this step if you want to remove a component without a replacement.

Copy the existing component and change the copy. Alternatively create a new component with the **same name** as the old component. You can make any change you want.

### 3. rename old component

Our goal is to inform users that this component is deprecated and should no longer be used.

Luckily if a component is removed from a file, it will continue to be usable. We can use this to our advantage, a bit like staying on an old version of a package.

However, we must provide a way for people to notice that a component is deprecated. To do this we rename it. I like to add “*[DEPRECATED]”* at the end of the component name, and also prefix it with an emoji to grab attention, like “🛑”.

This means the original “Button” would be renamed to “🛑 Button [DEPRECATED]”.

I also overwrite the description of the component with something like:

> 🛑 DEPRECATED: This component has been deprecated, use the new “Button” component instead.

![Screenshot of component name and description of a deprecated component](https://cdn-images-1.medium.com/max/1600/1*MEDaj1sCHl2j0Zn0BZwwww.jpeg)

Now you need to publish your changes. This will make your new component available and update the name and description of the deprecated component.

### 4. delete old component

*Wait at least one to two weeks until you continue.*

The next step is to delete the deprecated component. To make sure people get the deprecation warning, you will need to wait a few days. Folks need to update the library so that the name of their component actually changes.

After a week or two, I assume that folks have updated their active Figma files. You can either delete the deprecated component now or hide it by prefixing the name with a *“.”* or *“_”*. So “🛑 Button [DEPRECATED]” becomes “_🛑 Button [DEPRECATED]”.

The *benefit* of hiding the element is that users can click on the “Go to main component in library” button and will be brought to the hidden component in the library. You can add some notes there to explain which component to use or why it was deprecated.

![Screenshot: Hidden button component with notes about replacement component.](https://cdn-images-1.medium.com/max/1600/1*H9LKnMJtNK0rrsDExvhdGA.jpeg)

### 5. publish

Once the deprecated component is either deleted or hidden, you need to publish this change to finish the process.

So, you publish twice. Once for the name change (e.g. adding deprecated) and adding the new component. And once, a week or two later, when you remove the deprecated component.

## Changelog

As the creator of a tool (e.g. a Figma library) a changelog seems boring. You already know what you changed, and people can just look at the library file right?

It seems logical, but it is not true for your users. While you work on the library every day, your users don’t. While you know all components by heart, your users may work with a few components. For them it is hard to tell if something significantly changed or if there was just a typo fixed.

Furthermore, if an update could break their work, they may choose to delay updating. As long as they don’t need the change right now. But it may be hard for some folks to tell if a change is breaking or not.

All those and more considerations are important for your users. An update that breaks their file may result in an entire day of fixing designs. If it is the end of a sprint or project, they may not have this time.

A changelog provides the necessary information to decide if they should update or not. This is why it is so important to have a changelog.

### How should you write a changelog?

A changelog has two types of readers. Type one are the TL;DR readers like managers and PMs. The others are the detailed readers. Those are mainly designers and developers who look for specific fixes and changes. Your changelog must work for both groups.

**Headline**

The headline should consist of the package name (e.g. “DesignSystemName Figma Library”) and the version number. This way people know instantly what they are looking at.

**Intro**

If you bundle many changes into one release, add a short paragraph describing what changed. If you have a lot of TL;DR readers, you may want to include this in all major and minor releases.

This is an example for a short intro text:

> Version 24.2.0 adds a Datepicker component and deprecates the DateInput component. You can now add an avatar to the MessageItem component. This version also includes fixes for 10 components including Button, ButtonGroup and Select.

**Details**

In the end of the changelog, list all changes in three categories: **breaking changes**, **updates** and **improvements**.

You can name them whatever makes sense, but they should map to the numbers that you use for the [SemVer](https://semver.org/)⁶ version. The categories should also make it obvious which changes may break a user’s file.

Especially for breaking changes and updates you may want to add pictures to the changelog. For example, to show a new component, or a new or removed variant.

![Screenshots can support by illustrating changes in the changelog](https://cdn-images-1.medium.com/max/1600/1*WNq3xz162lcVNoxp4ys82g.jpeg)

It is often enough to list improvements. Only add images if it is necessary.

### How should you share your changelogs

I would recommend sharing your changelogs in as many places as possible. This way you can make sure it reaches most users

This means:

**1. In Figma as a named version**
When users open the library file, they see the changes in the version history. You can change the “Components published” entry to something like `Version 7.2.0`. You can add your changelog or just a part of it, in the description field. This allows users to get an idea of the changes and understand if those are breaking changes or not.

**2. Outside of Figma in the design system docs, a github repo, etc.**
Figma is not the best place for docs, it is hard to find, hard to read, and not that accessible for non-designers. You should probably not add the entire changelog to Figma, but rather a summary. But where do you put the real changelog with all the details? The one that is important for designers, PMs and maybe even developers?

If you have a “design” repository on Github this may be a good place. Github does not require code changes to create a changelog. All you need to do is to create a new `tag` and add a release for it. We do this for our libraries: [Primer Figma Releases](https://github.com/primer/figma/releases)

Another good place is a page on your documentation website. Maybe within the design section or as part of the general changelog section. Just make sure you can link to the changelog for every version directly. This is important to share links in emails and on other social channels.

**3. Via social channels like slack, email, etc.**
The actual change notes are stored in Figma and on your docs website or repo. But you must make sure users actually see the changelogs. They may not only be interesting for designers and developers, but also for PMs and managers.

Not everyone uses Figma and only a few people browse the changelog page on your documentation page. To reach the rest I suggest sharing the link to the changelog with a short summary in as many channels as possible.

Great channels are:

- A Design, Brand or Design System newsletters
- A related intranet page
- Slack / Teams channels that are related (don’t be afraid to share this in multiple channels if the user groups differ between those channels)
- Social media channels if the system is open source

## Conclusion

Maintaining a design system in Figma is complex and should be done with care. Especially because users cannot decide which specific version they want to use, updates have to be done with backwards compatibility in mind.

Whenever you do change something, it is vital to inform everyone to avoid folks accidentally updating and breaking their file.

---

## References

1. [https://www.figma.com/best-practices/branching-in-figma/](https://www.figma.com/best-practices/branching-in-figma/)
2. [https://en.wikipedia.org/wiki/Distributed_version_control#Pull_requests](https://en.wikipedia.org/wiki/Distributed_version_control#Pull_requests)
3. [https://www.figma.com/dev-mode/](https://www.figma.com/dev-mode/)
4. [https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history](https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history)
5. [https://help.figma.com/hc/en-us/articles/360039829154-Get-Figma-notifications-in-Slack](https://help.figma.com/hc/en-us/articles/360039829154-Get-Figma-notifications-in-Slack)
6. [https://semver.org/](https://semver.org/)
