import React from "react";
import HomeStyles from "./HomeStyles";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

export default class HomePage extends React.Component {
  render() {
    const car = {
      model: "Hilux",
      automaker: "Toyota",
      customer: "Albinão do Trovão",
      day: "25",
      month: "06",
      year: "20"
    };
    return (
      <HomeStyles>
        <SearchBarComponent />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
        />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
        />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
        />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
        />
      </HomeStyles>
    );
  }
}
