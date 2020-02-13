import styled from "styled-components";

const CustomerProfileStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: 10px;
  border-radius: 5px;

  h3 {
    flex-basis: 100%;
    margin-bottom: 10px;
  }

  p {
    font-weight: lighter;
    color: #979797;
    font-size: 0.9em;
    margin-bottom: 3px;
  }

  h5 {
    font-weight: normal;
    padding-left: 3px;
  }

  div.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div.content div {
    flex-basis: 48%;
    max-width: 48%;
    word-wrap: break-word;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    height: 30px;
    width: 45%;
    font-size: 0.7em;
    text-align: center;
    line-height: 30px;
    background: #43467b;
    margin: 15px auto 0;
  }
`;

export default CustomerProfileStyled;
