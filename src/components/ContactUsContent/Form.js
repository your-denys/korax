import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const formInitial = {
    name: '',
    company: '',
    description: '',
    email: '',
  };

  const [formDetails, setFormDetails] = useState(formInitial);
  const [buttonText, setButtonText] = useState('Send message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
    console.log(formDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send message');
    let result = await response.json();
    setFormDetails(formInitial);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: 'We will contact you soon!',
      });
    } else {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again later',
      });
    }
  };
  return (
    <motion.form initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.2, duration:0.4}} className="contact-us-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label>
          {' '}
          Your Name*
          <div>
            <input
              autoFocus
              value={formDetails.name}
              onChange={(e) => onFormUpdate('name', e.target.value)}
              className="input"
              type="text"
              required
            />
          </div>
        </label>
      </div>
      <div className="input-wrapper">
        <label>
          {' '}
          Your Email*
          <div>
            <input
              value={formDetails.email}
              onChange={(e) => onFormUpdate('email', e.target.value)}
              className="input"
              type="email"
              required
            />
          </div>
        </label>
      </div>
      <div className="input-wrapper">
        <label>
          {' '}
          Your Company*
          <div>
            <input
              value={formDetails.company}
              onChange={(e) =>
                onFormUpdate('company', e.target.value)
              }
              className="input"
              type="text"
              required
            />
          </div>
        </label>
      </div>
      <div className="input-wrapper">
        <label>
          {' '}
          Project Description
          <div>
            <input
              value={formDetails.description}
              onChange={(e) =>
                onFormUpdate('description', e.target.value)
              }
              className="input"
              type="text"
            />
          </div>
        </label>
      </div>
      {/* {status.message && <p>{status.message}</p>} */}
      <motion.button

        className="contact-us-button"
        type="submit"
      >
        <span>{buttonText}</span>
      </motion.button>
    </motion.form>
  );
};

export default Form;
