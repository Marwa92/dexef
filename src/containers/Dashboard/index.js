import React from "react";
import styled from "styled-components";
import SideMenu from "../../components/SideMenu";
import { Container, Row, Col } from "react-bootstrap";
import DashboardRoutes from "./DashboardRoutes";

const DashboardLayout = styled.div`
  height: 100vh;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: hidden;
  /* border: 1px solid red; */
`;

const MainContainer = styled(Row)`
  height: 100%;
  background-color: #ffffff;
  /* padding: 0; */
  border: 1px solid blue;
  /* flex-direction: row; */
`;
function Dashboard() {
  return (
    <DashboardLayout className="container-fixed-header h-100">
      <MainContainer className="h-100 border border-danger">
        <Col md={3} className="p-0 border border-primary">
          <SideMenu />
        </Col>
        <Col md={7} className="animated fadeIn">
          <DashboardRoutes />
        </Col>
      </MainContainer>
    </DashboardLayout>
  );
}

export default Dashboard;
