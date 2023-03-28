Feature: Save and Edit Profile
    Scenario: Validate Edit Profile Content
        When After login
        When User selects the edit profile tab
        Then User is able to view the contents of Edit Profile tab
        
    Scenario: Save Profile
        When After login
        When User selects the edit profile tab
        When User fill in the fields of the profile Form
        When User submits the profile Form
        # Then Uer data will save successfully


    # Scenario:- Edit Profile
    #     When After login
    #     When User selects the edit profile tab
    #     When User update the fields of the profile Form
    #     When User submits the profile Form
    #     Then Uer data will update successfully