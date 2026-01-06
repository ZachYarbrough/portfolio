'use client'
import React, { useState } from 'react'
import ExperiencePreview from './ExperiencePreview'


const Experience = () => {
  const [toggle, setToggle] = useState<'work' | 'education'>('education')

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{           
	  marginTop: '1rem 0',
	  position: 'relative',
          display: 'flex',
	  width: '15rem',
	  padding: '2px 4px',
          borderRadius: '0.4rem',
          overflow: 'hidden' }}>
        {/* Sliding Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: toggle === 'work' ? '50%' : '0%', // change if education/work order need to be swapped
            width: '50%',
            height: '100%',
            backgroundColor: 'var(--secondary-light)',
            borderRadius: '0.4rem',
            transition: 'left 0.3s ease',
            zIndex: 0,
          }}
        ></div>
	<button
          onClick={() => setToggle('education')}
          style={{
            fontWeight: toggle === 'education' ? 'bold' : 'normal',
	    cursor: toggle === 'education' ? 'text' : 'pointer',
	    width: '50%',
	    height: '100%',
	    zIndex: 1,
          }}        >
          Education
        </button>
        <button
          onClick={() => setToggle('work')}
          style={{
            fontWeight: toggle === 'work' ? 'bold' : 'normal',
	    cursor: toggle === 'work' ? 'text' : 'pointer',
	    width: '50%',
	    height: '100%',
	    zIndex: 1,
          }}
        >
          Work
        </button>
      </div>

      {/* Conditional content */}
      {toggle === 'work' ? (
        <div>
	  <ExperiencePreview preview='/images/experience-logos/ideaentity_logo.webp' title='Full-Stack Developer' company='Idea Entity' time='Aug 2022 - Aug 2025' />
        </div>
      ) : (
        <div>
        <div>
	  <ExperiencePreview preview='/images/experience-logos/rice_logo.webp' title="Master's in Computer Science" company='Rice University' time='Jan 2026 - Present' />
	  <ExperiencePreview preview='/images/experience-logos/ut_logo.webp' title='Full-Stack Coding Bootcamp' company='The University of Texas' time='June 2021 - Dec 2021' />
	  <ExperiencePreview preview='/images/experience-logos/ut_logo.webp' title='BSA in Arts and Entertainment Technologies' company='The University of Texas' time='Aug 2017 - May 2021' />
        </div>
        </div>
      )}
    </div>
  )
}

export default Experience
