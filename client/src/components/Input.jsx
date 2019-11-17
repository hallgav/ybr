import React from "react";
import './Input.css'

const Input = props => {
  return (
    <div className="input-component">
      <label htmlFor={props.id}>{props.label}</label>
      <input
          className="form-control"
          type={props.type ? props.type :"text"}
          name={props.name}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
      />
    </div>
  );
};

export default Input;
