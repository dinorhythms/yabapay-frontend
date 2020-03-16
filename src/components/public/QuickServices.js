import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bg from '../../assets/images/bg/hero_bg.svg';

import { stylesColors } from '../../utils/publicVariables';
import Services from './Services';

const { blue, white } = stylesColors;

const classes = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundColor: blue,
    color: white,
    marginTop: '4rem'
  },
  botton: {
    paddingRight: '3rem',
    paddingLeft: '3rem',
    paddingTop: '0.6rem',
    paddingBottom: '0.6rem'
  }
}

const QuickServices = ({name}) => {

  return (
    <div style={classes.container} className="pt-5 pb-5">
      <Container>
        <Row>
          <Col xs={12} md={7}  className="mt-4 text-center text-md-left d-flex flex-column justify-content-center">
            <div>
              <h1>Send Money and Pay Bills Fast.</h1>
              <h5>The fastest way to send, receive money, buy airtime, data, pay bills and more.</h5>
              <Button as={Link} to="/about-us" style={classes.botton} variant="warning" className="mt-4 mb-4">Learn more</Button>
            </div>
          </Col>
          <Col xs={12} md={5} className="pt-5 pb-5 d-flex flex-column justify-content-center">
            <Services/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default QuickServices;