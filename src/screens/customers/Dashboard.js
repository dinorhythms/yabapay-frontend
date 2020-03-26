import React from 'react';
import { Row, Col, Card, Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import Icon from "react-native-vector-icons/FontAwesome";
import './dashboard.css';

import { stylesColors } from '../../utils/publicVariables';
import { Link } from 'react-router-dom';

const { yellow } = stylesColors;

const classes = {
  button: {
    backgroundColor: yellow,
  },
}

export default function Dashboard() {

  const Services = ({service, icon, link, sub}) => (
    <Col xs={6} sm={6} md={6} lg={4}>
      <Card as={Link} to={link} className="services mb-4">
        <Card.Body className="pl-3 pr-3 pt-3 pb-3 d-flex justify-content-between">
          <div>
            <h6 className="mb-0">{service}</h6>
            <small>{sub?sub:<span className="text-primary">coming soon</span>}</small>
          </div>
          <Icon name={icon} size={25} color='white'/>
        </Card.Body>
      </Card>
    </Col>
  )

  return (
    <>
      <Row>
        <Col xs={12} md={10}>
          <div className="d-md-flex justify-content-between">
            <h3 className="mb-3 text-center text-md-left">Dashboard</h3>
            <p className="mt-2  text-center text-md-left">larrysnet2001@gmail.com</p>
          </div>
          <Row>
            <Col xs={12} md={6}>
              <Card className=" text-white bg-primary mb-3">
                <Card.Body className="pt-4 d-flex justify-content-around">
                  <div>
                    <h6>Wallet Balance</h6>
                    <h3>N2000</h3>
                  </div>
                  <div className="my-auto">
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="light">Send</Button>
                      <Button as={Link} to="/users/fund-wallet" style={classes.button}>Top-up</Button>
                    </ButtonGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="card text-white bg-primary mb-3">
                <Card.Body className="pt-4">
                  <h6>Total Transactions</h6>
                  <h3>0</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12} md={12}>
              <h5 className="text-center text-md-left mb-4">Services</h5> 
              <Row>
                <Services service="Airtime" icon="phone-square" link="/users/airtime" sub="mtn, airtel"/>
                <Services service="Data" icon="globe" link="/users/data" sub="mtn, airtel..."/>
                <Services service="Power" icon="power-off" link="/users/power" sub="Ikeja, Phcn..."/>
                <Services service="Cable" icon="tv" link="/users/cable" sub="Dstv, Gotv..."/>
                <Services service="Flight" icon="plane" link="/users/flight" sub=""/>
                <Services service="Event" icon="calendar" link="/users/flight" sub=""/>
                <Services service="Movies" icon="file-movie-o" link="/users/movie" sub=""/>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2} className="d-none d-sm-block">
          <div style={{width: '160px', height: '600px'}} className="bg-primary mb-4 text-white text-center d-flex flex-column justify-content-center">
            <h4 className="my-auto">Place Ads Here</h4>
          </div>
        </Col>
      </Row>
    </>
  )
}
