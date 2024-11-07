import React, { useState } from "react";
import SimpleSearch from "../CustomDropdown/SimpleSearch";
import SuggestedResults from "./SearchSection";
import "../AdvanceSearch/search.css"

const SearchSection = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <h2>Buscar Tours</h2>
      <SimpleSearch onSearchResults={setSearchResults} />
      <SuggestedResults results={searchResults} />
    </div>
  );
};

export default SearchSection;
