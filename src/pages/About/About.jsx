import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutImg from "../../assets/images/about/aboutimg.png";
import "../About/about.css";
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";

const About = () => {

  useEffect(()=>{
    document.title ="About us "
    window.scroll(0, 0)
  },[])

  return (
    <>
      <Breadcrumbs title="About us" pagename="About us" />
      <section className="py-5">
        <Container>
          <Row>
            <Col md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img
                    src={aboutImg}
                    alt="about "
                    className="img-fluid rounded-5"
                    loading="lazy"
                  />
                  
                </div>
              </div>
              <h2 className="h2 font-bold  pt-4 pb-2">
                FROM THE ANDES TO THE AMAZON !
              </h2>
              <p className="body-text mb-2">
              Andes 2 Amazon is a 100% Bolivian tour operator that offers adventure, cultural, and unique tours around Bolivia, including destinations such as La Paz, Lake Titicaca, the Amazon Basin, Santa Cruz, Cochabamba, Sucre, Tarija, Potosí, Sajama National Park, and the Uyuni Salt Flats.
             </p>
              <p className="body-text mb-2">
              We are a proudly Bolivian national tourism company certified by the Vice Ministry of Tourism. Our team is made up of Bolivian tourism professionals who will ensure you have exceptional experiences.
              </p>
              <p className="body-text mb-2">
              Our mission is to provide authentic and responsible experiences to our visitors by offering high-quality services and doing our best. In our tours, visitors can explore different places and communities, and interact with local people to learn about Bolivian culture.
              </p>
            </Col>
            <Col md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                <div className="d-flex justify-content-center align-item-search my-2">
                  <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2 ">
                    <img src={icons1} alt="icon" className="img-fluid" />
                  </div>
                   </div>
                  <Card.Title className="fw-bold h5"> 40+ Destination  </Card.Title>
                  <p className="mb-2 body-text">
                  Unique adventures across Bolivia
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                <div className="d-flex justify-content-center align-item-search my-2">
                  <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2 ">
                    <img src={icons2} alt="icon" className="img-fluid" />
                  </div>
                   </div>
                  <Card.Title className="fw-bold h5">  Best Price In Bolivia  </Card.Title>
                  <p className="mb-2 body-text">
                  
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                <div className="d-flex justify-content-center align-item-search my-2">
                  <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2 ">
                    <img src={icons3} alt="icon" className="img-fluid" />
                  </div>
                   </div>
                  <Card.Title className="fw-bold h5">  Fast Booking  </Card.Title>
                  <p className="mb-2 body-text">
                 
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </section>
     
    </>
  );
};

export default About;
