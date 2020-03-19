import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import mtn from '../../assets/images/icons/mtn-data.png'
import airtel from '../../assets/images/icons/airtel-data.png'
import glo from '../../assets/images/icons/glo-data.png'
import ninemobile from '../../assets/images/icons/9mobile-data.png'

const classes = {
  icons: {
    width: '8rem'
  }
}

const DataContent = ({icon, name, provider}) => (
  <Col xs={6} className="mb-4">
    <Card className="p-3" as={Link} to={`/users/data/${provider}`}>
      <img src={icon} style={classes.icons} className="img-fluid mx-auto" alt={`${name} data`}/>
    </Card>
  </Col>
)

const BuyData = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

	return (
		<>
      <section>
        <h3 className="mb-3 text-center text-md-left text-secondary">Buy Data</h3>
        <h5 className="text-center text-md-left">Mobile Data Topup</h5>
        <hr/>
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <Row>
              <DataContent icon={mtn} name="mtn" provider="mtn"/>
              <DataContent icon={airtel} name="mtn" provider="airtel"/>
              <DataContent icon={glo} name="mtn" provider="glo"/>
              <DataContent icon={ninemobile} name="mtn" provider="9mobile"/>
            </Row>
          </Col>
        </Row>
      </section>
		</>
	);
};

export default BuyData;
