---
title: Portfolio File Structure
date: 2025-02-01
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

Or the about me could look like this:
- About Me
- Featured Projects (3 in a row)
- List of latest posts

### Left Side Bar

- Name
- search bar
- Home
- Projects
- Posts

Every

Should Projects and Posts be dropdowns that display the top most recent projects/posts? Or would that clutter the screen too much?
> I do not think so

# Test


### How Should the data be structured?

- Get All posts and Project .md files at start?
   - Is this necessary for the search functionality?

### Where is my data being stored?

- getPostMetadata() can be used to get all the posts
- gtProjectMetadata() will be created to get all the projects
- When searching can I use both functions? Should I add an optional filter to each function or perform it after fetching the data?

## Test 2


### How Should the data be structured? 2

- Get All posts and Project .md files at start?
   - Is this necessary for the search functionality?

### Where is my data being stored? 2

- getPostMetadata() can be used to get all the posts
- gtProjectMetadata() will be created to get all the projects
- When searching can I use both functions? Should I add an optional filter to each function or perform it after fetching the data?