import React from 'react'
import './ProjectsContent.css'

const ProjectsContent = () => {
  return (
    <section className='projects'>
        <h2 className='projects-title'>Projects</h2>
        <article className='projects-wrapper'>
            <div className='projects-card card-1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='projects-card card-2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='projects-card card-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='projects-card card-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </article>
    </section>
  )
}

export default ProjectsContent