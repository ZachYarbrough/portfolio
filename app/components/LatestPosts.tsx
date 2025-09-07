import DropdownList from "./DropdownList"
import InternalLink from "./InternalLInk"

const LatestPosts = ({ latestPosts }: any) => {

        return (
	<DropdownList title='Recent Posts'>
            {latestPosts && latestPosts.length > 0 ? latestPosts.map((post: any) => (
                <div key={post.slug} className='highlight-text font-bold'>
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
