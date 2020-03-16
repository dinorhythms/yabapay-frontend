import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

const PowerPayPage = () => {

  const { provider } = useParams();
  const { goBack } = useHistory();

	const [meterType, setMeterType] = useState("");
	const [meterNumber, setMeterNumber] = useState("");
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
    window.scrollTo(0, 0)
  }, [])

	return (
		<div>
			<div style={{ height: "4.2rem" }} />
			<section className="pt-5 pb-5">
				<Container>
					<Row>
						<Col xs={12} md={6}>
              <Button onClick={() => goBack()} className="mb-3">Back</Button>
							<h6 className="text-secondary text-center text-md-left">
								POWER BILL
							</h6>
							<h2 className="text-center text-md-left">
                <img
                  src={require(`../../assets/images/icons/${provider}-electricity.png`)}
                  style={classes.icons}
                  className="img-fluid mx-auto"
                  alt={`${provider} electricity`}
                />
								<span className="text-capitalize ml-2">{provider}</span> Power 
								Bill Payment
							</h2>
							<hr />
							<Row className="mt-4">
								<Col xs={12} md={12}>
									<Form>
										<Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Label>Pick Meter Type</Form.Label>
											<Form.Control
												as="select"
												onChange={e => setMeterType(e.target.value)}>
												<option value="">-- Select Type --</option>
												<option value="prepaid">Prepaid</option>
												<option value="postpaid">Postpaid</option>
											</Form.Control>
										</Form.Group>

										<Form.Row>
											<Form.Group as={Col} controlId="phone">
												<Form.Label>Meter Number</Form.Label>
												<Form.Control
													type="number"
													onChange={e => setMeterNumber(e.target.value)}
													placeholder="Enter Meter Number"
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

										<Button
											variant="primary"
											className="mt-4 mb-5"
											type="submit"
											block>
											Process now
										</Button>
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
							<Card className="p-3 text-capitalize">
								<Row className="mb-3">
									<Col>Service:</Col>
									<Col className="text-right">Power</Col>
								</Row>
                <Row className="mb-3">
									<Col>Provider:</Col>
									<Col className="text-right text-capitalize">{provider}</Col>
								</Row>
                <Row className="mb-3">
									<Col>Meter Type:</Col>
									<Col className="text-right">{meterType || "Required"}</Col>
								</Row>
                <Row className="mb-3">
									<Col>Meter Number:</Col>
									<Col className="text-right">{meterNumber || "Required"}</Col>
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
								<Row className="mb-3">
									<Col>
										<h6>Plan Description:</h6>
										<small>
											Local calls free & STD calls free & Roaming Incoming &
											Outgoing calls free & 300 Local & National SMS & 1 GB
											3G/4G Data & Data Validity 28 day(s) & For 3G/4G user -
											T&C apply
										</small>
									</Col>
								</Row>
								<Row className="mb-3">
									<Col>
										<div className="bg-secondary text-white p-3">
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
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default PowerPayPage;
