import React from "react";
import SearchBarStyled from "./SearchBarStyled";

import SearchIcon from "../../assets/icons/search.svg";
import FilterIcon from "../../assets/icons/filter.svg";

const SearchBarComponent = props => {
  const hasFilter = props.hasFilter;

  if (hasFilter) {
    return (
      <SearchBarStyled>
        <input type="text" placeholder="Pesquisar..." />
        <button className="searchIcon">
          <img src={SearchIcon} alt="search" />
        </button>
        <button>
          <img src={FilterIcon} alt="search" />
        </button>
      </SearchBarStyled>
    );
  } else {
    return (
      <SearchBarStyled>
        <input type="text" placeholder="Pesquisar..." />
        <button className="searchIcon">
          <img src={SearchIcon} alt="search" />
        </button>
      </SearchBarStyled>
    );
  }
};

export default SearchBarComponent;
