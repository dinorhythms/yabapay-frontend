import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from 'react-native-vector-icons/FontAwesome';

import { stylesColors } from '../../utils/publicVariables';

const { grey2, black } = stylesColors;

const classes = {
  container: {
    backgroundColor: grey2,
    textAlign: 'center'
  },
}

function CoreValues() {
  return (
    <div style={classes.container} className="pt-5 pb-5">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Icon name="arrow-circle-o-right" size={50} color={black} />
            <h2>100% Secure Payments</h2>
            <h6 className="text-secondary mb-3">
              Moving your card details to a much
              more secured place.
            </h6>
          </Col>
          <Col xs={12} md={3}>
            <Icon name="arrow-circle-o-right" size={50} color={black} />
            <h2>Trust pay</h2>
            <h6 className="text-secondary mb-3">
              100% Payment Protection
              Easy Return Policy
            </h6>
          </Col>
          <Col xs={12} md={3}>
            <Icon name="arrow-circle-o-right" size={50} color={black} />
            <h2>Refer & Earn</h2>
            <h6 className="text-secondary mb-3">
            Invite a friend to sign up and earn Money.
            </h6>
          </Col>
          <Col xs={12} md={3}>
            <Icon name="arrow-circle-o-right" size={50} color={black} />
            <h2>24X7 Support</h2>
            <h6 className="text-secondary mb-3">
              We're here to help. Have 
              a query and need help  
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CoreValues;