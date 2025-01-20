'use client'
import { ExternalLinkIcon } from "./assets/icons"
import Link from "next/link"
const PostLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isExternalLink = href.startsWith('http')
    const hrefOrSlug = isExternalLink ? href : `/posts/${href.replace('.md', '')}`

    return (
        <Link className='text-highlight hover:cursor-pointer inline-flex font-bold'
            style={{
                padding: isExternalLink ?  '0' : '0 0.4rem',
                backgroundColor: isExternalLink ? 'transparent' : 'var(--secondary-light)',
                borderRadius: isExternalLink ? '0' : '0.4rem',
            }}
            href={hrefOrSlug} target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}>
            <span>{children}</span>
            {isExternalLink &&
                <span style={{
                    marginTop: '0.5rem',
                    color: 'var(--primary)',
                }}><ExternalLinkIcon /></span>
            }
        </Link>
    )
}

export default PostLink