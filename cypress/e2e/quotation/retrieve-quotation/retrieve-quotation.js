import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { retrieveQuotationUsingIdentificationNumber, retrieveQuotationWithoutIdentificationNumber, assertQuotationDetailPageUrl, assertRedirectionToDefaultPage } from "./retrieve-quotation.po";

When('After login', () => {
    cy.initiateLogin();
});

Then('User retrieve quotation using the Identification Number', () => {
    retrieveQuotationUsingIdentificationNumber();
});

Then('User navigates to Quotation Detail View Screen', () => {
    assertQuotationDetailPageUrl();
});

Then('User retrieve quotation without entering the Identification Number', () => {
    retrieveQuotationWithoutIdentificationNumber();
});

Then('User redirects back to the default page', () => {
    assertRedirectionToDefaultPage();
});