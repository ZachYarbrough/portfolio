
const Paragraph = ({ children }: { children: React.ReactNode }) => {

    return (
        <p className='text-primary' style={{ padding: '0.5rem 0' }}>{children}</p>
    )
}

export default Paragraph