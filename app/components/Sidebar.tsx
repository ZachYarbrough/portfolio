import { Post } from "@/app/types/posts"
import TableOfContents from "./TableOfContents"
import BackLinks from "./BackLinks"

const Sidebar = ({ post }: { post: Post }) => {

    
    return (
        <div style={{ position: 'fixed', top: '10rem', right: 'calc(50vw - 700px)', width: '250px', display: 'flex',flexDirection: 'column' }}>
            {Object.keys(post.tableOfContents).length > 0 && <TableOfContents tableOfContents={post.tableOfContents} />}
            <BackLinks backlinks={post.backlinks || []} />
        </div>
    )
}

export default Sidebar