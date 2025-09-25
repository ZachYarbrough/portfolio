'use client'
import React, { useState } from 'react'
import ExperiencePreview from './ExperiencePreview'


const Experience = () => {
  const [toggle, setToggle] = useState<'work' | 'education'>('work')

  return (
    <div style={{ marginTop: '1rem' }}>
      {/* Toggle buttons */}
      <div style={{           
	  marginTop: '1rem 0',
	  position: 'relative',
          display: 'flex',
	  width: '15rem',
	  padding: '2px 4px',
          borderRadius: '0.4rem',
          overflow: 'hidden',
          cursor: 'pointer',}}>
              {/* Sliding Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: toggle === 'work' ? '0%' : '50%',
            width: '50%',
            height: '100%',
            backgroundColor: 'var(--secondary-light)',
            borderRadius: '0.4rem',
            transition: 'left 0.3s ease',
            zIndex: 0,
          }}
        ></div>
        <button
          onClick={() => setToggle('work')}
          style={{
            fontWeight: toggle === 'work' ? 'bold' : 'normal',
	    width: '50%',
	    zIndex: 1
          }}
        >
          Work
        </button>
        <button
          onClick={() => setToggle('education')}
          style={{ fontWeight: toggle === 'education' ? 'bold' : 'normal', width: '50%', zIndex: 1 }}
        >
          Education
        </button>
      </div>

      {/* Conditional content */}
      {toggle === 'work' ? (
        <div>
	  <ExperiencePreview preview='/images/experience-logos/ideaentity_logo.jpg' title='Full-Stack Developer' company='Idea Entity' time='August 2022 - August 2025' />
        </div>
      ) : (
        <div>
        <div>
	  <ExperiencePreview preview='/images/experience-logos/rice_logo.jpg' title="Master's in Computer Science" company='Rice University' time='Jan 2026 - Present' />
	  <ExperiencePreview preview='/images/experience-logos/ut_logo.jpg' title='Full-Stack Coding Bootcamp' company='The University of Texas at Austin' time='June 2021 - Dec 2021' />
	  <ExperiencePreview preview='/images/experience-logos/ut_logo.jpg' title='BSA in Arts and Entertainment Technologies' company='The University of Texas at Austin' time='Aug 2017 - May 2021' />
        </div>
        </div>
      )}
    </div>
  )
}

export default Experience
