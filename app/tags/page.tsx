import { NextPage } from 'next';
import { getMetadata } from '../components/data';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import ItemCount from '../components/ItemCount';
import PageHeader from '../components/PageHeader';
import TagHeader from '../components/TagHeader';
import BorderLine from '../components/BorderLine';
import ProjectPreview from '../components/ProjectPreview';
import LeftSidebar from '../components/LeftSidebar';

export async function generateMetadata() {
  return {
    title: 'Tag Index | Zach Yarbrough',
    description: 'Browse all tags for projects and blog posts.',
  }
}

const TagPage: NextPage = () => {

    const postMetadata = getMetadata('posts') || []
    const projectMetadata = getMetadata('projects') || []

    const getTagData = (posts: any[], projects: any[]) => {
        const tags = [...posts, ...projects].map((post) => [...post.tags, ...post?.technologyUsed]).flat()
        const uniqueTags = [...new Set(tags)]

        return uniqueTags.sort((a, b) => a.localeCompare(b)).map((tag, index) => {
            const tagPosts = posts.filter((post) => post.tags.length > 0 && post.tags.includes(tag))
            const tagProjects = projects.filter((project) => (project.tags.length > 0 && project.tags.includes(tag)) || (project.technologyUsed.length > 0 && project.technologyUsed.includes(tag)))

            return (
                <div key={tag} style={{ marginTop: index === 0 ? '0' : '2rem' }}>
                    <TagHeader tag={tag}>{tag}</TagHeader>
                    <ItemCount count={tagPosts.length + tagProjects.length} message='found.' />
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {tagProjects.map((project) => (
                            <ProjectPreview key={project.slug} {...project} hidePreview={true} />
                        ))}
                        {tagPosts.map((post) => (
                            <PostPreview key={post.slug} {...post} />
                        ))}
                    </div>
                </div>
            )
        })
    }

    const previews = getTagData(postMetadata, projectMetadata)
    
    return (
	<>
	<LeftSidebar />
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail />
            <PageHeader>Tag Index</PageHeader>
            <div style={{ marginTop: '1rem' }}>{previews}</div>
            <BorderLine />
        </div>
	</>
    )
}

export default TagPage 
