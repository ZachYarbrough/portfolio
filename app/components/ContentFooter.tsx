import RelatedPosts from "./RelatedPosts"
import { Post } from "../types/posts"
import '@/app/globals.css'
import { getMetadata } from "./data"
import LatestPosts from "./LatestPosts"

const ContentFooter = ({ post }: { post: Post }) => {

    const latestPosts = getMetadata('posts', 5) || []

    return (
	<div className='content-footer' style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem auto 0 auto', maxWidth: '750px' }}>
		{<div style={{ width: '40%' }}><LatestPosts latestPosts={latestPosts} /></div>}
                <div style={{ width: '40%' }}><RelatedPosts relatedPosts={post.related} /></div>
            </div>
    )
}

export default ContentFooter
