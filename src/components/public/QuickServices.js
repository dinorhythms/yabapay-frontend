import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Row, Col } from 'react-bootstrap';

import bg from '../../assets/images/bg/bg_services.jpg';
import { stylesColors } from '../../utils/publicVariables';

const { blue, white, yellow } = stylesColors;

const classes = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundColor: blue,
    color: white,
  },
  serviceBox: {
    textAlign: 'center',
    marginTop: '1rem'
  },
  cicleBox: {
    width: '5rem',
    height: '5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    marginBottom: '0.7rem'
  }
}

const Service = ({ name, icon }) => (
  <Col xs={6} md={4} style={classes.serviceBox}>
    <div style={classes.cicleBox} className="mx-auto">
      <Icon name={icon} size={50} color={yellow} />
    </div>
    <p>{name}</p>
  </Col>
)

const QuickServices = () => {
  return (
    <div style={classes.container} className="pt-5 pb-5">
      <Container>
        <Row>
          <Col md={7}></Col>
          <Col xs={12} md={5}>
            <Row>
              <Service name="Pay Power Bills" icon="lightbulb-o"/>
              <Service name="Buy Data" icon="globe"/>
              <Service name="Pay Cable TV" icon="tv"/>
              <Service name="Buy Airtime" icon="phone"/>
              <Service name="Send Money" icon="money"/>
              <Service name="More" icon="plus"/>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default QuickServices;