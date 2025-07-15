import React from 'react';
import './button.css';
import { AIButton } from '@innovaccer/design-system';

const Button = ({ name }) => {
  return (
    <button className="btn">
      {name}
    </button>
    
  );
};

export default Button;
