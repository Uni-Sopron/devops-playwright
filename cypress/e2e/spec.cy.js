describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
  })
})

it('demo', function () {
  cy.visit('http://localhost:5173')
  cy.get('#root a').click()
  cy.get('#root input').click()
  cy.get('#root input').type('valami{enter}')
  cy.get('#root input').type('valami2{enter}')
  cy.get('[data-testid="todo-1"]').click()

  cy.contains('valami2').should('not.exist')
})

it('demo2', function () {
  cy.visit('localhost:5173')
  cy.get('#root a').click()
  cy.get('#root input').click()
  cy.get('#root input').click()
  cy.get('#root input').type('asd{enter}')
  cy.get('#root input').type('asd2{enter}')
  cy.get('[data-testid="todo-1"]').click()
})
