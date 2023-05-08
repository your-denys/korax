import React from 'react';
import ServicesComponent from '../../components/ServicesComponent/ServicesComponent';
import { motion as m } from 'framer-motion';
import './Services.css';
import Container from 'react-bootstrap/Container';
import FallImg from '../../components/ServicesComponent/FallImg';

const Services = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="services-page"
    >
      <Container className="services-container">
        <ServicesComponent />
        <FallImg />
      </Container>
    </m.div>
  );
};

export default Services;
