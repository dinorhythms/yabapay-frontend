import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Icon from 'react-native-vector-icons/FontAwesome';

import bg from '../../assets/images/bg/bg_featured_products.jpg';
import { stylesColors } from '../../utils/publicVariables';

const { grey, yellow } = stylesColors;

const classes = {
  container: {
    backgroundColor: grey,
  },
}

const Service = () => (
  <Col xs={12} md={6}>
    <Card className="bg-dark text-white text-center mt-2">
      <Card.Img src={bg} alt="Card image" />
      <Card.ImgOverlay className="mt-2">
        <p className="mb-0">The Best way to</p>
        <h1 className="mt-0 mb-0">PAY ONLINE</h1>
        <p>100% Ease Payment</p>
        <Card.Text className="mt-4 mb-0">Get Started</Card.Text>
        <Icon name="arrow-circle-o-right" size={40} color={yellow} />
      </Card.ImgOverlay>
    </Card>
  </Col>
) 
const FeatureProducts = () => {
  return (
    <div style={classes.container} className="pt-5 pb-5">
      <Container>
        <Row>
          <Service/>
          <Service/>
        </Row>
      </Container>
    </div>
  )
}

export default FeatureProducts;
