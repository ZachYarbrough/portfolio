
'use client'

import { useEffect, useState } from 'react'
import { copyToClipboard } from './general'
import { CopyIcon, PasteIcon } from './assets/icons'
import { createStarryNight, common } from '@wooorm/starry-night'
import { toJsxRuntime,  } from 'hast-util-to-jsx-runtime'
import * as runtime from 'react/jsx-runtime'

// Preload starry-night grammars
let starryNightPromise: ReturnType<typeof createStarryNight> | null = null
function getStarryNight() {
    if (!starryNightPromise) {
	starryNightPromise = createStarryNight(common)
    }
    return starryNightPromise
}

const CodeBlock = ({ className, children }: { className: string, children: string }) => {
    const [copied, setCopied] = useState(false)
    const [highlighted, setHighlighted] = useState<any>(null)

    const language = className ? className.replace('lang-', '') : 'text'

    const handleCopy = async () => {
	await copyToClipboard(children)
	setCopied(true)
	setTimeout(() => setCopied(false), 2000)
    }

    useEffect(() => {
	const highlight = async () => {
	    const sn = await getStarryNight()
	    const scope = sn.flagToScope(language) ?? 'source.tsx' // fallback
	    const tree = sn.highlight(children, scope)

	    const hast: any = {
		type: 'element',
		tagName: 'pre',
		properties: { className: ['code-block', `language-${language}`] },
		children: [
		    {
			type: 'element',
			tagName: 'code',
			properties: { className: [`language-${language}`] },
			children: tree.children,
		    },
		],
	    }

	    const jsx = toJsxRuntime(hast, { Fragment: runtime.Fragment, jsx: runtime.jsx, jsxs: runtime.jsxs })
	    setHighlighted(jsx)
	}

	highlight()
    }, [children, language])

    return (
	<div className="group relative" style={{ borderRadius: '5px', border: '1px solid #d1d5db', padding: '0.5rem', margin: '1rem 0rem' }}>
	<button
	onClick={handleCopy}
	className="absolute z-5
	opacity-0 group-hover:opacity-100 transition-opacity ease-out secondary-color duration-300"
	style={{ background: 'transparent', top: '0.5rem', right: '0.5rem' }}
	>
	{copied ? <PasteIcon /> : <CopyIcon />}
	</button>

	{highlighted}
	</div>
    )
}

export default CodeBlock

