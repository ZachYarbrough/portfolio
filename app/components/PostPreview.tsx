'use client'

import { useState, useEffect } from 'react'
import { PostMetadata } from '../types/posts'
import InternalLink from './InternalLInk'

const PostPreview = ({ slug, title, date, tags, minified, isProjectPost }: any) => {
        const [width, setWidth] = useState(1501)

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
        <div key={slug} style={{ display: 'grid', gridTemplateColumns: width > 600 ? '6rem 3.5fr 4fr' : '6rem 8fr', width: '100%', margin: '1rem 0' }}>
            <p className='text-secondary'>{date}</p>
            <div>
                <InternalLink href={`/posts/${slug}`}>
                    <h2 className='text-highlight font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </InternalLink> 
            </div>
	    {width > 600 && <div className='flex' style={{ whiteSpace: 'nowrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
                {tags.slice(0, 3).map((tag: string) => {
                    console.log(tags)
                    return (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`}
                        >
                            #{tag}
                        </InternalLink>
                    </div>
                )
                })}
                {tags.Length > 3 && <InternalLink useBubbleStyle={true}>                             
                    {tags.Length - 4} More...
                    </InternalLink>}
                {tags.slice(3, tags.Length - 1).map((tag: string) => (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`}
                        >
                            #{tag}
                        </InternalLink>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default PostPreview
