import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import mtn from '../../assets/images/icons/mtn-airtime.png'
import airtel from '../../assets/images/icons/airtel-airtime.png'
import glo from '../../assets/images/icons/glo-airtime.png'
import ninemobile from '../../assets/images/icons/9mobile-airtime.png'
import { Link } from 'react-router-dom';

import Services from '../../components/public/Services';

const classes = {
  icons: {
    width: '8rem'
  }
}

const AirtimeContent = ({icon, name, provider}) => (
  <Col xs={6} className="mb-4">
    <Card className="p-3" as={Link} to={`/airtime/${provider}`}>
      <img src={icon} style={classes.icons} className="img-fluid mx-auto" alt={`${name} airtime`}/>
    </Card>
  </Col>
)

const AirtimePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div style={{height: '4.2rem'}}/>
      <section className="pt-5">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h6 className="text-secondary text-center text-md-left">AIRTIME TOPUP</h6>
              <h2 className="text-center text-md-left">Mobile Airtime Topup</h2>
              <hr/>
              <Row className="mt-4">
                <Col xs={12} md={6}>
                  <Row>
                    <AirtimeContent icon={mtn} name="mtn" provider="mtn"/>
                    <AirtimeContent icon={airtel} name="mtn" provider="airtel"/>
                    <AirtimeContent icon={glo} name="mtn" provider="glo"/>
                    <AirtimeContent icon={ninemobile} name="mtn" provider="9mobile"/>
                  </Row>
                </Col>
                <Col xs={12} md={6} className="pt-3 pb-5 d-flex flex-column justify-content-center">
                  <Services/>
                </Col>
              </Row>
            </Col>
            
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AirtimePage;