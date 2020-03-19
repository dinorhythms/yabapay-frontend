import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import aedc from "../../assets/images/icons/aedc-electricity.png";
import ekedc from "../../assets/images/icons/ekedc-electricity.png";
import ikeja from "../../assets/images/icons/ikeja-electricity.png";
import jos from "../../assets/images/icons/jos-electricity.png";
import kano from "../../assets/images/icons/kano-electricity.png";
import phed from "../../assets/images/icons/phed-electricity.png";

const classes = {
	icons: {
		width: "8rem"
	}
};

const PowerContent = ({ icon, name, provider }) => (
	<Col xs={6} md={4} className="mb-4">
		<Card className="p-3" as={Link} to={`/users/power/${provider}`}>
			<img
				src={icon}
				style={classes.icons}
				className="img-fluid mx-auto"
				alt={`${name} electricity`}
			/>
		</Card>
	</Col>
);

const BuyPower = () => {
  
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section>
				<h3 className="mb-3 text-center text-md-left text-secondary">Power Bills</h3>
				<h5 className="text-center text-md-left">Electric Power Payment</h5>
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
				</Row>
			</section>
		</>
	);
};

export default BuyPower;
