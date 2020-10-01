import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const MenuContainer = styled.div`
  font-size: 0.7em;
  border-right: 1px solid #e2e3e4;
  .nav-link.active {
    color: #0b78bf;
    background: #c5eef0;
    border-radius: 9px;
    height: 1.7em;
    padding-bottom: 0.5em;
  }
  .nav-link:not(.active) {
    color: grey;
    height: 0.9em;
    flex-direction: row;
    float: left;
    justify-content: space-between;
    margin-bottom: 0.1em;
  }
`;
const Price = styled.p`
  font-size: 0.8em;
  float: right;
`;
export default function SummaryMenu() {
  return (
    <MenuContainer>
      <Nav className="flex-column">
        <Nav.Link active className="pb-3 pt-1">
          All<Price>10,000 AED</Price>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          Portrait<Price>2,500 AED</Price>
        </Nav.Link>
        <Nav.Link eventKey="link-3">
          Modern<Price>2,500 AED</Price>
        </Nav.Link>
        <Nav.Link eventKey="link-4">
          Sketches<Price>2,500 AED</Price>
        </Nav.Link>
        <Nav.Link eventKey="link-4">
          Natural<Price>2,500 AED</Price>
        </Nav.Link>
      </Nav>
    </MenuContainer>
  );
}
