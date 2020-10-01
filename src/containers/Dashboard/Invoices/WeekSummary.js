import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Line } from "react-chartjs-2";
import SummaryMenu from "../../../components/SummaryMenu";

const Wrapper = styled(Row)`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const Title = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

const data = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
  datasets: [
    {
      label: "98 Total Items",
      data: [6, 9, 8, 15, 16, 20],
      fill: true,
      backgroundColor: "rgba(255,255,255,0.2)",
      borderColor: "#0b78bf",
    },
  ],
};
export default function WeekSummary() {
  return (
    <Fragment>
      <Title>Week summary</Title>
      <Wrapper className="m-0">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          color="#e2e3e4"
          className="ml-1 mt-1"
        />
        <Col md={4} className="h-75 pt-2 mt-5">
          <SummaryMenu />
        </Col>
        <Col md={7} className="h-75">
          <Line data={data} />
        </Col>
      </Wrapper>
    </Fragment>
  );
}
