import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChangePassword = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [comfirmPwd, setConfirmPwd] = useState("");

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
						<h2 className="text-center text-md-left">
							Update Password
						</h2>
						<hr />
						<Row className="mt-4">
							<Col xs={12} md={8}>
								<Form>
                  <Form.Row>
                      <Form.Group as={Col} controlId="oldpassword">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          onChange={e => setOldPassword(e.target.value)}
                          type="password"
                          placeholder="Enter Old Password"
                        />
                      </Form.Group>
                    </Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="newpassword">
											<Form.Label>New Password</Form.Label>
											<Form.Control
												onChange={e => setNewPassword(e.target.value)}
												type="password"
												placeholder="Enter New Password"
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="confirm">
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												onChange={e => setConfirmPwd(e.target.value)}
												type="password"
												placeholder="Confirm Password"
											/>
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
								<Card style={{ width: "18rem" }}>
									<ListGroup variant="flush">
										<ListGroup.Item as={Link} to="/users/update-password">
											Change Password
										</ListGroup.Item>
										<ListGroup.Item as={Link} to="/users/profile">
											Update Profile
										</ListGroup.Item>
										<ListGroup.Item as={Link} to="/">
											Logout
										</ListGroup.Item>
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

export default ChangePassword;
