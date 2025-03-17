// Test Case: Verify Checkbox State
// This test verifies if a specific checkbox is checked.

describe("Verify Checkbox State", () => {
  it("Verify if a specific checkbox is checked", () => {
    // Step 1: Navigate to the home page(using the base url defined in cypress.config.js)
    cy.visit("/");
    // Step 2: Click on the Exercise 3 tab
    cy.get('[role="tab"]')
      .contains("Exercise 3 - Checkbox Verification")
      .click();
    // Step 3: Find the specific checkbox and verify if it is checked
    cy.get('div[data-cy="test-grid-3"]')
      .find("div.grid-item")
      .eq(1)
      .find("div.item-content")
      .find("p")
      .contains("Test2")
      .siblings("input")
      .should("be.checked");
  });
});
