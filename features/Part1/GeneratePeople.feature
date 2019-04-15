Feature: We should be able to generate Persons from sample list of people.
  Scenario: Generating Person from Name
    Given a list of names:
      | Sample    |
      | Alice     |
      | Bob       |
      | Clare |
    When we create people out of list of names
    Then we should expect people to match following structure:
    """
    [
      {
        "name": "Alice"
      },
      {
        "name": "Bob"
      },
      {
        "name": "Clare"
      }
    ]
    """