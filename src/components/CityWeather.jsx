import React from 'react'

const CityWeather = (props) => {
  const data = props.weatherData;
  console.log(data.main, "daat");
      return (

        <>
      {data.main.temp!==undefined ? (<>
        
        <div id ="two">
        <h1>{data.name}</h1>
        <ul type = "none">
            <li>Temprature: {(data.main.temp-273.15).toFixed(2)} &deg;C</li>
            <li>Feels Like: {(data.main.feels_like-273.15).toFixed(2)} &deg;C</li>
            <li>Humidity: {data.main.humidity}</li>
            <li>Pressuer: {data.main.pressure}</li>
            <li>Temp Min: {(data.main.temp_min-273.15).toFixed(2)}&deg;C</li>
            <li>Temp Max: {(data.main.temp_max-273.15).toFixed(2)}&deg;C</li>
        </ul>
    </div>
      </>):(<></>)}
    </>
      )
  
}

export default CityWeather
