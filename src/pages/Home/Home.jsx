import React from "react";
import Banner from "../../components/Banner/Banner";
import AdvanceSearch from "../../components/AdvanceSearch/SearchSection";
import Features from "../../components/Features/Features";
import { Container, Row, Col,  } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

import Cards from "../../components/Cards/Cards";
import { destinationsData, popularsData } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";



const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };



  return (
    <>
      <Banner />
      <AdvanceSearch />
      <Features />

      {/* tour seciton start */}

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return (
                    <Cards destination={destination} key={inx} />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton start */}

      <section className="popular py-5">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {popularsData.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <PopularCard val={val} />
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>

    <section className="call_us">
  <Container>
    <Row className="align-items-center">
      <Col md="8">
        <h5 className="title">Need Help?</h5>
        <h2 className="heading">
          READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
        </h2>
        <p className="text"></p>
      </Col>
      <Col md="4" className="text-center mt-3 mt-md-0">
        <a
          href="tel:+591 719-69465"
          className="secondary_btn bounce"
          rel="no"
        >
          Contact Us !
        </a>

        {/* Contenedor para los íconos, debajo del botón */}
        <div className="mt-3"> 
          <a
            href="tel:+591 719-69465"
            className="bi bi-instagram me-4 fs-3 text-white"
            rel="no"
          ></a>
          <a
            href="tel:+591 719-69465"
            className="bi bi-facebook fs-3 text-white"
            rel="no"
          ></a>
        </div>
      </Col>
    </Row>
  </Container>
  <div className="overlay"></div>
</section>

        
     

    </>
  );
};

export default Home;
