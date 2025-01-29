import { PostMetadata } from '../types/posts';

import fs from 'fs';
import matter from 'gray-matter';
import { formatDate, getTableOfContents } from './general';

/**
 * Calculates the time to read a post based on the number of words in the post / the average reading speed of 238 words per minute.
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
 * Retrieves the title and link of a post from a markdown file in the posts directory
 * 
 * @param {string} post - The post to retrieve
 * @returns {Object} An object containing the title and link of the post
 */
export const getRelativePosts = (post: string) => {
    const file = `${post}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    
    return {
	    title: matterResult.data.title,
	    link: post
    }
}

/**
 * Retrieves metadata from markdown files in the specified directory.
 * Files are sorted by date in descending order.
 * 
 * @param {string} folder - The folder path to get markdown files from (defaults to '/')
 * @param {number} amount - Optional limit on number of posts to return (0 returns all)
 * @returns {PostMetadata[]} Array of post metadata objects containing title, description, date, tags, etc
 */
export const getMetadata = (folder: string = '', amount: number = 0): PostMetadata[] => {
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)
        const headers = ( matterResult.content + '\n').match(/(#+ .*\n)/g) || []

        const tableOfContents = getTableOfContents(headers)

        return {
            tableOfContents: tableOfContents,
            headers: headers,
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: formatDate(matterResult.data.date),
            source: matterResult.data.source,
            live: matterResult.data.live,
            tags: matterResult.data.tags || [],
            preview: matterResult.data.preview,
            related: matterResult.data.related || [],
            backlinks: matterResult.data.backlinks,
            timeToRead: getTimeToRead(matterResult.content),
            slug: fileName.replace('.md', ''),
        }
    })

    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return amount > 0 ? sortedPosts.slice(0, amount) : sortedPosts
}

/**
 * Retrieves the title and backlink of a post from a markdown file in the posts directory
 * 
 * @param {string} backlink - The backlink to retrieve
 * @returns {Object} An object containing the title and backlink of the post
 */
export const getBacklink = (backlink: string) => {
    const link = backlink.split('](')[1].replace('.md)', '')
    const file = `${link}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
  
    return {
      title: matterResult.data.title,
      backlink: link 
    }
  }
