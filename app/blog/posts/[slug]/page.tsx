import { Post } from '@/app/types/blog'

import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata, getTimeToRead } from '@/app/components/blog'
import { formatDate } from '@/app/components/general'
import CodeBlock from '@/app/components/CodeBlock'
import Link from '@/app/components/Link'

/**
 * Generates static paths for all posts
 * 
 * @returns {Array<{ slug: string }>} An array of objects with the slug of each post
 */ 
export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({ slug: post.slug }))
}

/**
 * Retrieves the content of a post from a markdown file in the posts directory
 * 
 * @param {string} slug - The slug of the post to retrieve
 * @returns {Post} A Post object containing the post's metadata and content
 */
const getPostContent = (slug: string): Post => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return {
        title: matterResult.data.title, 
        subtitle: matterResult.data.subtitle,
        date: formatDate(matterResult.data.date),
        tags: matterResult.data.tags,
        timeToRead: getTimeToRead(matterResult.content),
        slug: slug,
        content: matterResult.content
    }
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
    const paramObj = await params
    const post: Post = getPostContent(paramObj.slug)
    return (
      <div>
        <h1>{post.title}</h1>
        <p className='text-highlight'>{post.date}, {post.timeToRead} min read</p>
        <article className='prose lg:prose-xl'>
        <Markdown options={{
            overrides: {
              code: {
                component: CodeBlock
              },
              a: {
                component: Link,
              }
            }
          }}>{post.content}</Markdown>
        </article>
      </div>
    )
  }
  
  export default PostPage