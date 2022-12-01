import React from "react";
import {render} from "react-dom";

export default function Navbar3(props){
  return (<>
    <div>Привет, {props.user.first_name} {props.user.last_name}</div>
    <p>У вас {props.alerts.length} уведомлений</p>
  </>);
}



