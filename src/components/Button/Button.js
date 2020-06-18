import React from 'react';
import "./Button.scss";

/*
  Button component for general used
  @props: {theme, icon, text}
*/

const Button = ({theme, icon, text}) => {
  return ( 
    <button className={`btn ${theme}`}>
      {icon && icon}
      {text}
    </button>
  );
}
 
export default Button;