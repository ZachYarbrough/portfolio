---
title: "Writing My First Neovim Plugin"
date: 10-04-2025
tags: [nvim, plugin, lua]
related: []
---

![todo-list-demo](/images/posts/todo-list-demo.gif)

One of the things I love most about using Neovim is how personalized you can make it. It’s not just a simple text editor, it’s a toolbox you can shape to fit exactly how you work. Plugins play a huge role in that, and with Lua as the configuration language, it’s surprisingly approachable to write your own.
Recently, I decided to try my hand at it and write my very first Neovim plugin: [todo-list.nvim](https://github.com/ZachYarbrough/todo-list.nvim).
# Idea
Like many developers, I rely on TODO, FIXME, and BUG comments in my code to track small tasks or problem areas. I’ve been using [todo-comments.nvim](https://github.com/folke/todo-comments.nvim/tree/main) for a bit, and it’s a fantastic plugin with tons of features.
But after a bit of use I realized I wasn’t really taking advantage of everything it offered. What I wanted was something simpler, lighter-weight, and more personal to my workflow. I wanted a way to quickly scan my project for all my notes and view them in one place, without extra bells and whistles.
# How It Works
The plugin is pretty straightforward:
It runs ripgrep under the hood to scan through your project and find any TODO, FIXME, or BUG comments.
It then aggregates those results into a clean list.
Finally, it opens the list in a floating window buffer right inside Neovim. You can then select the TODO you want to look at or update jump to it with ease.
It’s minimal by design: no highlights, no extra integrations—just a searchable, interactive list that gets out of your way when you don’t need it.
# Why This Matters
For me, building this plugin wasn’t just about getting a tool I wanted (though it does make my workflow smoother). It was also about finally dipping my toes into writing my own Neovim plugin.
And honestly, it wasn’t as intimidating as I thought. Lua is easy to read and write, and Neovim’s API makes it possible to do powerful things with just a few lines of code.
This project reminded me why I love Neovim: you’re not locked into someone else’s vision of how things “should” work. You can pick and choose, and even build your own tools when you want something different.
# Wrapping Up
todo-list.nvim is small, a little rough around the edges, and definitely not trying to compete with bigger plugins. But that’s exactly what I like about it. It’s mine, it fits my workflow, and it got me more comfortable in the Neovim ecosystem.

If you want to check it out, here’s the repo:
[todo-list.nvim](https://github.com/ZachYarbrough/todo-list.nvim) on GitHub. If you’ve ever thought about writing your own Neovim plugin, do it! Start small, experiment, and make Neovim truly yours.
