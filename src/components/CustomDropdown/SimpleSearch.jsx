import React, { useState } from "react";
import { popularsData } from "../../utils/data"; // Importa la data correctamente

const SimpleSearch = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filtra solo si hay datos y si la búsqueda no está vacía
    const filteredResults =
      popularsData && popularsData.length > 0
        ? popularsData.filter((tour) =>
            tour.title.toLowerCase().includes(value.toLowerCase())
          )
        : [];

    onSearchResults(filteredResults); // Envía los resultados al componente padre
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar tours..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SimpleSearch;
