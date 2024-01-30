import React from 'react'
import MaterialIcon from 'material-icons-react';


const CityWeather = ({data}) => {

 
  // console.log(data?.main, "daat");


  return (<>

    {data?.main?.temp !== undefined ? (<>

      <div id="two">
        <h1>{data?.name}</h1>
        <h1><MaterialIcon icon="device_thermostat" color="white" size="large" /> {(data?.main?.temp - 273.15).toFixed(2)} &deg;C  </h1>
        <div className='twoChild'>

        <div className="ss2">Feels Like: {(data?.main?.feels_like - 273.15).toFixed(2)} &deg;C</div>
        <div className="ss2">% Humidity:  {data?.main?.humidity}</div>
        <div className="ss2">Pressuer: {data?.main?.pressure}</div>
        <div className="ss2 s1">{data?.weather[0]?.main}</div>

        </div>

        <div id="three">
          <div className="four">Min: {(data?.main?.temp_min - 273.15).toFixed(2)}&deg;C
            <br />
            Max: {(data?.main?.temp_max - 273.15).toFixed(2)}&deg;C
          </div>
          <div className="foursChild"> <MaterialIcon icon="air" color="white" size="35" /> {(data?.wind?.speed).toFixed(2)}km/h</div>
        </div>
        Country: {data?.sys?.country}


      </div>
    </>) : (<></>)}
  </>
  )

}

export default CityWeather
