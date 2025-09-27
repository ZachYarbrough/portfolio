
const BulletLists = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>{children}</div>
    )
}

export default BulletLists
