Feature: Logout
  Scenario: Logout Success
    When After login
    Then User click on logout button
    Then User redirects back to login page


