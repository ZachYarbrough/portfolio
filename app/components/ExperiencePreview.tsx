'use client'
import React from 'react'
import Image from './Image'

const ExperiencePreview = ({ title, company, time, preview, }: any) => {

    return (
        <>
                <div className='experience-card' style={{ display: 'flex', backgroundColor: 'var(--secondary-light)', justifyContent: 'space-between', border: '1px solid var(--secondary-light)', borderRadius: '0.5rem', padding: '1rem', marginTop: '1rem', width: '100%' }}>
                    <div style={{ width: '75px', height: '75px', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
			<Image src={preview} alt={company + '_logo'} imgStyle={{ width: '75px', height: '75px', overflow: 'hidden', margin: 'auto', borderRadius: '0.5rem' }} hideModal={true} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <div style={{textAlign: 'left' }}>
                                <h2 className='font-bold'>{title}</h2>
                                <h2>{company}</h2>
				<h2>{time}</h2>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ExperiencePreview 
