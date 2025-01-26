import DarkModeToggle from "./DarkModeToggle"
import InternalLink from "./InternalLInk"
import RelatedPosts from "./RelatedPosts"
import SearchBar from "./SearchBar"

const LeftSidebar = () => {

    return (
        <div className='sm-hidden' style={{ position: 'fixed', top: '5rem', left: 'calc(50vw - 700px)', width: '250px', display: 'flex',flexDirection: 'column' }}>
        <InternalLink href='/' style={{ fontSize: '2rem' }}>Zach Yarbrough</InternalLink>
        <div className='flex justify-between items-center' style={{ margin: '0.5rem 0 1rem 0' }}>
            <SearchBar />
            <DarkModeToggle />  
        </div>
        <ul className='flex flex-col text-highlight font-bold' style={{ gap: '0.5rem', margin: '0 0 1rem 0' }}>
            <InternalLink href='/posts'>Posts</InternalLink>
            <InternalLink href='/projects'>Projects</InternalLink>
        </ul>
        <RelatedPosts />
        </div>
    )
}

export default LeftSidebar