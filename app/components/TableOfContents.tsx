'use client'

import TableOfContentsLink from "./TableOfContentsLink"
import DropdownList from "./DropdownList"

const TableOfContent = ({ tableOfContents }: { tableOfContents: Record<string, { text: string, subSections: string[] }> }) => {

    return (
	<div style={{ marginTop: '0.5rem' }}>
	<DropdownList title='Table of Contents' topOfPage={true}>
                {Object.keys(tableOfContents).map((section: any) => (
                    <div key={section}>
                        <TableOfContentsLink section={section} tableOfContents={tableOfContents}/>
                        {tableOfContents[section].subSections && tableOfContents[section].subSections.length > 0 && (
                            <ul className='text-secondary flex flex-col gap-2' style={{
                                marginLeft: '1rem'
                            }}>
                                {tableOfContents[section].subSections.map((subSection: any) => (
                                    <TableOfContentsLink key={subSection.split(' ').join('-')} section={subSection} tableOfContents={tableOfContents} />
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
        </DropdownList>
	</div>
    )
}

export default TableOfContent   
