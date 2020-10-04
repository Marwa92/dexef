import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
import avatar from "../../assets/Profilepic.png";

const Wrapper = styled(Row)`
  border-bottom: 1px solid #e2e3e4;
`;
const Customer = styled(Image)`
  box-sizing: border-box;
  height: 3em;
  width: 3em;
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: black;
  margin-bottom: 0.1em;
`;
const Sale = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: grey;
`;
export default function CustomerItem() {
  return (
    <Wrapper className="m-0 p-0">
      <Col md={3} className="">
        <Customer src={avatar} fluid className="mx-auto" />
      </Col>
      <Col className="pt-2">
        <Name>Ahmed omar</Name>
        <Sale>23 sale transactions</Sale>
      </Col>
    </Wrapper>
  );
}
