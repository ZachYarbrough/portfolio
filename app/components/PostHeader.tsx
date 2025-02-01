'use client'

import { useEffect, useRef, useState } from 'react'
import { LinkIcon } from './assets/icons'
import { copyToClipboard } from './general';
import '@/app/globals.css'

const PostHeader = ({ headerNumber, children }: { headerNumber: number, children: React.ReactNode }) => {
    const ref = useRef(null)
    const header = '#' + children?.toString().toLowerCase().replace(/\s+/g, '-') 
    const [showCopy, setShowCopy] = useState(false)

    const handleCopy = async () => {
        await copyToClipboard(window.location.origin + window.location.pathname + header)
    }

    useEffect(() => {
	if (window.location.hash.includes(header)) {
	    const element = document.getElementById(header)

	    if (!element) return;

	    const timeoutId = setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100); // Adjust the delay as needed

	    // Cleanup the timeout if the component unmounts
	    return () => clearTimeout(timeoutId);
	}
    }, [])

    return (
        <div ref={ref} id={header} onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)} className='flex items-center gap-2 post-header'>
            <h1 id={children?.toString().toLowerCase()} className='text-primary' style={{
                padding: '0.5rem 0',
                fontSize: `${headerNumber}rem`,
                fontWeight: '700',
            }}>{children}</h1>
            {showCopy && <a onClick={handleCopy} href={header} className='cursor-pointer hover:text-highlight'><LinkIcon /></a>}
        </div>
    )
}

export default PostHeader
