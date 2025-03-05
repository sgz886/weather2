export interface WeatherData {
  date: string
  city: string
  currentTemperature: string
  temperatureRange: string
  png: string
  bgPng: string
  gradientBg: string
  vars: {
    windSpeed: string
    avgTemperature: string
    avgHumidity: string
    pm2_5: string
  }
}

export interface FutureWeather {
  png: string
  week: string
  date: string
  temperature: string
}

export interface WeatherApiResponse {
  location: {
    name: string
  }
  current: {
    temp_c: number
    is_day: number
    condition: {
      text: string
      code: number
    }
    wind_kph: number
    humidity: number
    air_quality: {
      pm2_5: number
    }
  }
  forecast: {
    forecastday: ForecastDay[]
  }
}

export interface ForecastDay {
  day: {
    condition: {
      text: string
    }
    mintemp_c: number
    maxtemp_c: number
    avghumidity: number
    maxwind_kph: number
    avgtemp_c: number
    avgvis_km: number
  }
  hour: {
    [key: number]: {
      temp_c: number
      time: string
    }
  }
}

export interface FutureWeather {
  png: string
  week: string
  date: string
  temperature: string
}
