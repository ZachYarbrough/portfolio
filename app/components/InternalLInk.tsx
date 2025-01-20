'use client'

import Link from "next/link"

const InternalLink = ({ href, linkType, children }: { href: string, linkType: string, children: React.ReactNode }) => {

    return (
        <Link className='text-highlight hover:cursor-pointer inline-flex font-bold'
            style={{
                padding: '0 0.4rem',
                backgroundColor: 'var(--secondary-light)',
                borderRadius: '0.4rem',
            }}
            href={`/${linkType}/${href.replace('.md', '')}`}
            >
            <span>{children}</span>
        </Link>
    )
}

export default InternalLink