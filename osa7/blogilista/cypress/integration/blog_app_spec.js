function login() {
  cy.get('[data-cy=loginform-username]')
    .type('cypress')
  cy.get('[data-cy=loginform-password]')
    .type('makemyday')
  cy.get('[data-cy=loginform-submit]').click()
  cy.get('[data-cy=userinfo]')
}

function addBlog() {
  cy.get('[data-cy=togglable-show]').click()
  cy.get('[data-cy=blogcreation-header]')
  cy.get('[data-cy=blogcreation-title]')
    .type('Fundamentals of Cypress')
  cy.get('[data-cy=blogcreation-author]')
    .type('Cypress')
  cy.get('[data-cy=blogcreation-url]')
    .type('http://cypress.io')
  cy.get('[data-cy=blogcreation-submit]').click()
  cy.contains('Fundamentals of Cypress')
}

describe('Blog ', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Cypress user',
      username: 'cypress',
      password: 'makemyday'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.get('[data-cy=loginform-header]')
  })

  it('can log in', function () {
    login()
  })

  it('can log in and log out', function () {
    login()
    cy.get('[data-cy=userinfo-logout]').click()
    cy.get('[data-cy=loginform-header]')
  })

  it('can add a blog', function () {
    login()
    addBlog()
  })

  it('number of added blogs increases when blog is added', function () {
    login()
    addBlog()
    cy.visit('http://localhost:3000/users')
    cy.get('[data-cy=users-user]').then((user) => {
      expect(user.text()).to.eq('Cypress user')
      cy.get('[data-cy=users-blogcount]').then((blogcount) => {
        expect(blogcount.text()).to.eq('1')
      })
    })
  })
})