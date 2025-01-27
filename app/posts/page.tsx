import { NextPage } from 'next';
import { getMetadata } from '../components/data';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import ItemCount from '../components/ItemCount';
import PageHeader from '../components/PageHeader';
import BorderLine from '../components/BorderLine';
const BlogPage: NextPage = () => {

    const postMetadata = getMetadata('posts')

    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))
    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail />
            <PageHeader>Posts</PageHeader>
            <ItemCount count={postPreviews.length} message='found.' />
            <div>{postPreviews}</div>
            <BorderLine />
        </div>
    )
}

export default BlogPage