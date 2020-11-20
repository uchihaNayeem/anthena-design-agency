import React from 'react';
import { Col, Row } from "reactstrap";

const Email = () => {
  return (
    <>
    <Col xs={11} md={7} className="mt-5">
      <h2>Get your design right, right now</h2>
      <h6 className="text-secondary mt-3">
        Be the first know our latest offers and updates!
      </h6>
    </Col>
    <Col
      xs={10}
      md={6}
      className="my-4 d-flex justify-content-between border py-2"
    >
      <input
        type="text"
        placeholder="Enter your email address"
        className=""
        style={{ border: "none" }}
      />
      <button className="customButton" style={{ borderRadius: "5px" }}>
        Get Started
      </button>
    </Col>
  </>
  );
};

export default Email;