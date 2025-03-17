// Test Case: Find Product with Specific Price.
// This test verifies that a product with price $59 is visible on the page.

describe("Exercise 1: Find Product with Specific Price", () => {
  it("Find the product that has the price $59", () => {
    // Step 1: Navigate to the home page(using the base url defined in cypress.config.js)
    cy.visit("/");
    // Step 2: Confirm the application is showing the product with the price $59
    cy.get("div.product-list")
      .find(
        'div#product-item-45628[data-cy="product-item"][data-product-id="45628"]'
      )
      .find('span[data-cy="product-price"]')
      .contains("$59")
      .should("exist")
      .and("be.visible");
  });
});
