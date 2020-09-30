import React from "react";
import styled from "styled-components";
import SideMenu from "../../components/SideMenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Footer from "../../components/Footer";
import DashboardRoutes from "./DashboardRoutes";
// import Header from "../../../components/Header";

const DashboardLayout = styled.div`
  height: 100%;
  background-color: #fafafa;
  /* padding-top: 8vh; */
  overflow-x: hidden;
`;

const MainContainer = styled.div`
  background-color: #fafafa;
  padding: 0 0.625em;
`;
function Dashboard() {
  return (
    <DashboardLayout
      // onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
      className="container-fixed-header h-100"
    >
      <MainContainer>
        <Row>
          <Col md={3} className="border-right p-0">
            {/* {isMobile && <Header />} */}
            {/* <Header /> */}
            <SideMenu />
          </Col>
          <Col md={9} className="animated fadeIn">
            <DashboardRoutes />
          </Col>
        </Row>
      </MainContainer>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
