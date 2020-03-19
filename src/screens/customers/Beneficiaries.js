import React from "react";
import { Col, Row, Table } from "react-bootstrap";

import "./dashboard.css";

export default function Beneficiaries() {

	return (
		<div className="pt-2 pb-5">
      <h6 className="text-secondary text-center text-md-left">
				Beneficiaries
			</h6>
			<h2 className="mb-3 text-center text-md-left">All saved Beneficiaries</h2>
			<Row className="mt-2">
				<Col>
          <Table striped responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>ref</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#1656466664663133</td>
                <td>01-02-2020</td>
                <td>N5000</td>
                <td>completed</td>
              </tr>
              <tr>
                <td>1</td>
                <td>#1656466664663133</td>
                <td>01-02-2020</td>
                <td>N5000</td>
                <td>completed</td>
              </tr>
              <tr>
                <td>1</td>
                <td>#1656466664663133</td>
                <td>01-02-2020</td>
                <td>N5000</td>
                <td>completed</td>
              </tr>
            </tbody>
          </Table>
				</Col>
			</Row>
		</div>
	);
}
