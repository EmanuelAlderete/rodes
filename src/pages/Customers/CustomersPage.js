import React from "react";
import { withRouter } from "react-router-dom";

import CustomersPageStyled from "./CustomersStyled";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

class CustomersPage extends React.Component {
  render() {
    const car = {
      model: "Hilux",
      automaker: "Toyota",
      customer: {
        name: "Albinão do Trovão",
        phone: "+55 53 999 654 789"
      }
    };
    return (
      <CustomersPageStyled>
        <SearchBarComponent />
        <CardComponent
          customer={car.customer.name}
          phone={car.customer.phone}
          cardCustomer
        />
        <CardComponent
          customer={car.customer.name}
          phone={car.customer.phone}
          cardCustomer
        />
        <CardComponent
          customer={car.customer.name}
          phone={car.customer.phone}
          cardCustomer
        />
      </CustomersPageStyled>
    );
  }
}

export default withRouter(CustomersPage);
