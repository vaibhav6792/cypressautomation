import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    selectUerProfileTab,
    viewUserProfileContent,
} from './view-profile.po'

When('After login', () => {
    cy.initiateLogin();
});

When('User selects the profile tab', () => {
    selectUerProfileTab();
});

Then('User is able to view the contents of Profile tab', () => {
    viewUserProfileContent();
})

