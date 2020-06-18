import React from 'react';
import "./Input.scss";

/*
  Input component for general used
  @props: {type, placeholder}
*/

const Input = ({type, placeholder}) => {
  return ( 
    <input className='input' type={type} placeholder={placeholder} />
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'message'
};
 
export default Input;