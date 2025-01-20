---
title: Portfolio File Structure
date: 2025-01-21
tags: [blog, portfolio, side-project]
---




> Portfolio Architecture

```
/ -- Home Page
|__ posts -- posts from blogs
|  |__ [slug] -- individual post preview
|__ tags -- tag index for posts and projects
|  |__ [tag] -- individual tag index list page
|__ projects -- list of projects
   |__ [project] -- individual project page```

The About Me page will consist of the following:
- About Me
   - Should I do timeline of my life? Or is that too much?
   - A cool idea would be to use the dates as tags and display the posts/projects in chronological order (but that is a lot of work and I don't think it's necessary)
- Latest Blog Posts (1/2 the page)
- Latest Projects (2/2 the page)

### Left Side Bar

- Name
- search bar
- Home
- Projects
- Posts

Every

Should Projects and Posts be dropdowns that display the top most recent projects/posts? Or would that clutter the screen too much?
> I do not think so


### How Should the data be structured?

- Get All posts and Project .md files at start?
   - Is this necessary for the search functionality?