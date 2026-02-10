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
    const posts: any[] = getMetadata('posts') || []
    const projects: any[] = getMetadata('projects') || []

    const tags: string[] = []

    // Collect all tags from posts and projects
    for (const data of [...posts, ...projects, ...skills]) {
	if (typeof data === 'string') {
	    tags.push(data)
	} else {

	    if (data.tags && Array.isArray(data.tags)) {
		for (const tag of data.tags) {
		    if (typeof tag === 'string') {
			tags.push(tag)
		    }
		}
	    } 

	    if (data.technologyUsed && Array.isArray(data.technologyUsed)) {
		for (const tech of data.technologyUsed) {
		    if (typeof tech === 'string') {
			tags.push(tech)
		    }
		}
	    }
	}
    }

    // Return unique tags
    return [...new Set(tags)].map((tag) => ({ tag }))
}


export async function generateMetadata({ params }: any) {
  const data = await params
  return {
    title: 'Tag Index: ' + data.tag + ' | Zach Yarbrough',
    description: `Browse all blog posts tagged with #${params.tag}`,
  }
}

const SingleTagPage = async ({ params }: any) => {
    const { tag } = await params

    const postMetadata = getMetadata('posts') || []
    const projectMetadata = getMetadata('projects') || [] 

    const filteredPosts = postMetadata.filter((data) => (data.tags.length > 0 && data.tags.includes(tag)) || (data.technologyUsed.length > 0 && data.technologyUsed.includes(tag))).map((post) => (
	<PostPreview key={post.slug} {...post} />
    ))

    const filteredProjects = projectMetadata.filter((data) => (data.tags.length > 0 && data.tags.includes(tag)) || (data.technologyUsed.length > 0 && data.technologyUsed.includes(tag))).map((project) => (
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
	<div style={{ display: 'flex', flexWrap: 'wrap' }}>
	<div className='flex justify-between' style={{ width: '100%', marginTop: '1rem'}}>
	{filteredProjects}
	</div>
	<div style={{ width: '100%'}}>
	{filteredPosts}
	</div>
	</div>
	</div>
	<BorderLine />
	</div>
	</>
    )
}

export default SingleTagPage 
