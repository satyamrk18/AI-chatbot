import React from "react";
import { Link } from "react-router-dom";
import Button from "./button.jsx";
const navigator = () => {
  return (
    <div className="navbar">
      <Link to="/history"><Button name="History"/></Link>
    </div>
  );
};

export default navigator;
