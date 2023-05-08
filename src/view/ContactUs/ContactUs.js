import React from 'react'
import { Container } from 'react-bootstrap'
import ContactUsContent from '../../components/ContactUsContent/ContactUsContent'
import './ContactUs.css'
import Footer from './Footer'

const Projects = () => {
  return (
    <div className='contactUs-page'>
        <Container>
            <ContactUsContent/>
        </Container>
        <Footer/>
    </div>
  )
}

export default Projects