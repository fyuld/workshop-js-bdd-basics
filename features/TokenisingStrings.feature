Feature: Strings should be tokenised into unique tokens
  Scenario: Strings should be tokenised in predicatble manner
    Given one of the strings for tokenisation:
      | Sample    |
      | Alice     |
      | Bob       |
      | Lagavulin |
    When we tokenise a string
    Then we should receive a number

  Scenario: Same strings should be tokenised into same tokens
    Given one of the strings for tokenisation:
      | Sample    |
      | Alice     |
      | Bob       |
      | Lagavulin |
    When we tokenise a string twice and compare results
    Then they sould be the same for given sample

  Scenario: Different strings should be tokenised into different tokens
    Given list of two different strings for tokenisation:
      | Sample  A | Sample B  | 
      | Alice     | Bob       |
      | Bob       | Lagavulin |
      | Lagavulin | Alice     |
    When we tokenise them both and compare results
    Then they should be different