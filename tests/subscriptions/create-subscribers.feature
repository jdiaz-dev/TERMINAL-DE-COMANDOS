CREATE SUBSCRIPTION
happy path:
    Verify Create Suscription Passed
unhappy path:
    Verify invalid subscriber's email
    When method POST
    Then status 422

    Verify fullName is required
    When method POST
    Then status 422

    Verify email is required
    When method POST
    Then status 422

    Verify 9 digits of number
    When method POST
    Then status 422

    Verify number must be numeric
    When method POST
    Then status 422

    Verify number starts without 9
    When method POST
    Then status 422






