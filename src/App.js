import React from "react";
import ResetCss from "./styles/ResetCss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import { AppStyled, AppContentStyled } from "./styles/AppStyles";
import HeaderComponent from "./components/Header/HeaderComponent";

const App = () => {
  return (
    <AppStyled>
      <BrowserRouter>
        <ResetCss />
        <HeaderComponent />
        <AppContentStyled>
          <Routes />
        </AppContentStyled>
      </BrowserRouter>
    </AppStyled>
  );
};

export default App;
