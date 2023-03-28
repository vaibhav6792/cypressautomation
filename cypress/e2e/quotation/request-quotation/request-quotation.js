import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    selectQuotationTab,
    assertRequestQuoatationContent,
    populateForm,
    saveQuotation,
    assertSuccessScreen,
    resetFormQuotation,
    clearFormFeilds,
} from './request-quotation.po'
When('After login', () => {
    cy.initiateLogin();
});

When('User selects the Request Quotation Tab', () => {
    selectQuotationTab();
});

Then('User is able to view the contents of Request Quotation tab', () => {
    assertRequestQuoatationContent();
});

When('User fill in the fields of the Request Quotation Form', () => {
    populateForm();
});

When('User submits the Request Quotation Form', () => {
    saveQuotation();
});

Then('Application redirects to Quotation confirmation screen', () => {
    assertSuccessScreen();
});

When('User resets the Request Quotation Form', () => {
    resetFormQuotation();
});

Then('The fields of Request Quotation Form are cleared', () => {
    clearFormFeilds();
})