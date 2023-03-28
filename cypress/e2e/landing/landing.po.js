
export function assertTabsContents() {
    cy.get('#tabs').should('exist');
    cy.get('.ui-tabs-nav .ui-state-default > a').should('have.length', 5);
}

export function assertTabsNavigation() {
    cy.get('.ui-tabs-nav li.ui-tabs-active > a').should('have.text', 'Home');

}