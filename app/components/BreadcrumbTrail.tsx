'use client'

import { usePathname } from 'next/navigation'
import { ArrowRightIcon } from './assets/icons'
import Link from 'next/link'

const BreadcrumbTrail = ({ isTag }: { isTag?: boolean }) => {
    const pathname = usePathname()
    const pathnameArray = pathname.split('/').filter((path) => path)
    let currentPath = ''
    console.log(pathnameArray)

    return (
        <div className='flex items-center gap-1 font-bold' style={{
            marginBottom: '2rem'
        }}>
            <Link href={'/'} className='text-highlight flex items-center'>
                Home
                <span className='text-primary'><ArrowRightIcon /></span>
            </Link>
            {pathnameArray.map((path, index) => {
                currentPath += `/${path}`
                const formattedPath = path.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                return (
                    <Link key={index} href={currentPath} className='flex items-center text-highlight'>
                        {isTag && index + 1 === pathnameArray.length ? '#' + path : formattedPath}
                        {index !== pathnameArray.length - 1 && <span className='text-primary'><ArrowRightIcon /></span>}
                    </Link>
                )
            })}
        </div>
    )
}

export default BreadcrumbTrail