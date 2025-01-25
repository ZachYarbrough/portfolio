'use client'

import { useEffect, useState } from 'react'
import { LinkIcon } from './assets/icons'
import { copyToClipboard } from './general';
import InternalLink from './InternalLInk';

const TagHeader = ({ children, tag }: { children: React.ReactNode, tag?: string }) => {
    const [showCopy, setShowCopy] = useState(false)

    const handleCopy = async () => {
        await copyToClipboard(window.location.origin + window.location.pathname + (tag ? `/${tag}` : ''))
    }

    return (
        <div onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)} className='flex items-center gap-2' style={{ margin: '0.5rem auto'}}>
            {tag ?
                <InternalLink href={`/tags/${tag}`}
                    style={{
                        padding: '0 0.4rem',
                        backgroundColor: 'var(--secondary-light)',
                        borderRadius: '0.4rem',
                    }}
                    >
                    <span>{children}</span>
                </InternalLink> :
                <h1 id={children?.toString()} className='text-highlight inline-flex font-bold' style={{
                    padding: '0 0.4rem',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: '0.4rem',
                }}>#{children}</h1>}
            {showCopy && <span onClick={handleCopy} className='cursor-pointer hover:text-highlight'><LinkIcon /></span>}
        </div>
    )
}

export default TagHeader