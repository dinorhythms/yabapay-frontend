import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import mtn from '../../assets/images/icons/mtn-data.png'
import airtel from '../../assets/images/icons/airtel-data.png'
import glo from '../../assets/images/icons/glo-data.png'
import ninemobile from '../../assets/images/icons/9mobile-data.png'
import { Link } from 'react-router-dom';

import AppDownload from '../../components/public/AppDownload';
import Services from '../../components/public/Services';

const classes = {
  icons: {
    width: '8rem'
  }
}

const DataContent = ({icon, name, provider}) => (
  <Col xs={6} className="mb-4">
    <Card className="p-3" as={Link} to={`/data/${provider}`}>
      <img src={icon} style={classes.icons} className="img-fluid mx-auto" alt={`${name} data`}/>
    </Card>
  </Col>
)

const DataPage = () => {

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
              <h6 className="text-secondary text-center text-md-left">DATA TOPUP</h6>
              <h2 className="text-center text-md-left">Mobile Data Topup</h2>
              <hr/>
              <Row className="mt-4">
                <Col xs={12} md={6}>
                  <Row>
                    <DataContent icon={mtn} name="mtn" provider="mtn"/>
                    <DataContent icon={airtel} name="mtn" provider="airtel"/>
                    <DataContent icon={glo} name="mtn" provider="glo"/>
                    <DataContent icon={ninemobile} name="mtn" provider="9mobile"/>
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
      <AppDownload/>
    </>
  )
}

export default DataPage;