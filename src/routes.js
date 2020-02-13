import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import CarPage from "./pages/Car/CarPage";
import HistoryPage from "./pages/History/HistoryPage";
import HomePage from "./pages/Home/HomePage";
import CustomersPage from "./pages/Customers/CustomersPage";
import CarHistoryPage from "./pages/CarHistory/CarHistoryPage";
import CustomerProfilePage from "./pages/CostumerProfile/CustomerProfilePage";

const Routes = () => (
  <Switch>
    <Route path="/app/cliente/:id" exact component={CustomerProfilePage} />
    <Route path="/app/veiculo/:id/historico" exact component={CarHistoryPage} />
    <Route path="/app/veiculo/:id" exact component={CarPage} />
    <Route path="/app/clientes" exact component={CustomersPage} />
    <Route path="/app/historico" exact component={HistoryPage} />
    <Route path="/app/home" exact component={HomePage} />
    <Route path="/app" exact>
      {<Redirect to="/app/home" />}
    </Route>
  </Switch>
);

export default Routes;
