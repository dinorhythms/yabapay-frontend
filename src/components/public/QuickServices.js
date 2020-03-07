import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import bg from '../../assets/images/bg/bg_services.jpg';
import { stylesColors } from '../../utils/publicVariables';
import Services from './Services';

const { blue, white } = stylesColors;

const classes = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundColor: blue,
    color: white,
  }
}

const QuickServices = ({name}) => {

  return (
    <div style={classes.container} className="pt-5 pb-5">
      <Container>
        <Row>
          <Col md={7} className="d-flex">
            <div className="mt-5 mb-5 my-md-auto text-center text-md-left w-100">
              <h2>{name || ''}</h2>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <Services/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default QuickServices;