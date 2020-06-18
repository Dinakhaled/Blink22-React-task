import React from 'react';
import "./Input.scss";

const Input = ({type, placeholder}) => {
  return ( 
    <input className='input' type={type} placeholder={placeholder} />
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'Enter a text'
};
 
export default Input;