import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SalesInvoice from "./SalesInvoice";
import WeekSummary from "./WeekSummary";
import TopCustomers from "./TopCustomers";

export default function Invoices() {
  return (
    <Fragment>
      <Col md={8} className="">
        <Row className="h-50 mb-4">
          <SalesInvoice />
        </Row>
        <Row className="">
          <WeekSummary />
        </Row>
      </Col>
      <Col md={1}></Col>
      <Col className="">
        <TopCustomers />
      </Col>
    </Fragment>
  );
}
