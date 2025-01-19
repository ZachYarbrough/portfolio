
const PostHeader = ({ headerNumber, children }: { headerNumber: number, children: React.ReactNode }) => {

    return (
        <h1 id={children?.toString()} className='text-primary' style={{ 
            padding: '0.5rem 0',
            fontSize: `${headerNumber}rem`,
            fontWeight: '700',
        }}>{children}</h1>
    )
}

export default PostHeader