'use client'

import { ExternalLinkIcon } from "./assets/icons"
import Link from "next/link"

const ExternalLink = ({ href, showIcon = true, isMail = false, children }: { href: string, showIcon?: boolean, isMail?: boolean, children: React.ReactNode }) => {

    return (
        <Link className='text-highlight cursor-pointer inline-flex font-bold'
            style={{
                padding: '0',
                backgroundColor: 'transparent',
                borderRadius: '0',
            }}
            href={isMail ? `mailto:${href}` : href} target={'_blank'}
            rel={'noopener noreferrer'}>
            <span>{children}</span>
            {showIcon && <span style={{
                marginTop: '0.5rem',
                color: 'var(--primary)',
            }}><ExternalLinkIcon /></span>}
        </Link>
    )
}

export default ExternalLink