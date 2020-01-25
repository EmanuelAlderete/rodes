import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
