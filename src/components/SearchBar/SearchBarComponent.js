import React from "react";
import SearchBarStyled from "./SearchBarStyled";

import SearchIcon from "../../assets/icons/search.svg";

const SearchBarComponent = () => {
  return (
    <SearchBarStyled>
      <input type="text" placeholder="Pesquisar..." />
      <button>
        <img src={SearchIcon} alt="search" />
      </button>
    </SearchBarStyled>
  );
};

export default SearchBarComponent;
