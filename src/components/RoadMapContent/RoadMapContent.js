import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const RoadMapContent = () => {
  return (
    <section className="roadmap">
      <p className="blocks-title">Roadmap</p>
      <motion.h2
        className="blocks-description blocks-description-border"
        style={{ color: '#161616' }}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
      ></motion.div>
      <Card />
      <motion.p
        initial={{y:300, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} transition={{duration:0.5}}
        className="roadmap-text-footer"
        style={{
          color: '#161616',
          marginTop: '70px',
          width: '260px',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime, tempore?
      </motion.p>
    </section>
  );
};

export default RoadMapContent;
