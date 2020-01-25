import React from "react";
import CardStyled from "./CardStyled";

import CarCardIcon from "../../assets/icons/car-card.svg";

const CardComponent = () => {
  return (
    <CardStyled>
      <img src={CarCardIcon} alt="car" />
      <div>
        <h3>Hilux 2.5 - Toyota</h3>
        <p>Albinao do Trovão</p>
      </div>
    </CardStyled>
  );
};

export default CardComponent;
