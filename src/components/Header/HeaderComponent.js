import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

import HamburguerMenu from "../../assets/icons/hamburguer.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import ThumbnailIcon from "../../assets/icons/thumb.svg";
import CarIcon from "../../assets/icons/car.svg";
import HistoryIcon from "../../assets/icons/history.svg";
import CustomersIcon from "../../assets/icons/customers.svg";

const HeaderComponent = props => {
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
        <NavLink to="/app/historico" exact activeClassName="active">
          <div>
            <img src={HistoryIcon} alt="histórico" />
            <p>Histórico</p>
          </div>
        </NavLink>
        <NavLink to="/app/home" activeClassName="active">
          <div className="bar">
            <img src={CarIcon} alt="carros" />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/app/clientes" exact activeClassName="active">
          <div className="bar">
            <img src={CustomersIcon} alt="clientes" />
            <p>Clientes</p>
          </div>
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default HeaderComponent;
