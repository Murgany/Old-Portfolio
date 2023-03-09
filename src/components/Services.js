import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const Services = () => {

  return (
    <Container
      className="service-bg justify-content-center pb-5"
      id="services"
      fluid
    >
      <Row className="page-scaler justify-content-center pad mt-5">
        <div className="text-center mb-5 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#FDFEFF"
            className="bi bi-card-checklist"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
          </svg>
          <h1 className="headers white-text mt-3 text-center">WHAT I DO</h1>
        </div>

        <Row className="white-text">
          <div className="col-12 col-sm-12 col-md-6">
            <h5 className="headers">Robust Back End Development</h5>
            <p className="responsive-text">
              I create simple but robust back end features using Python and
              Django with PostgreSQL or MySQL for database.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h5 className="headers">Front End Development</h5>
            <p className="responsive-text">
              I design responsive, mobile-first layouts that seemlessly fit in
              any screen size.
            </p>
          </div>
          <div className="col">
            <h5 className="headers">Responsive Web Design</h5>
            <p className="responsive-text">
              I design responsive, mobile-first layouts that seemlessly fit in
              any screen size.
            </p>
          </div>
          <div className="col">
            <h5 className="headers">Special Offer</h5>
            <p className="responsive-text">
              Hire me through on Upwork my account, or on PeoplePerHourUnsplash
              here. I will build for you
            </p>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default Services;
