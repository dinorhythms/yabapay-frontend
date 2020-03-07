import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ninemobile from "../../assets/images/icons/9mobile-data.png";
import airtel from "../../assets/images/icons/airtel-data.png";
import glo from "../../assets/images/icons/glo-data.png";
import mtn from "../../assets/images/icons/mtn-data.png";

import AppDownload from "../../components/public/AppDownload";

const DataPayPage = () => {
	const { provider } = useParams();
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState("");

	const classes = {
		icons: {
			width: "1.5rem",
			marginBottom: "0.3rem"
		}
	};

	return (
		<div>
			<div style={{ height: "4.2rem" }} />
			<section className="pt-5 pb-5">
				<Container>
					<Row>
						<Col xs={12} md={6}>
							<h6 className="text-secondary text-center text-md-left">
								DATA TOPUP
							</h6>
							<h2 className="text-center text-md-left">
								{provider === "mtn" ? (
									<img
										src={mtn}
										style={classes.icons}
										className="img-fluid mx-auto"
										alt={`${provider} data`}
									/>
								) : null}
								{provider === "airtel" ? (
									<img
										src={airtel}
										style={classes.icons}
										className="img-fluid mx-auto"
										alt={`${provider} data`}
									/>
								) : null}
								{provider === "glo" ? (
									<img
										src={glo}
										style={classes.icons}
										className="img-fluid mx-auto"
										alt={`${provider} data`}
									/>
								) : null}
								{provider === "9mobile" ? (
									<img
										src={ninemobile}
										style={classes.icons}
										className="img-fluid mx-auto"
										alt={`${provider} data`}
									/>
								) : null}
								<span className="text-capitalize ml-2">{provider}</span> Data
								Topup
							</h2>
							<hr />
							<Row className="mt-4">
								<Col xs={12} md={12}>
									<Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Pick Data Plan</Form.Label>
                      <Form.Control as="select" onChange={(e) => setAmount(e.target.value)}>
                        <option value="50">10MB at N50 for 1 Day</option>
                        <option value="100">50MB at N100 for 1 Day</option>
                        <option value="200">200MB at N200 for 3 Days</option>
                        <option value="300">350MB at N300 for 7 Days</option>
                        <option value="500">750MB at N500 for 14 Days</option>
                      </Form.Control>
                    </Form.Group>
										<Form.Row>
											<Form.Group as={Col} controlId="phone">
												<Form.Label>Phone</Form.Label>
												<Form.Control
                          type="phone"
													onChange={e => setPhone(e.target.value)}
													placeholder="Enter Phone"
												/>
											</Form.Group>
											<Form.Group as={Col} controlId="amount">
												<Form.Label>Amount</Form.Label>
												<Form.Control
                          type="text"
                          disabled
                          defaultValue={amount}
													onChange={e => setAmount(e.target.value)}
													placeholder="Enter Amount"
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
							<Card className="p-3">
								<Row className="mb-3">
									<Col>Service:</Col>
									<Col className="text-right">Data</Col>
								</Row>
								<Row className="mb-3">
									<Col>Phone:</Col>
									<Col className="text-right">{phone || "Required"}</Col>
								</Row>
								<Row className="mb-3">
									<Col>Provider:</Col>
									<Col className="text-right text-capitalize">{provider}</Col>
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
			<AppDownload />
		</div>
	);
};

export default DataPayPage;
