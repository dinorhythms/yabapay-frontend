import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import dstv from "../../assets/images/icons/dstv-cable.png";
import gotv from "../../assets/images/icons/gotv-cable.png";
import startimes from "../../assets/images/icons/startimes-cable.png";

import Services from "../../components/public/Services";

const classes = {
	icons: {
		width: "8rem"
	}
};

const CableContent = ({ icon, name, provider }) => (
	<Col xs={6} className="mb-4">
		<Card className="p-3" as={Link} to={`/cable/${provider}`}>
			<img
				src={icon}
				style={classes.icons}
				className="img-fluid mx-auto"
				alt={`${name} cable`}
			/>
		</Card>
	</Col>
);

const CablePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div style={{ height: "4.2rem" }} />
			<section className="pt-5">
				<Container>
					<Row>
						<Col xs={12} md={12}>
							<h6 className="text-secondary text-center text-md-left">
								CABLE SUBSCRIPTION
							</h6>
							<h2 className="text-center text-md-left">
								Dstv Payment
							</h2>
							<hr />
							<Row className="mt-4">
								<Col xs={12} md={6}>
									<Row>
										<CableContent icon={dstv} name="aedc" provider="dstv" />
										<CableContent icon={gotv} name="ekedc" provider="gotv" />
										<CableContent icon={startimes} name="ikeja" provider="startimes" />
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

export default CablePage;
