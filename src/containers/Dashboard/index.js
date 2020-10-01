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
  /* overflow-y: hidden; */
`;

const MainContainer = styled(Row)`
  height: 100%;
  background-color: #ffffff;
`;
const MenuWrapper = styled(Col)`
  border-right: 1px solid #e2e3e4;
`;
const PageContainer = styled(Row)`
  background: #f0f4f6;
`;
function Dashboard() {
  return (
    <DashboardLayout className="container-fixed-header">
      <MainContainer className="h-100">
        <MenuWrapper md={1} className="p-0">
          <SideMenu />
        </MenuWrapper>
        <Col>
          <Row className="p-0">
            <Header />
          </Row>
          <PageContainer className="h-100 px-4 pt-4 pb-2">
            <DashboardRoutes />
          </PageContainer>
        </Col>
      </MainContainer>
    </DashboardLayout>
  );
}

export default Dashboard;
