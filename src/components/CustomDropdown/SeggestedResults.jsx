import React from "react";
import { NavLink } from "react-router-dom";

const SuggestedResults = ({ results }) => {
  if (!results) return null;

  return (
    <div className="suggested-results">
      {results.length > 0 ? (
        results.map((tour) => (
          <div key={tour.id} className="suggestion-item">
            <NavLink to={`/tour-details/${tour.id}`} className="text-dark">
              {tour.title}
            </NavLink>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SuggestedResults;
