import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const FundWallet = () => {

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
						<h6 className="text-secondary text-center text-md-left">
							Fund your Wallet
						</h6>
						<h2 className="text-center text-md-left">
							Wallet Topup
						</h2>
						<hr />
						<Row className="mt-4">
							<Col xs={12} md={12}>
								<Form>
									<Form.Row>
										<Form.Group as={Col} controlId="amount">
											<Form.Label>Amount</Form.Label>
											<Form.Control
												type="text"
												onChange={e => setAmount(e.target.value)}
												placeholder="Enter Amount"
											/>
										</Form.Group>
									</Form.Row>
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
							<Row className="mb-3 mt-2">
								<Col>Service:</Col>
								<Col className="text-right">Wallet</Col>
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
										Outgoing calls free & 300 Local & National SMS & 1 GB 3G/4G
										Data & Data Validity 28 day(s) & For 3G/4G user - T&C apply
									</small>
								</Col>
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

export default FundWallet;
