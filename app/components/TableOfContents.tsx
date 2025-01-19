import TableOfContentsLink from "./TableOfContentsLink"

const TableOfContent = ({ tableOfContents }: { tableOfContents: Record<string, { text: string, subSections: string[] }> }) => {

    return (
        <div style={{
            margin: '1rem 0',
        }}>
            <h1 className='font-bold hover:cursor-pointer' style={{
                marginBottom: '0.5rem',
            }}>Table of Contents</h1>
            <ul className='flex flex-col gap-2'>
                {Object.keys(tableOfContents).map((section: any) => (
                    <div key={section}>
                        <TableOfContentsLink section={section} tableOfContents={tableOfContents}/>
                        {tableOfContents[section].subSections && tableOfContents[section].subSections.length > 0 && (
                            <ul key={`${section}-sub-section`} className='text-secondary flex flex-col gap-2' style={{
                                marginLeft: '1rem'
                            }}>
                                {tableOfContents[section].subSections.map((subSection: any) => (
                                    <a key={subSection} href={`#${subSection}`}>{subSection}</a>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TableOfContent   