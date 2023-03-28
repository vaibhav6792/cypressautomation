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
