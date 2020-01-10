function login() {
  cy.visit('http://localhost:3000')
  cy.get('[data-cy=loginform-username]')
    .type('root')
  cy.get('[data-cy=loginform-password]')
    .type('loremipsum')
  cy.get('[data-cy=loginform-submit]').click()
  cy.get('[data-cy=userinfo]')
}

describe('Blog ', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=loginform-header]')
  })

  it('can log in', function() {
    login()
  })

  it('can log in and log out', function() {
    login()
    cy.get('[data-cy=userinfo-logout]').click()
    cy.get('[data-cy=loginform-header]')
  })
})