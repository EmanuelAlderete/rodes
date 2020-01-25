import styled from "styled-components";

const CardStyled = styled.div`
  margin-top: 5px;
  background: #fff;
  display: flex;
  height: 85px;
  width: 304px;
  align-items: center;
  padding: 17px;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 15px auto;

  -webkit-box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
  box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
  img {
    width: 50px;
  }

  div {
    text-align: center;
  }

  div h3 {
    font-weight: normal;
    font-size: 1.3em;
  }
`;

export default CardStyled;