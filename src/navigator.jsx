import React from "react";
import { Link } from "react-router-dom";
import Button from "./button.jsx";
const navigator = () => {
  return (
    <div style={{width:"100%", textAlign:"center"}}>
      <Link to="/history"><Button name="History"/></Link>
    </div>
  );
};

export default navigator;
