---
title: Portfolio Retrospective 
date: 08-17-2025
tags: [blog, website, retrospective, nextjs, markdown]
related: [why-blog]
---

I plan to write a retrospective for every project I showcase on this site, so it feels fitting to start with a retrospective of the site itself.

# Goals

In my [Why I Decided to Start a Blog](posts/why-blog) post, I touched on some of my broader motivations. Here, I want to focus on the technical goals I had while building this project.

First, I wasn't satisfied with my [old portfolio site](https://zachyarbrough.github.io). I wanted a cleaner, more maintainable codebase that I could update easily over time. I also wanted a dedicated space for blog posts — somewhere I could highlight smaller projects that don't quite belong in the main projects tab but are still worth sharing.

Second, I saw this as an opportunity to deepen my understanding of Node.js's [File System (fs)](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) module and [Next.js](https://nextjs.org/docs). I had used the fs module before in projects like README generators, but I wanted to revisit the tool and explore it more thoroughly.

Finally, I wanted to structure the site so that all content lives in markdown files. Each post and project is written in markdown, and the site uses the fs module to read and render them dynamically.

# What Went Well
One of the biggest successes of this project was the workflow I created around writing in markdown. Once I had the file system integration set up, adding new posts and projects became a simple, streamlined process. I also felt that the combination of Next.js with markdown struck the right balance between flexibility and maintainability. Another win was the overall design of the site — it feels cleaner and more modern than my old portfolio, and it’s structured in a way that makes it easier for visitors to navigate.

# Challenges
The main challenge was figuring out how to handle links and references between posts. Since everything lives as markdown files, I had to implement a system for resolving internal links so that they wouldn’t break. 

There were also some learning curves with Next.js—particularly around dynamic routing and server-side rendering—that took extra time to work through. Finally, I had to be intentional about not over-engineering the project. It was tempting to add more features than necessary, but I wanted to keep the site lightweight and focused.

# Lessons Learned
This project reinforced the value of simplicity. By keeping the tech stack focused and relying on markdown for content, I built a system that’s easy to maintain and extend in the future. I also learned more about the practical trade-offs of working with Next.js—what it simplifies, and where you need to dig deeper.

**Repository:** [https://github.com/ZachYarbrough/portfolio](https://github.com/ZachYarbrough/portfolio)
