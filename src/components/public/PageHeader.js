import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import bg from '../../assets/images/bg/bg_header.jpg';
import { stylesColors } from '../../utils/publicVariables';

const { blue, white } = stylesColors;

const classes = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundColor: blue,
    color: white,
    height: '20rem',
    textAlign: 'center',
    marginTop: '5rem'
  }
}

const PageHeader = ({ currentPage, rootPage }) => {
  return (
    <div style={classes.container} className="">
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={12} className="my-auto">
            <h1>{currentPage}</h1>
            <h6 className="text-warning">{rootPage} > {currentPage}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageHeader;