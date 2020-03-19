import React from "react";
import { Col, Row, Table } from "react-bootstrap";

import "./dashboard.css";

export default function Beneficiaries() {

	return (
		<>
			<h3 className="mb-3">Beneficiaries</h3>

			<Row className="mt-2">
				<Col>
          <Table striped responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Name</th>
                <th>Service</th>
                <th>Biller</th>
                <th>Ref</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>01-02-2020</td>
                <td>Ola</td>
                <td>Airtime</td>
                <td>Mtn</td>
                <td>08022835496</td>
              </tr>
              <tr>
                <td>2</td>
                <td>01-02-2020</td>
                <td>Ola Glo</td>
                <td>Data</td>
                <td>Glo</td>
                <td>08022835499</td>
              </tr>
              <tr>
                <td>3</td>
                <td>01-02-2020</td>
                <td>Dino's Decoder</td>
                <td>Cable</td>
                <td>DSTV</td>
                <td>002135667664</td>
              </tr>
            </tbody>
          </Table>
				</Col>
			</Row>
		</>
	);
}
