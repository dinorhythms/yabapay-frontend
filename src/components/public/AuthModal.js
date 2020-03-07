import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Tab } from "react-bootstrap";
import Login from './Login';
import Signup from './Signup';

const AuthModal = (props) => {

  const [key, setKey] = useState('login');
  
  useEffect(() => {
    const { navkey } = props;
    setKey(navkey)
  }, [props, key])

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Tabs id="auth" activeKey={key} onSelect={k => setKey(k)}>
          <Tab eventKey="login" title="Login">
            <Login/>
          </Tab>
          <Tab eventKey="signup" title="Signup">
            <Signup/>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  )
}

export default AuthModal;
