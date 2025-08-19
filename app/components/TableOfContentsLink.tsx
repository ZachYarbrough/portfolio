'use client'

import { useEffect, useState } from "react";

const TableOfContentsLink = ({ section, tableOfContents }: { section: string, tableOfContents: Record<string, { text: string, subSections: string[] }> }) => {
    const [isPastMain, setIsPastMain] = useState(false);

    useEffect(() => {
        const sectionElement = document.getElementById(section.toLowerCase().split(' ').join('-'));
        if (!sectionElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Add some offset to trigger slightly before the section reaches the top
                setIsPastMain(entry.isIntersecting);
            },
            {
		rootMargin: '1000px 0px -4% 0px', // section is active when it's within top 10% of viewport
                threshold: 0
            }
        );

        observer.observe(sectionElement);
        return () => observer.disconnect()
    }, [section])

    return (
        <a href={`#${section.toLowerCase().split(' ').join('-')}`} className={`${isPastMain ? 'text-primary font-bold' : 'text-secondary'} transition-colors duration-200`}>
            <span>{tableOfContents[section] !== undefined ? tableOfContents[section].text : section}</span>
        </a>
    )
}

export default TableOfContentsLink
