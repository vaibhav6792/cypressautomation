import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    logout,
    assertHomePageUrl
} from './logout.po';
When('After login', () => {
    cy.initiateLogin();
});

Then('User click on logout button', () => {
    logout();
})

Then('User redirects back to login page', () => {
    assertHomePageUrl();
})