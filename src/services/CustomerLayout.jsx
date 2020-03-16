import React from "react";
import SideBarMenu from "../components/customers/SideBarMenu";
import { Container, Row, Col } from 'react-bootstrap';
import NavBarMenu from "../components/customers/NavbarMenu";

const CustomerLayout = props => {
  
	return (
    <>
      <NavBarMenu/>
      <Container fluid>
        <Row>
          <SideBarMenu/>
          <Col xs={12} md={10} className="pl-4 pr-4" style={{paddingTop: '5rem'}}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
	);
};

export default CustomerLayout;
