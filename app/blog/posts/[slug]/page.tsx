import { Post } from '@/app/types/blog'

import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata, getTableOfContents, getTimeToRead } from '@/app/components/blog'
import { formatDate } from '@/app/components/general'
import CodeBlock from '@/app/components/CodeBlock'
import PostLink from '@/app/components/PostLink'
import Paragraph from '@/app/components/Paragraph'
import PostHeader from '@/app/components/PostHeader'
import Sidebar from '@/app/components/Sidebar'

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

  // Get headers with regex that matches the format '# Header', '## Header', etc.
  const headers = (matterResult.content + '\n').match(/(#+ .*\n)/g) || []
  const tableOfContents = getTableOfContents(headers)

  // Get backlinks with regex that matches the format '](link.md)'
  const backlinks = (matterResult.content + '\n').match(/\]\(([^ ]+?)\.md\)/g) || []
  const formattedBacklinks = [...new Set(backlinks.map((backlink) => backlink.split('](')[1].replace('.md)', '')))]

  return {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    date: formatDate(matterResult.data.date),
    tags: matterResult.data.tags,
    headers: headers,
    tableOfContents: tableOfContents,
    timeToRead: getTimeToRead(matterResult.content),
    slug: slug,
    backlinks: formattedBacklinks,
    content: matterResult.content
  }
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const paramObj = await params
  const post: Post = getPostContent(paramObj.slug)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '2rem', margin: '0 0 0 0', fontWeight: '700', lineHeight: '1' }}>{post.title}</h1>
        <p style={{ color: 'var(--secondary)' }}>{post.date}, {post.timeToRead} min read</p>
        <ul style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem 0 0 0' }}>
          {post.tags.map((tag) => (
            <li className='text-primary' style={{ 
              lineHeight: '1.2rem',
                padding: '0.2rem 0.4rem',
                fontWeight: 'bold',
                color: 'var(--highlight)',
                backgroundColor: 'var(--secondary-light)',
                borderRadius: '0.4rem'
             }} key={tag}>#{tag}</li>
          ))}
        </ul>
        <Markdown options={{
          overrides: {
            code: {
              component: CodeBlock
            },
            a: {
              component: PostLink,
            },
            p: {
              component: Paragraph
            },
            h1: {
              component: PostHeader,
              props: {
                headerNumber: 1.5
              }
            },
            h3: {
              component: PostHeader,
              props: {
                headerNumber: 1.1
              }
            }
          }
        }}>
          {post.content}
        </Markdown>
      </div>
      <Sidebar post={post} />
    </div>
  )
}

export default PostPage