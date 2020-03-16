import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import illus from '../../assets/images/pay.png'
import BoxServices from './BoxServices';

// import bg from '../../assets/images/bg/bg.png';
import bg from '../../assets/images/bg/bg_services.jpg';

const classes = {
  container: {
    // minHeight: '40rem',
    background: 'linear-gradient(0deg, rgba(92,1,255,1) 52%, rgba(132,68,224,1) 100%)',
    // backgroundImage: `url(${bg})`,
    paddingTop: '5rem',
    paddingBottom: '5rem',
    color: '#ffffff',
  },
  illus: {
    // maxWidth: '15rem'
  },
  botton: {
    paddingRight: '3rem',
    paddingLeft: '3rem',
    paddingTop: '0.6rem',
    paddingBottom: '0.6rem'
  }
}

const HomeHero = () => {
  return (
    <div style={classes.container}>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <img src={illus} style={classes.illus} alt='pay online'/>
            <h1 className="mt-4">Send Money and Pay Bills Fast.</h1>
            <h5>The fastest way to send, receive money, buy airtime, data, pay bills and more.</h5>
            <Button style={classes.botton} variant="warning" className="mt-4">Learn more</Button>
          </Col>
          <Col xs={12} md={7} className="pt-3">
            <BoxServices/>
            <Row>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeHero;