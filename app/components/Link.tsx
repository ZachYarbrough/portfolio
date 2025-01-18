'use client'
import { ExternalLinkIcon } from "./assets/icons"

const Link = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isExternalLink = href.startsWith('http')
    const hrefOrSlug = isExternalLink ? href : `${window.location.origin}/blog/posts/${href.replace('.md', '')}`

    return (
        <a className='text-highlight hover:cursor-pointer inline-flex'
            style={{
                lineHeight: '1.2rem',
                fontWeight: '600',
                padding: isExternalLink ?  '0' : '0 0.2rem',
                backgroundColor: isExternalLink ? 'transparent' : 'var(--secondary)',
                borderRadius: isExternalLink ? '0' : '0.3rem',
            }}
            href={hrefOrSlug} target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}>
            <span>{children}</span>
            {isExternalLink &&
                <span style={{
                    marginTop: '0.4rem',
                    color: 'var(--primary)',
                }}><ExternalLinkIcon /></span>
            }
        </a>
    )
}

export default Link