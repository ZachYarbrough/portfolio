'use client'

import Link from "next/link"

const InternalLink = ({ href = null, children, useBubbleStyle = false, style = {}, onClickCallback = () => {} }: { href: string | null, useBubbleStyle?: boolean, children: React.ReactNode, style?: React.CSSProperties, onClickCallback?: () => void }) => {


    const link = href !== null ? href.startsWith('/') ? href : `/${href}` : '/'
    return (
        <>
            {useBubbleStyle ? <Link className='text-highlight cursor-pointer inline-flex font-bold'
                style={Object.keys(style).length > 0 ? style : {
                    padding: '2px 4px',
                    backgroundColor: 'var(--secondary-light)',
                    borderRadius: '0.4rem',
                }}
                href={link}
            >
                <span className='flex' onClick={() => {
                    onClickCallback()
                }}>{children}</span>
            </Link> : <Link style={style} className='text-highlight cursor-pointer inline-flex font-bold' href={link}
            >
                <span className='flex' onClick={() => {
                    onClickCallback()
                }}>{children}</span>
            </Link>}
        </>
    )
}

export default InternalLink
