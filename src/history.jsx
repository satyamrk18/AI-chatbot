import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import Button from "./button.jsx"
const history = () => {
  return (
    <div>
        <h1>History</h1>
        <Link to="/"><Button name="Home"/></Link>
    </div>
  );
};

export default history;
