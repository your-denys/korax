import React from 'react'
import Container from 'react-bootstrap/Container';
import ProcessesContent from '../../components/ProcessesContent/ProcessesContent';
import './Processes.css'


const Processes = () => {
  return (
    <div className='processes-page'>
        <Container>
            <ProcessesContent/>
        </Container>
    </div>
  )
}

export default Processes