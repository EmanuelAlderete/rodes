import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import CarPage from "./pages/Car/CarPage";
import HistoryPage from "./pages/History/HistoryPage";
import HomePage from "./pages/Home/HomePage";
import CustomersPage from "./pages/Customers/CustomersPage";

const Routes = () => (
  <Switch>
    <Route path="/app/garage/:id" exact component={CarPage} />
    <Route path="/app/customers" exact component={CustomersPage} />
    <Route path="/app/history" exact component={HistoryPage} />
    <Route path="/app/home" exact component={HomePage} />
    <Route path="/app" exact>
      {<Redirect to="/app/home" />}
    </Route>
  </Switch>
);

export default Routes;
