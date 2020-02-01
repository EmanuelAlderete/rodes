import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import CustomersPageStyled from "./CustomersStyles";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

const CustomersPage = props => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  });

  const getCustomers = async () => {
    const response = await fetch("http://localhost:3333/api/customers");
    const data = await response.json();

    setCustomers(data);
  };

  return (
    <CustomersPageStyled>
      <SearchBarComponent />
      {customers.map(customer => (
        <CardComponent object={customer} key={customer._id} cardCustomer />
      ))}
    </CustomersPageStyled>
  );
};

export default CustomersPage;
