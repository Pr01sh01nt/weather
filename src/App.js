import { useEffect, useState } from 'react';
import './App.css';
import City from './components/City.jsx'
import CityWeather from './components/CityWeather';
import LoadingBar from 'react-top-loading-bar'


function App() {
  
  const [progress, setProgress] = useState(0)
  const [weatherData, setWeatherData] = useState({main:{}});
  const [coordinates, setCoordinates] = useState({lat:20, lon:20  });
  const [cities, setCities] = useState([]);
  let  [city, setCity] = useState("nodata");
  let [flag , setFlag] = useState(false);


  const fun = ()=>{
   console.log(city); 
   setCity(city);
   setFlag(false);
  }

  const cordinateOfCity = (lat, lon)=>{
      console.log(lat, lon);
      setCoordinates({lat, lon});
      console.log(coordinates);
   
  }
  
  const deletee = ()=>{
   console.log("delete");
   setWeatherData({main:{}});
   setCities(cities.filter(val=>false));
   setFlag(true);  
}

  useEffect(()=>{
    setProgress(20);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_ID}`)
      .then((res)=>{
        setProgress(50);
        console.log(res);
        return res.json();
      })
      .then((data)=>{
        setProgress(75);
        console.log(data);
        if(data.cod !== '400')
        setCities(data);
        setProgress(100);
        
      })
      .catch((e)=>{console.log(e, "setCities")
      setProgress(100);
    });
      console.log(city); 
  }, [city]);


  useEffect(()=>{
    setProgress(20);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_API_ID}`)
    .then((res)=>{
      console.log(res);
      setProgress(40);
      return res.json();
    })
    .then((data)=>{
      setProgress(80);
      setWeatherData(data);
      console.log((data));
      console.log(data);
      setProgress(100);
    })
    .catch((e)=>{
      setWeatherData({main:{}});
      setProgress(100);
      console.log(e,'setweather');
    })
  },[coordinates]);


  
  return (
    <>
    <div className="App">

    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     
      <br />

      <h1> Welcome! </h1>
     <hr></hr>
     <div id = "inpt">
    <span>City Name:  </span>
     <input placeholder='Enter your city' onChange={(e)=>{city = (e.target.value)}} onKeyDown={(e)=>{if(e.key=="Enter")fun() }}></input>
     <button onClick = {fun}>Search</button>
    
    </div>
    </div>
    <div className = "cities">
    {!flag && cities.length!=0?cities.map((val)=>{return <City cityData = {val} key = {val.lat} cordinateOfCity={cordinateOfCity}  del = {deletee}/>}):<></>}
    {flag ? <CityWeather weatherData = {weatherData}/> : <></>}
    
    </div>
    </>
  );
}

export default App;



