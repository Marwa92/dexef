import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DexefContext } from "../../utils/DexefContext";

const SideMenuContainer = styled.div`
  /* width: 20vw; */
  border: 1px solid green;
  /* .nav-link.active {
    background: #f7f7f7;
    color: #212529;
  }

  .nav-link.active:before {
    content: "";
    display: inline-block;
    height: 0.25em;
    width: 1.875em;
    background: #3affd9;
    margin-right: 1.188em;
    margin-left: -1em;
  }
  .nav-link {
    margin-top: 1em;
  }

  .nav-link:not(.active) {
    color: #777777;
    padding-left: 3.125em;
  }
  &.mobile {
    position: fixed;
    top: 0;
    left: 0;
    background: #212529;
    height: 100vh;
    width: 18.625em;
    z-index: 1;
    .flex-column {
      padding-top: 6.125em;
    }
    .nav-link.active {
      background: none;
      color: #ffffff;
      font-family: Montserrat;
      font-size: 0.875em;
      font-weight: bold;
      line-height: 1.125em;
    }
  } */
`;

export default function SideMenuSection() {
  const { pages } = useContext(DexefContext);
  console.log("pages:", pages && pages);

  return (
    <SideMenuContainer
      className="flex-column  d-none d-sm-flex"
      aria-orientation="vertical"
      //   onClick={e => e.stopPropagation()}
    >
      <FontAwesomeIcon color="#D5D3D2" icon={faBars} />
      <Nav defaultActiveKey="/" className="flex-column" variant="pills">
        {pages &&
          pages.map((page) => (
            <Nav.Item key={page.name}>
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
