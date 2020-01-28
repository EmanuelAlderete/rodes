import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
