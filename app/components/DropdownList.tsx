'use client'

import { useEffect, useRef, useState } from "react"
import { ArrowRightIcon } from "./assets/icons"
import TableOfContentsLink from "./TableOfContentsLink"

const DropdownList = ({ title, topOfPage = false, children }: { title: string, topOfPage?: boolean, children: React.ReactNode }) => {
    const ref = useRef<any>(null)
    const [dropdownHeight, setDropdownHeight] = useState(null)
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleDropdown = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        if (ref.current) {
            setDropdownHeight(ref.current.clientHeight)
        }
    }, [ref]);

    useEffect(() => {
        setIsExpanded(true)
    }, [children])

    return (
        <div style={{
            margin: topOfPage ? '0 0 1rem 0' : '1rem 0',
        }}>
            <h1 className='flex items-center font-bold cursor-pointer' style={{
                marginBottom: '0.5rem',
            }} onClick={toggleDropdown}>{title}<span style={{
                fontWeight: 'bolder',
                marginLeft: '0.5rem',
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
            }}><ArrowRightIcon /></span></h1>
            <ul ref={ref} className={`flex flex-col gap-2`} style={{
                maxHeight: isExpanded ? `${dropdownHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
            }}>
                {children}
            </ul>
        </div>
    )
}

export default DropdownList