'use client'

import { useEffect, useRef, useState } from "react"
import { ArrowRightIcon } from "./assets/icons"
import TableOfContentsLink from "./TableOfContentsLink"

const DropdownList = ({ title, startExpanded=true, topOfPage = false, children, style={} }: { title: string, startExpanded?: boolean, topOfPage?: boolean, children: React.ReactNode, style?: any }) => {
    const ref = useRef<any>(null)
    const [dropdownHeight, setDropdownHeight] = useState(null)
    const [isExpanded, setIsExpanded] = useState(startExpanded)

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded)
    }

   useEffect(() => {
	if (ref.current) {
	    setDropdownHeight(ref.current.scrollHeight)
	}
    }, [children]);

    return (
        <div style={
	    Object.keys(style).length ? style : {
            margin: topOfPage ? '0 0 1rem 0' : '1rem 0'
	    }
        }>
            <h1 className='flex items-center font-bold cursor-pointer' style={{
                marginBottom: startExpanded ? '0.5rem' : '0rem',
            }} onClick={toggleDropdown}>{title}<span style={{
                fontWeight: 'bolder',
                marginLeft: '0.5rem',
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
            }}><ArrowRightIcon /></span></h1>
            <div ref={ref} className={`flex flex-col gap-2`} style={{
                maxHeight: isExpanded ? `${dropdownHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
            }}>
                {children}
            </div>
        </div>
    )
}

export default DropdownList
