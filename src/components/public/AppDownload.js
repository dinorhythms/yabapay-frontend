import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import playstore from '../../assets/images/google-play-badge.jpg';
import appstore from '../../assets/images/app-store-badge.jpg';
import mobileapp from '../../assets/images/mobile-app.png';

import { stylesColors } from '../../utils/publicVariables';

const { grey } = stylesColors;

const classes = {
  container: {
    backgroundColor: grey
  },
  imageBox: {
    height: '20rem',
    overflow: 'hidden',
    textAlign: 'center'
  },
}

const AppDownload = () => {
  return (
    <div style={classes.container} className="pt-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div style={classes.imageBox} className="mx-auto">
              <img src={mobileapp} className="img-fluid" alt="mobile app" />
            </div>
          </Col>
          <Col xs={12} md={6} className="mt-5 mb-5 text-center text-md-left">
            <h2>Mobile App <br/> Coming Soon</h2>
            <h6 className="text-secondary mb-5">Download our app for the fastest, most <br/>
              convenient way to send mobile top-up online.</h6>
            <img src={playstore} className="img-fluid mr-2" alt="download at play store" />
            <img src={appstore} className="img-fluid" alt="download at app store" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AppDownload;