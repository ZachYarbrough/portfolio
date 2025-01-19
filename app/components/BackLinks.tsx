import Link from "next/link"

const BackLinks = ({ backlinks }: { backlinks: string[] }) => {

    return (
        <div style={{
            margin: '1rem 0',
        }}>
            <h1 className='font-bold hover:cursor-pointer' style={{
                marginBottom: '0.5rem',
            }}>Backlinks</h1>
            {backlinks.length > 0 ? backlinks.map((backlink) => (
                <div key={backlink} className='text-highlight font-bold'>
                    <Link href={`/blog/posts/${backlink}`}>{backlink}</Link>
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