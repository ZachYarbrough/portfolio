import { NextPage } from 'next';
import { getPostMetadata } from '../components/posts';
import PostPreview from '@/app/components/PostPreview';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import InternalLink from '../components/InternalLInk';
import ItemCount from '../components/ItemCount';
import PageHeader from '../components/PageHeader';
import TagHeader from '../components/TagHeader';

const TagPage: NextPage = () => {

    const postMetadata = getPostMetadata()

    const getTagData = (metadata: any[]) => {
        const tags = metadata.map((post) => post.tags).flat()
        const uniqueTags = [...new Set(tags)]

        return uniqueTags.sort((a, b) => a.localeCompare(b)).map((tag, index) => {
            const tagPosts = metadata.filter((post) => post.tags.includes(tag))

            return (
                <div key={tag} style={{ marginTop: index === 0 ? '0' : '1.5rem' }}>
                    <TagHeader tag={tag}>{tag}</TagHeader>
                    <ItemCount count={tagPosts.length} message='found with this tag.' />
                    <div>
                        {tagPosts.map((post) => (
                            <PostPreview key={post.slug} {...post} />
                        ))}
                    </div>
                </div>
            )
        })
    }

    const postPreviews = getTagData([...postMetadata])
    
    return (
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <BreadcrumbTrail />
            <PageHeader>Tag Index</PageHeader>
            <div style={{ marginTop: '1rem' }}>{postPreviews}</div>
        </div>
    )
}

export default TagPage 