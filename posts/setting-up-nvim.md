---
title: Setting Up My NeoVim
date: 2025-07-20
tags: [dev, neovim, vim]
---

> I used [The Primeagen's](https://www.youtube.com/@ThePrimeagen(ThePrimeagen)) video as a tutorial on setting up my initial config.

I have attempted multiple times over the past couple of years to 'master' vim, use the terminal as my dedicated IDE, and become an awesome pro hacker man. Since this seems to be a recurring interest and struggle, I decided to document the steps I take to build, or should I say re-build, my neovim configs. My hope is that I can use this file as a reference any time I need to refresh myself on my config files and never have to truly re-build my files again.



For the below commands and setup, I will assume that you are in a neovim editor.

To see the directory that neovim will look on your decive, type the below command.
```
:h rtp```

In order to create a new file, use the '%' sign.
```
%[file-name-here]```

**:so** - sources the current file you are editting