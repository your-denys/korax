import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './HomeContent.css';
import video from '../../assets/video.mp4';
import { motion } from 'framer-motion';
const HomeContent = () => {
  return (
    <section className="home-content">
      <article className="content-wrapper">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{delay: 0.3, duration: 1 }}
          className="purpose"
        >
          purpose of korax
        </motion.p>
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="title-home"
        >
          Corem ipsum dolor sit amet.
        </motion.h2>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-home"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Optio cumque laboriosam recusandae aperiam, nulla quaerat,
          reprehenderit voluptatem est architecto molestias voluptas
          hic eius voluptates cum quia nesciunt pariatur impedit
          quidem!.
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Nav.Link className="contact-us" href="#contact-us">
            <span>CONTACT US</span>
          </Nav.Link>
        </motion.div>
      </article>
      <motion.article 
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale:1, opacity: 1 }}
      transition={{ duration: 0.5 }}
       className="wrapper-video">
        <video
          className="video"
          autoPlay
          muted
          loop
          src={video}
          type="video/mp4"
          playsInline
        />
      </motion.article>
      
    </section>
  );
};

export default HomeContent;
