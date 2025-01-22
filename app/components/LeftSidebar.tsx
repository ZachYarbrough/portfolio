import InternalLink from "./InternalLInk"

const LeftSidebar = () => {

    return (
        <div style={{ position: 'fixed', top: '5rem', left: 'calc(50vw - 700px)', width: '250px', display: 'flex',flexDirection: 'column' }}>
        <InternalLink link='' style={{ fontSize: '2rem' }}>Zach Yarbrough</InternalLink>
        <p>// TODO: Add a three.js model that can be rotated and clicked</p>
        <p>// TODO: Add a search bar</p>
        <ul className='flex flex-col text-highlight font-bold' style={{ gap: '0.5rem' }}>
            <InternalLink link=''>About</InternalLink>
            <InternalLink link='posts'>Posts</InternalLink>
            <InternalLink link='projects'>Projects</InternalLink>
        </ul>
        </div>
    )
}

export default LeftSidebar