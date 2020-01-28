import React from "react";
import CardStyled from "./CardStyled";

import CarCardIcon from "../../assets/icons/car-card.svg";
import CustomerIcon from "../../assets/icons/customer.svg";

const CardComponent = props => {
  const showDate = props.showDate;
  const cardCustomer = props.cardCustomer;

  if (showDate) {
    return (
      <CardStyled>
        <img src={CarCardIcon} alt="car" />
        <div>
          <h3>
            {props.model} - {props.automaker}
          </h3>
          <p>{props.customer}</p>
        </div>
        <div className="date">
          <h6>D 27</h6>
          <h6>M 12</h6>
          <h6>A 20</h6>
        </div>
      </CardStyled>
    );
  } else if (cardCustomer) {
    return (
      <CardStyled>
        <img src={CustomerIcon} alt="car" />
        <div>
          <h3>{props.customer}</h3>
          <p>{props.phone}</p>
        </div>
      </CardStyled>
    );
  } else {
    return (
      <CardStyled>
        <img src={CarCardIcon} alt="car" />
        <div>
          <h3>
            {props.model} - {props.automaker}
          </h3>
          <p>{props.customer}</p>
        </div>
      </CardStyled>
    );
  }
};

export default CardComponent;
