import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppDownload from '../../components/public/AppDownload';
import PageHeader from '../../components/public/PageHeader';
import CoreValues from '../../components/public/CoreValues';

const AboutUs = () => {
  return (
    <>
      <PageHeader rootPage="Home" currentPage="About Us"/>
      <section className="pt-5 pb-5">
        <Container>
          <Row>
            <Col>
              <p>YabaPay is an e-Payment platform created by CeePay ICT HUB (RC.1605421) to solve daily utility payments with maximum ease.</p>
              <p>We are committed to making Airtime recharge, Mobile Data Top-up, Electricity bill payments, Cable TV subscriptions, and Exam token 
                purchase a simple exercise for you.</p>
              <p>YabaPay is an e-Payment platform created by CeePay ICT HUB (RC.1605421) to solve daily utility payments with maximum ease.</p>
              <p>We are committed to making Airtime recharge, Mobile Data Top-up, Electricity bill payments, Cable TV subscriptions, and Exam token 
                purchase a simple exercise for you.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={4}>
              <h2>Our Vision</h2>
              <h6 className="text-secondary mb-3">
                To attain a leading role in providing 
                swift, reliable, and secure payment 
                solutions, delivering best-in-class 
                solutions to our valued clients in 
                our niches.
              </h6>
            </Col>
            <Col xs={12} md={4}>
              <h2>Our Mission</h2>
              <h6 className="text-secondary mb-3">
                To consistently deliver a top-notch, 
                innovative, reliable, and secure 
                payment solutions, upheld by an 
                inflexible pledge to surpass the 
                expectations of our clients and 
                partners.
              </h6>
            </Col>
            <Col xs={12} md={4}>
              <h2>Our Core Values</h2>
              <h6 className="text-secondary mb-3">
                Loyalty - our success depends on our established 
                commitment to our stakeholders.
                Collaboration - we tend to encourage and reward 
                cooperation for leveraging the collective abilities of our 
                customers, partners, and workers.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
      <CoreValues/>
      <AppDownload/>
    </>
  )
}

export default AboutUs;