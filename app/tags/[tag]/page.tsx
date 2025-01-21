import { getPostMetadata } from '@/app/components/posts';
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
    const posts = getPostMetadata()
    const tags: any[] = []

    posts.forEach((post: any) => post.tags.forEach((tag: any) => (tags.push(tag))))

    return [...new Set(tags)].map((tag: any) => ({ tag: tag }))
}

const SingleTagPage = async ({ params }: any) => {
    const tag = await params.tag
    
    const postMetadata = getPostMetadata()

    const filteredPosts = postMetadata.filter((post) => post.tags.includes(tag)).map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail isTag={true} />
            <div key={tag}>
                <TagHeader>{tag}</TagHeader>
                    <ItemCount count={filteredPosts.length} message='found with this tag.' />
                    <div>
                        {filteredPosts}
                    </div>
            </div>
        </div>
    )
}

export default SingleTagPage 