import Link from 'next/link'

import { PostMetadata } from '../types/posts'
import InternalLink from './InternalLInk'

const PostPreview = ({ slug, title, date, tags }: PostMetadata) => {
    return (
        <div key={slug} style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <div className='flex'>
                <p className='text-secondary'>{date}</p>
                <Link href={`/posts/${slug}`}>
                    <h2 className='text-highlight font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </Link>
            </div>
            <div className='flex'>
                {tags.map((tag) => (
                    <div
                        key={tag}
                    style={{
                        marginLeft: '0.5rem'
                    }}>
                    <InternalLink key={tag} fileName={tag} linkType={'tags'}
                        >
                        #{tag}
                    </InternalLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostPreview