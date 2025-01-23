import { Post } from '@/app/types/posts'

import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getMetadata, getTimeToRead } from '@/app/components/data'
import { formatDate, getTableOfContents } from '@/app/components/general'
import CodeBlock from '@/app/components/CodeBlock'
import Paragraph from '@/app/components/Paragraph'
import PostHeader from '@/app/components/PostHeader'
import BlockQuote from '@/app/components/BlockQuote'
import BulletLists from '@/app/components/BulletLists'
import InternalLink from '@/app/components/InternalLInk'
import PostLink from '@/app/components/PostLink'
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail'
import RightSidebar from '@/app/components/RightSidebar'
import PageHeader from '@/app/components/PageHeader'
import Image from '@/app/components/Image'

/**
 * Generates static paths for all posts
 * 
 * @returns {Array<{ slug: string }>} An array of objects with the slug of each post
 */
export const generateStaticParams = async () => {
  const posts = getMetadata('posts')
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
    description: matterResult.data.description,
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

const PostPage = async ({ params }: any) => {
  const slug = await params.slug
  const post: Post = getPostContent(slug)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <BreadcrumbTrail />
          <PageHeader>{post.title}</PageHeader>
          <p style={{ color: 'var(--secondary)' }}>{post.date}, {post.timeToRead} min read</p>
          <ul style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0 0 0' }}>
            {post.tags.map((tag) => (
              <InternalLink key={tag} useBubbleStyle={true} fileName={tag} link={'tags'}>#{tag}</InternalLink>
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
              h2: {
                component: PostHeader,
                props: {
                  headerNumber: 1.3
                }
              },
              h3: {
                component: PostHeader,
                props: {
                  headerNumber: 1.1
                }
              },
              h4: {
                component: PostHeader,
                props: {
                  headerNumber: 1
                }
              },
              blockquote: {
                component: BlockQuote
              },
              ul: {
                component: BulletLists
              },
              img: {
                component: Image
              }
            }
          }}>
            {post.content}
          </Markdown>
        </div>
      </div>
      <RightSidebar post={post} />
    </>
  )
}

export default PostPage