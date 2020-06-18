import React from 'react';
import "./Button.scss";

const Button = ({theme, icon}) => {
  return ( 
    <button className={`btn ${theme}`}>
      {icon && icon}
      done
    </button>
  );
}
 
export default Button;