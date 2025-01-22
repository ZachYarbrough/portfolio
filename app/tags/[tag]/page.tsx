import { getMetadata } from '@/app/components/data';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail';
import ItemCount from '@/app/components/ItemCount';
import TagHeader from '@/app/components/TagHeader';

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
    for (const data of [...posts, ...projects]) {
        if (data.tags && Array.isArray(data.tags)) {
            for (const tag of data.tags) {
                if (typeof tag === 'string') {
                    tags.push(tag)
                }
            }
        }
    }

    // Return unique tags
    return [...new Set(tags)].map((tag) => ({ tag }))
}

const SingleTagPage = async ({ params }: any) => {
    const tag = await params.tag
    
    const postMetadata = getMetadata('posts')
    const projectMetadata = getMetadata('projects')

    const filteredEntries = [...postMetadata, ...projectMetadata].filter((data) => data.tags.length > 0 && data.tags.includes(tag)).map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail isTag={true} />
            <div key={tag}>
                <TagHeader>{tag}</TagHeader>
                    <ItemCount count={filteredEntries.length} message='found.' />
                    <div>
                        {filteredEntries}
                    </div>
            </div>
        </div>
    )
}

export default SingleTagPage 