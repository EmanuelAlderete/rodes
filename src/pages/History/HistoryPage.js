import React, { useEffect, useState } from "react";
import HistoryPageStyled from "./HistoryPageStyles";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

const HistoryPage = props => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  });

  const getCars = async () => {
    const response = await fetch("http://localhost:3333/api/history");
    const data = await response.json();

    setCars(data);
  };

  return (
    <HistoryPageStyled>
      <SearchBarComponent hasFilter={true} />
      {cars.map(car => (
        <CardComponent object={car} key={car._id} showDate />
      ))}
    </HistoryPageStyled>
  );
};

export default HistoryPage;
