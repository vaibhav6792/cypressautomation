export function assertInvalidCredentialsMessage() {
  cy.get('#password ~ span > b').as('invalidCredentialsMessage');
  cy.get('@invalidCredentialsMessage', { timeout: 2000 }).should(
    'have.text',
    'Enter your Email address and password correct'
  );
}

export function assertLandingPageUrl() {
  cy.url().should('include', 'header.php');
}
