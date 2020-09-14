import React, { useState } from 'react';

const api = {
  key: '665d0e289d7b269b701ab9d561c8f030',
  endPoint: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = event => {
    if( event.key === 'Enter') {
      fetch(`${api.endPoint}weather?q=${query}&units=imperial&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]; // Get us the day out of the days
    let date = d.getDate(); // gives us our date
    let month= months[d.getMonth()]; // 0 - 11 months, gives us the month of our date
    let year = d.getFullYear(); // to get us The current Full year

    return `${day} ${date} ${month} ${year}` //resturns day-date-month-year EX: Mon 12 september 2020
  }

  return (
    <div className={
      (typeof weather.main != "undefined") ? ((weather.main.temp > 70)  ? 'App warm'  : 'App') : 'App'}>

      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

          {(typeof weather.main != "undefined") ? (
                    <div>
                    <div className="location-box">
                      <div className="location"> {weather.name}, {weather.sys.country} </div>
                      <div className="date">{dateBuilder(new Date())}</div>  
                    </div>  
          
                    <div className="weather-box">
          
                      <div className="temp">
                        {Math.round(weather.main.temp)}°F
                      </div>
                      <div className="weather">
                        {weather.weather[0].main}
                      </div>
          
                    </div>
                  </div> 
          ) : ('')}  

      </main>
    </div>
  );
}

export default App;
