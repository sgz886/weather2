import React from 'react'
import WeatherDetails from '../../src/components/WeatherDetails'

describe('<WeatherDetails />', () => {
  const mockVars = {
    windSpeed: '10km/h',
    avgTemperature: '25°',
    avgHumidity: '60%',
    pm2_5: '15μg/m³'
  }

  beforeEach(() => {
    cy.mount(<WeatherDetails vars={mockVars} />)
  })

  it('renders the component', () => {
    cy.get('[data-cy-root]').should('exist')
  })

  it('displays all weather variables', () => {
    cy.contains('10km/h').should('be.visible')
    cy.contains('25°').should('be.visible')
    cy.contains('60%').should('be.visible')
    cy.contains('15μg/m³').should('be.visible')
  })

  it('renders images for each weather variable', () => {
    cy.get('img[src="/windSpeed.svg"]').should('be.visible')
    cy.get('img[src="/avgTemperature.svg"]').should('be.visible')
    cy.get('img[src="/avgHumidity.svg"]').should('be.visible')
    cy.get('img[src="/pm2_5.svg"]').should('be.visible')
  })

  it('has correct layout and styling', () => {
    cy.get('[data-cy-root] > div').should('have.css', 'display', 'flex')
    cy.get('[data-cy-root] > div').should('have.css', 'justify-content', 'space-between')
    cy.get('[data-cy-root] > div').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('[data-cy-root] > div').should('have.css', 'border-radius', '16px')
  })

  it('renders correct number of weather variable items', () => {
    cy.get('[data-cy-root] > div > div').should('have.length', 4)
  })
})