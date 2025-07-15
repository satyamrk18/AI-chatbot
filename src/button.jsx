import React from 'react';
import './button.css';


const Button = ({ name, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
    
  );
};

export default Button;
