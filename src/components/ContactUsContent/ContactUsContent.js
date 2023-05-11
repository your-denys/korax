import React from 'react';
import Form from './Form';
import './ContactUsContent.css';
import { motion } from 'framer-motion';

const ContactUsContent = () => {
  return (
    <section className="contact-us">
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="contact-us-title"
      >
        Contact us
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
        style={{ marginBottom: '100px' }}
      ></motion.div>
      <Form />
    </section>
  );
};

export default ContactUsContent;
