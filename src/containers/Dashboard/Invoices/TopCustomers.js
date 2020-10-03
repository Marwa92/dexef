import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import WinnerItem from "../../../components/WinnerItem";

const Wrapper = styled.div`
  height: 100vh;
  background-color: white;
  border: 1px solid red;
  text-align: center;
`;

const WinnerContainer = styled(Row)`
  border: 1px solid green;
`;
export default function TopCustomers() {
  return (
    <Wrapper className="m-0 pt-4">
      <WinnerContainer className="m-0">
        {/* TODO: get winners data from array and mapping on winnerItem once */}
        <Col className="mt-1">
          <WinnerItem name="Amr Atef" />
        </Col>
        <Col>
          <WinnerItem name="Ahmed Omar" />
        </Col>
        <Col className="mt-2">
          <WinnerItem name="Omar Gamal" />
        </Col>
      </WinnerContainer>
    </Wrapper>
  );
}
