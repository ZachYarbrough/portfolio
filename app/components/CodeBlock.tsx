'use client'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState, useEffect } from 'react';
import { copyToClipboard } from './general';
import { CopyIcon, PasteIcon } from './assets/icons';

// Register languages for syntax highlighting
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);

const CodeBlock = ({ className, children }: { className: string, children: string }) => {
    const [theme, setTheme] = useState('light')
    const [copied, setCopied] = useState(false)

    const language = className ? className.replace('lang-', '') : 'text';

    useEffect(() => {
        window.addEventListener('storage', () => {
            setTheme(window.localStorage.getItem('theme') || 'light')
        })
    }, [])

    const handleCopy = async () => {
        await copyToClipboard(children)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div className='group relative'>
            <button onClick={handleCopy} className='absolute z-5 text-gray-500 hover:text-gray-700 
                opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300' style={{
                    background: 'transparent',
                    top: '0.5rem',
                    right: '1rem',
                }}>
                {copied ? <PasteIcon /> : <CopyIcon />}
            </button>
            <SyntaxHighlighter
                customStyle={{
                    fontFamily: 'inherit',
                    display: 'flex',
                    background: 'transparent',
                    border: '1px solid #e0e0e0',
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    margin: '0.5rem',
                    minHeight: '3rem',
                    alignItems: 'center',
                }}
                language={language.toLowerCase()}
                style={theme === 'dark' ? oneDark : oneLight}
                showLineNumbers
                lineNumberStyle={{
                    minWidth: '0.5rem',
                    paddingLeft: '0.5rem',
                }}
                wrapLines
                codeTagProps={{ style: { fontFamily: "inherit" } }} // inherit font family from parent
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBlock