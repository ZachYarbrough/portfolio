import { Post } from '@/app/types/blog'

import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata, getTableOfContents, getTimeToRead } from '@/app/components/blog'
import { formatDate } from '@/app/components/general'
import CodeBlock from '@/app/components/CodeBlock'
import Link from '@/app/components/Link'
import Paragraph from '@/app/components/Paragraph'
import PostHeader from '@/app/components/PostHeader'
import TableOfContent from '@/app/components/TableOfContent'
import BackLinks from '@/app/components/BackLinks'

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
  const headers = (matterResult.content + '\n').match(/(#+ .*\n)/g) || []
  const tableOfContents = getTableOfContents(headers)

  return {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    date: formatDate(matterResult.data.date),
    tags: matterResult.data.tags,
    headers: headers,
    tableOfContents: tableOfContents,
    timeToRead: getTimeToRead(matterResult.content),
    slug: slug,
    backlinks: matterResult.data.backlinks,
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
        <Markdown options={{
          overrides: {
            code: {
              component: CodeBlock
            },
            a: {
              component: Link,
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
      <div style={{ position: 'fixed', top: '10rem', right: '15rem' }}>
        {Object.keys(post.tableOfContents).length > 0 && <TableOfContent tableOfContents={post.tableOfContents} />}
        <BackLinks backlinks={post.backlinks || []} />
      </div>
    </div>
  )
}

export default PostPage