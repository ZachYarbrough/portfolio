'use client'

import { useState, useEffect, useContext } from 'react'
import { PostMetadata } from '../types/posts'
import InternalLink from './InternalLInk'
import { SearchContext } from './context/searchContext'
import Link from "next/link"

const PostPreview = ({ slug, title, date, tags, technologyUsed, isProjectPost = false, isSearch = false, index = -1, highlightedIndex = -1 }: any) => {
    const [width, setWidth] = useState(1501)
    const [tagsExpanded, setTagsExpanded] = useState<boolean>(false)
    const { toggleSearch } = useContext(SearchContext)
    const tagsAndTech = [...tags, ...technologyUsed]

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
        <div key={slug} style={{ display: 'grid', gridTemplateColumns: width > 600 ? '6rem 3.5fr 4fr' : '6rem 8fr', width: '100%', alignItems: 'start', margin: isSearch ? '0' : '1rem 0', padding: isSearch ? '0.3rem' : '', backgroundColor: index != -1 && highlightedIndex === index ? 'var(--secondary-light)' : '', borderRadius: '0.5rem' }}>
            <p className='text-secondary' style={{ marginTop: '0.2rem' }}>{date}</p>
            <div>
                <InternalLink href={`/${isProjectPost ? 'projects' : 'posts'}/${slug}`} style={{ marginTop: '0.1rem' }} onClickCallback={() => toggleSearch(false)}>
                    <h2 className='highlight-text font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </InternalLink> 
            </div>
	    {width > 600 && <div className='flex flex-wrap' style={{ whiteSpace: 'nowrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
                {tagsAndTech.slice(0, 3).map((tag: string) => {
                    return (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`} onClickCallback={() => toggleSearch(false)} isHighlighted={index != -1 && highlightedIndex === index}
                        >
                            #{tag}
                        </InternalLink>
                    </div>
                )
                })}
                {!tagsExpanded && tagsAndTech.length - 1 > 3 && <div className='text-highlight cursor-pointer inline-flex font-bold secondary-link-color'
                    style={{
                        padding: '2px 4px',
                        borderRadius: '0.4rem',
                    }}
                >
                    <span className='flex' onClick={(e) => {
			e.preventDefault()
                        setTagsExpanded(true)
                    }}>
                        {tagsAndTech.slice(3).length} More...
                    </span>
                </div>}
                {tagsExpanded && tagsAndTech.slice(3).map((tag: string) => (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`} onClickCallback={() => toggleSearch(false)} isHighlighted={index != -1 && highlightedIndex === index}
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
