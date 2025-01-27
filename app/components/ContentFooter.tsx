'use client'

import { useState, useEffect } from "react"
import BackLinks from "./BackLinks"
import RelatedPosts from "./RelatedPosts"
import { Post } from "../types/posts"

const ContentFooter = ({ post }: { post: Post }) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    return (
        <>
            {width <= 1500 && <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem auto 0 auto', maxWidth: '750px' }}>
                <div style={{ width: '40%' }}><RelatedPosts /></div>
                <div style={{ width: '40%' }}><BackLinks backlinks={post.backlinks} /></div>
            </div>}
        </>
    )
}

export default ContentFooter