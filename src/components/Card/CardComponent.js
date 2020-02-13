import React from "react";
import CardStyled from "./CardStyled";

import CarCardIcon from "../../assets/icons/car-card.svg";
import CustomerIcon from "../../assets/icons/customer.svg";

const CardComponent = props => {
  const showDate = props.showDate;
  const cardCustomer = props.cardCustomer;
  const car = props.object;
  const customer = props.object;

  if (showDate) {
    return (
      <CardStyled to={`/app/veiculo/${car._id}`}>
        <img src={CarCardIcon} alt="car" />
        <div>
          <h3>
            {car.model} - {car.automaker}
          </h3>
          <p>{car.customer.name}</p>
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
      <CardStyled to={`/app/cliente/${customer._id}`}>
        <img src={CustomerIcon} alt="car" />
        <div>
          <h3>{customer.name}</h3>
          <p>{customer.phone}</p>
        </div>
      </CardStyled>
    );
  } else {
    return (
      <CardStyled to={`/app/veiculo/${car._id}`}>
        <img src={CarCardIcon} alt="car" />
        <div>
          <h3>
            {car.model} - {car.automaker}
          </h3>
          <p>{car.customer.name}</p>
        </div>
      </CardStyled>
    );
  }
};

export default CardComponent;
