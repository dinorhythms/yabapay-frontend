import React from 'react';
import { Modal } from "react-bootstrap";
import Login from './Login';

const LoginModal = (props) => {

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
        <Login/>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal;
