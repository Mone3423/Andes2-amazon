import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Blog = () => {
  useEffect(() => {
    document.title = " Blog   ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Blog" pagename="Blog" />
      <section className="py-5" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
          <Col md="12">
              <h1 className="mb-2 h1 font-bold">
                {" "}
                Let's connect and get to konw each other
              </h1>
              <p className="body-text mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;