import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import WinnerItem from "../../../components/WinnerItem";
import CustomerItem from "../../../components/CustomerItem";

const Wrapper = styled.div`
  background-color: white;
`;

const WinnerContainer = styled(Row)`
  height: 30%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: grey;
`;
export default function TopCustomers() {
  return (
    <Wrapper className="m-0 pt-4">
      <WinnerContainer className="mx-0 mt-0 mb-2">
        {/* TODO: get winners data from array and mapping on winnerItem once */}
        <Col className="mt-1">
          <WinnerItem name="Amr Atef" rank="2" number="12" />
        </Col>
        <Col>
          <WinnerItem name="Ahmed Omar" rank="1" number="23" />
        </Col>
        <Col className="mt-2">
          <WinnerItem name="Omar Gamal" rank="3" number="10" />
        </Col>
      </WinnerContainer>
      <Title className="ml-1 mt-2">Top customers</Title>
      <CustomerItem />
      <CustomerItem />
      <CustomerItem />
      <CustomerItem />
      <CustomerItem />
    </Wrapper>
  );
}
