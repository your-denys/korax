import React from 'react';
import './AboutUsContent.css';
import { motion } from 'framer-motion';

const AboutUsContent = () => {
  return (
    <section className="about-us">
      <p className="blocks-title">About us</p>
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="blocks-description blocks-description-border"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.h2>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
      ></motion.span>
      <motion.article
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="about-us-content"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </motion.article>
    </section>
  );
};

export default AboutUsContent;
