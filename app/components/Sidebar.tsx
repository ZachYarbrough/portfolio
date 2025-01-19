import { Post } from "@/app/types/blog"
import TableOfContents from "./TableOfContents"
import BackLinks from "./BackLinks"

const Sidebar = ({ post }: { post: Post }) => {

    
    return (
        <div style={{ position: 'fixed', top: '10rem', right: '15rem' }}>
            {Object.keys(post.tableOfContents).length > 0 && <TableOfContents tableOfContents={post.tableOfContents} />}
            <BackLinks backlinks={post.backlinks || []} />
        </div>
    )
}

export default Sidebar