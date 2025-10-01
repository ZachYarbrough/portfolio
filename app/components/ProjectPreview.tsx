'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import { CodeBracketIcon, GlobeIcon } from './assets/icons'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLInk'
import Image from './Image'

const ProjectPreview = ({ slug, title, source, live, description, preview, hidePreview = false }: any) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    return (
        <>
            {width >= 768 && <div style={{ border: '1px solid var(--secondary-light)', backgroundColor: 'var(--secondary-light)', borderRadius: '0.5rem', padding: '1rem', margin: '1rem 0.3rem 0rem 0.3rem', width: '32%' }}>
                {!hidePreview && <InternalLink href={`/projects/${slug}`}>
                    <Image src={preview} alt={title} className="scale-image" imgStyle={{ width: '206px', height: '115px', cursor: 'pointer', borderRadius: '0.5rem', border: '1px solid var(--secondary-light)' }} hideModal={true} />
                </InternalLink>}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <InternalLink href={`/projects/${slug}`}>
                        <h2 className='highlight-text font-bold'>{title}</h2>
                    </InternalLink>
                    <div>
			{live && <ExternalLink tooltip='Live Demo' showIcon={false} href={live}>
			    <GlobeIcon />
			</ExternalLink>}
			{source && <ExternalLink tooltip='Source Code' showIcon={false} href={source}>
			    <CodeBracketIcon />
			</ExternalLink>}
                    </div>
                </div>
                {!hidePreview && <p>{description}</p>}
            </div>}
            {width < 768 && <div style={{ display: 'flex', backgroundColor: 'var(--secondary-light)', justifyContent: 'space-between', border: '1px solid var(--secondary-light)', borderRadius: '0.5rem', padding: '1rem', marginTop: '1rem', width: '100%' }}>
                <>
                    {!hidePreview &&
                        <div style={{ width: '206px', marginRight: '1rem' }}>
                            <InternalLink href={`/projects/${slug}`}>
				<Image src={preview} alt={title} className="scale-image" imgStyle={{ cursor: 'pointer', width: '206px', height: '115px', borderRadius: '0.5rem', border: '1px solid var(--secondary-light)' }} hideModal={true} />
                            </InternalLink>
                        </div>
                    }
                    <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
                            <InternalLink href={`/projects/${slug}`}>
                                <h2 className='highlight-text font-bold'>{title}</h2>
                            </InternalLink>
                            <div style={{ width: '5rem', textAlign: 'right' }}>
			    {live && <ExternalLink tooltip='Live Demo' showIcon={false} href={live}>
                                   <GlobeIcon />
                                </ExternalLink>}
                            {source && <ExternalLink tooltip='Source Code' showIcon={false} href={source}>
                                    <CodeBracketIcon />
                                </ExternalLink>}
                            </div>
                        </div>
                        {!hidePreview && <p>{description}</p>}
                    </div>
                </>

            </div>}
        </>
    )
}

export default ProjectPreview
