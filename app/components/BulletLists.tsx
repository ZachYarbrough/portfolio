
const BulletLists = ({ children }: { children: React.ReactNode }) => {
    return (
        <ul style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>{children}</ul>
    )
}

export default BulletLists