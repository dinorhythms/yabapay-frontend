import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const PayCable = () => {
	const { provider } = useParams();
	const { goBack } = useHistory();

	const [bouquet, setBouquet] = useState("");
	const [smartcardNumber, setSmartcardNumber] = useState("");
	const [customer, setCustomer] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState("");

	const classes = {
		icons: {
			width: "1.5rem",
			marginBottom: "0.3rem"
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className="pt-2 pb-5">
				<Row>
					<Col xs={12} md={6}>
						<Button onClick={() => goBack()} className="mb-3">
							Back
						</Button>
						<h6 className="text-secondary text-center text-md-left">
              CABLE SUBSCRIPTION
						</h6>
						<h2 className="text-center text-md-left">
							<img
								src={require(`../../assets/images/icons/${provider}-cable.png`)}
								style={classes.icons}
								className="img-fluid mx-auto"
								alt={`${provider} airtime`}
							/>
							<span className="text-capitalize ml-2">{provider}</span> Cable
								Subscription Payment
						</h2>
						<hr />
						<Row className="mt-4">
							<Col xs={12} md={12}>
								<Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Label>Bouquet</Form.Label>
											<Form.Control
												as="select"
												onChange={e => setBouquet(e.target.value)}>
												<option value="">-- Select Type --</option>
                        <option value="2000">DStv Access N2000 ( ₦2,000.00 )</option>
                        <option value="4000">DStv Family N4000 ( ₦4,000.00 )</option>
                        <option value="15800">DStv Premium N15800 ( ₦15,800.00 )</option>
                        <option value="3640">DStv German only N3640 ( ₦3,640.00 )</option>
                        <option value="6050">DStv French only N6050 ( ₦6,050.00 )</option>
											</Form.Control>
										</Form.Group>

										<Form.Row>
											<Form.Group as={Col} controlId="phone">
												<Form.Label>Meter Number</Form.Label>
												<Form.Control
													type="number"
													onChange={e => setSmartcardNumber(e.target.value)}
													placeholder="Enter Smartcard Number"
												/>
											</Form.Group>
											<Form.Group as={Col} controlId="amount">
												<Form.Label>Amount</Form.Label>
												<Form.Control
													type="text"
													defaultValue={amount}
													onChange={e => setAmount(e.target.value)}
													placeholder="Enter Amount"
												/>
											</Form.Group>
										</Form.Row>

										<Form.Row>
											<Form.Group as={Col} controlId="phone">
												<Form.Label>Phone</Form.Label>
												<Form.Control
													type="tel"
													onChange={e => setPhone(e.target.value)}
													placeholder="Enter Phone"
												/>
											</Form.Group>
											<Form.Group as={Col} controlId="amount">
												<Form.Label>Customer Name</Form.Label>
												<Form.Control
													type="text"
													defaultValue={amount}
													onChange={e => setCustomer(e.target.value)}
													placeholder="Enter Customer Name"
												/>
											</Form.Group>
										</Form.Row>

										<Form.Group controlId="email">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												onChange={e => setEmail(e.target.value)}
												placeholder="Enter Email"
											/>
										</Form.Group>

									<Form.Check
										type="switch"
										id="custom-switch"
										label="Pay with Yabapay Wallet"
										className="mt-5"
									/>
								</Form>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={6}>
						<h6 className="text-secondary text-center text-md-left">
							Confirm order details
						</h6>
						<h2 className="text-center text-md-left">Order Summary</h2>
						<hr />
						<Card className="p-3">
              <Row className="mb-3">
                <Col>Service:</Col>
                <Col className="text-right">Cable</Col>
              </Row>
              <Row className="mb-3">
                <Col>Provider:</Col>
                <Col className="text-right text-capitalize">{provider}</Col>
              </Row>
              <Row className="mb-3">
                <Col>Bouquet:</Col>
                <Col className="text-right">{bouquet || "Required"}</Col>
              </Row>
              <Row className="mb-3">
                <Col>Smartcard Number:</Col>
                <Col className="text-right">{smartcardNumber || "Required"}</Col>
              </Row>
              <Row className="mb-3">
                <Col>Customer Name:</Col>
                <Col className="text-right">{customer || "Required"}</Col>
              </Row>
              <Row className="mb-3">
                <Col>Phone:</Col>
                <Col className="text-right">{phone || "Required"}</Col>
              </Row>
              <Row className="mb-3">
                <Col>Email:</Col>
                <Col className="text-right">{email || "Required"}</Col>
              </Row>
              <Row className="mb-3">
                <Col>Amount:</Col>
                <Col className="text-right">{amount || "Required"}</Col>
              </Row>
							<Row className="mb-2">
								<Col>
									<div className="text-primary p-1">
										<Row>
											<Col>
												<h5>Order Amount</h5>
											</Col>
											<Col className="text-right">
												<h5>₦ {amount || 0}</h5>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
							<Button
								variant="primary"
								className="mt-4 mb-3"
								type="submit"
								block>
								Process now
							</Button>
						</Card>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default PayCable;
