'use client'

import { useState } from 'react'
import { LinkIcon } from './assets/icons'
import { copyToClipboard } from './general';
import '@/app/globals.css'

const PostHeader = ({ headerNumber, children }: { headerNumber: number, children: React.ReactNode }) => {
    const [showCopy, setShowCopy] = useState(false)

    const handleCopy = async () => {
        await copyToClipboard(window.location.origin + window.location.pathname + '#' + children?.toString().replace(/\s+/g, '%20'))
    }

    return (
        <div onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)} className='flex items-center gap-2'>
            <h1 id={children?.toString()} className='text-primary' style={{
                padding: '0.5rem 0',
                fontSize: `${headerNumber}rem`,
                fontWeight: '700',
            }}>{children}</h1>
            {showCopy && <span onClick={handleCopy} className='cursor-pointer hover:text-highlight'><LinkIcon /></span>}
        </div>
    )
}

export default PostHeader