import React from "react";
import { Accordion, Form } from "react-bootstrap";
import { location ,Categories, Duration, PriceRange, Ratings} from "../../utils/data";
import "../Tours/tour.css"
const Filters = () => {
  return (
    <div className="side_bar">
      <div className="filter_box shadow-sm rounded-2">

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Location </Accordion.Header>
            <Accordion.Body>
              {location.map((location, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={location}
                    label={location}
                    value={location}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Categories </Accordion.Header>
            <Accordion.Body>
              {Categories.map((category, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={category}
                    label={category}
                    value={category}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Duration </Accordion.Header>
            <Accordion.Body>
              {Duration.map((days, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={days}
                    label={days}
                    value={days}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Price </Accordion.Header>
            <Accordion.Body>
              {PriceRange.map((Price, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={Price}
                    label={Price}
                    value={Price}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Rating </Accordion.Header>
            <Accordion.Body>
              {Ratings.map((rating, inx) => {
                return (
                  <Form.Check
                    key={inx}
                    type="checkbox"
                    id={rating}
                    label={rating}
                    value={rating}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


      </div>
    </div>
  );
};

export default Filters;
