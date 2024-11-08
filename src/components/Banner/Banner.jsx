import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/slider/_YES1808.jpg";
import img2 from "../../assets/images/slider/_YES4511.jpg";
import img3 from "../../assets/images/slider/_YES5032.jpg";
import img4 from "../../assets/images/slider/_YES7575.jpg";
import img5 from "../../assets/images/slider/20140822_130345.jpg";
import img6 from "../../assets/images/slider/DJI_0072.jpg";
import img7 from "../../assets/images/slider/DJI_0126.jpg";
import img8 from "../../assets/images/slider/DSC07272.jpg";

import "../Banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">
        {/* Texto Fijo */}
        <div className="fixed-text">
          <h5 className="heading">BOOK YOUR NEXT AVENTURE <span > WHIT US</span></h5>
          <p className="sub_text">
          Experience the beauty of Bolivia with our tours.
          </p>
        </div>
        

        {/* Carrusel de Imágenes */}
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={img1} className="d-block w-100" alt="Slide 1"  />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="d-block w-100" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="d-block w-100" alt="Slide 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img4} className="d-block w-100" alt="Slide 4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img5} className="d-block w-100" alt="Slide 5" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img6} className="d-block w-100" alt="Slide 6"  />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img7} className="d-block w-100" alt="Slide 7" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img8} className="d-block w-100" alt="Slide 8"  />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;

