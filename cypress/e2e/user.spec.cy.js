import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorLists = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    wrongCredentialAlert: '[role="alert"]',
    dashboardGrid: '.orangehrm-dashboard-grid',
    sectionTitle: '.oxd-topbar-header-breadcrumb-module',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorLists.usernameField).type(userData.userSuccsess.username)
    cy.get(selectorLists.passwordField).type(userData.userSuccsess.password)
    cy.get(selectorLists.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorLists.sectionTitle).should('contain', 'Dashboard')
    cy.get(selectorLists.dashboardGrid)
    cy.get(selectorLists.myInfoButton).click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorLists.usernameField).type(userData.userFail.username)
    cy.get(selectorLists.passwordField).type(userData.userFail.password)
    cy.get(selectorLists.loginButton).click()
    cy.get(selectorLists.wrongCredentialAlert).should('contain', 'Invalid credentials')
  })
})
