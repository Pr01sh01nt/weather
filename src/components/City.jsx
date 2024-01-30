import React from 'react'
import  './city.css'

const city = (props) => {

  const fun = ()=>{
    props.cordinateOfCity(lat,lon);
    props.del();
  }
  
  const {name, country, lat, lon} = props.cityData;
  return (
    <div id ="one" onClick = {fun}>
     
      <ul type="none">
        <li>Name: {name}</li>
        <li>Country: {country}</li>
        <li>Latitude: {lat}</li>
        <li>Longitude: {lon}</li>
      </ul>
      
    
    </div>
  )
}

export default city
