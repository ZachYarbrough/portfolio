---
title: "Writing My First Neovim Plugin"
date: 10-04-2025
tags: [nvim, plugin, lua]
related: []
---

![todo-list-demo](/images/posts/todo-list-demo.gif)

One of the things I love most about using Neovim is how personalized you can make it. It’s not just a simple text editor, it’s a toolbox you can shape to fit exactly how you work. Plugins play a huge role in that, and with Lua as the configuration language, it’s surprisingly approachable to write your own.
Recently, I decided to invest some time learning lua to create my first Neovim plugin: [todo-list.nvim](https://github.com/ZachYarbrough/todo-list.nvim), and I wanted to take a moment to share it here.
# Idea
Like many developers, I sprinkle TODO, FIXME, and BUG comments throughout my code to keep track of tasks and problem areas. But it is common for me to write a TODO and forget about it, without a simple way to review them later. I’ve been using [todo-comments.nvim](https://github.com/folke/todo-comments.nvim/tree/main) to remedy this need, and it’s a great plugin with tons of features.
But after a bit of use I realized I wasn’t really taking advantage of everything it offered. What I wanted was something simpler, lighter-weight, and more personal to my workflow. I wanted a way to quickly scan my project for all my comments and view them in one place, without extra bells and whistles.
# How It Works
The plugin is straightforward.
It runs ripgrep under the hood to scan through your project and find any TODO, FIXME, or BUG comments.
It then aggregates those results into a clean list.
Finally, it opens the list in a floating window buffer right inside Neovim. You can then select the TODO you want to look at or update jump to it with ease.
It’s minimal by design: no highlights, no extra integrations—just a searchable, interactive list that gets out of your way when you don’t need it.
# Why This Matters
**todo-list.nvim** is simple, nothing fancy. I mostly built it to get some hands-on experience writing a Neovim plugin while experimenting with Lua. And honestly, it wasn’t as intimidating as I expected. Lua is easy to read and write, and Neovim’s API makes it possible to do powerful things with just a few lines of code.
This project reminded me why I love Neovim: you’re not locked into someone else’s vision of how things “should” work. You can pick and choose, and even build your own tools when you want something different.
# Wrapping Up
This plugin is small, a little rough around the edges, but built to fit my workflow perfectly. It’s helped me become more comfortable in the Neovim ecosystem, and because I made it myself, adding features or refining it as I continue using it will be relatively straightforward.

If you want to check it out, here’s the repo:
[todo-list.nvim](https://github.com/ZachYarbrough/todo-list.nvim) on GitHub. If you’ve ever thought about writing your own Neovim plugin, do it! Start small, experiment, and make Neovim truly yours.
