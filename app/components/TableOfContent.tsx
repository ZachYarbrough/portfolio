
const TableOfContent = ({ tableOfContents }: { tableOfContents: { text: string, subSections: string[] }[] }) => {

    return (
        <div style={{
            margin: '1rem 0',
        }}>
            <h1 className='font-bold hover:cursor-pointer' style={{
                marginBottom: '0.5rem',
            }}>Table of Contents</h1>
            <ul>
                {Object.keys(tableOfContents).map((section: any) => (
                    <li key={section} className='text-secondary'>{tableOfContents[section].text}
                        {tableOfContents[section].subSections && tableOfContents[section].subSections.length > 0 && (
                            <ul key={`${section}-sub-section`} className='text-secondary' style={{
                                marginLeft: '1rem'
                            }}>
                                {tableOfContents[section].subSections.map((subSection: any) => (
                                    <li key={subSection}>{subSection}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TableOfContent   