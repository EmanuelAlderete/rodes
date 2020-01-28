import React from "react";
import CardStyled from "./CardStyled";

import CarCardIcon from "../../assets/icons/car-card.svg";

const CardComponent = props => {
  const showDate = props.showDate;

  if (showDate) {
    return (
      <CardStyled>
        <img src={CarCardIcon} alt="car" />
        <div>
          <h3>Hilux 2.5 - Toyota</h3>
          <p>Albinao do Trovão</p>
        </div>
        <div className="date">
          <bold>D 27</bold>
          <bold>M 12</bold>
          <bold>A 20</bold>
        </div>
      </CardStyled>
    );
  } else {
    return (
      <CardStyled>
        <img src={CarCardIcon} alt="car" />
        <div>
          <h3>Hilux 2.5 - Toyota</h3>
          <p>Albinao do Trovão</p>
        </div>
      </CardStyled>
    );
  }
};

export default CardComponent;
