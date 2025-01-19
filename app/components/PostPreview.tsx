import Link from 'next/link'

import { PostMetadata } from '../types/blog'

const PostPreview = ({ slug, title, date, tags }: PostMetadata) => {
    return (
        <div key={slug} style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <div className='flex'>
                <p className='text-secondary'>{date}</p>
                <Link href={`/blog/posts/${slug}`}>
                    <h2 className='text-highlight font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </Link>
            </div>
            <div>
                {tags.map((tag) => (
                    <Link key={tag} href={`/blog/tags/${tag}`}
                        className='bg-secondary text-highlight px-2 py-1 rounded-md'
                        style={{
                            fontWeight: '600',
                            padding: '0.2rem 0.3rem',
                            marginRight: '0.5rem',
                            backgroundColor: 'var(--secondary-light)',
                            borderRadius: '0.3rem',
                        }}>
                        #{tag}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PostPreview