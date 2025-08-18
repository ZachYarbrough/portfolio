import DropdownList from "./DropdownList"
import InternalLink from "./InternalLInk"

const RelatedPosts = ({ relatedPosts }: any) => {
        return (
	<DropdownList title='Related Posts'>
            {relatedPosts && relatedPosts.length > 0 ? relatedPosts.map((post: any) => (
                <div key={post.slug} className='text-highlight font-bold'>
                    <InternalLink href={`${post.folder}/${post.slug}`}>{post.title}</InternalLink>
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
