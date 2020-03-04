import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { stylesColors } from '../../utils/publicVariables';

const { blue } = stylesColors;

const classes = {
  button: {
    backgroundColor: blue
  }
}

const NewsLetter = () => {
  return (
    <div>
      <Container className="pt-5 pb-5 text-center">
        <Row>
          <Col>
            <h2>Sign Up for our Newsletter</h2>
            <h6 className="text-secondary mb-3">Join our mailling list and get exclusiveaccess to Yabapay advantage deals and events</h6>
            <Form inline className="justify-content-center mt-1">
              <Form.Control size="lg mt-2 w-50" type="text" placeholder="Enter your Email" />
              <Button size="lg ml-2 mt-2 pl-4 pr-4" style={classes.button}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewsLetter;