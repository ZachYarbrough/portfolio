import Link from 'next/link'

import InternalLink from './InternalLInk'

const ProjectPreview = ({ slug, title, tags }: any) => {
    return (
        <div key={slug} style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <div className='flex'>
                <InternalLink fileName={slug} link={'projects'}>
                    <h2 className='text-highlight font-bold' style={{ paddingLeft: '1rem' }}>{title}</h2>
                </InternalLink>
            </div>
            <div className='flex'>
                {tags.map((tag: any) => (
                    <div
                        key={tag}
                    style={{
                        marginLeft: '0.5rem'
                    }}>
                    <InternalLink key={tag} useBubbleStyle={true} fileName={tag} link={'tags'}
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