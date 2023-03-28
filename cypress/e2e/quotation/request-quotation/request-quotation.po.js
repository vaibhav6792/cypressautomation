export function selectQuotationTab() {
    cy.get('#menu #newquote').click();
}

export function assertRequestQuoatationContent() {
    cy.get('#tabs-2 > h2').should('have.text', 'Request a quotation');
}

export function populateForm() {
    cy.get('#quotation_breakdowncover').select('At home');
    cy.get('#quotation_windscreenrepair_f').click();
    cy.get('#quotation_incidents').type('Accident');
    cy.get('#quotation_vehicle_attributes_registration').type('test');
    cy.get('#quotation_vehicle_attributes_mileage').type('20');
    cy.get('#quotation_vehicle_attributes_value').type('10');
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Locked Garage');
}

export function saveQuotation() {
    cy.get('#new_quotation .btn.btn-success').click();
}

export function assertSuccessScreen() {
    cy.url().should('include', 'new_quotation.php');
    cy.get(':nth-child(3)').then((node) => {
        return node[0].nextSibling.textContent;
    }).as('quotationCode');

    cy.visitLandingPage();
}

export function resetFormQuotation() {
    cy.get('#resetquote').click();
}

export function clearFormFeilds() {
    cy.get('#quotation_breakdowncover').select('Roadside');
    cy.get('#quotation_windscreenrepair_f').click();
}