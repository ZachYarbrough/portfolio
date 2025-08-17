import { Post } from "@/app/types/posts"
import TableOfContents from "./TableOfContents"
import BackLinks from "./BackLinks"
import RelatedPosts from "./RelatedPosts"

const RightSidebar = ({ post }: { post: Post }) => {

    return (
        <div className='sm-hidden' style={{ position: 'fixed', top: '5rem', right: 'calc(50vw - 700px)', width: '250px', display: 'flex',flexDirection: 'column' }}>
            {Object.keys(post.tableOfContents).length > 0 && <TableOfContents tableOfContents={post.tableOfContents} />}
            <BackLinks backlinks={post.backlinks || []} />
	    {post.related != null && <RelatedPosts relatedPosts={post.related} />}
        </div>
    )
}

export default RightSidebar
