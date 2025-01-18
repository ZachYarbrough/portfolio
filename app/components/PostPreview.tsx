import Link from 'next/link'
import { PostMetadata } from '../types/blog'

const PostPreview = ({ slug, title, date }: PostMetadata) => {
    return (
        <div key={slug}>
            <Link href={`/blog/posts/${slug}`}>
                <h2>{title}</h2>
            </Link>
            <p>{date}</p>
        </div>
    )
}

export default PostPreview