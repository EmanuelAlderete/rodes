import React from "react";
import HistoryPageStyled from "./HistoryStyled";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import CardComponent from "../../components/Card/CardComponent";

const HistoryPage = () => {
  return (
    <HistoryPageStyled>
      <SearchBarComponent hasFilter={true} />
      <CardComponent showDate={true} />
      <CardComponent showDate={true} />
      <CardComponent showDate={true} />
      <CardComponent showDate={true} />
      <CardComponent showDate={true} />
      <CardComponent showDate={true} />
    </HistoryPageStyled>
  );
};

export default HistoryPage;
