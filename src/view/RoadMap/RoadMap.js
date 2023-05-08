import React from 'react'
import { Container } from 'react-bootstrap'
import RoadMapContent from '../../components/RoadMapContent/RoadMapContent'
import './RoadMap.css'

const RoadMap = () => {
  return (
    <div className='road-page'>
        <Container>
            <RoadMapContent/>
        </Container>
    </div>
  )
}

export default RoadMap