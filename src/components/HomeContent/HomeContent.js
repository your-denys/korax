import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './HomeContent.css';
import video from '../../assets/video.mp4';

const HomeContent = () => {
  return (
    <section className="home-content">
      <article className="content-wrapper">
        <p className="purpose">purpose of korax</p>
        <h2 className="title-home">Corem ipsum dolor sit amet.</h2>
        <p className="text-home">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Optio cumque laboriosam recusandae aperiam, nulla quaerat,
          reprehenderit voluptatem est architecto molestias voluptas
          hic eius voluptates cum quia nesciunt pariatur impedit
          quidem!.
        </p>

        <Nav.Link className="contact-us" href="#contact-us">
          <span>CONTACT US</span>
        </Nav.Link>
      </article>
      <article className="wrapper-video">
        <video
          className="video"
          autoPlay
          muted
          loop
          src={video}
          type="video/mp4"
        />
      </article>
    </section>
  );
};

export default HomeContent;
