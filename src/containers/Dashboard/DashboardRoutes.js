import React from "react";
import { Switch, Route } from "react-router-dom";
import Summary from "./Summary/index";
import Invoices from "./Invoices/index";
import Rating from "./Rating/index";
import Warning from "./Warning/index";
import AddClient from "./AddClient/index";
import Help from "./Help/index";

export default function DashboardRoutes() {
  return (
    <Switch>
      <Route path="/summary" component={Summary} />
      <Route path="/rating" component={Rating} />
      <Route path="/warning" component={Warning} />
      <Route path="/addClient" exact component={AddClient} />
      <Route path="/help" exact component={Help} />
      <Route path="/" component={Invoices} />
    </Switch>
  );
}
