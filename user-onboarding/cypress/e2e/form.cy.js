describe('testing form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('tests name', () => {
        cy.get('[name=username]').type('Adrian').should('have.value', 'Adrian')
    })

    it('tests email', () => {
        cy.get('[name=email]').type('adrianp1299@gmail.com').should('have.value', 'adrianp1299@gmail.com')
    })

    it('tests password', () => {
        cy.get('[name=password]').type('Password').should('have.value', 'Password')
    })

    it('tests checkbox', () => {
        cy.get('[name=tos]').check()
    })

    it('tests submit', () => {
        cy.get('[type=submit]').click()
    })

    it('tests form validation', () => {
        cy.get('[name=username]').type('Adr')
        cy.get('.errName').should('have.value', 'Username must be 4 characters long')
    })
})