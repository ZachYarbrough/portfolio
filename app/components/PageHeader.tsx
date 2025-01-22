'use client'

import { useState } from 'react'
import { LinkIcon } from './assets/icons'
import { copyToClipboard } from './general';

const PageHeader = ({ children, noCopy = false }: { children: React.ReactNode, noCopy?: boolean }) => {
    const [showCopy, setShowCopy] = useState(false)

    const handleCopy = async () => {
        await copyToClipboard(window.location.origin + window.location.pathname)
    }

    return (
        <div onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)} className='flex items-center gap-2'>
            <h1 id={children?.toString()} className='text-primary py-1' style={{color: 'var(--primary)', fontSize: '2rem', margin: '0 0 0 0', fontWeight: '700', lineHeight: '2.25rem'}}>{children}</h1>
            {showCopy && !noCopy && <span onClick={handleCopy} className='hover:cursor-pointer hover:text-highlight'><LinkIcon /></span>}
        </div>
    )
}

export default PageHeader