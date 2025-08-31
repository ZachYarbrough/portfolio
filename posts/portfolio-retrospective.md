---
title: Portfolio Retrospective 
date: 08-17-2025
tags: [blog, website, retrospective, nextjs, markdown]
related: [why-blog]
---

I plan to write a retrospective for every project I showcase on this site, so it feels fitting to start with a retrospective of the site itself.

# Goals

In my post [Why I Decided to Start a Blog](posts/why-blog), I touched on some of my broader motivations. This time, I want to dive into the technical side of the portfolio. My [old portfolio site](https://www.zachyarbrough.github.io) was hard to maintain — updating projects was cumbersome, and adding my resume as a page meant keeping two sources of truth. I also wanted a space for blog posts, so smaller projects that didn’t quite fit in the main projects tab could still be shared.

Building the new site gave me a chance to deepen my understanding of Node.js's [File System (fs)](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) module and [Next.js](https://nextjs.org/docs), while also restructuring all content to live in markdown files. Every post and project is written in markdown, and the site reads and renders them dynamically using the fs module. I had used the fs module before in projects like README generators, but this was a chance to explore it more thoroughly and build a maintainable system from the ground up.

# What Went Well
One of the biggest successes of this project was the workflow I built around writing content in markdown. By integrating the fs module, I was able to read and render markdown files dynamically, which made adding new posts and projects a simple, streamlined process. This was the first time I fully leveraged the fs module in a portfolio project, and it gave me a much deeper understanding of how to interact with the file system programmatically in a real-world application. I also learned how to handle tasks like dynamically resolving internal links, organizing content directories, and ensuring that the site could scale as I added more projects and posts over time.

I also found the dynamic routing via from Next.js surprisingly straightforward and powerful. Each markdown post or project could be rendered automatically based on its slug, which, when combined with the fs module, created a fully dynamic system with minimal boilerplate. The project structure itself (you can check out [here](https://github.com/ZachYarbrough/portfolio)), helped keep everything organized: markdown content lives in a dedicated directory, utilities for reading files are separated from components, and pages are cleanly mapped to routes. This combination of fs-driven content and Next.js rendering struck the right balance between flexibility and maintainability.

Another win was the overall design of the site — it feels cleaner and more modern than my old portfolio, and the structure makes it easy for visitors to navigate while keeping the development workflow efficient and maintainable.

# Challenges
The main challenge was figuring out how to handle links and references between posts. Since everything lives as markdown files, I had to implement a system for resolving internal links so that they wouldn’t break—a challenge that, once solved, made the workflow smooth and scalable.

I also ran into consistency issues between my local site and production. Some links worked fine locally but broke once deployed, especially when reading file paths or handling host configurations. Debugging that taught me a lot about how Next.js resolves paths differently across environments and gave me a better understanding of deployment pipelines.

Another big challenge was content parsing and styling. I used [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) along with custom components to render posts. The hardest part to get right was the CodeBlock component. Making sure code snippets were styled cleanly and consistently took a lot of iteration, but it really improved the readability of technical posts. 
```ts
// Here is an example
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}.`);
  }
}

const zach = new Person("Zach Yarbrough", 26);
zach.greet();
```

Finally, I had to be intentional about not over-engineering the project. It was tempting to add more features than necessary, but maintaining focus ensured the site stayed lightweight, maintainable, and user-friendly.

# Lessons Learned
This project reinforced the value of simplicity. By keeping the tech stack focused and relying on markdown for content, I built a system that’s easy to maintain and extend in the future. I also learned more about the practical trade-offs of working with Next.js — what it simplifies, and where you need to dig deeper.

**Repository:** [https://github.com/ZachYarbrough/portfolio](https://github.com/ZachYarbrough/portfolio)
