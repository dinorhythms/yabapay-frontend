import React from 'react';
import { Row, Col, Card, Button, Tabs, Tab, ButtonGroup } from 'react-bootstrap';
import './dashboard.css';
import AllTransactions from '../../components/customers/AllTransactions';
import CompletedTransactions from '../../components/customers/CompletedTransactions';
import InitiatedTransactions from '../../components/customers/InitiatedTransactions';
import FailedTransactions from '../../components/customers/FailedTransactions';

export default function Dashboard() {

  const [key, setKey] = React.useState('all');

  return (
    <>
      <h3 className="mb-3">Dashboard</h3>
      <Row>
        <Col xs={12} md={6}>
          <Card className=" text-white bg-primary mb-3">
            <Card.Body className="pt-4 d-flex justify-content-around">
              <div>
                <h6>Wallet Balance</h6>
                <h3>N2000</h3>
              </div>
              <div className="my-auto">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="light">Send</Button>
                  <Button variant="warning">Top-up</Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="card text-white bg-primary mb-3">
            <Card.Body className="pt-4">
              <h6>Total Transactions</h6>
              <h3>0</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <h5>Transactions</h5> 
          <Tabs defaultActiveKey="profile" activeKey={key} onSelect={k => setKey(k)} id="uncontrolled-tab-example" className="text-dark">
            <Tab eventKey="all" title="All - (3)" className="p-3">
              <AllTransactions/>
            </Tab>
            <Tab eventKey="completed" title="Completed - (1)" className="p-3">
              <CompletedTransactions/>
            </Tab>
            <Tab eventKey="initiated" title="Initiated - (1)" className="p-3">
              <InitiatedTransactions/>
            </Tab>
            <Tab eventKey="failed" title="Failed - (1)" className="p-3">
              <FailedTransactions/>
            </Tab>
          </Tabs>     
        </Col>
      </Row>
    </>
  )
}
