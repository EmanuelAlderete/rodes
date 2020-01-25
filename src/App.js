import React from "react";
import ResetCss from "./styles/ResetCss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/Header/HeaderComponent";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <div>
      <ResetCss />
      <HeaderComponent />
      <BrowserRouter>
        <Switch>
          <Route path="/app" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
