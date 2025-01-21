'use client'
import { useState, useEffect } from 'react'
import { CautionIcon, InfoIcon, NoteIcon, TipIcon, WarningIcon } from './assets/icons'

const BlockQuote = ({ children }: { children: any[] }) => {
    const [blockType, setBlockType] = useState('')
    const [quote, setQuote] = useState<any>('')

    // This useEffect processes the children prop to extract blockType and quote content
    // It handles both regular quotes and special syntax like [!INFO]
    useEffect(() => {
        // Extract the first child that has props.children, or empty string if none found
        const childData = children.filter((child: any) => child?.props?.children)[0]?.props?.children || ''

        if (childData) {
            // Extract block type from syntax like [!INFO] - gets the text between [! and ]
            // Convert to lowercase and set as blockType state
            setBlockType(childData[0].split('[!')[1]?.split(']')[0]?.toLowerCase())

            // Split the content at ']' to separate the type marker from quote content
            const splitQuote = childData[0].split(']')

            if (splitQuote[0].startsWith('[!')) {
                // If content starts with [!, extract just the quote part after the ]
                // Fallback to full content if no ']' found
                setQuote([childData[0].split(']')[1], ...childData.slice(1)] || childData[0])
            } else {
                // For regular quotes without special syntax, use the full content
                setQuote(childData)
            }
        }
    }, [children])

    return (
        <>
            {/* Default Block */}
            {blockType === undefined &&
                <blockquote style={{ borderLeft: '3px solid var(--highlight)', paddingLeft: '1rem', margin: '0.5rem 0' }}>{quote}</blockquote>
            }
            {blockType && <div style={{ border: `3px solid var(--${blockType})`, borderRadius: '0.5rem', padding: '0.5rem 1rem', margin: '0.5rem 0' }}>
                {/* Info Block */}
                {blockType === 'info' && <>
                    <div className={`font-bold flex items-center gap-2`} style={{ color: 'var(--info)' }}>
                    <InfoIcon />
                    <span>Info</span>
                </div>
                <blockquote>{quote}</blockquote>
            </>
            }
            {/* Note Block */}
            {blockType === 'note' && <>
                <div className={`font-bold flex items-center gap-2`} style={{ color: 'var(--note)' }}>
                    <NoteIcon />
                    <span>Note</span>
                </div>
                <blockquote>{quote}</blockquote>
            </>
            }
            {/* Warning Block */}
            {blockType === 'warning' && <>
                <div className={`font-bold flex items-center gap-2`} style={{ color: 'var(--warning)' }}>
                    <WarningIcon />
                    <span>Warning</span>
                </div>
                <blockquote>{quote}</blockquote>
            </>
            }
            {/* Caution Block */}
            {blockType === 'caution' && <>
                <div className={`font-bold flex items-center gap-2`} style={{ color: 'var(--caution)' }}>
                    <CautionIcon />
                    <span>Caution</span>
                </div>
                <blockquote>{quote}</blockquote>
            </>
            }
            {/* Tip Block */}
            {blockType === 'tip' && <>
                <div className={`font-bold flex items-center gap-2`} style={{ color: 'var(--tip)' }}>
                    <TipIcon />
                    <span>Tip</span>
                </div>
                <blockquote>{quote}</blockquote>
            </>
            }
            </div>}
        </>
    )
}

export default BlockQuote   