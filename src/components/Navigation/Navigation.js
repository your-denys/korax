import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Container />
      <Nav className="me-auto">
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#processes">Processes</Nav.Link>
        <Nav.Link href="#">How it works</Nav.Link>
        <Nav.Link href="#about-us">About us</Nav.Link>
        <Nav.Link href="#road-map">Road map</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav>
      <Container />
    </div>
  );
};

export default Navigation;
