import React from "react";
import HistoryPageStyled from "./HistoryStyled";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

export default class HistoryPage extends React.Component {
  render() {
    const car = {
      model: "Hilux",
      automaker: "Toyota",
      customer: "Albinão do Trovão"
    };
    return (
      <HistoryPageStyled>
        <SearchBarComponent hasFilter={true} />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
          day={car.day}
          month={car.month}
          year={car.year}
          showDate
        />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
          day={car.day}
          month={car.month}
          year={car.year}
          showDate
        />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
          day={car.day}
          month={car.month}
          year={car.year}
          showDate
        />
        <CardComponent
          model={car.model}
          automaker={car.automaker}
          customer={car.customer}
          day={car.day}
          month={car.month}
          year={car.year}
          showDate
        />
      </HistoryPageStyled>
    );
  }
}
