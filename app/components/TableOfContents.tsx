'use client'

import { useEffect, useRef, useState } from "react"
import TableOfContentsLink from "./TableOfContentsLink"
import { ArrowRightIcon } from "./assets/icons"

const TableOfContent = ({ tableOfContents }: { tableOfContents: Record<string, { text: string, subSections: string[] }> }) => {
    const tableOfContentsRef = useRef<any>(null)
    const [tableOfContentsHeight, setTableOfContentsHeight] = useState(null)
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleTableOfContents = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        if (tableOfContentsRef.current) {
            setTableOfContentsHeight(tableOfContentsRef.current.clientHeight)
        }
    }, [tableOfContentsRef]);

    return (
        <div style={{
            margin: '1rem 0',
        }}>
            <h1 className='flex items-center font-bold hover:cursor-pointer' style={{
                marginBottom: '0.5rem',
            }} onClick={toggleTableOfContents}>Table of Contents <span style={{
                fontWeight: 'bolder',
                marginLeft: '0.5rem',
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
            }}><ArrowRightIcon /></span></h1>
            <ul ref={tableOfContentsRef} className={`flex flex-col gap-2`} style={{
                maxHeight: isExpanded ? `${tableOfContentsHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
            }}>
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