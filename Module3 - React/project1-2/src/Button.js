import React from "react";

export default function Button(props) {
  const { type, disabled } = props;
  return (
    <button className="ui-button" type={type} disabled={disabled}>
      {props.children}
    </button>
  );
}
