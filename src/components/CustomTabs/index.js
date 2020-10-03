import React, { Fragment } from "react";
import styled from "styled-components";
import {
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Tabs } from "react-bootstrap";
import TopCustomers from "../../containers/Dashboard/Invoices/TopCustomers";

const TabsWrapper = styled.div`
  .nav-tabs .nav-link {
    width: 50%;
    font-size: 0.8em;
    font-weight: 600;
    color: grey;
    background-color: white;
    text-align: center;
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: black;
    #icon {
      color: #0b78bf;
    }
  }
  /* #noanim-tab-example-tab-customers.active,
  #noanim-tab-example-tab-sales.active {
  } */
`;
const TabsParent = styled(Tabs)``;

export default function CustomTabs() {
  return (
    <TabsWrapper>
      <TabsParent
        defaultActiveKey="customers"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab
          eventKey="customers"
          title={
            <Fragment>
              <FontAwesomeIcon
                id="icon"
                icon={faShoppingCart}
                className="mr-2"
              />
              Top customers
            </Fragment>
          }
        >
          <TopCustomers />
        </Tab>
        <Tab
          eventKey="sales"
          title={
            <Fragment>
              <FontAwesomeIcon
                id="icon"
                icon={faShoppingBag}
                className="mr-2"
              />
              Top sales
            </Fragment>
          }
        >
          Top sales
        </Tab>
      </TabsParent>
    </TabsWrapper>
  );
}
