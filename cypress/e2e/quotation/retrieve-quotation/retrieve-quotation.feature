Feature: Retrieve Quotation
    Scenario: Validate Retrieve Quotation
        When After login
        Then User retrieve quotation using the Identification Number
        Then User navigates to Quotation Detail View Screen

    Scenario: Validate Retrieve Quotation without Identification Number
        When After login
        Then User retrieve quotation without entering the Identification Number
        Then User redirects back to the default page

    