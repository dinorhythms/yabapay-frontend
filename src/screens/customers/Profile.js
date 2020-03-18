import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Profile = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className="pt-2 pb-5">
				<Row>
					<Col xs={12} md={12}>
						<h6 className="text-secondary text-center text-md-left">
							Profile Information
						</h6>
						<h2 className="text-center text-md-left">Update Your information</h2>
						<hr />
						<Row className="mt-4">
							<Col xs={12} md={8}>
								<Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="firstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control onChange={e => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control onChange={e => setPhoneNo(e.target.value)} type="tel" placeholder="Phone Number" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="address">
                      <Form.Label>Full Address</Form.Label>
                      <Form.Control onChange={e => setAddress(e.target.value)} type="text" placeholder="Full Address" />
                    </Form.Group>
                  </Form.Row>
                  <Button
                    variant="primary"
                    className="mt-4 mb-3"
                    type="submit"
                    block>
                    Update
                  </Button>
								</Form>
							</Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item as={Link} to="/users/update-password">Change Password</ListGroup.Item>
                    <ListGroup.Item as={Link} to="/users/profile">Update Profile</ListGroup.Item>
                    <ListGroup.Item as={Link} to="/">Logout</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
						</Row>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default Profile;
