import { NextPage } from 'next';
import { getPostMetadata } from '../components/posts';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import ItemCount from '../components/ItemCount';

const BlogPage: NextPage = () => {

    const postMetadata = getPostMetadata()

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail />
            <h1 className='text-3xl font-bold'>Posts</h1>
            <ItemCount count={postPreviews.length} message='found in this folder.' />
            <div>{postPreviews}</div>
        </div>
    )
}

export default BlogPage