export function selectUerProfileTab() {
    cy.get('#ui-id-4').click();
}

export function viewUserProfileContent() {
    const fields = [
        {
            id: 'showtitle',
            content: 'Title:',
            hasStrongElement: true
        },
        {
            id: 'showfirstname',
            content: 'Firstname:',
            hasStrongElement: true
        },
        {
            id: 'showsurname',
            content: 'Surname:',
            hasStrongElement: true
        },
        {
            id: 'showphone',
            content: 'Phone:',
            hasStrongElement: true
        },
        {
            id: 'showdateofbirth',
            content: 'Dataofbirth:',
            hasStrongElement: true
        },
        {
            id: 'showlicencetype',
            content: 'License type:',
            hasStrongElement: true
        },
        {
            id: 'showlicenceperiod',
            content: 'License period:',
            hasStrongElement: true
        },
        {
            id: 'showoccupation',
            content: 'Occupation:',
            hasStrongElement: true
        },
        {
            id: 'showincidents',
            content: 'Driver History:',
            hasStrongElement: true
        },
        {
            id: 'showstreet',
            content: 'ADDRESS:',
            hasStrongElement: false
        }
    ];

    fields.forEach((field) => {
        assertUserProfileRowContent(field)
    });
}

function assertUserProfileRowContent(field) {
    const { id, content, hasStrongElement } = field;

    cy.get(`#${id}`).then((el) => {
        const prev = el[0].previousElementSibling;
        let result;

        if (hasStrongElement) {
            result = prev.querySelector('strong');
        } else {
            result = prev;
        }

        const wrapped = cy.wrap(result)
        wrapped.should('have.text', content);
    })

}