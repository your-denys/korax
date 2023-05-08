import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './view/Home/Home';
import Services from './view/Services/Services';
import { useEffect, useRef, useState } from 'react';
import Processes from './view/Processes/Processes';
import AboutUs from './view/AboutUs/AboutUs';
import RoadMap from './view/RoadMap/RoadMap';
import Projects from './view/Projects/Projects';
import ContactUs from './view/ContactUs/ContactUs';

function App() {
  const blocksRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const observerRef = useRef(null);
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = blocksRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            setActiveBlockIndex(index);
            window.history.replaceState(
              null,
              null,
              `#${entry.target.id}`
            );
          }
        });
      },
      { threshold: 0.5 } 
    );

    blocksRefs.forEach((ref) =>
      observerRef.current.observe(ref.current)
    );

    const handleWheel = (event) => {
      event.preventDefault();
      const delta = event.deltaY;

      if (delta > 0) {
        if (activeBlockIndex < blocksRefs.length - 1) {
          window.scrollTo({
            top: blocksRefs[activeBlockIndex + 1].current.offsetTop,
            behavior: 'smooth',
          });
          setActiveBlockIndex(activeBlockIndex + 1);
        }
      } else if (delta < 0) {
        if (activeBlockIndex > 0) {
          window.scrollTo({
            top: blocksRefs[activeBlockIndex - 1].current.offsetTop,
            behavior: 'smooth',
          });
          setActiveBlockIndex(activeBlockIndex - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      observerRef.current.disconnect();
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeBlockIndex, blocksRefs]);

  return (
    <div className="App">
      <div ref={blocksRefs[0]} id="home">
        <Home />
      </div>
      <div ref={blocksRefs[1]} id="services">
        <Services />
      </div>
      <div ref={blocksRefs[2]} id="processes">
        <Processes />
      </div>
      {/* <div style={{ height: '100vh' }} ref={blocksRefs[3]} id="works">
        <h2></h2>
      </div> */}
       <div ref={blocksRefs[3]} id="about-us">
        <AboutUs />
      </div>
       <div ref={blocksRefs[4]} id="road-map">
        <RoadMap />
      </div>
      <div ref={blocksRefs[5]} id="projects">
        <Projects />
      </div>
      <div ref={blocksRefs[6]} id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
