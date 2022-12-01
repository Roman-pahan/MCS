import React from "react";

export default function Link(props) {
  const href = props.href;
  return (
    <a className="ui-link" href={href}>
      {props.children}
    </a>
  );
}
