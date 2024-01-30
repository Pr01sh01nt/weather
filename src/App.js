import {  useState } from 'react';
import './App.css';
import City from './components/City.jsx'
import CityWeather from './components/CityWeather';
import LoadingBar from 'react-top-loading-bar'
// import MaterialIcon, {colorPalette} from 'material-icons-react';


function App() {
  
  const [progress, setProgress] = useState(0);
  const  [city, setCity] = useState("");
  
  const [weatherData, setWeatherData] = useState({main:{}});
  const [cities, setCities] = useState([]);
  


  const fun = ()=>{
  //  console.log(city); 
   fetchCities(city);
  
  }

  const deletee = ()=>{
    // console.log("delete");
   
    setCities([]);
    
  }
  
  
  const fetchCities = ()=>{
    setProgress(20);
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_ID}`)
    .then((res)=>{
      setProgress(50);
      // console.log(res);
      return res.json();
    })
    .then((data)=>{
      setProgress(75);
      // console.log(data.cod !== '401', typeof(data.cod));
      // if(typeof(data.cod) === undefined)
      setCities(data);
      
      setProgress(100);
    })
    .catch((e)=>{
      // console.log(e, "setCities")
    setProgress(100);
  });   
  // console.log(city); 
  
}



const fetchLocation = (lat, lon)=>{

  setProgress(20);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_ID}`)
  .then((res)=>{
    // console.log(res);
    setProgress(40);
    return res.json();
  })
  .then((data)=>{
    setProgress(80);
    setWeatherData(data);
    // console.log((data));
    // console.log(data);
    setProgress(100);
  })
  .catch((e)=>{
    setWeatherData({main:{}});
    setProgress(100);
    // console.log(e,'setweather');
  });
  
}



  
return (
    <>
    <div className="App">

    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
      <br/>
   
      <h1> Welcome! </h1>
      <hr></hr>
      <div id = "inpt">
      <span>City Name:  </span>
      <input placeholder='Enter your city' onChange={(e)=>{setCity(e.target.value)}} onKeyDown={(e)=>{if(e.key==="Enter")fun() }}></input>
      <button onClick = {fun}>Search</button>
    
    </div>
    </div>
    <div className = "cities">
    {cities.length!==0?cities.map((val)=>{return <City cityData = {val} key = {val.lat} cordinateOfCity={fetchLocation}  del = {deletee}/>}):<CityWeather data = {weatherData}/>}
    
    
    </div>
    </>
  );
}

export default App;