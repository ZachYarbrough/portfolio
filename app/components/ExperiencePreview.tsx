'use client'
import React from 'react'

const ExperiencePreview = ({ title, company, time, preview, }: any) => {

    return (
        <>
                <div className='experience-card' style={{ display: 'flex', backgroundColor: 'var(--secondary-light)', justifyContent: 'space-between', border: '1px solid var(--secondary-light)', borderRadius: '0.5rem', padding: '1rem', marginTop: '1rem', width: '100%' }}>
                    <div style={{ width: '75px', height: '75px', marginRight: '1rem', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
			<img src={preview} alt={company + '_logo'} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', margin: 'auto', borderRadius: '0.5rem' }} />
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
