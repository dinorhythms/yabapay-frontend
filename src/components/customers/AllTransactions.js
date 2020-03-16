import React from 'react';
import {Table, Form } from 'react-bootstrap';

const AllTransactions = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Search Transactions" />
        </Form.Group>
      </Form>
      <Table striped responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Service</th>
            <th>Description</th>
            <th>Order Id</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>01-02-2020</td>
            <td>Airtime</td>
            <td>@mdo</td>
            <td>#154666560</td>
            <td>N2000</td>
            <td>Initiated</td>
          </tr>
          <tr>
            <td>2</td>
            <td>01-02-2020</td>
            <td>Data</td>
            <td>@mdo</td>
            <td>#154666560</td>
            <td>N2000</td>
            <td>Failed</td>
          </tr>
          <tr>
            <td>3</td>
            <td>01-02-2020</td>
            <td>Cable</td>
            <td>@mdo</td>
            <td>#154666560</td>
            <td>N2000</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AllTransactions;