import { NextPage } from 'next';
import { getPostMetadata } from '../components/posts';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import ItemCount from '../components/ItemCount';
import PageHeader from '../components/PageHeader';

const BlogPage: NextPage = () => {

    const postMetadata = getPostMetadata()

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail />
            <PageHeader>Posts</PageHeader>
            <ItemCount count={postPreviews.length} message='found in this folder.' />
            <div>{postPreviews}</div>
        </div>
    )
}

export default BlogPage