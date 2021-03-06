import React, { useState, useEffect } from "react";
import CarPageStyled from "./CarStyles";
import { Link } from "react-router-dom";

import BreadcrumbComponent from "../../components/Breadcrumb/BreadCrumbComponent";
import CardComponent from "../../components/Card/CardComponent";

const CarPage = props => {
  const [car, setCar] = useState({ customer: {}, km_history: {} });

  async function getCarInfo() {
    const response = await fetch(
      `http://localhost:3333/api/car/${props.match.params.id}`
    );
    const data = await response.json();
    setCar(data);
  }

  useEffect(() => {
    getCarInfo();
  }, []);

  return (
    <CarPageStyled>
      <CardComponent object={car} showDate />
      <div className="content">
        <h3>Dados do Veículo</h3>
        <div className="infos">
          <div>
            <p>Motor</p>
            <h5>{car.hp}</h5>
          </div>
          <div>
            <p>Combustível</p>
            <h5>{car.fuel}</h5>
          </div>
          <div>
            <p>Câmbio</p>
            <h5>{car.shift}</h5>
          </div>
          <div>
            <p>Quilometragem</p>
            <h5>{car.km_history.km_out}</h5>
          </div>
          <div>
            <p>Placa</p>
            <h5>{car.license}</h5>
          </div>
          <div>
            <p>Cor</p>
            <h5>{car.color}</h5>
          </div>

          <h3>Dados do Proprietário</h3>
          <div>
            <p>Nome</p>
            <h5>{car.customer.name}</h5>
          </div>
          <div>
            <p>Telefone</p>
            <h5>{car.customer.phone}</h5>
          </div>
        </div>
        <div className="btns">
          <Link to={`/app/cliente/${car.customer._id}`} className="darkBlue">
            Perfil Completo
          </Link>
          <Link to={`/app/veiculo/${car._id}/historico`} className="darkGreen">
            Histórico
          </Link>
        </div>
      </div>
    </CarPageStyled>
  );
};

export default CarPage;
