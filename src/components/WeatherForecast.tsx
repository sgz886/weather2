import type { FutureWeather } from '../types'

function WeatherForecast({ weatherList }: { weatherList: FutureWeather[] }) {
  return (
    <div 
    className='forcast_container'
    style={{
      // display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "2rem",
      paddingBottom: "2rem",
      whiteSpace: "nowrap"
    }}
    >
      {weatherList.map(weather => (
        <div 
        key={weather.date} 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: "1",
          rowGap: "0.5rem"
        }}
        >
          <div 
          style={{
            fontSize: "1.8rem",
            fontWeight: 700
          }}
          >
            {weather.week}
          </div>
          <div>
            {weather.date}
          </div>
          <img 
          style={{
            width: "10rem"
          }}
          src={weather.png} 
          alt="Weather icon" 
          />
          <div>
            {weather.temperature}
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeatherForecast
