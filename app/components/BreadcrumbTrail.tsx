'use client'

import { usePathname } from 'next/navigation'
import { ArrowRightIcon } from './assets/icons'
import InternalLink from './InternalLInk'

const BreadcrumbTrail = ({ isTag }: { isTag?: boolean }) => {
    const pathname = usePathname()
    const pathnameArray = pathname.split('/').filter((path) => path)
    let currentPath = ''

    return (
        <div className='flex items-center gap-1 font-bold' style={{
            marginBottom: '2rem'
        }}>
            <InternalLink href='/'>
                Home
                <span className='text-primary'><ArrowRightIcon /></span>
            </InternalLink>
            {pathnameArray.map((path, index) => {
                currentPath += `/${path}`
                const formattedPath = path.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                return (
                    <InternalLink key={index} href={currentPath}>
                        {isTag && index + 1 === pathnameArray.length ? '#' + path : formattedPath}
                        {index !== pathnameArray.length - 1 && <span className='text-primary'><ArrowRightIcon /></span>}
                    </InternalLink>
                )
            })}
        </div>
    )
}

export default BreadcrumbTrail