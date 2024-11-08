import React, { useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import {  Categories, Duration, Ratings } from "../../utils/data";
import "../Tours/tour.css";

const Filters = ({ onFilterChange }) => {
 
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
 
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleCheckboxChange = (filterType, value, isChecked) => {
    const setStateFunc = {
      
      category: setSelectedCategories,
      duration: setSelectedDurations,
     
      rating: setSelectedRatings,
    }[filterType];

    setStateFunc((prev) => 
      isChecked ? [...prev, value] : prev.filter((item) => item !== value)
    );

    onFilterChange({ 
      category: filterType === 'category' ? (isChecked ? [...selectedCategories, value] : selectedCategories.filter(item => item !== value)) : selectedCategories,
      duration: filterType === 'duration' ? (isChecked ? [...selectedDurations, value] : selectedDurations.filter(item => item !== value)) : selectedDurations,
      
      rating: filterType === 'rating' ? (isChecked ? [...selectedRatings, value] : selectedRatings.filter(item => item !== value)) : selectedRatings,
    });
  };

  return (
    <div className="side_bar">
      <div className="filter_box shadow-sm rounded-2">
        <Accordion defaultActiveKey="0">
         

          <Accordion.Item eventKey="1">
            <Accordion.Header>Categories</Accordion.Header>
            <Accordion.Body>
              {Categories.map((cat, inx) => (
                <Form.Check
                  key={inx}
                  type="checkbox"
                  id={cat}
                  label={cat}
                  value={cat}
                  onChange={(e) => handleCheckboxChange("category", cat, e.target.checked)}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Duration</Accordion.Header>
            <Accordion.Body>
              {Duration.map((days, inx) => (
                <Form.Check
                  key={inx}
                  type="checkbox"
                  id={days}
                  label={days}
                  value={days}
                  onChange={(e) => handleCheckboxChange("duration", days, e.target.checked)}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="4">
            <Accordion.Header>Rating</Accordion.Header>
            <Accordion.Body>
              {Ratings.map((rating, inx) => (
                <Form.Check
                  key={inx}
                  type="checkbox"
                  id={rating}
                  label={rating}
                  value={rating}
                  onChange={(e) => handleCheckboxChange("rating", rating, e.target.checked)}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
