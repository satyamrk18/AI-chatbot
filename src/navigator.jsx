import React from "react";
import { Link } from "react-router-dom";
import Button from "./button.jsx";
const navigator = () => {
  return (
    <div>
        <Link to="/">Home</Link>
      <Link to="/history">history</Link>
    </div>
  );
};

export default navigator;
