import React from 'react';
import { Modal } from "react-bootstrap";
import Signup from './Signup';

const SignUpModal = (props) => {

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
        <Signup/>
      </Modal.Body>
    </Modal>
  )
}

export default SignUpModal;
