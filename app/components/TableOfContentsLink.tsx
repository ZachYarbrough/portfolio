'use client'

import { useEffect, useState } from "react";

const TableOfContentsLink = ({ section, tableOfContents }: { section: string, tableOfContents: Record<string, { text: string, subSections: string[] }> }) => {
    const [isPastMain, setIsPastMain] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsPastMain(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a href={`#${section}`} className={`${isPastMain ? 'text-primary' : 'text-secondary'}`}>
            <span>{tableOfContents[section] !== undefined ? tableOfContents[section].text : section}</span>
        </a>
    )
}

export default TableOfContentsLink