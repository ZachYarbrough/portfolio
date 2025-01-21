import { NextPage } from 'next';
import { getPostMetadata } from '@/app/components/posts';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '@/app/components/BreadcrumbTrail';

const BlogPage: NextPage = () => {

    const postMetadata = getPostMetadata()

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail isTag={true} />
            <h1 className='text-3xl font-bold'>Tags</h1>
            <div>{postPreviews}</div>
        </div>
    )
}

export default BlogPage 