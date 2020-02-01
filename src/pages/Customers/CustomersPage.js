import React from "react";
import { withRouter } from "react-router-dom";

import CustomersPageStyled from "./CustomersStyles";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

class CustomersPage extends React.Component {
  render() {
    return (
      <CustomersPageStyled>
        <SearchBarComponent />
      </CustomersPageStyled>
    );
  }
}

export default withRouter(CustomersPage);
