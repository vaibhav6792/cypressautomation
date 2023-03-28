import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
  assertInvalidCredentialsMessage,
  assertLandingPageUrl,
} from './login.po';

Given('User enters the home page URL in the browser', () => {
  cy.visitHomePage();
});

Then('User enters {string} credentials', (credentialType) => {
  cy.loadCredentials();
  cy.login(credentialType);
});

Then('Application displays incorrect credentials message', () => {
  assertInvalidCredentialsMessage();
});

Then('Application redirects to the landing page', () => {
  assertLandingPageUrl();
});
