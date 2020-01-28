import styled from "styled-components";

const SearchBarStyled = styled.div`
  background: none;
  max-width: 270px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;

  input,
  button {
    background: none;
    border: none;
  }

  input:focus,
  button:focus {
    border: none;
    outline: none;
  }

  input {
    flex-basis: 90%;
    background: #fff;
    padding: 4px 17px;
  }

  button {
    float: right;
    flex-basis: 10%;
  }

  button.searchIcon {
    background: #fff;
  }
`;

export default SearchBarStyled;
