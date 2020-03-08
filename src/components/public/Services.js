import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { stylesColors } from '../../utils/publicVariables';

const { yellow, grey } = stylesColors;

const classes = {
  serviceBox: {
    textAlign: 'center',
    marginTop: '1rem'
  },
  cicleBox: {
    width: '5rem',
    height: '5rem',
    backgroundColor: grey,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '50%',
    marginBottom: '0.7rem'
  }
}

const Service = ({ name, icon, page }) => (
  <Col xs={6} md={4} style={classes.serviceBox}>
    <Link to={page} style={{ textDecoration: 'none' }}>
      <div style={classes.cicleBox} className="mx-auto d-flex justify-content-center align-items-center">
        <Icon name={icon} size={30} color={yellow} />
      </div>
    </Link>
    <p>{name}</p>
  </Col>
)

const Services = ({name}) => {

  return (
    <Row>
      <Service name="Buy Airtime" icon="phone" page="/airtime"/>
      <Service name="Buy Data" icon="globe" page="/data"/>
      <Service name="Pay Power Bills" icon="lightbulb-o" page="/power"/>
      <Service name="Pay Cable TV" icon="tv" page="/cable"/>
      <Service name="Send Money" icon="money" page="/transfer"/>
      <Service name="More" icon="plus" page="/"/>
    </Row>
  )
}

export default Services;