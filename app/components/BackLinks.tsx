import DropdownList from "./DropdownList"
import InternalLink from "./InternalLInk"

const BackLinks = ({ backlinks }: { backlinks: { title: string, backlink: string }[] }) => {

    return (
        <DropdownList title='Backlinks'>
            {backlinks.length > 0 ? backlinks.map((backlink) => (
                <div key={backlink.backlink} className='text-highlight font-bold'>
                    <InternalLink href={backlink.backlink}>{backlink.title}</InternalLink>
                </div>
            )) :
                <div className='text-secondary'>
                    No backlinks found
                </div>
            }
        </DropdownList>
    )
}

export default BackLinks   