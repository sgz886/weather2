import type { WeatherData } from '../types'

function WeatherInfo({ weather }: { weather: WeatherData }) {
  return (
    <div 
    style={{
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      height: "0",
      width: "9rem", 
      flex: "1",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      rowGap: "1.5rem"
    }}
    >
      <div 
      style={{
        fontSize: "1.8rem",
        color: "white"
      }}
      >
        {weather.city}
      </div>
      <div 
      style={{
        textAlign: "center"
      }}
      >
        <div
          style={{ 
            background: "linear-gradient(to bottom, white, rgb(208, 222, 248))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "5rem",
            fontWeight: "bold"
          }}
        >
          {weather.currentTemperature}
        </div>
        <div 
        style={{
          color: "white"
        }}
        >
          {weather.temperatureRange}
        </div>
      </div>
      <img 
      style={{
        width: "100%"
      }}
      src={weather.png} 
      alt="Weather icon" 
      />
    </div>
  )
}

export default WeatherInfo
