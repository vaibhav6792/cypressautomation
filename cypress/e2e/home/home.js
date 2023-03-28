import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
  assertHeaderContents,
  assertRegisterAndLoginForm,
  assertSideNavigation,
} from './home.po';

Given('User enters the home page URL in the browser', () => {
  cy.visitHomePage();
});

Then('User is able to view the contents of header', () => {
  assertHeaderContents();
});

Then('User is able to view the contents of side navigation', () => {
  assertSideNavigation();
});

Then('User is able to view Register button and login form', () => {
  assertRegisterAndLoginForm();
});
