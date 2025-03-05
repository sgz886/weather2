import type { WeatherData } from '../types'

function WeatherDetails({ vars }: { vars: WeatherData['vars'] }) {
  return (
    <div 
    className='weather_details_container'
    style={{
      // display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "1rem",
      background: "white",
      padding: "1.5rem"
    }}
    >
      {Object.entries(vars).map(([key, value]) => (
        <div 
        key={key} 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "0.5rem",
          fontSize: "0.9rem"
        }}
        >
          <img src={`/${key}.svg`} alt={key} />
          {value}
        </div>
      ))}
    </div>
  )
}

export default WeatherDetails
