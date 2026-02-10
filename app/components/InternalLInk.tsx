'use client'

import Link from "next/link"

// TODO - Add a color option for specific tags (languages and technologies)
const InternalLink = ({ href = null, children, useBubbleStyle = false, style = {}, parentClass = '', onClickCallback = () => {}, isHighlighted = false }: { href: string | null, useBubbleStyle?: boolean, children: React.ReactNode, style?: React.CSSProperties, parentClass?: string, onClickCallback?: () => void, isHighlighted?: boolean }) => {


    const link = href !== null ? href.startsWith('/') ? href : `/${href}` : '/'
    return (
	<>
	    {useBubbleStyle ? <Link className={`text-highlight cursor-pointer inline-flex font-bold secondary-link-color ${parentClass}`}
		style={Object.keys(style).length > 0 ? style : {
		    padding: '2px 4px',
		    borderRadius: '0.4rem',
		    fontSize: '14px'
		}}
		href={link}
	    >
		<span className='flex' onClick={() => {
		    onClickCallback()
		}}>{children}</span>
	    </Link> : <Link style={style} className={`highlight-text cursor-pointer inline-flex font-bold ${parentClass}`} href={link}
		>
		    <span className='flex' onClick={() => {
			onClickCallback()
		    }}>{children}</span>
		</Link>}
	</>
    )
}

export default InternalLink
