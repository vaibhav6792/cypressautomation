export function logout() {
    cy.get('.button_to .btn.btn-danger').click();
}

export function assertHomePageUrl() {
    cy.url().should('include', 'index.php');
}