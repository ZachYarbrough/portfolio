import { NextPage } from 'next';
import { getPostMetadata } from '../../components/blog';
import PostPreview from '@/app/components/PostPreview';

const BlogPage: NextPage = () => {

    const postMetadata = getPostMetadata()

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h1 className='text-3xl font-bold'>Posts</h1>
            <div>{postPreviews}</div>
        </div>
    )
}

export default BlogPage