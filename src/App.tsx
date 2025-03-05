import { useCallback, useEffect, useState } from 'react'
import CityCards from './components/CityCards'
import SearchBar from './components/SearchBar'
import WeatherDetails from './components/WeatherDetails'
import WeatherForecast from './components/WeatherForecast'
import WeatherInfo from './components/WeatherInfo'
import { fetchWeatherData } from './services/weatherService'
import type { FutureWeather, WeatherData } from './types'

import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState<string>(process.env.REACT_APP_DEFAULT_CITY || 'Melbourne')
  const [currentWeather, setCurrentWeather] = useState<WeatherData>()
  const [futureWeatherList, setFutureWeatherList] = useState<FutureWeather[]>([])

  const handleSearch = useCallback(async (query: string) => {
    if (!query) {
      return
    }

    try {
      const { currentWeather, futureWeatherList } = await fetchWeatherData(query)
      setCurrentWeather(currentWeather)
      setFutureWeatherList(futureWeatherList)
    }
    catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }, [])

  useEffect(() => {
    handleSearch(searchValue)
  }, [searchValue])

  return (
    <div 
    className="bg-container"
    style={{
      display: "flex",
      height: "100%",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      overflow: "auto"
    }}
    >
      <div 
      className='display_container'
      style={{
        width: "70%",
        columnGap: "4rem",
        borderRadius: "2rem",
        backgroundColor: "rgb(243, 243, 243)",
        padding: "1.5rem"
      }}
      >
        {currentWeather && (
          <div 
          className='current_weather_container'
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            // width: "100%",
            borderRadius: "2rem",
            padding: "1rem",
            background: currentWeather.gradientBg
          }}
          >
            <img 
            src={currentWeather.bgPng} 
            alt="Weather background" 
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "18rem"
            }}
            />
            <div 
            style={{
              color: "white"
            }}
            >
              {currentWeather.date}
            </div>
            <WeatherInfo weather={currentWeather} />
            <WeatherDetails vars={currentWeather.vars} />
          </div>
        )}
        <div
        style={{
          flex: 1
        }}
        >
          <WeatherForecast weatherList={futureWeatherList} />
          <SearchBar setSearchValue={setSearchValue} />
          <CityCards onClickCity={setSearchValue} />
        </div>
      </div>
    </div>
  )
}

export default App
