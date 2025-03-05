import React from 'react'
import { mount } from 'cypress/react'
import WeatherInfo from '../../src/components/WeatherInfo'
import type { WeatherData } from '../../src/types';


describe('WeatherInfo Component', () => {
  const mockWeatherData: WeatherData = {
    city: 'Melbourne',
    currentTemperature: '25°C',
    temperatureRange: '20°C - 30°C',
    png: '/sunny.png',
    date: new Date().toISOString(),
    bgPng: 'background.png',
    gradientBg: 'linear-gradient(...)',
    vars: {
      windSpeed: '10 km/h',
      avgTemperature: '20°C',
      avgHumidity: '60%',
      pm2_5: '15 µg/m³'
    }
  }

  beforeEach(() => {
    cy.viewport(800, 600)
    cy.document().then((doc) => {
      doc.body.style.background = 'black';
    })
    mount(

    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <WeatherInfo weather={mockWeatherData} />
    </div>
  )
  })

  it('displays the city name', () => {
    cy.contains(mockWeatherData.city).should('be.visible')
  })

  it('displays the current temperature', () => {
    cy.contains(mockWeatherData.currentTemperature).should('be.visible')
  })

  it('displays the temperature range', () => {
    cy.contains(mockWeatherData.temperatureRange).should('be.visible')
  })

  it('displays the weather icon', () => {
    cy.get('img')
      .should('be.visible')
      .and('have.attr', 'src', mockWeatherData.png)
      .and('have.attr', 'alt', 'Weather icon')
  })
})