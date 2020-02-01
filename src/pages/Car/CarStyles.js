import styled from "styled-components";

const CarPageStyled = styled.section`
  div.content {
    background: #fff;
    padding: 20px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 0.9em;
    font-weight: bold;
    flex-basis: 100%;
  }

  div.infos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div.infos div {
    flex: 1 1 33%;
    margin-bottom: 20px;
  }

  div.infos p {
    color: #979797;
    font-size: 0.7em;
    margin-bottom: 5px;
  }

  div.infos h5 {
    padding-left: 3px;
    font-weight: lighter;
  }

  div.btns {
    display: flex;
    justify-content: space-between;
  }

  .btns a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    height: 30px;
    width: 45%;
    font-size: 0.7em;
    text-align: center;
    line-height: 30px;
  }

  .darkBlue {
    background: #43467b;
  }

  .darkGreen {
    background: #437b6e;
  }
`;

export default CarPageStyled;
