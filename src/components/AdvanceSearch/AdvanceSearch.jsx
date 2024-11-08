import React, { useState } from "react";
import SimpleSearch from "../CustomDropdown/SimpleSearch";
import SuggestedResults from "../CustomDropdown/SeggestedResults";
import "./search.css"
const SearchSection = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <SimpleSearch onSearchResults={setSearchResults} />
      <SuggestedResults results={searchResults} />
    </div>
  );
};

export default SearchSection;
