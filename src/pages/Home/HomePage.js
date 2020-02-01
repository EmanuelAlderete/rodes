import React, { useEffect, useState } from "react";
import HomeStyles from "./HomeStyles";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

const HomePage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  });

  const getCars = async () => {
    const response = await fetch("http://localhost:3333/api/cars");
    const data = await response.json();

    setCars(data);
  };

  const cards = cars.map(car => <CardComponent object={car} key={car._id} />);

  return (
    <HomeStyles>
      <SearchBarComponent />
      {cards}
    </HomeStyles>
  );
};

export default HomePage;
