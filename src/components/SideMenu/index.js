import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DexefContext } from "../../utils/DexefContext";

const SideMenuContainer = styled.div`
  border-right: 1px solid #e2e3e4;
  text-align: center;
  padding-top: 1em;
  margin-left: 2px;
  .nav-link.active {
    border-left: 2px solid #0b78bf;
    border-radius: 0px;
    background: #ffffff;
    color: #0b78bf;
  }
  .nav-link:not(.active) {
    color: #d5d3d2;
  }
`;

export default function SideMenuSection() {
  const { pages } = useContext(DexefContext);
  console.log("pages:", pages && pages);

  return (
    <SideMenuContainer
      className="flex-column"
      aria-orientation="vertical"
      //   onClick={e => e.stopPropagation()}
    >
      <FontAwesomeIcon color="#D5D3D2" icon={faBars} />

      <Nav defaultActiveKey="/" className="flex-column" variant="pills">
        {pages &&
          pages.map((page) => (
            <Nav.Item key={page.name} className="mt-3">
              <Nav.Link
                eventKey={page.path}
                as={Link}
                to={page.path}
                // onClick={() => setMobileMenuOpen(false)}
              >
                {page.icon}
              </Nav.Link>
            </Nav.Item>
          ))}
      </Nav>
    </SideMenuContainer>
  );
}
