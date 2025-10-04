
const Paragraph = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='text-primary' style={{ padding: '0.5rem 0' }}>{children}</div>
    )
}

export default Paragraph
