import './RoadMapContent.css';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.article className="card-wrapper">
      <motion.button
        viewport={{once:true}}
        initial={{ x: -200, y: 200, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-item"
        style={{ backgroundColor: '#59575A' }}
      >
        <span>01</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </motion.button>
      <motion.button
        viewport={{once:true}}
        initial={{ x: -200, y: 200, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-item"
        style={{ backgroundColor: '#0A080B' }}
      >
        <span>02</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </motion.button>
      <motion.button
        viewport={{once:true}}
        initial={{ x: -200, y: 200, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-item"
        style={{ backgroundColor: '#06593B' }}
      >
        <span>03</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </motion.button>
      <motion.button
        viewport={{once:true}}
        initial={{ x: -200, y: 200, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-item"
        style={{ backgroundColor: '#52C4BC' }}
      >
        <span>04</span>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio
          mattis.
        </p>
      </motion.button>
    </motion.article>
  );
};

export default Card;
