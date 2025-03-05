import React from 'react'
import WeatherForecast from '../../src/components/WeatherForecast'
import { FutureWeather } from '../../src/types'

describe('WeatherForecast Component', () => {
  const mockWeatherList: FutureWeather[] = [
    {
      date: '2023-04-01',
      week: 'Sat',
      temperature: '22°C',
      png: '/sunny.png'
    },
    {
      date: '2023-04-02',
      week: 'Sun',
      temperature: '20°C',
      png: '/cloudy.png'
    }
  ]

  beforeEach(() => {
    cy.mount(<WeatherForecast weatherList={mockWeatherList} />)
  })

  it('renders the correct number of weather items', () => {
    cy.get('[data-cy-root] > div > div').should('have.length', mockWeatherList.length)
  })

  it('displays correct information for each weather item', () => {
    mockWeatherList.forEach((weather, index) => {
      cy.get('[data-cy-root] > div > div').eq(index).within(() => {
        cy.get('div').first().should('have.text', weather.week)
        cy.get('div').eq(1).should('have.text', weather.date)
        cy.get('img').should('have.attr', 'src', weather.png)
        cy.get('div').last().should('have.text', weather.temperature)
      })
    })
  })

  it('has the correct layout styles', () => {
    cy.get('[data-cy-root] > div').should('have.css', 'display', 'flex')
    cy.get('[data-cy-root] > div').should('have.css', 'justify-content', 'center')
    cy.get('[data-cy-root] > div > div').first().should('have.css', 'flex-direction', 'column')
  })
})