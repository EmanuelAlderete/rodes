import React from "react";
import HomeStyles from "./HomeStyled";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

export default class HomePage extends React.Component {
  render() {
    return (
      <HomeStyles>
        <SearchBarComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </HomeStyles>
    );
  }
}
