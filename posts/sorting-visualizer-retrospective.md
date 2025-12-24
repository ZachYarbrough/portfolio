---
title: Sorting Visualizer Retrospective 
date: 09-16-2025
tags: [retrospective, react, sorting, algorithms]
related: []
---

# Goals
My main goal for this project was to gain a deeper understanding of sorting algorithms. I’ve always found that visualizing complex concepts helps me learn more effectively, so I wanted to create an interactive way to explore how these algorithms work in practice. Building a visualization tool gave me the chance to study the algorithms closely while also sharpening my frontend development skills.
# What Went Well
I’m especially proud of how the site’s visual style turned out. I used Edwin’s article, [Retro CRT terminal screen in CSS + JS](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh), as inspiration to give the site a mock CRT aesthetic. This retro look gives the project a unique personality and makes the experience more engaging.

On the functional side, I’m happy with how responsive the chart feels. Adjusting the speed mid-simulation works seamlessly, and the visualization updates immediately without breaking. Additionally, clicking any control button resets the graph smoothly, which makes it easy to restart and experiment with different algorithms without hassle.
# Challenges
One challenge I ran into was making sure the visualizations accurately represented the steps of each algorithm while still being easy to follow. A literal translation of the algorithm into animations didn’t always “look right” from the user’s perspective. For example, some swaps or comparisons happened so quickly in code that the animation looked jarring or confusing when played out. I had to strike a balance between staying true to the underlying algorithm and presenting it in a way that users could visually digest. This sometimes meant slowing down certain steps, highlighting key operations, or adding small pauses to emphasize what was happening.

Another challenge was synchronizing the animations with the actual algorithm logic. Since the algorithm runs step-by-step in code, I had to carefully coordinate the timing of each visual change so it matched the logical state of the array at that moment. If the animations ran slightly ahead or behind the algorithm, the visualization could become misleading. Managing this required fine-tuning delays, making use of JavaScript’s asynchronous functions, and debugging situations where animations overlapped or skipped steps. Getting the timing right was critical to ensuring the visualization felt both smooth and accurate.
# Lessons Learned
Through this project, I learned the value of careful planning when it comes to visualizations. Even small UI details—like how buttons reset the simulation—make a big difference in how smooth and intuitive the experience feels. I also got a stronger grasp of the inner workings of sorting algorithms by coding the visual representations from scratch rather than just studying theory.
# Future Improvements
If I decide to revisit this project, I’d like to expand the range of algorithms supported, possibly adding more advanced ones like radix sort. I’d also love to polish the user experience further by including tooltips, step-by-step walkthroughs, and maybe even comparisons between algorithms so users can see efficiency differences in real time. Finally, I could improve performance on larger datasets, making the simulation feel even smoother.

**Live Site:** https://sorting-visualizer-m8cx.vercel.app

**Reopsitory:** https://github.com/zachyarbrough/sorting-visualizer
