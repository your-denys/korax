import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectsContent from '../../components/ProjectsContent/ProjectsContent'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-page'>
        <Container>
            <ProjectsContent/>
        </Container>
    </div>
  )
}

export default Projects