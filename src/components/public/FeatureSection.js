import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { LgButton } from './Buttons';

import Icon from "react-native-vector-icons/FontAwesome";

import { stylesColors } from "../../utils/publicVariables";

const { yellow } = stylesColors;


const classes = {
  container: {
    paddingTop: '3rem',
    paddingBottom: '3rem'
  },
  rightBox: {
    height: '12rem',
    padding: '1rem'
  }
}

const FeatureSection = () => {
  return (
    <div style={classes.container}>
      <Container>
        <Row>
          <Col xs={12} md={6} style={classes.leftContent} className="d-flex">
            <div className="mb-5 my-md-auto">
              <h2>Delight customers with a seamless payments experience</h2>
              <h6 className="text-secondary mb-4">Give your customers the gift of modern, frictionless, painless payments. 
                Integrate Paystack once and let your customers pay you however they want.</h6>
              <LgButton text="Get Started"/>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} md={6}>
                <Card style={classes.rightBox} className="bg-light text-center">
                  <h6 className="text-secondary mb-0">100% Payment</h6>
                  <h2 className="mt-0 mb-0">Trust pay</h2>
                  <Icon name="shield" size={80} color={yellow} />
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card style={classes.rightBox} className="bg-light text-center">
                  <h6 className="text-secondary mb-0">Instant Help</h6>
                  <h2 className="mt-0 mb-0">Tech Support</h2>
                  <Icon name="phone-square" size={80} color={yellow} />
                </Card>
              </Col>
              <Col xs={12} md={6} className="mt-4">
                <Card style={classes.rightBox} className="bg-light text-center">
                  <h6 className="text-secondary mb-0">Ease Registration</h6>
                  <h2 className="mt-0 mb-0">Easy Signup</h2>
                  <Icon name="unlock-alt" size={80} color={yellow} />
                </Card>
              </Col>
              <Col xs={12} md={6} className="mt-4">
                <Card style={classes.rightBox} className="bg-light text-center">
                  <h6 className="text-secondary mb-0">100% refund</h6>
                  <h2 className="mt-0 mb-0">Refund Pay</h2>
                  <Icon name="money" size={80} color={yellow} />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default  FeatureSection;