import styled from "styled-components";

const LoginStyled = styled.div`
  height: 100vh;
  width: 100%;
  background: #3268ea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    align-self: flex-end;
    width: 300px;
  }

  img {
    width: 65px;
    display: block;
    margin: 0 auto 15px;
  }

  form {
    flex-basis: 100%;
    text-align: center;
  }
  form div {
    max-width: 220px;
    margin: 0 auto 5px;
  }

  form div div {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-top: -36px;
    margin-left: 231px;
    display: none;
  }

  div.divAfter {
    display: none;
  }

  label {
    display: block;
    color: #fff;
    margin-bottom: 5px;
    font-size: 0.7em;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: none;
    text-align: center;
    transition: 0.3s all;
  }

  input[type="text"] {
    background: ${props => (props.usernamevalid ? "#0ACA62" : "#FFF")};
    color: ${props => (props.usernamevalid ? "#FFF" : "#000")};
  }

  a {
    flex-basis: 100%;
    align-self: flex-end;
    text-align: center;
    text-decoration: underline;
    margin-bottom: 5px;
    color: #ccc;
    font-size: 0.6em;
    cursor: pointer;
  }

  button {
    background: #43467b;
    height: 30px;
    line-height: 30px;
    border: none;
    font-size: 0.9em;
    font-weight: bold;
    color: #fff;
    width: 90px;
    margin-top: 15px;
    display: none;
  }
`;

export default LoginStyled;
