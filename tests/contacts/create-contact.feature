CREATE CONTACT
    happy path
        Verify Create Contact Passed
        When method POST
        Then status 201

    unhappy path
        Verify if fullName is full
        When method POST
        Then status 422

        Verify incorrect contact's email
        When method POST
        Then status 422

        Verify 9 digits of phone
        When method POST
        Then status 422

        Verify if phone is numeric
        When method POST
        Then status 422

        Verify if phone starts with 9
        When method POST
        Then status 422





