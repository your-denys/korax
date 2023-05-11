import React from 'react'
import './ProjectsContent.css'
import { motion } from 'framer-motion';

const ProjectsContent = () => {
  return (
        <section className="projects">
      <motion.h2
       viewport={{ amount:0.3, once: true }}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="projects-title"
      >
        Projects
      </motion.h2>
      <motion.div
       viewport={{ amount:0.3, once: true }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
      <article className="projects-wrapper pt-5">
        <motion.div
         viewport={{ amount:0.3, once: true }}
          initial={{ x: -300, y: 300, scale: 0.7 }}
          whileInView={{ x: 0, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-1"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
         viewport={{ amount:0.3, once: true }}
          initial={{ x: 300, y: 300, scale: 0.7 }}
          whileInView={{ x: 0, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-2"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
         viewport={{ amount:0.3, once: true }}
          initial={{ x: -300, y: 300, scale: 0.7 }}
          whileInView={{ x: 0, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-3"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
         viewport={{ amount:0.3, once: true }}
          initial={{ x: 300, y: 300, scale: 0.7 }}
          whileInView={{ x: 0, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-4"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </article>
    </section>
  )
}

export default ProjectsContent
