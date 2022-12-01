import React from "react";

export default function Input({ type = "text", placeholder, name }) {
  return (
    <input
      className="ui-textfield"
      type={type}
      placeholder={placeholder}
      name={name}
    ></input>
  );
}
