import { PostMetadata } from '../types/posts'
import InternalLink from './InternalLInk'

const ProjectPreview = ({ slug, title, date, tags }: PostMetadata) => {
    
    return (
        <div key={slug} style={{ border: '1px solid var(--secondary-light)', borderRadius: '0.5rem', padding: '1rem', margin: '1rem 0', maxWidth: '33%' }}>
            <div>
                <InternalLink href={`/projects/${slug}`}>
                    <h2 className='text-highlight font-bold'>{title}</h2>
                </InternalLink>
            </div>
        </div>
    )
}

export default ProjectPreview