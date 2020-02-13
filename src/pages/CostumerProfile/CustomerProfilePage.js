import React, { useState, useEffect } from "react";
import CustomerProfileStyled from "./CustomerProfileStyles";
import { Link } from "react-router-dom";

const CustomerProfilePage = props => {
  const [customer, setCustomer] = useState({});

  async function getCustomerInfo() {
    const response = await fetch(
      `http://localhost:3333/api/customer/${props.match.params.id}`
    );
    const data = await response.json();
    setCustomer(data);
  }

  useEffect(() => {
    getCustomerInfo();
  }, []);
  return (
    <CustomerProfileStyled>
      <h3>Dados do Proprietário</h3>
      <div className="content">
        <div>
          <p>Nome</p>
          <h5>{customer.name}</h5>
        </div>
        <div>
          <p>Telefone</p>
          <h5>{customer.phone}</h5>
        </div>
        <div>
          <p>Cidade</p>
          <h5>{customer.city}</h5>
        </div>
        <div>
          <p>CEP</p>
          <h5>{customer.cep}</h5>
        </div>
        <div>
          <p>Bairro</p>
          <h5>{customer.bairro}</h5>
        </div>
        <div>
          <p>Logradouro</p>
          <h5>{customer.rua}</h5>
        </div>
        <div>
          <p>E-mail</p>
          <h5>{customer.email}</h5>
        </div>
        <div>
          <p>CPF</p>
          <h5>{customer.cpf}</h5>
        </div>
      </div>
      <Link to={`/app/cliente/${customer._id}/veiculos`} className="darkBlue">
        Ver Veículos
      </Link>
    </CustomerProfileStyled>
  );
};

export default CustomerProfilePage;
