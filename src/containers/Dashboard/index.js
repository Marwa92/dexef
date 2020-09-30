import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import DashboardRoutes from "./DashboardRoutes";
import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";

const DashboardLayout = styled.div`
  height: 100vh;
  background-color: #ffffff;
  padding-left: 0.75em;
  overflow-x: hidden;
  overflow-y: hidden;
  /* border: 1px solid red; */
`;

const MainContainer = styled(Row)`
  height: 100%;
  background-color: #ffffff;
  border: 1px solid orange;
`;
const PageContainer = styled(Row)`
  background: #f0f4f6;
`;
function Dashboard() {
  return (
    <DashboardLayout className="container-fixed-header">
      <MainContainer className="h-100 border border-danger h-100">
        <Col md={1} className="p-0 border border-danger">
          <SideMenu />
        </Col>
        <Col>
          <Row className="p-0 border border-danger">
            <Header />
          </Row>
          <PageContainer className="animated fadeIn h-100">
            <DashboardRoutes />
          </PageContainer>
        </Col>
      </MainContainer>
    </DashboardLayout>
  );
}

export default Dashboard;
