'use client'

import { useEffect, useState } from 'react'
import { copyToClipboard } from './general'
import { CopyIcon, PasteIcon } from './assets/icons'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import {Fragment, jsxs, jsx} from 'react/jsx-runtime'

import {refractor} from 'refractor/core'

import markdown from 'refractor/markdown'
import typescript from 'refractor/typescript';
import javascript from 'refractor/javascript';
import bash from 'refractor/bash';

refractor.register(typescript);
refractor.register(javascript);
refractor.register(bash);
refractor.register(markdown)


const CodeBlock = ({ className, children }: { className: string; children: string }) => {
    const [copied, setCopied] = useState(false)
    const [highlighted, setHighlighted] = useState<any>(null)

    const languageMap: Record<string, string> = {
	ts: 'typescript',
	js: 'javascript',
	sh: 'bash',
	shell: 'bash',
	md: 'markdown',
    };

    const rawLang = className?.replace('lang-', '') || 'text';
    const language = languageMap[rawLang] || rawLang;

    const handleCopy = async () => {
	await copyToClipboard(children)
	setCopied(true)
	setTimeout(() => setCopied(false), 2000)
    }


    useEffect(() => {
	const tree = refractor.highlight(children, language)

	setHighlighted(toJsxRuntime(tree, {Fragment, jsxs, jsx}))
    }, [children, language]);

    return (
	<div
	    className="group relative"
	    style={{
		borderRadius: '0.5rem',
		backgroundColor: 'var(--secondary-light)',
		padding: '1rem',
		margin: '1rem 0rem',
	    }}
	>
	    <button
		onClick={handleCopy}
		className="absolute z-5 opacity-0 group-hover:opacity-100 transition-opacity ease-out secondary-color duration-300"
		style={{ top: '0.5rem', right: '0.5rem', backgroundColor: 'var(--secondary-light)' }}
	    >
		{copied ? <PasteIcon /> : <CopyIcon />}
	    </button>
	    <div className='code-block'>{highlighted ? highlighted : <pre><code>{children}</code></pre>}</div>
	</div>
    )
}

export default CodeBlock

