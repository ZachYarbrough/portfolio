import { getMetadata } from '@/app/components/data';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail';
import ItemCount from '@/app/components/ItemCount';
import TagHeader from '@/app/components/TagHeader';
import BorderLine from '@/app/components/BorderLine';
import { skills } from '@/app/config';
import ProjectPreview from '@/app/components/ProjectPreview';
import LeftSidebar from '@/app/components/LeftSidebar';

/**
 * Generates static paths for all posts
 * 
 * @returns {Array<{ tag: string }>} An array of objects with the tags of each post
 */
export const generateStaticParams = async () => {
    const posts: any[] = getMetadata('posts')
    const projects: any[] = getMetadata('projects')

    const tags: string[] = []

    // Collect all tags from posts and projects
    for (const data of [...posts, ...projects, ...skills]) {
        if (data.tags && Array.isArray(data.tags)) {
            for (const tag of data.tags) {
                if (typeof tag === 'string') {
                    tags.push(tag)
                }
            }
        } else if (typeof data === 'string') {
            tags.push(data)
        }
    }

    // Return unique tags
    return [...new Set(tags)].map((tag) => ({ tag }))
}

const SingleTagPage = async ({ params }: any) => {
    const tag = await params.tag
    
    const postMetadata = getMetadata('posts')
    const projectMetadata = getMetadata('projects')

    const filteredPosts = postMetadata.filter((data) => data.tags.length > 0 && data.tags.includes(tag)).map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    const filteredProjects = projectMetadata.filter((data) => data.tags.length > 0 && data.tags.includes(tag)).map((project) => (
        <ProjectPreview key={project.slug} hidePreview={true} {...project} />
    ))

    return (
	<>
	<LeftSidebar />
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail isTag={true} />
            <div key={tag}>
                <TagHeader>{tag}</TagHeader>
                    <ItemCount count={filteredPosts.length + filteredProjects.length} message='found.' />
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {filteredProjects}
                        {filteredPosts}
                    </div>
            </div>
            <BorderLine />
        </div>
	</>
    )
}

export default SingleTagPage 
