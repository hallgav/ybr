import React from "react";

const Input = props => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
          className="form-control"
          type="text"
          name={props.name}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
      />
    </>
  );
};

export default Input;
