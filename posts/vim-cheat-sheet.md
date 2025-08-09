---
title: Vim Cheat Sheet
date: 08-10-2025
tags: [dev, vim]
published: true
---

> This is a living document where I will store commands I want to memorize in vim.

A vim motion consists of three parts:
- **command** the type of action being performed (i.e. 'd', 'y')
- **count** the number of times to perform the motion (i.e. '5', '3')
- **motion** the type of motion (i.e. 'w', 'b')

### Basic Movement

- 'w' - move to the next word
- 'b' - move to the previous word
- 'e' - move to the end of the word
- '0' - move to the beginning of the line
- '$' - move to the end of the line

You can use the count part of the vim command to move to the nth word or line.

i.e. '5w' - move to the 5th word

### Spell Check

In order to toggle spell check on/off, use the ':set spell' and ':set nospell' commands.

- ']s' - jump to the next misspelled word
- '[s' - jump to the previous misspelled word
- 'z=' - display suggested replacements
- 'zg' - add the selected word to the dictionary
- 'zw' - remove the selected word from the dictionary

Helpful Links:
- [Vim Cheat Sheet](https://vim.rtorr.com/)
