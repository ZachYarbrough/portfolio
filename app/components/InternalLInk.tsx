'use client'

import Link from "next/link"

const InternalLink = ({ href = null, children, useBubbleStyle = false, style = {}, onClickCallback = () => {}, isHighlighted = false }: { href: string | null, useBubbleStyle?: boolean, children: React.ReactNode, style?: React.CSSProperties, onClickCallback?: () => void, isHighlighted?: boolean }) => {


    const link = href !== null ? href.startsWith('/') ? href : `/${href}` : '/'
    return (
        <>
            {useBubbleStyle ? <Link className='text-highlight cursor-pointer inline-flex font-bold secondary-link-color'
                style={Object.keys(style).length > 0 ? style : {
                    padding: '2px 4px',
                    borderRadius: '0.4rem',
                }}
                href={link}
            >
                <span className='flex' onClick={() => {
                    onClickCallback()
                }}>{children}</span>
            </Link> : <Link style={style} className='highlight-text cursor-pointer inline-flex font-bold' href={link}
            >
                <span className='flex' onClick={() => {
                    onClickCallback()
                }}>{children}</span>
            </Link>}
        </>
    )
}

export default InternalLink
