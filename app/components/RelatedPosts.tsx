'use client'

import { usePathname } from "next/navigation"
import { useState, useEffect } from 'react'
import DropdownList from "./DropdownList"
import InternalLink from "./InternalLInk"

const RelatedPosts = () => {
    const pathname = usePathname();
    
    const [displayPosts, setDisplayPosts] = useState(false)
    const posts: any[] = []

    useEffect(() => {
	if (pathname.split('/').length > 2 && (pathname.includes('posts') || pathname.includes('projects'))) {
	    setDisplayPosts(true)
	} else {
	    setDisplayPosts(false)
	}
    }, [pathname])

    return (
        <>

	{displayPosts && <DropdownList title='Related Posts'>
            {posts.length > 0 ? posts.map((post) => (
                <div key={post.backlink} className='text-highlight font-bold'>
                    <InternalLink href={post.backlink}>{post.title}</InternalLink>
                </div>
            )) :
                <div className='text-secondary'>
                    No posts found
                </div>
            }
        </DropdownList>}
	</>
    )
}

export default RelatedPosts
