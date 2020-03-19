import React from 'react';

import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProfileRightBar() {
  return (
    <Col>
      <Card style={{ width: '18rem' }} className="text-center pt-3">
        <Icon name="user-circle" size={100} color="black" />
        <small className="mt-2">larrysnet2001@gmail.com</small>
        <ListGroup variant="flush">
          <ListGroup.Item as={Link} to="/users/update-password">Change Password</ListGroup.Item>
          <ListGroup.Item as={Link} to="/users/profile">Update Profile</ListGroup.Item>
          <ListGroup.Item as={Link} to="/">Logout</ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  )
}
