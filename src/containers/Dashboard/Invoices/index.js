import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SalesInvoice from "./SalesInvoice";
import WeekSummary from "./WeekSummary";
import TopCustomers from "./TopCustomers";

export default function Invoices() {
  return (
    <Fragment>
      <Col md={8} className="border border-danger">
        <Row className="h-50 border border-secondary">
          <SalesInvoice />
        </Row>
        <Row>
          <WeekSummary />
        </Row>
      </Col>
      <Col md={1}></Col>
      <Col className="border border-primary">
        <TopCustomers />
      </Col>
    </Fragment>
  );
}
