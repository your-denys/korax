import './ServicesComponent.css';
import arrow from '../../assets/button-arrow.svg';
import { motion } from 'framer-motion';

const ServicesComponent = () => {
  return (
<motion.div
      // variants={contactAnimation}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{ amount: 0.3, once: true }}
      className="services-component"
    >
      <div className="services-wrapper">
        <section className="services-content">
          <article className="services-main">
            <motion.h2
            viewport={{ amount: 0.4, once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x:0,opacity:1}}
              transition={{ duration: 0.5 }}
              className="services-title"
            >
              SERVICES
            </motion.h2>
            <motion.img
             viewport={{ amount: 0.4, once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="services-arrow"
              src={arrow}
              alt="Arrow"
            />
          </article>
          <article className="services-description">
            <motion.p
            viewport={{ amount: 0.4, once: true }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="services-first"
            >
              *Lorem ipsum
            </motion.p>
            <motion.p
             viewport={{ amount: 0.4, once: true }}
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              *Lorem ipsum
            </motion.p>
            <motion.p
            
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ amount: 0.4, once: true }}
            >
              *Lorem ipsum
            </motion.p>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ amount: 0.4, once: true }}
            >
              *Lorem ipsum
            </motion.p>
          </article>
        </section>
        {/* <Drag /> */}
      </div>
    </motion.div>
  );
};

export default ServicesComponent;
