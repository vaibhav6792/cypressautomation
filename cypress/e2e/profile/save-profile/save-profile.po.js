export function selectUserProfileTab() {
    cy.get('#menu #editprofile').click();
}

export function assertUserProfileContent() {
    cy.get('#tabs-5 > h1').should('have.text', 'Editing user profile');
}

export function populateProfileForm() {
    cy.get('#user_title').select('Mr');
    cy.get('#user_surname').type('Sharma');
    cy.get('#user_firstname').type('Vaibhav');
    cy.get('#user_phone').type('9999999999');
    cy.get('#user_dateofbirth_1i').select('1992');
    cy.get('#user_dateofbirth_2i').select('July').should('have.value', '7');
    cy.get('#user_dateofbirth_3i').select('6');
    cy.get('#user_licencetype_t').click();
    cy.get('#user_licenceperiod').select('3');
    cy.get('#user_occupation_id').select('Engineer');
    cy.get('#user_address_attributes_street').type('Test');
    cy.get('#user_address_attributes_city').type('Delhi');
    cy.get('#user_address_attributes_county').type('India');
    cy.get('#user_address_attributes_postcode').type('111111');
}

export function saveUserProfile() {
    cy.get('#edit_user_ > .actions > .btn').click();
}

