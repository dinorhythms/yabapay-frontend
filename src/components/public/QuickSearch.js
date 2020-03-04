import React from 'react';

import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { stylesColors } from '../../utils/publicVariables';

const { blue, grey, yellow } = stylesColors;

const classes = {
  container: {
    textAlign: 'center',
    backgroundColor: grey,
    paddingTop: '3rem',
    paddingBottom: '3.5rem',
    marginTop: '4rem'
  },
  bigText: {
    color: blue
  },
  smallText: {
    color: yellow
  },
  button: {
    backgroundColor: blue
  }
}

const QuickSearch = () => {
  return (
    <div style={classes.container}>
      <Container>
        <Row>
          <Col>
            <h1 style={classes.bigText}>Send Money and Pay Bills Fast.</h1>
            <h5 style={classes.smallText}>The fastest way to send, receive money, buy airtime, data, pay bills and more.</h5>
            <Form inline className="justify-content-center mt-3">
              <Form.Control size="lg mt-2 w-75" type="text" placeholder="What do you want to pay?" />
              <Button size="lg ml-2 mt-2 pl-4 pr-4" style={classes.button}>Go</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default QuickSearch;