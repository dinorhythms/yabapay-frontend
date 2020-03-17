import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { stylesColors } from '../../utils/publicVariables';

const { blue, white, yellow } = stylesColors;

const getStyles = (bg) => {
  return {
    backgroundImage: `url(${bg})`,
    backgroundColor: blue,
    color: white,
    height: '20rem',
    textAlign: 'center',
    marginTop: '5rem'
  }
}

const PageHeader = ({ currentPage, rootPage, bg, headerImage }) => {
  return (
    <div style={getStyles(bg)}>
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={12} md={12} className="my-auto">
            <h1>{currentPage}</h1>
            <h6 style={{color: `${yellow}`}}>{rootPage} > {currentPage}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageHeader;