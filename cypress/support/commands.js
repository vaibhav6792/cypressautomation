// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('/index.php');
});

Cypress.Commands.add('visitLandingPage', () => {
  cy.visit('/header.php');
})

Cypress.Commands.add('loadCredentials', () => {
  cy.fixture('credentials').as('credentials');
});

Cypress.Commands.add('login', (credentialType) => {
  cy.get('@credentials').then((credentials) => {
    const { valid, invalid } = credentials;
    const { email, password } = credentialType === 'valid' ? valid : invalid;
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login-form input[type="submit"]').click();
  });
});

Cypress.Commands.add('initiateLogin', () => {
  cy.visitHomePage();
  cy.loadCredentials();
  cy.login('valid');
});

Cypress.on('uncaught:exception', () => {
  return false;
});
