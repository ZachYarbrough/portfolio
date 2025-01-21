'use client'

import { useEffect, useState } from 'react'
import { LinkIcon } from './assets/icons'
import { copyToClipboard } from './general';
import Link from 'next/link';

const TagHeader = ({ children, tag }: { children: React.ReactNode, tag?: string }) => {
    const [showCopy, setShowCopy] = useState(false)

    const handleCopy = async () => {
        await copyToClipboard(window.location.origin + window.location.pathname + (tag ? `/${tag}` : ''))
    }

    return (
        <div onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)} className='flex items-center gap-2'>
            {tag ?
                <Link className='text-highlight hover:cursor-pointer inline-flex font-bold'
                    style={{
                        padding: '0 0.4rem',
                        backgroundColor: 'var(--secondary-light)',
                        borderRadius: '0.4rem',
                    }}
                    href={`/tags/${tag}`}
                >
                    <span>{children}</span>
                </Link> :
                <h1 id={children?.toString()} className='text-highlight hover:cursor-pointer inline-flex font-bold' style={{
                    padding: '0 0.4rem',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: '0.4rem',
                }}>#{children}</h1>}
            {showCopy && <span onClick={handleCopy} className='hover:cursor-pointer hover:text-highlight'><LinkIcon /></span>}
        </div>
    )
}

export default TagHeader