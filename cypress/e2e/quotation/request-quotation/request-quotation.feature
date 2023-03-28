Feature: Request Quotation

    Scenario: Select Request Quotation Tab
        When After login
        When User selects the Request Quotation Tab
        Then User is able to view the contents of Request Quotation tab

    Scenario: Request a Quotation 
        When After login
        When User selects the Request Quotation Tab
        When User fill in the fields of the Request Quotation Form
        When User submits the Request Quotation Form
        Then Application redirects to Quotation confirmation screen

    Scenario: Reset Quotation Form 
        When After login
        When User selects the Request Quotation Tab
        When User fill in the fields of the Request Quotation Form
        When User resets the Request Quotation Form
        Then The fields of Request Quotation Form are cleared
