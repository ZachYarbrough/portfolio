import { getPostMetadata } from '@/app/components/posts';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail';
import ItemCount from '@/app/components/ItemCount';

const BlogPage = async ({ params }: { params: { tag: string } }) => {
    const paramObj = await params
    const tag = paramObj.tag
  
    const postMetadata = getPostMetadata()

    const filteredPosts = postMetadata.filter((post) => post.tags.includes(tag)).map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail isTag={true} />
            <div key={tag}>
                    <h1 className='text-highlight hover:cursor-pointer inline-flex font-bold'
            style={{
                padding: '0 0.4rem',
                backgroundColor: 'var(--secondary-light)',
                borderRadius: '0.4rem',
            }}>#{tag}</h1>
                    <ItemCount count={filteredPosts.length} message='found with this tag.' />
                    <div>
                        {filteredPosts}
                    </div>
            </div>
        </div>
    )
}

export default BlogPage 