import { useEffect, useState } from 'react'
import { fetchWeatherData } from '../services/weatherService'
import { FutureWeather, WeatherData } from '../types'
import CityCard from './CityCard'

function CityCards({ onClickCity }: { onClickCity: (value: string) => void }) {
    const [citiesWeatherData, setCitiesWeatherData] = useState<Awaited<{
        currentWeather: WeatherData;
        futureWeatherList: FutureWeather[]
    }>[]>([])
  const cities = (process.env.REACT_APP_DEFAULT_CITY_CARDS || '').split(',').map(city => city.trim());

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      try {
        const fetchedCitiesWeather = await Promise.all(cities.map(city => fetchWeatherData(city)))
        setCitiesWeatherData(fetchedCitiesWeather)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    };

    fetchCitiesWeather();
  }, []);

  return (
    <div 
    className='cities_container'
    style={{
      marginTop: "1.5rem",
      // display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      columnGap: ".5rem",
      rowGap: ".5rem"
    }}
    >
        {citiesWeatherData.map(({currentWeather: {gradientBg, city, png, temperatureRange}}) => (
            <CityCard key={city}
                      gradientBg={gradientBg}
                      city={city}
                      png={png}
                      temperatureRange={temperatureRange}
                      onClick={() => onClickCity(city)} />
            ))}
    </div>
  )
}

export default CityCards
