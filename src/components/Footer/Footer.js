import React from "react";
import { Col, Container, Row } from "reactstrap";
import Email from "./Email";
import logo from "../../Illustration/Group 86.png";
import fb from "../../Illustration/facebook-logo-in-circular-shape@2x.png";
import twitter from "../../Illustration/twitter (4)@2x.png";
import linkedin from "../../Illustration/linkedin (2)@2x.png";
import dribbble from "../../Illustration/dribbble (1)@2x.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="my-footer">
      <Row className="justify-content-center text-center">
        <Email />
      </Row>
      <Row className="justify-content-center justify-content-md-start pt-5 my-2">
        <FooterMain />
      </Row>
    </Container>
  );
};

const FooterMain = () => {
  return (
    <>
      <Col xs={11} md={5}>
        <div className="d-flex justify-content-center align-items-md-start align-items-center flex-column">
          <div>
            <img src={logo} alt="" width="250" height="160px" />
          </div>
          <div className="my-3">
            {[fb, twitter, linkedin, dribbble].map((item) => {
              return <img key={item} src={item} className="mt-4 px-2" alt="" />;
            })}
          </div>
        </div>
      </Col>
      <Col xs={11} md={2}>
        {["features", "enterprise", "pricing"].map((item) => {
          return (
            <a
              href={item}
              className="nav-link text-secondary text-capitalize text-center font-weight-bold"
              style={{ fontSize: "1.4rem" }}
            >
              {item}
            </a>
          );
        })}
      </Col>
      <Col xs={11} md={2} className="my-4 my-md-0">
        {["about us", "terms of service", "security", "login"].map((item) => {
          return (
            <a
              href={item}
              className="nav-link text-secondary text-capitalize text-center font-weight-bold"
              style={{ fontSize: "1.3rem" }}
            >
              {item}
            </a>
          );
        })}
      </Col>
      <Col xs={11} md={2}>
        {["blog", "help center", "contact us", "status"].map((item) => {
          return (
            <a
              href={item}
              className="nav-link text-secondary text-capitalize text-center font-weight-bold"
              style={{ fontSize: "1.3rem" }}
            >
              {item}
            </a>
          );
        })}
      </Col>
    </>
  );
};
export default Footer;