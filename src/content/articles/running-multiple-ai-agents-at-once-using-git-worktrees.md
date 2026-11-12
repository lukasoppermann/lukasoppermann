---
title: "Running Multiple AI Agents at Once Using Git Worktrees"
url: "https://lukasoppermann.medium.com/running-multiple-ai-agents-at-once-using-git-worktrees-57759e001d7a"
published: "2026-01-27"
excerpt: "Strategies for increasing productivity with long-running AI agents."
---

---

![Cover image for: Running Multiple AI Agents at Once Using Git Worktrees](https://cdn-images-1.medium.com/max/2400/1*f_jTCV2vPOPehHzfShgVSA.jpeg)

## The Agent is the bottleneck

### The Problem

Running a local agent effectively “*locks*” your workspace. While an agent is busy with code generation or long-running evaluations, you are tied to that specific branch. Switching branches to handle a separate task risks breaking the agent’s execution or creating a mess of uncommitted changes.

Cloning the repository into multiple separate folders is a common workaround, but it is inefficient. It duplicates the entire `.git` history, consumes excessive disk space, and makes managing synchronized updates between copies a logistical headache.

### The Solution

Git Worktrees¹. Instead of cloning, worktrees allow you to attach multiple independent working directories to a single repository. Think of them as *“parallel universes”*: each agent gets its own folder and branch, enabling five agents to operate on five different tasks simultaneously from one source.

Once a task is complete, you simply merge the worktree branch into main. Deleting the worktree folder leaves no trace, no redundant clones, no configuration drift, and no idle time.

## Simultaneous Agents with Git Worktrees

A worktree is a linked copy of your project that shares the same history but lives in a different folder. We will look at a more convenient way of managing this later, but first let’s look at how we can do this with Git natively.

The process is rather simple, first you need to create a new worktree from within your project

```bash
<span class="pre--content">git worktree add ../agent-folder feature-branch</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Bash<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

This commands creates a sibling folder `agent-folder` and in this folder checks out the branch `feature-branch`.

You can view all work trees with the list command:

```bash
<span class="pre--content">git worktree list</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Bash<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

And once you are done and have merged your PR, you use this for other tasks or simply remove the worktree folder:

```bash
<span class="pre--content">git worktree remove ../agent-folder</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Whenever you create a new worktree you need to manually install dependencies and set up the environment. Luckily there is an even easier solution.

## A better approach

Worktrees solve the problem, but the UX is not fantastic. Luckily there is a package that comes with a great UX: `[@johnlindquist/worktree](https://www.npmjs.com/package/@johnlindquist/worktree)`²

The package automates the tedious parts of native worktrees. It handles stashing your work, installing packages, and opening your editor in one step. And it can remove everything once you are done.

### Installation

Setup is as simple as globally installing an npm package.

```bash
<span class="pre--content">npm install -g @johnlindquist/worktree</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

Once done you are ready to use the `wt` command to manage your work trees.

If you want some more automation, you need to create a `worktrees.json` file in any repo you want to use this in. Now you can define the steps that should be run upon creating the new worktree so that you can immediately jump into prompting your agent.

```json
<span class="pre--content"><span class="hljs-punctuation">{</span><br>  <span class="hljs-attr">"setup-worktree"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><br>    <span class="hljs-string">"npm install"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-string">"cp $ROOT_WORKTREE_PATH/.local.env .local.env"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-string">"echo 'Setup complete'"</span><br>  <span class="hljs-punctuation">]</span><br><span class="hljs-punctuation">}</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">JSON<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### Git alias for more convenience

By default the `worktrees.json` setup script only runs when you run `wt setup`. However, if like me, you want this to run on `wt new` as well, simply create a function in your `.zshrc` or `.bashrc` .

```bash
<span class="pre--content"><span class="hljs-function"><span class="hljs-title">wt</span></span>() {<br>  <span class="hljs-keyword">if</span> [[ “<span class="hljs-variable">$1</span>” == “new” ]]; <span class="hljs-keyword">then</span><br>    <span class="hljs-comment"># run setup instead if new</span><br>    <span class="hljs-built_in">command</span> wt setup “<span class="hljs-variable">${@:2}</span>” — trust<br>  <span class="hljs-keyword">else</span><br>    <span class="hljs-comment"># fall back to original</span><br>    <span class="hljs-built_in">command</span> wt “<span class="hljs-variable">$@</span>”<br>  <span class="hljs-keyword">fi</span><br>}</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

## The workflow: Running Multiple Agents Simultaneously

With everything setup you can now enjoy the power of running **multiple local agents** on different branches at the same time. The workflow is fairly simple.

Using the terminal you navigate to your project and create a new worktree:

```bash
<span class="pre--content"><span class="hljs-comment"># navigate to project</span><br><span class="hljs-built_in">cd</span> projects/my-app<br><br><span class="hljs-comment"># create new worktree</span><br>wt new feature-darkmode</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

A new worktree folder named `[folder-name]-[branchname]` (e.g., `my-app-feature-darkmode`) is created automatically.

You can view the worktrees using `wt ls`, or via the standard `git branch` command. In your branch list, active worktrees are identified by a `+` prefix.

```bash
<span class="pre--content">> git branch<br> * main <span class="hljs-comment"># current branch</span><br> design-tokens<br> + feature-darkmode <span class="hljs-comment"># worktree</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Bash<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

A new branch, `feature-darkmode` in this example, is created automatically.

You can manage this branch like any other, but Git prevents you from checking out a branch that is already active in another worktree. This safeguard prevents file conflicts.

Once your agent completes its task, simply push and merge the branch as usual. Since all worktrees share the same underlying repository history, your changes are immediately visible across all environments. After merging, you can safely delete the worktree folder using the `wt rm` command, the branch itself remains in your Git history until you choose to delete it.

```bash
<span class="pre--content">wt <span class="hljs-built_in">rm</span> feature-darkmode</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

### PRs & existing branches

If you want to work on an existing PR or branch, you can do this as well.

To open a new worktree with an existing branch use `extract` followed by the branch name.

```bash
<span class="pre--content">wt extract existing-branch</span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Bash<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

To open a PR *(from GitHub by default, but you can change this in the settings)* use `pr` followed by the PR number.

```bash
<span class="pre--content">wt <span class="hljs-built_in">pr</span> <span class="hljs-comment">#357</span></span><div contenteditable="false" class="codeBlockMenu-button u-noUserSelect u-ignoreBlock">Auto (Bash)<span class="svgIcon svgIcon--codeBlockChevron svgIcon--19px"><svg class="svgIcon-use" width="19" height="19" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_1082_12841)"><path d="M8.354 9.646a.5.5 0 10-.708.708l.708-.708zM12 14l-.354.354a.5.5 0 00.708 0L12 14zm4.354-3.646a.5.5 0 00-.708-.708l.708.708zm-8.708 0l4 4 .708-.708-4-4-.708.708zm4.708 4l4-4-.708-.708-4 4 .708.708z" fill="currentColor"></path></g></svg></span></div>
```

---

## TL;DR

Use **Git Worktrees** to run multiple local AI agents on different branches of the same repo.
Use the `[@johnlindquist/worktree](https://www.npmjs.com/package/@johnlindquist/worktree)`² package (`wt` CLI) for an improved UX to create an manage worktrees.

The `worktrees.json` file lets you automatically run `npm install`, copy `.env` files or do other setup tasks when creating the worktree.

---

1. [https://git-scm.com/docs/git-worktree](https://git-scm.com/docs/git-worktree)
2. [https://www.npmjs.com/package/@johnlindquist/worktree](https://www.npmjs.com/package/@johnlindquist/worktree)
