import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
  assertTabsContents,
  assertTabsNavigation,
} from './landing.po';
When('After login', () => {
  cy.initiateLogin();
});

Then('The application shows correct email address', () => {
  // fetch valid email from credentials.json
  // compare it with the email address rendered in the page
  cy.get('@credentials').then((credentials) => {
    const { valid } = credentials;
    cy.get('.content h4').should('have.text', valid.email);
  })
});

Then('Logout button should be displayed', () => {
  cy.get('.button_to .btn.btn-danger').should('have.value', 'Log out');
});

Then('The application shows the correct list of tabs', () => {
  assertTabsContents();
});

Then('default tab should be Home', () => {
  assertTabsNavigation();
})