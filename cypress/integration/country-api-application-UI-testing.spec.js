/// <reference types="cypress" />

context('Cypress Testing', () => {
    beforeEach(() => {
      cy.visit('localhost:4200')})
      
      describe('Integration Testing - Open Page, type values, check response', () => {
        it('Type Valid code, check response', () => {
            cy.get('.searchBoxInput').type('GB')
            cy.get('.btnSearch').click()
            cy.get('div').should('contain', 'Country Name: United Kingdom')})
          it('type in-valid code, check response', () => {
            cy.get('.searchBoxInput').type('123')
            cy.get('.btnSearch').click()
            cy.get('div').should('contain', 'Please enter a valid ISO Code')})
          })
        })
