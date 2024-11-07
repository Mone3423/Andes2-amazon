import React from 'react'
import "../Cards/card.css";
import { Card ,Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PopularCard = ({val}) => {
  return (
    <>
        <Card className="rounded-2 shadow-sm popular">
              <Card.Img
                variant="top"
                src={val.image}
                className="img-fluid"
                alt={"image"}
              />
              <Card.Body>
              
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text">{val.location}</span>
                </Card.Text>

                <Card.Title><NavLink className="body-text text-dark text-decoration-none" to={`/tour-details/${val.id}`}>
    {val.title}
  </NavLink></Card.Title>
                <p className="reviwe">
                  <span>
                    <i className="bi bi-star-fill me-1"></i>
                  </span>
                  <span>{val.rating} </span>
                  <span>( {val.reviews} reviews )</span>
                </p>
                {val.category.map((cat, index)=>{
                  return(
                    <span key={index} 
                    className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>
                  )
                })}
                
              </Card.Body>

              <Card.Footer className="py-4">
                {val.afterDiscount ? (
                  <p className="text-decoration-line-through"> ${val.price.toFixed(2)}</p>
                ): ""}
               
                <Stack
                  direction="horizontal"
                  className="justify-content-between  mt-3"
                >
                  <p>
                    From <b>{val.afterDiscount ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b>
                  </p>
                  <p>
                  
                    <i className="bi bi-clock"></i> {val.days}
                  </p>
                </Stack>
              </Card.Footer>
          
            </Card>
    </>
  )
}

export default PopularCard