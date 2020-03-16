import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from "react-native-vector-icons/FontAwesome";
import './features.css'

import features from '../../assets/images/bg/features.svg';
import { stylesColors } from "../../utils/publicVariables";

const { yellow } = stylesColors;

function Features() {
  return (
    <div className="pt-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {/* <h2 style={classes.header}>#1 Place </h2>
            <h4>for all your utility bills payment</h4>
            <p className="text-secondary mt-5">We are committed to making Airtime recharge, Mobile Data Top-up, Electricity bill payments, 
              Cable TV subscriptions, and Exam token purchase a simple exercise for you.</p>
              <Button as={Link} to="/about-us" style={classes.botton} variant="warning" className="mt-4 mb-4">Learn more</Button> */}
              <h2 className="mb-4">Why use yaba pay?</h2>
              <div className="featured-box style-1">
                <div className="featured-box-icon text-primary"> <Icon name="check-circle" size={35} color={yellow} /><i className="far fa-check-circle"></i> </div>
                <h5>24/7 customer service</h5>
                <p>Dedicated phone and email customer service</p>
              </div>
              <div className="featured-box style-1">
                <div className="featured-box-icon text-primary"> <Icon name="check-circle" size={35} color={yellow} /><i className="far fa-check-circle"></i> </div>
                <h5>Secure payment </h5>
                <p>Our site is safe and secure</p>
              </div>
              <div className="featured-box style-1">
                <div className="featured-box-icon text-primary"> <Icon name="check-circle" size={35} color={yellow} /><i className="far fa-check-circle"></i> </div>
                <h5>Over 50,000 Happy Customer</h5>
                <p>We strive to provide our cutomers with the best experience and services</p>
              </div>
              <div className="featured-box style-1">
                <div className="featured-box-icon text-primary"> <Icon name="check-circle" size={35} color={yellow} /><i className="far fa-check-circle"></i> </div>
                <h5>Nationwide Coverage </h5>
                <p>You can use our service from anywhere</p>
              </div>
              <div className="featured-box style-1">
                <div className="featured-box-icon text-primary"> <Icon name="check-circle" size={35} color={yellow} /><i className="far fa-check-circle"></i> </div>
                <h5>Recurring payment </h5>
                <p>You can setup recuring payment for your bills</p>
              </div>
              <div className="featured-box style-1">
                <div className="featured-box-icon text-primary"> <Icon name="check-circle" size={35} color={yellow} /><i className="far fa-check-circle"></i> </div>
                <h5>Nationwide Coverage </h5>
                <p>You can use our service from anywhere</p>
              </div>
          </Col>
          <Col xs={12} md={6}>
            <img src={features} className="img-fluid" alt="features"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features;