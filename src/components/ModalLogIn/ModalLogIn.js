import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import './ModalLogIn.css';

const ModalLogIn = (props) => {

    const [login, setLogin] = useState(false)
    const onClose = () => {
        setLogin(false)
        props.onHide()
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Log in
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
           {login && <p>User is not found</p>}
          <div className='input-wrapper'>
            <label>
              {' '}
              Email
              <div>
                <input className="input" type="email" required />
              </div>
            </label>
          </div>
          <div className='input-wrapper'>
            <label>
              {' '}
              Password
              <div>
                <input className="input" type="text" required />
              </div>
            </label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => setLogin(true)}>Log In </button>
        <button onClick={() => onClose()}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLogIn;
