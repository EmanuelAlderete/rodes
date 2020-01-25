import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

import HamburguerMenu from "../../assets/icons/hamburguer.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import ThumbnailIcon from "../../assets/icons/thumb.svg";
import CarIcon from "../../assets/icons/car.svg";
import CarActiveIcon from "../../assets/icons/car-active.svg";
import HistoryIcon from "../../assets/icons/history.svg";
import CustomersIcon from "../../assets/icons/customers.svg";
import CustomersActiveIcon from "../../assets/icons/customers-active.svg";

const HeaderComponent = () => {
  return (
    <HeaderStyled>
      <div className="topNav">
        <img src={HamburguerMenu} alt="menu" />
        <Link to={"/app"}>Oficina EBI</Link>
        <Link to={"/logout"}>
          <img src={LogoutIcon} alt="logout" />{" "}
        </Link>
      </div>
      <div className="userInfo">
        <img src={ThumbnailIcon} alt="user-pick" />
        <div>
          <p>Usuário</p>
          <h3>Aderson A. da Silva</h3>
        </div>
      </div>
      <div className="bottomNav">
        <div className="active">
          <img src={CarActiveIcon} alt="carros" />
          <p>Na garagem</p>
        </div>
        <div className="bar">
          <img src={HistoryIcon} alt="carros" />
          <p>Histórico</p>
        </div>
        <div className="bar">
          <img src={CustomersIcon} alt="carros" />
          <p>Clientes</p>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default HeaderComponent;
