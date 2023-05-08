import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Container from 'react-bootstrap/Container';
import HomeContent from '../../components/HomeContent/HomeContent';
import { motion as m } from 'framer-motion';
import './Home.css';



const Home = () => {

  return (
    <m.div
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{opacity:0}}
      className="home-page"
    >
      <Container>
        <Header />
        <HomeContent />
        <Navigation />
      </Container>
    </m.div>
  );
};

export default Home;
