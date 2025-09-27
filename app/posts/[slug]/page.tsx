import { Post } from '@/app/types/posts'

import fs from 'fs'
import matter from 'gray-matter'
import { getMetadata, getTimeToRead } from '@/app/components/data'
import { formatDate, getTableOfContents } from '@/app/components/general'
import InternalLink from '@/app/components/InternalLInk'
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail'
import LeftSidebar from '@/app/components/LeftSidebar'
import RightSidebar from '@/app/components/RightSidebar'
import PageHeader from '@/app/components/PageHeader'
import BorderLine from '@/app/components/BorderLine'
import ContentFooter from '@/app/components/ContentFooter'
import MarkdownRenderer from '@/app/components/MarkdownRenderer'
import Head from 'next/head'
import { notFound } from 'next/navigation'

/**
 * Generates static paths for all posts
 * 
 * @returns {Array<{ slug: string }>} An array of objects with the slug of each post
 */
export const generateStaticParams = async () => {
  const posts = getMetadata('posts')
  if (!posts) notFound()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: any) {
  const post = getPostContent(params.slug)

  return {
    title: post?.title || '404 - Not Found' + ' | Zach Yarbrough',
    description: post?.description || '',
  }
}

/**
 * Retrieves the content of a post from a markdown file in the posts directory
 * 
 * @param {string} slug - The slug of the post to retrieve
 * @returns {Post} A Post object containing the post's metadata and content
 */
const getPostContent = (slug: string, isRelativePost: boolean = false): any => {
    try {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)

  if (isRelativePost) return {
    title: matterResult.data.title,
    slug: slug,
    folder: 'posts'
  }

  // Get headers with regex that matches the format '# Header', '## Header', etc.
  const headers = (matterResult.content + '\n').match(/(#+ .*\n)/g) || []
  const tableOfContents = getTableOfContents(headers)

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
    related: relatedPosts,
    content: matterResult.content
  }
    } catch (err) {
	console.log(err)
	return null
    }
} 


const PostPage = async ({ params }: any) => {
  const { slug } = await params
  const post: Post | null = getPostContent(slug)

  if (!post) notFound()

  return (
    <>
      <Head>
	<title>{post.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LeftSidebar />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <BreadcrumbTrail />
          <PageHeader>{post.title}</PageHeader>
          <p style={{ color: 'var(--secondary)' }}>{post.date} <span style={{ fontWeight: 'bolder'}}>∙</span> {post.timeToRead} min read</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0 1rem 0' }}>
            {post.tags.map((tag) => (
              <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`}>#{tag}</InternalLink>
            ))}
          </div>
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
