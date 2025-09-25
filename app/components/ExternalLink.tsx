'use client'

import { ExternalLinkIcon } from "./assets/icons"
import Link from "next/link"

const ExternalLink = ({ tooltip = '', href, showIcon = true, isMail = false, children }: { tooltip?: string, href: string, showIcon?: boolean, isMail?: boolean, children: React.ReactNode }) => {

    return (
        <Link className='highlight-text cursor-pointer inline-flex font-bold'
	    title={tooltip}
            style={{
                padding: '0',
                backgroundColor: 'transparent',
                borderRadius: '0',
            }}
            href={isMail ? `mailto:${href}` : href} target={'_blank'}
            rel={'noopener noreferrer'}>
            <span>{children}</span>
            {showIcon && <span style={{
                marginTop: '0.4rem',
                color: 'var(--primary)',
            }}><ExternalLinkIcon /></span>}
        </Link>
    )
}

export default ExternalLink
