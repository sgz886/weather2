import dayjs from 'dayjs'
import { weatherBgMap, weatherGradient, weatherIconMap } from '../constants/weatherMaps'
import type { ForecastDay, FutureWeather, WeatherApiResponse, WeatherData } from '../types'

const {round} = Math
const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json`
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export async function fetchWeatherData(city: string): Promise<{ currentWeather: WeatherData, futureWeatherList: FutureWeather[] }> {
  if (!city) {
    throw new Error('Query is required')
  }

  const response = await fetch(`${WEATHER_URL}?key=${API_KEY}&q=${city}&days=3&aqi=yes`)
  const data: WeatherApiResponse = await response.json()

  const current = data.forecast.forecastday[0]
  const conditionText = current.day.condition.text.trim()

  const currentWeather: WeatherData = {
    date: dayjs().format('DD MMMM,  dddd HH:mm'),
    city: data.location.name,
    currentTemperature: `${round(current.hour[dayjs().hour()].temp_c)}°`,
    temperatureRange: `${round(current.day.mintemp_c)} ~ ${round(current.day.maxtemp_c)}°`,
    png: weatherIconMap[conditionText] || '/sunny.png',
    bgPng: weatherBgMap[conditionText] || '/sunny_bg.png',
    gradientBg: weatherGradient[conditionText] || 'linear-gradient(to bottom, rgb(131, 154, 239) 30%, rgb(95, 76, 219))',
    vars: {
      avgHumidity: `${current.day.avghumidity}`,
      windSpeed: `${round(current.day.maxwind_kph)}km/h`,
      avgTemperature: `${round(current.day.avgtemp_c)}°`,
      pm2_5: `${round(data.current.air_quality.pm2_5)}μg/m³`,
    },
  }

  const futureWeatherList: FutureWeather[] = data.forecast.forecastday.slice(1).map((i: ForecastDay) => ({
    png: weatherIconMap[i.day.condition.text] || '/sunny.png',
    week: dayjs(i.hour[12].time).format('dddd'),
    date: dayjs(i.hour[12].time).format('DD MMMM'),
    temperature: `${round(i.day.mintemp_c)} ~ ${round(i.day.maxtemp_c)}°`,
  }))

  return { currentWeather, futureWeatherList }
}
