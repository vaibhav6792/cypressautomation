export function assertHeaderContents() {
  cy.get('#site-name').then((siteName) => {
    const wrapped = cy.wrap(siteName);
    wrapped.should('be.visible');
    wrapped.should('have.text', 'Demo Site');
  });
  cy.get('.navbar').should('exist');
}

export function assertSideNavigation() {
  cy.get('.navbar').should('exist');
  cy.get('#navbar-brand-centered .navbar-nav .dropdown > a').should('have.length', 9);
}

export function assertRegisterAndLoginForm() {
  cy.get('.header').should('exist');
  cy.get('.content').should('exist');
  cy.get('#login-form').should('exist');
}
