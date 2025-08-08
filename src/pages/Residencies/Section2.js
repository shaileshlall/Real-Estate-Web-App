import React, { useState } from "react";
import "../../styles/ResidenciesStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import Prop1 from "../../assets/Properties/Section2/Hero_Prop1.jpg";
import Prop2 from "../../assets/Properties/Section2/Hero_Prop2.jpg";
import Prop3 from "../../assets/Properties/Section2/Hero_Prop3.jpg";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section2() {
  const images = [Prop1, Prop2, Prop3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="Properties_section2">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="px-5">
            <h2>
              Find A <span className="spanText"> Perfect Home </span>To <br />{" "}
              Live With Your Family
            </h2>
            <p className="mb-4">
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer
            </p>
            <Link to="#" className="order_now py-4 px-5 me-3 mt-4">
              Get Started
            </Link>
          </Col>

          {/* <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src={Prop1} className="img-fluid" alt="Promotion img" />
          </Col> */}

          <Col lg={6} className="text-center mb-5 mb-lg-0 position-relative">
            <div className="slider-container">
              <div
                className="slider-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Promotion ${index}`}
                    className="img-fluid slider-image"
                  />
                ))}
              </div>

              <div className="custom-nav-buttons">
                <button className="circle-btn" onClick={handlePrev}>
                  <FaChevronLeft />
                </button>
                <button className="circle-btn" onClick={handleNext}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section2;
