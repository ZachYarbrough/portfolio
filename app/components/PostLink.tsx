import ExternalLink from "./ExternalLink"
import InternalLink from "./InternalLInk"

const PostLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isExternalLink = href.startsWith('http')

    return (
        <>
            {
                isExternalLink ?
                    <ExternalLink href={href} >{children}</ExternalLink> :
                    <InternalLink href={href} linkType={'posts'} >{children}</InternalLink>
            }
        </>
    )
}

export default PostLink 