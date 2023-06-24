import React from 'react'
import  './city.css'

const city = (props) => {

  const fun = ()=>{
    props.cordinateOfCity(cd.lat,cd.lon);
    props.del();
  }
  
  const cd = props.cityData;
  return (
    <div id ="one" onClick = {fun}>
     
      <ul type="none">
        <li>Name: {cd.name}</li>
        <li>Country: {cd.country}</li>
        <li>Latitude: {cd.lat}</li>
        <li>Longitude: {cd.lon}</li>
      </ul>
      
    
    </div>
  )
}

export default city
