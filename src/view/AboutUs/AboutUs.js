import React from 'react'
import  Container  from 'react-bootstrap/Container'
import AboutUsContent from '../../components/AboutUsContent/AboutUsContent'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutUs-page'>
        <Container>
            <AboutUsContent/>
        </Container>
    </div>
  )
}

export default AboutUs