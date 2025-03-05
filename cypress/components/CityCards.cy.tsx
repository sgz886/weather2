import React from 'react'
import CityCards from '../../src/components/CityCards'
import * as weatherService from '../../src/services/weatherService'

describe('<CityCards />', () => {
  it('renders city cards with weather data', () => {
    const mockSetSearchValue = cy.stub().as('setSearchValue')
    const mockWeatherData = [
      { currentWeather: { city: 'Melbourne', temperature: '25°C', png: 'Melbourne.png', gradientBg: 'linear-gradient(...)' } },
      { currentWeather: { city: 'Sydney', temperature: '20°C', png: 'Sydney.png', gradientBg: 'linear-gradient(...)' } },
      { currentWeather: { city: 'New York', temperature: '15°C', png: 'newyork.png', gradientBg: 'linear-gradient(...)' } },
      { currentWeather: { city: 'London', temperature: '10°C', png: 'london.png', gradientBg: 'linear-gradient(...)' } }
    ]

    cy.stub(weatherService, 'fetchWeatherData').returns(Promise.resolve(mockWeatherData[0]))

    cy.mount(<CityCards onClickCity={mockSetSearchValue} />)

    // Wait for the component to fetch and render the weather data
    cy.wait(1000)

    // Check if all city cards are rendered
    cy.get('div[style*="position: relative"]').should('have.length', 4)

    // Check if city names are displayed
    cy.contains('Melbourne').should('be.visible')
    cy.contains('Sydney').should('be.visible')
    cy.contains('New York').should('be.visible')
    cy.contains('London').should('be.visible')

    // Check if temperatures are displayed
    // cy.contains('25°C').should('be.visible')
    // cy.contains('20°C').should('be.visible')
    // cy.contains('15°C').should('be.visible')
    // cy.contains('10°C').should('be.visible')

    // Check if weather icons are rendered
    cy.get('img[alt*="weather"]').should('have.length', 4)
  })
})