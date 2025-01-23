'use client'

import Link from "next/link"

const InternalLink = ({ fileName, link, children, useBubbleStyle = false, style = {} }: { fileName?: string, link: string, useBubbleStyle?: boolean, children: React.ReactNode, style?: React.CSSProperties }) => {

    const href = fileName ? `/${link}/${fileName.replace('.md', '')}` : link.startsWith('/') ? link : `/${link}`
    return (
        <>
            {useBubbleStyle ? <Link className='text-highlight cursor-pointer inline-flex font-bold'
                style={Object.keys(style).length > 0 ? style : {
                    padding: '0 0.4rem',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: '0.4rem',
                }}
                href={href}
            >
                <span className='flex'>{children}</span>
            </Link> : <Link style={style} className='text-highlight cursor-pointer inline-flex font-bold' href={href}
            >
                <span className='flex'>{children}</span>
            </Link>}
        </>
    )
}

export default InternalLink