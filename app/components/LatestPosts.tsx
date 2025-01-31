import { getMetadata } from "./data"
import DropdownList from "./DropdownList"
import InternalLink from "./InternalLInk"

const LatestPosts = () => {
	const latestPosts = getMetadata('posts', 5)


        return (
	<DropdownList title='Recent Posts'>
            {latestPosts && latestPosts.length > 0 ? latestPosts.map((post: any) => (
                <div key={post.slug} className='text-highlight font-bold'>
                    <InternalLink href={`/posts/${post.slug}`}>{post.title}</InternalLink>
                </div>
            )) :
                <div className='text-secondary'>
                    No posts found
                </div>
            }
        </DropdownList>
    )
}

export default LatestPosts
