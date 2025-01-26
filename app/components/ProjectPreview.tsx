import { PostMetadata } from '../types/posts'
import InternalLink from './InternalLInk'

const ProjectPreview = ({ slug, title, date, tags }: PostMetadata) => {
    return (
        <div key={slug} style={{ display: 'grid', gridTemplateColumns: '6rem 4fr 4fr', width: '100%', margin: '1rem 0' }}>
            <p className='text-secondary'>{date}</p>
            <div>
                <InternalLink href={`/projects/${slug}`}>
                    <h2 className='text-highlight font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </InternalLink>
            </div>
            <div className='flex' style={{ flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
                {tags.map((tag) => (
                    <div key={tag}>
                        <InternalLink key={tag} useBubbleStyle={true} href={`/tags/${tag}`}
                        >
                            #{tag}
                        </InternalLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectPreview