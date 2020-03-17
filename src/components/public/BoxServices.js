import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import features from '../../assets/images/hero-feature.png'

import { stylesColors } from '../../utils/publicVariables';

const { yellow } = stylesColors;

const classes = {
  button: {
    backgroundColor: yellow
  },
  squareBox: {
    color: 'linear-gradient(0deg, rgba(92,1,255,1) 52%, rgba(132,68,224,1) 100%)',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: '#ede9e9',
    boxShadow: '0 4px 8px 0 rgba(92,1,255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '0.7rem',
  },
  featureBox: {
    width: ''
  }
}

const Service = ({ name, icon, page }) => (
  <Col xs={3} md={3}>
    <Link to={page} style={{ textDecoration: 'none' }}>
      <div style={classes.squareBox} className="mx-auto d-flex flex-column justify-content-center align-items-center pt-md-5 pb-md-5">
        <p className="mb-1 mb-md-3"><Icon name={icon} size={30} color='linear-gradient(0deg, rgba(92,1,255,1) 52%, rgba(132,68,224,1) 100%)' /></p>
        <p className="mb-0">{name}</p>
      </div>
    </Link>
  </Col>
)

const BoxServices = () => {
  return (
    <>
      <Row>
        <Service name="Airtime" icon="phone" page="/airtime"/>
        <Service name="Data" icon="globe" page="/data"/>
        <Service name="Power" icon="lightbulb-o" page="/power"/>
        <Service name="Cable" icon="tv" page="/cable"/>
      </Row>
      <Row>
        <Col className="mt-3 text-right">
          <Button variant="warning" style={classes.button}>More</Button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 text-right pt-3">
          <h6 className="mb-3">Features:</h6>
          <img src={features} className="img-fluid" alt="features"/>
        </Col>
      </Row>
    </>
  )
}

export default BoxServices;