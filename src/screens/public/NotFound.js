import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppDownload from '../../components/public/AppDownload';

const NotFound = () => {
  return (
    <div>
      <div style={{height: '4.2rem'}}/>
      <section className="pt-5">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h6 className="text-secondary text-center text-md-left">Error</h6>
              <h2 className="text-center text-md-left">Page not Found</h2>
              <hr/>
              
            </Col>
          </Row>
        </Container>
      </section>
      <AppDownload/>
    </div>
  )
}

export default NotFound;