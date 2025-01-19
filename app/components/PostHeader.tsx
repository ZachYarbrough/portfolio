
const PostHeader = ({ headerNumber, headerWeight, children }: { headerNumber: number, headerWeight: number, children: React.ReactNode }) => {

    return (
        <h1 className='text-primary' style={{ 
            padding: '0.5rem 0',
            fontSize: `${headerNumber}rem`,
            fontWeight: '700',
        }}>{children}</h1>
    )
}

export default PostHeader