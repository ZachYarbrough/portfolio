'use client'

import Link from "next/link"

const InternalLink = ({ fileName, link, children, style = {} }: { fileName?: string, link: string, children: React.ReactNode, style?: React.CSSProperties }) => {

    return (
        <>
            {fileName ? <Link className='text-highlight hover:cursor-pointer inline-flex font-bold'
                style={Object.keys(style).length > 0 ? style : {
                    padding: '0 0.4rem',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: '0.4rem',
                }}
                href={`/${link}/${fileName.replace('.md', '')}`}
            >
                <span className='flex'>{children}</span>
            </Link> : <Link style={style} className='text-highlight hover:cursor-pointer inline-flex font-bold' href={link.startsWith('/') ? link : `/${link}`}
            >
                <span className='flex'>{children}</span>
            </Link>}
        </>
    )
}

export default InternalLink