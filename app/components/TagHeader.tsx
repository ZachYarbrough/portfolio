'use client'

import { useEffect, useRef, useState } from 'react'
import { LinkIcon } from './assets/icons'
import { copyToClipboard } from './general';
import InternalLink from './InternalLInk';
import '@/app/globals.css'

const TagHeader = ({ children, tag }: { children: React.ReactNode, tag?: string }) => {
    const ref = useRef(null)
    const header = Array.isArray(children) ? children.join('').toLowerCase() : children?.toString()?.toLowerCase() || '' 
    const [showCopy, setShowCopy] = useState(false)

    const handleCopy = async () => {
        await copyToClipboard(window.location.origin + window.location.pathname + header)	
        
        // Scroll to the element after copying
        const element = document.getElementById(header)
        if (element) {
	    element.scrollIntoView({ behavior: 'smooth' })
	}

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
        <div ref={ref} id={header} onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)} className='flex items-center gap-2 tag-header' style={{ margin: '0.5rem auto'}}>
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
                <h1 id={children?.toString().toLowerCase()} className='text-highlight inline-flex font-bold' style={{
                    padding: '0 0.4rem',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: '0.4rem',
                }}>{children}</h1>}
            {showCopy && tag ? <a href={header} onClick={handleCopy} className='cursor-pointer hover:text-highlight'><LinkIcon /></a> : 
		showCopy && <span onClick={handleCopy} className='cursor-pointer hover:text-highlight'><LinkIcon /></span>}
        </div>
    )
}

export default TagHeader
