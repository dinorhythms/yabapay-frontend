import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

import mtn from '../../assets/images/icons/mtn-airtime.png'
import airtel from '../../assets/images/icons/airtel-airtime.png'
import glo from '../../assets/images/icons/glo-airtime.png'
import ninemobile from '../../assets/images/icons/9mobile-airtime.png'

import "./dashboard.css";

const classes = {
  icons: {
    width: '8rem'
  }
}

const AirtimeContent = ({icon, name, provider}) => (
  <Col xs={6} className="mb-4">
    <Card className="p-3" as={Link} to={`/users/airtime/${provider}`}>
      <img src={icon} style={classes.icons} className="img-fluid mx-auto" alt={`${name} airtime`}/>
    </Card>
  </Col>
)

const BuyAirtime = () => {

	return (
		<>
			<h3 className="mb-3">Buy Airtime</h3>
			<h5 className="text-center text-md-left">Mobile Airtime Topup</h5>
      <hr/>
      <Row className="mt-4">
        <Col xs={12} md={6}>
          <Row>
            <AirtimeContent icon={mtn} name="mtn" provider="mtn"/>
            <AirtimeContent icon={airtel} name="mtn" provider="airtel"/>
            <AirtimeContent icon={glo} name="mtn" provider="glo"/>
            <AirtimeContent icon={ninemobile} name="mtn" provider="9mobile"/>
          </Row>
        </Col>
      </Row>
		</>
	);
}

export default BuyAirtime;