import InternalLink from "./InternalLInk"

const BackLinks = ({ backlinks }: { backlinks: string[] }) => {

    return (
        <div style={{
            margin: '1rem 0',
        }}>
            <h1 className='font-bold' style={{
                marginBottom: '0.5rem',
            }}>Backlinks</h1>
            {backlinks.length > 0 ? backlinks.map((backlink) => (
                <div key={backlink} className='text-highlight font-bold'>
                    <InternalLink link='posts' fileName={backlink}>{backlink}</InternalLink>
                </div>
            )) :
                <div className='text-secondary'>
                    No backlinks found
                </div>
            }
        </div>
    )
}

export default BackLinks   