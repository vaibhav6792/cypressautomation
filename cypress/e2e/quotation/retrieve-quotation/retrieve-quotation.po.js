import { selectQuotationTab, populateForm, saveQuotation, assertSuccessScreen } from '../request-quotation/request-quotation.po';

export function retrieveQuotationUsingIdentificationNumber() {
    selectQuotationTab();
    populateForm();
    saveQuotation();
    assertSuccessScreen();

    cy.get('@quotationCode').then((code) => {
        cy.log('value of code is: ', code);
        cy.get('#ui-id-3').click();
        cy.get('#tabs-3 form[action="retrieve_quotation.php"] [name="id"]').type(code);
        cy.get('#getquote').click();
    })
}

export function retrieveQuotationWithoutIdentificationNumber() {
    selectQuotationTab();
    populateForm();
    saveQuotation();
    assertSuccessScreen();
    cy.get('#ui-id-3').click();
    cy.get('#getquote').click();
}

export function retrieveQuotationSuccessScreen() {
    selectQuotationTab();
    populateForm();
    saveQuotation();
    assertSuccessScreen();
}

export function assertQuotationDetailPageUrl() {
    cy.url().should('include', 'retrieve_quotation.php');
    cy.get('body > b > font').should('have.text', 'Retrieve Quotation');
}

export function assertRedirectionToDefaultPage() {
    cy.url().should('include', 'header.php');
}
