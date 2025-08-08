'use client'

import { useState, useEffect, useContext } from 'react'
import { PostMetadata } from '../types/posts'
import InternalLink from './InternalLInk'
import { SearchContext } from './context/searchContext'
import Link from "next/link"

const PostPreview = ({ slug, title, date, tags, isProjectPost = false, isSearch = false }: any) => {
    const [width, setWidth] = useState(1501)
    const [tagsExpanded, setTagsExpanded] = useState<boolean>(false)
    const { toggleSearch } = useContext(SearchContext)

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
                <InternalLink href={`/${isProjectPost ? 'projects' : 'posts'}/${slug}`} onClickCallback={() => toggleSearch(false)}>
                    <h2 className='text-highlight font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </InternalLink> 
            </div>
	    {width > 600 && <div className='flex' style={{ whiteSpace: 'nowrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
                {tags.slice(0, 3).map((tag: string) => {
                    return (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`} onClickCallback={() => toggleSearch(false)}
                        >
                            #{tag}
                        </InternalLink>
                    </div>
                )
                })}
                {!tagsExpanded && tags.length - 1 > 3 && <div className='text-highlight cursor-pointer inline-flex font-bold'
                    style={{
                        padding: '2px 4px',
                        backgroundColor: 'var(--secondary-light)',
                        borderRadius: '0.4rem',
                    }}
                >
                    <span className='flex' onClick={() => {
                        setTagsExpanded(true)
                    }}>
                        {tags.slice(3).length} More...
                    </span>
                </div>}
                {tagsExpanded && tags.slice(3).map((tag: string) => (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`} onClickCallback={() => toggleSearch(false)}
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
