import React from "react";

import { Switch, Route } from "react-router-dom";

import HistoryPage from "./pages/History/HistoryPage";
import HomePage from "./pages/Home/HomePage";
import CustomersPage from "./pages/Customers/CustomersPage";

const Routes = () => (
  <Switch>
    <Route path="/app/customers" exact component={CustomersPage} />
    <Route path="/app/history" exact component={HistoryPage} />
    <Route path="/app/home" exact component={HomePage} />
  </Switch>
);

export default Routes;
