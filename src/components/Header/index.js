import React from "react";
import styled from "styled-components";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Image } from "react-bootstrap";
import SearchField from "../SearchField";
import avatar from "../../assets/Profilepic.png";

const Container = styled(Row)`
  height: 3em;
  width: 100%;
  padding: 0;
`;
const Text = styled(Col)`
  width: 8em;
  color: #000000;
  text-align: center;
  font-weight: bold;
  border-right: 1px solid #e2e3e4;
  padding-top: 0.8em;
  height: 100%;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #9d9d9e;
  margin-left: 1em;
`;
const ConfgContainer = styled(Col)`
  border-right: 1px solid #e2e3e4;
  text-align: right;
  justify-content: space-between;
`;
const Avatar = styled(Image)`
  box-sizing: border-box;
  height: 2.063em;
  width: 2.063em;
  border: 1px solid #ffffff;
  border-radius: 50%;
  margin-top: 0.375em;
  text-align: center;
`;
export default function Header() {
  return (
    <Container className="p-0 m-0">
      <Text md={2}>Task DEXEF</Text>
      <Col md={3} className="h-100 m-0 p-0">
        <SearchField />
      </Col>
      <ConfgContainer md={6} className="h-100 m-0 pt-2">
        <Icon icon={faBell} />
        <Icon icon={faCog} />
      </ConfgContainer>
      <Col>
        <Avatar src={avatar} fluid />
      </Col>
    </Container>
  );
}
