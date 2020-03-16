import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import aedc from "../../assets/images/icons/aedc-electricity.png";
import ekedc from "../../assets/images/icons/ekedc-electricity.png";
import ikeja from "../../assets/images/icons/ikeja-electricity.png";
import jos from "../../assets/images/icons/jos-electricity.png";
import kano from "../../assets/images/icons/kano-electricity.png";
import phed from "../../assets/images/icons/phed-electricity.png";

import Services from "../../components/public/Services";

const classes = {
	icons: {
		width: "8rem"
	}
};

const PowerContent = ({ icon, name, provider }) => (
	<Col xs={6} className="mb-4">
		<Card className="p-3" as={Link} to={`/power/${provider}`}>
			<img
				src={icon}
				style={classes.icons}
				className="img-fluid mx-auto"
				alt={`${name} electricity`}
			/>
		</Card>
	</Col>
);

const PowerPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

	return (
		<>
			<div style={{ height: "4.2rem" }} />
			<section className="pt-5">
				<Container>
					<Row>
						<Col xs={12} md={12}>
							<h6 className="text-secondary text-center text-md-left">
								POWER BILL
							</h6>
							<h2 className="text-center text-md-left">Electric Power Payment</h2>
							<hr />
							<Row className="mt-4">
								<Col xs={12} md={6}>
									<Row>
										<PowerContent icon={aedc} name="aedc" provider="aedc" />
										<PowerContent icon={ekedc} name="ekedc" provider="ekedc" />
										<PowerContent icon={ikeja} name="ikeja" provider="ikeja" />
										<PowerContent icon={jos} name="jos" provider="jos" />
										<PowerContent icon={kano} name="kano" provider="kano" />
										<PowerContent
											icon={phed}
											name="phed"
											provider="phed"
										/>
									</Row>
								</Col>
								<Col
									xs={12}
									md={6}
									className="pt-3 pb-5 d-flex flex-column justify-content-center">
									<Services />
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default PowerPage;
