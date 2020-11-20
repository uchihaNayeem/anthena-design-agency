import React from 'react';
import { Col, Container, Row } from "reactstrap";
import "./Achievement.css";
import happy from "../../Illustration/happy@2x.png";
import champ from "../../Illustration/marketing@2x.png";
import man from "../../Illustration/surface1@2x.png";
import rocket from "../../Illustration/transportation@2x.png";

const Achievement = () => {
  const achievements = [
    { icon: happy, text: "Happy Clients", number: 700 },
    { icon: champ, text: "Projects Completed", number: 140 },
    { icon: man, text: "Crazy Minds", number: 25 },
    { icon: rocket, text: "Running Projects", number: 75 },
  ];
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col xs={11} md={5} className="py-5">
          <div>
            <h2>Our Achievements</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.
            </p>
          </div>
        </Col>
        <Col xs={11} md={7} className="d-flex justify-content-center">
          <Row>
            {achievements.map((item, index) => {
              return (
                <Col xs={12} md={6} className="d-flex justify-content-center">
                  <div
                    className={`d-flex justify-content-center align-items-center ${
                      (index + 1) % 2 === 0
                        ? "achievement-even"
                        : "achievement-odd"
                    } mt-3 py-4`}
                  >
                    <img
                      width="40"
                      height="40"
                      className="mr-4"
                      src={item.icon}
                      alt={item.text}
                    />
                    <p>
                      <span
                        className="font-weight-bolder"
                        style={{ fontSize: "2rem" }}
                      >
                        {item.number}+
                      </span>
                      <br />
                      <span className="font-weight-bold">{item.text}</span>
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;