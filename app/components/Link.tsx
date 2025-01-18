'use client'
import { ExternalLinkIcon } from "./assets/icons"

const Link = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isExternalLink = href.startsWith('http')
    const hrefOrSlug = isExternalLink ? href : `${window.location.origin}/blog/posts/${href.replace('.md', '')}`

    return (
        <a className='text-highlight hover:cursor-pointer inline-flex'
            style={{
                padding: isExternalLink ?  '0' : '0.1rem 0.3rem',
                backgroundColor: isExternalLink ? 'transparent' : 'var(--secondary)',
                borderRadius: isExternalLink ? '0' : '0.3rem',
            }}
            href={hrefOrSlug} target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}>
            <span>{children}</span>
            {isExternalLink &&
                <span className="text-foreground"><ExternalLinkIcon /></span>
            }
        </a>
    )
}

export default Link