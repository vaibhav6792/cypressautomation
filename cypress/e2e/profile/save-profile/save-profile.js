import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
    selectUserProfileTab,
    assertUserProfileContent,
    populateProfileForm,
    saveUserProfile
} from './save-profile.po'

When('After login', () => {
    cy.initiateLogin();
});

When('User selects the edit profile tab', () => {
    selectUserProfileTab();
});

Then('User is able to view the contents of Edit Profile tab', () => {
    assertUserProfileContent();
})

Then('User fill in the fields of the profile Form', () => {
    populateProfileForm();
});

When('User submits the profile Form', () => {
    saveUserProfile();
});



