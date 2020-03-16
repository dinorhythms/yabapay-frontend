import React from "react";
import { Form, Table } from "react-bootstrap";

const FailedTransactions = () => {
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
						<td>2</td>
						<td>01-02-2020</td>
						<td>Data</td>
						<td>@mdo</td>
						<td>#154666560</td>
						<td>N2000</td>
						<td>Failed</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default FailedTransactions;
