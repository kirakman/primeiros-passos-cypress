import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorLists = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    wrongCredentialAlert: '[role="alert"]',
    dashboardGrid: '.orangehrm-dashboard-grid',
    sectionTitle: '.oxd-topbar-header-breadcrumb-module'
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorLists.usernameField).type(userData.userSuccsess.username)
    cy.get(selectorLists.passwordField).type(userData.userSuccsess.password)
    cy.get(selectorLists.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorLists.sectionTitle).should('contain', 'Dashboard')
    cy.get(selectorLists.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorLists.usernameField).type(userData.userFail.username)
    cy.get(selectorLists.passwordField).type(userData.userFail.password)
    cy.get(selectorLists.loginButton).click()
    cy.get(selectorLists.wrongCredentialAlert).should('contain', 'Invalid credentials')
  })
})
