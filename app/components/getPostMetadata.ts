import { PostMetadata } from "../types/blog";

import fs from "fs";
import matter from "gray-matter";

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
            slug: fileName.replace(".md", "")
        }
    })

    return posts
}