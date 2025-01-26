import DropdownList from "./DropdownList"
import InternalLink from "./InternalLInk"

const RelatedPosts = () => {
    const posts: any[] = []

    return (
        <DropdownList title='Related Posts'>
            {posts.length > 0 ? posts.map((post) => (
                <div key={post.backlink} className='text-highlight font-bold'>
                    <InternalLink href={post.backlink}>{post.title}</InternalLink>
                </div>
            )) :
                <div className='text-secondary'>
                    No posts found
                </div>
            }
        </DropdownList>
    )
}

export default RelatedPosts