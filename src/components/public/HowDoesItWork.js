import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Row, Col } from 'react-bootstrap';

import { stylesColors } from '../../utils/publicVariables';
import { LgButton } from './Buttons';

const { blue } = stylesColors;

const classes = {
  cicleBox: {
    width: '7rem',
    height: '7rem',
    backgroundColor: '#EAEAEA',
    borderRadius: '50%',
    marginBottom: '2rem',
    padding: '0.8rem'
  },
}

const HowDoesItWork = () => {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>How does it Work?</h2>
            <h6 className="text-secondary">Send a top-up in easy steps.</h6>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col xs={12} md={4} className="mt-3">
            <div style={classes.cicleBox} className="mx-auto">
              <Icon name="unlock-alt" size={60} color={blue} />
            </div>
            <h4>Create your Yabapay Account</h4>
            <p className="text-secondary">All you need is your First Name, Last Name, Phone Number & your preferred 4-digit PIN. 
              We will open a yabapay account just for you</p>
          </Col>
          <Col xs={12} md={4} className="mt-3">
            <div style={classes.cicleBox} className="mx-auto">
              <Icon name="credit-card" size={60} color={blue} />
            </div>
            <h4>Fund your Yabapay Account</h4>
            <p className="text-secondary">Funding your wallet to get started. Our quick and instant wallet system makes it all easy for you.</p>
          </Col>
          <Col xs={12} md={4} className="mt-3">
            <div style={classes.cicleBox} className="mx-auto">
              <Icon name="money" size={60} color={blue} />
            </div>
            <h4>Pay for utilities or transfer</h4>
            <p className="text-secondary">All you need is your First Name, Last Name, Phone Number & your preferred 4-digit PIN. 
              We will open a yabapay account just for you</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <LgButton text="Get Started"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HowDoesItWork;
