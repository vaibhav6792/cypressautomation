Feature: Login
  Scenario: Login Failure
    Given User enters the home page URL in the browser
    Then User enters "invalid" credentials
    Then Application displays incorrect credentials message

  Scenario: Login Success
    Given User enters the home page URL in the browser
    Then User enters "valid" credentials
    Then Application redirects to the landing page