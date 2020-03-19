import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import dstv from "../../assets/images/icons/dstv-cable.png";
import gotv from "../../assets/images/icons/gotv-cable.png";
import startimes from "../../assets/images/icons/startimes-cable.png";

const classes = {
	icons: {
		width: "8rem"
	}
};

const CableContent = ({ icon, name, provider }) => (
	<Col xs={6} md={4} className="mb-4">
		<Card className="p-3" as={Link} to={`/users/cable/${provider}`}>
			<img
				src={icon}
				style={classes.icons}
				className="img-fluid mx-auto"
				alt={`${name} cable`}
			/>
		</Card>
	</Col>
);

const BuyCable = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section>
				<h3 className="mb-3 text-center text-md-left">Cable Subscriptions</h3>
				<h5 className="text-center text-md-left">Cable TV Payment</h5>
				<hr />
				<Row className="mt-4">
					<Col xs={12} md={8}>
						<Row>
              <CableContent icon={dstv} name="aedc" provider="dstv" />
              <CableContent icon={gotv} name="ekedc" provider="gotv" />
              <CableContent icon={startimes} name="ikeja" provider="startimes" />
						</Row>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default BuyCable;
