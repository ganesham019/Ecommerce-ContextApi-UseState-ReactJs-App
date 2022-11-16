import React from "react";
import { Form } from "react-bootstrap";

const Filterbar = () => {
  return (
    <div className="position-fixed px-md-5 mt-5 mx-auto">
      <div className=" mx-auto text-center p-0">
        <Form.Control type="text" placeholder="Search here..." />
      </div>
    </div>
  );
};

export default Filterbar;
