import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getBacklink, getMetadata, getTimeToRead } from '@/app/components/data'
import { formatDate, getTableOfContents } from '@/app/components/general'
import CodeBlock from '@/app/components/CodeBlock'
import Paragraph from '@/app/components/Paragraph'
import projectHeader from '@/app/components/PostHeader'
import BlockQuote from '@/app/components/BlockQuote'
import BulletLists from '@/app/components/BulletLists'
import InternalLink from '@/app/components/InternalLInk'
import projectLink from '@/app/components/PostLink'
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail'
import RightSidebar from '@/app/components/RightSidebar'
import PageHeader from '@/app/components/PageHeader'
import Image from '@/app/components/Image'
import BorderLine from '@/app/components/BorderLine'
import { Post } from '@/app/types/posts'
import ContentFooter from '@/app/components/ContentFooter'

/**
 * Generates static paths for all projects
 * 
 * @returns {Array<{ slug: string }>} An array of objects with the slug of each project
 */
export const generateStaticParams = async () => {
  const projects = getMetadata('projects')
  return projects.map((project) => ({ slug: project.slug }))
}

/**
 * Retrieves the content of a project from a markdown file in the project directory
 * 
 * @param {string} slug - The slug of the project to retrieve
 * @returns {Post} A Post object containing the post's metadata and content
 */
const getProjectContent = (slug: string): Post => {
  const folder = 'projects/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)

  // Get headers with regex that matches the format '# Header', '## Header', etc.
  const headers = (matterResult.content + '\n').match(/(#+ .*\n)/g) || []
  const tableOfContents = getTableOfContents(headers)

  // Get backlinks with regex that matches the format '](link.md)'
  const backlinks = (matterResult.content + '\n').match(/\]\(([^ ]+?)\.md\)/g) || []
  const formattedBacklinks = [...new Set(backlinks)].map((backlink) => getBacklink(backlink))

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

const ProjectPage = async ({ params }: any) => {
  const slug = await params.slug
  console.log(slug)
  const project: Post = getProjectContent(slug)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          <BreadcrumbTrail />
          <PageHeader>{project.title}</PageHeader>
          <p style={{ color: 'var(--secondary)' }}>{project.date}</p>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0 1rem 0' }}>
            {project.tags.map((tag: string) => (
              <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`}>#{tag}</InternalLink>
            ))}
          </ul>
          <Markdown options={{
            overrides: {
              code: {
                component: CodeBlock
              },
              a: {
                component: projectLink,
              },
              p: {
                component: Paragraph
              },
              h1: {
                component: projectHeader,
                props: {
                  headerNumber: 1.5
                }
              },
              h2: {
                component: projectHeader,
                props: {
                  headerNumber: 1.3
                }
              },
              h3: {
                component: projectHeader,
                props: {
                  headerNumber: 1.1
                }
              },
              h4: {
                component: projectHeader,
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
            {project.content}
          </Markdown>
        </div>
      </div>
      <RightSidebar post={project} />
      <BorderLine />
      <ContentFooter post={project} />
    </>
  )
}

export default ProjectPage
