import React, { useState } from "react";
import { popularsData } from "../../utils/data"; // Importa tu data aquí

const SimpleSearch = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtra tours según el criterio deseado, como 'title'
    const filteredResults = popularsData.filter((tour) =>
      tour.title.toLowerCase().includes(value.toLowerCase())
    );

    onSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar tours..."
        value={query}
        onChange={handleSearch}
        className="search-input" // Aplica tu estilo aquí
      />
    </div>
  );
};

export default SimpleSearch;
