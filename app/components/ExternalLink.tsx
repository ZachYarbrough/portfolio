'use client'

import { ExternalLinkIcon } from "./assets/icons"
import Link from "next/link"

const ExternalLink = ({ href, children }: { href: string, children: React.ReactNode }) => {

    return (
        <Link className='text-highlight hover:cursor-pointer inline-flex font-bold'
            style={{
                padding: '0',
                backgroundColor: 'transparent',
                borderRadius: '0',
            }}
            href={href} target={'_blank'}
            rel={'noopener noreferrer'}>
            <span>{children}</span>
            <span style={{
                marginTop: '0.5rem',
                color: 'var(--primary)',
            }}><ExternalLinkIcon /></span>

        </Link>
    )
}

export default ExternalLink