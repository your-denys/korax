import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/Korax.svg';
import ModalLogIn from '../ModalLogIn/ModalLogIn';
import './Header.css';

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <nav className="nav">
      <Container>
        <div className='nav-wrapper'>
          <div>
            <img src={logo} alt="KORAX" />
          </div>
          <div>
            <button className='button-log-in'
              onClick={() => setModalShow(true)}
            >
              Log in
            </button>
            <ModalLogIn 
             show={modalShow}
             onHide={() => setModalShow(false)}
           />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
