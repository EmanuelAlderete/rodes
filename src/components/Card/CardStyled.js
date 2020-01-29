import styled from "styled-components";
import { Link } from "react-router-dom";

const CardStyled = styled(Link)`
  margin-top: 5px;
  background: #fff;
  display: flex;
  height: 85px;
  width: 100%;
  align-items: center;
  padding: 17px;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 15px auto;
  transition: 0.3s ease all;
  text-decoration: none;
  cursor: default;
  color: #000;

  -webkit-box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
  box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);

  img {
    width: 30px;
  }

  div {
    text-align: center;
  }

  div h3 {
    font-weight: normal;
    font-size: 1.1em;
  }

  div p {
    font-size: 0.8em;
  }

  h6 {
    display: block;
    font-weight: bold;
  }

  :hover {
    background: #ccc;
  }

  :visited {
    color: #000;
    text-decoration: none;
  }
`;

export default CardStyled;
