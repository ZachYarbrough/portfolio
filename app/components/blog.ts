import { PostMetadata } from "../types/blog";

import fs from "fs";
import matter from "gray-matter";

/**
 * Calculates the time to read a post based on the number of words in the post / the average reading speed of 200 words per minute.
 * 
 * @param {string} content - The content of the post
 * @returns {number} The time to read the post in minutes
 */
export const getTimeToRead = (content: string): number => {
    const wordsPerMinute = 238
    const words = content.split(' ').length
    return Math.ceil(words / wordsPerMinute)
}

/**
 * Retrieves an array of post slugs from markdown files in the posts directory and
 * removes the .md extension from each filename.
 * 
 * @returns {string[]} An array of post slugs (filenames without the .md extension)
 */
export const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8")
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date: matterResult.data.date.toISOString(),
            tags: matterResult.data.tags,
            timeToRead: getTimeToRead(matterResult.content),
            slug: fileName.replace(".md", "")
        }
    })

    return posts
}