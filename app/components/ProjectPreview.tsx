import { Project } from '../types/posts'
import { CodeBracketIcon, GlobeIcon } from './assets/icons'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLInk'

const ProjectPreview = ({ slug, title, source, live, description }: Project) => {
    
    return (
        <div key={slug} style={{ border: '1px solid var(--secondary-light)', borderRadius: '0.5rem', padding: '1rem', margin: '1rem 0', maxWidth: '33%'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <InternalLink href={`/projects/${slug}`}>
                    <h2 className='text-highlight font-bold'>{title}</h2>
                </InternalLink>
                <div>
                    <ExternalLink showIcon={false} href={live}>
                        <GlobeIcon />
                    </ExternalLink>
                    <ExternalLink showIcon={false} href={source}>
                        <CodeBracketIcon />
                    </ExternalLink>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ProjectPreview