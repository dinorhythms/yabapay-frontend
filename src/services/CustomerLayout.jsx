import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBarMenu from "../components/customers/NavbarMenu";
import CustomerNav from "../components/customers/CustomerNav";

import './customerlayout.css'

const CustomerLayout = props => {
  
	return (
    <div className="wrapper d-flex">
      <CustomerNav/>
      <div className="content">
        <NavBarMenu/>
        <Container fluid>
          <div className="pl-md-4 pt-4">
            {props.children}
          </div>
          <Row>
            <Col>
              <p class="footer fixed-bottom pl-md-5">Terms of Use | Policy</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
	);
};

export default CustomerLayout;
