import DarkModeToggle from "./DarkModeToggle"
import { getMetadata } from "./data"
import InternalLink from "./InternalLInk"
import LatestPosts from "./LatestPosts"
import RelatedPosts from "./RelatedPosts"
import SearchBar from "./SearchBar"
import PostHeader from '@/app/components/PostHeader'

const LeftSidebar = () => {
    const latestPosts = getMetadata('posts', 5)

    return (
	<div className='sm-hidden' style={{ position: 'fixed', top: '5rem', left: 'calc(50vw - 700px)', width: '250px', display: 'flex',flexDirection: 'column' }}>
	<div style={{ padding: '0 0px 0.5rem 0' }}>
	    <InternalLink href='/' style={{ fontSize: '2rem', marginBottom: '-1rem' }}>Zach Yarbrough</InternalLink>
	    <PostHeader headerNumber={1.1} noCopy={true} >Software Developer</PostHeader>  
	</div>
	<div className='flex justify-between items-center' style={{ margin: '0.5rem 0 1rem 0' }}>
	<SearchBar />
	<DarkModeToggle />  
	</div>
	<ul className='flex flex-col highlight-text font-bold' style={{ gap: '0.5rem', margin: '0 0 1rem 0' }}>
	<InternalLink href='/posts'>Posts</InternalLink>
	<InternalLink href='/projects'>Projects</InternalLink>
	</ul>
	<LatestPosts latestPosts={latestPosts} />
	</div>
    )
}

export default LeftSidebar
