import React from "react";
import BreadcrumbStyled from "./BreadcrumbStyled";

import ArrowBackIcon from "../../assets/icons/arrow-back.svg";
import { Link } from "react-router-dom";

const BreadcrumbComponent = props => {
  return (
    <BreadcrumbStyled>
      <Link to={`/app/veiculo/${props._id}`}>
        <img src={ArrowBackIcon} alt="voltar" />
        <p>{props.text}</p>
      </Link>
    </BreadcrumbStyled>
  );
};

export default BreadcrumbComponent;
