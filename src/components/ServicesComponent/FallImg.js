import React from 'react';
import { useRef, useEffect } from 'react';
import fallimg from '../../assets/Group 8.png';
import './ServicesComponent.css'

const FallImg = () => {
  const blockRef1 = useRef(null);
  const blockRef2 = useRef(null);
  const blockRef3 = useRef(null);
  const blockRef4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const blockTop = blockRef1.current.getBoundingClientRect().top;
      const windowBottom = window.innerHeight;

      if (blockTop < windowBottom) {
        blockRef1.current.style.animationPlayState = 'running';
        blockRef2.current.style.animationPlayState = 'running';
        blockRef3.current.style.animationPlayState = 'running';
        blockRef4.current.style.animationPlayState = 'running';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="fallimg-block">
      <img
        ref={blockRef1}
        className="fallimg-1"
        src={fallimg}
        alt="lorem"
      ></img>
      <img
        ref={blockRef2}
        className="fallimg-2"
        src={fallimg}
        alt="lorem"
      ></img>
      <img
        ref={blockRef3}
        className="fallimg-3"
        src={fallimg}
        alt="lorem"
      ></img>
      <img
        ref={blockRef4}
        className="fallimg-4"
        src={fallimg}
        alt="lorem"
      ></img>
    </div>
  );
};

export default FallImg;
