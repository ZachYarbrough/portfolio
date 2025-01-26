'use client'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import { useEffect, useState } from 'react';
import { copyToClipboard } from './general';
import { CopyIcon, PasteIcon } from './assets/icons';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Register languages for syntax highlighting
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);

const CodeBlock = ({ className, children }: { className: string, children: string }) => {
    const [copied, setCopied] = useState(false)

    const language = className ? className.replace('lang-', '') : 'text';
    console.log(language)
    const handleCopy = async () => {
        await copyToClipboard(children)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    useEffect(() => {
        console.log(oneDark)
    }, [oneDark])

    return (
        <div className='group relative'>
            <button onClick={handleCopy} className='absolute z-5 text-gray-500 hover:text-gray-700 
                opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300 text-secondary' style={{
                    background: 'transparent',
                    top: '0.5rem',
                    right: '0.5rem',
                }}>
                {copied ? <PasteIcon /> : <CopyIcon />}
            </button>
            <SyntaxHighlighter
                style={oneDark}
                className='syntax-highlighter'
                language={language.toLowerCase()}
                showLineNumbers
                lineNumberStyle={{
                    minWidth: '0.5rem',
                    paddingLeft: '0.5rem',
                }}
                wrapLines={true}
                codeTagProps={{ style: { fontFamily: "inherit" } }} // inherit font family from parent
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBlock