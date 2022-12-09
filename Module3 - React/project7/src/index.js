import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./styles.css";

function App() {
  const [marker,setMarker]=useState()
  mapboxgl.accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    })  
    
    setMarker(new mapboxgl.Marker().setLngLat([37.6173, 55.7558]).addTo(map))
  }, [])


  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };



  function ChooseEl(e){
    
    // return Object.keys(stores).forEach(element => {
    //   if(element===e.target.value){
        
    //     return setMarker(marker.setLngLat(stores[element]))}}
      
    // )

    return marker.setLngLat(stores[e.target.value])
  }
    
    console.log(marker)

  return (
    <> 
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={ChooseEl}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
