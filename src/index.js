import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const loggedIn = true;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/">
        {loggedIn ? <Redirect to="/app" /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
