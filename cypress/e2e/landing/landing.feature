Feature: Landing
  Scenario: Landing Hero Text
    When After login
    Then The application shows correct email address

  Scenario: Landing Logout Button
    When After login
    Then Logout button should be displayed

  Scenario: Landing Tabs
    When After login
    Then The application shows the correct list of tabs

  Scenario: Landing Default Tab Selected
    When After login
    Then default tab should be Home