import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SalesInvoice from "./SalesInvoice";
import WeekSummary from "./WeekSummary";
import TopRating from "./TopRating";

export default function Invoices() {
  return (
    <Fragment>
      <Col md={8} className="">
        <Row className="h-50">
          <SalesInvoice />
        </Row>
        <Row className="">
          <WeekSummary />
        </Row>
      </Col>
      <Col className="ml-5 mr-3 p-0 my-0">
        <TopRating />
      </Col>
    </Fragment>
  );
}
