import styled from "styled-components";

const HeaderStyled = styled.header`
  box-sizing: border-box;
  background: #3268ea;
  padding: 15px 20px 0;
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 100%;
  position: fixed;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);

  div.topNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    line-height: 25px;
    width: 100%;
  }

  div.topNav a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    height: 19px;
  }

  div.userInfo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  div.userInfo div {
    color: #fff;
    margin-left: 15px;
  }

  div.userInfo p {
    flex-basis: 100%;
    font-size: 0.6em;
  }

  div.userInfo h3 {
    margin-top: 5px;
  }

  div.bottomNav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.7em;
    color: #fff;
    font-weight: bold;
  }

  div.bottomNav a {
    text-align: center;
    flex: 0 0 33%;
    color: #fff;
    text-decoration: none;
  }

  div.bottomNav img {
    height: 17px;
    height: 17px;
    margin-bottom: 2px;
  }

  div.bar {
    border-left: 1px solid #fff;
  }

  .active p {
    color: #1c3d8d;
    font-weight: lighter;
  }
`;

export default HeaderStyled;
