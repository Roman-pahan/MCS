import React from "react";


  function Navbar4(props){
    return <div className="navbar">{props.children}</div>;
  } 

  function Slogan(props){
    return <h1 className="banner">{props.children}</h1>;
  }
  
  const element12 = <Navbar4>
    <Slogan>Kanye for President!</Slogan>
    <div>Black lives matter!</div>
    <p>Make America great again!</p>
  </Navbar4>;
 


  export default element12;