import { Post } from '@/app/types/posts'

import fs from 'fs'
import matter from 'gray-matter'
import { getBacklink, getMetadata, getTimeToRead } from '@/app/components/data'
import { formatDate, getTableOfContents } from '@/app/components/general'
import InternalLink from '@/app/components/InternalLInk'
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail'
import LeftSidebar from '@/app/components/LeftSidebar'
import RightSidebar from '@/app/components/RightSidebar'
import PageHeader from '@/app/components/PageHeader'
import BorderLine from '@/app/components/BorderLine'
import ContentFooter from '@/app/components/ContentFooter'
import MarkdownRenderer from '@/app/components/MarkdownRenderer'

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
const getPostContent = (slug: string, isRelativePost: boolean = false): any => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)

  if (isRelativePost) return {
    title: matterResult.data.title,
    slug: slug
  }

  // Get headers with regex that matches the format '# Header', '## Header', etc.
  const headers = (matterResult.content + '\n').match(/(#+ .*\n)/g) || []
  const tableOfContents = getTableOfContents(headers)

  // Get backlinks with regex that matches the format '](link.md)'
  const backlinks = (matterResult.content + '\n').match(/\]\(([^ ]+?)\.md\)/g) || []
  const formattedBacklinks = [...new Set(backlinks)].map((backlink) => getBacklink(backlink))

  const relatedPosts = matterResult.data.related ? matterResult.data.related.map((post: any) => getPostContent(post, true)) : []

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
    related: relatedPosts,
    content: matterResult.content
  }
} 


const PostPage = async ({ params }: any) => {
  const slug = await params.slug
  const post: Post = getPostContent(slug)

  return (
    <>
      <LeftSidebar />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <BreadcrumbTrail />
          <PageHeader>{post.title}</PageHeader>
          <p style={{ color: 'var(--secondary)' }}>{post.date}, {post.timeToRead} min read</p>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0 1rem 0' }}>
            {post.tags.map((tag) => (
              <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`}>#{tag}</InternalLink>
            ))}
          </ul>
          <MarkdownRenderer content={post.content} />        
	  </div>
      </div>
      <RightSidebar post={post} />
      <BorderLine />
      <ContentFooter post={post} /> 
    </>
  )
}

export default PostPage
