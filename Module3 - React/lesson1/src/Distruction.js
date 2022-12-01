import React from "react"; 

export default function Button4(props){
  const {className, children} = props;
  return <input className={className}>{children}</input>;
}

