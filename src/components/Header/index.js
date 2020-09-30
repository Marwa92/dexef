import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import SearchField from "../SearchField";

const Container = styled(Row)`
  /* flex-direction: row; */
  height: 3em;
  border: 1px solid green;
  width: 100%;
  padding: 0;
`;
const Text = styled.p`
  width: 8em;
  color: #000000;
  font-weight: bold;
  border-right: 1px solid #e2e3e4;
  padding-top: 0.8em;
  padding-left: 0.625em;
  padding-right: 0.625em;
  height: 100%;
`;
export default function Header() {
  return (
    <Container className="p-0 m-0">
      <Text>Task DEXEF</Text>
      <Col md={2} className="h-100 m-0 p-0">
        <SearchField />
      </Col>
    </Container>
  );
}
