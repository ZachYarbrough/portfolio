import { Post } from '@/app/types/blog'

import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getTimeToRead } from '@/app/components/blog'

/**
 * Retrieves the content of a post from a markdown file in the posts directory
 * 
 * @param {string} slug - The slug of the post to retrieve
 * @returns {string} The content of the post
 */
const getPostContent = (slug: string): Post => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date.toISOString(),
        tags: matterResult.data.tags,
        timeToRead: getTimeToRead(matterResult.content),
        slug: slug,
        content: matterResult.content
    }
}

const PostPage = ({ params: { slug } }: any) => {
    const post: Post = getPostContent(slug)

    return (
      <div>
        <h1>{post.title}</h1>
        <Markdown>{post.content}</Markdown>
      </div>
    )
  }
  
  export default PostPage