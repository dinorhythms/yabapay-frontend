import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import AllTransactions from "../../components/customers/AllTransactions";
import CompletedTransactions from "../../components/customers/CompletedTransactions";
import FailedTransactions from "../../components/customers/FailedTransactions";
import InitiatedTransactions from "../../components/customers/InitiatedTransactions";
import "./dashboard.css";

export default function Transaction() {
	const [key, setKey] = React.useState("all");

	return (
		<>
			<h3 className="mb-3">Transactions</h3>

			<Row className="mt-2">
				<Col>
					<Tabs
						defaultActiveKey="profile"
						activeKey={key}
						onSelect={k => setKey(k)}
						id="uncontrolled-tab-example"
						className="text-dark">
						<Tab eventKey="all" title="All - (3)" className="p-3">
							<AllTransactions />
						</Tab>
						<Tab eventKey="completed" title="Completed - (1)" className="p-3">
							<CompletedTransactions />
						</Tab>
						<Tab eventKey="initiated" title="Initiated - (1)" className="p-3">
							<InitiatedTransactions />
						</Tab>
						<Tab eventKey="failed" title="Failed - (1)" className="p-3">
							<FailedTransactions />
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</>
	);
}
