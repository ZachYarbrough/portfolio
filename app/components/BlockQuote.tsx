
const BlockQuote = ({ children }: { children: React.ReactNode, blockType: string }) => {

    return (
        <blockquote style={{ borderLeft: '3px solid var(--highlight)', paddingLeft: '1rem', margin: '0.5rem 0' }}>{children}</blockquote>
    )
}

export default BlockQuote   