// Test Case: Specifically clicks the "Add to Cart" button for the Gaming Headset

describe("Product Selection", () => {
  it("Clicks the 'Add to Cart' button for the Gaming Headset ", () => {
    //Step 1: Navigate to the home page(using the base url defined in cypress.config.js)
    cy.visit("/");
    // Step2: Click on the right arrow icon
    cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
    //Step 3: Click on the Exercise 6 tab to go to the cart page
    cy.get('[role="tab"]')
      .contains("Exercise 6 - Product Selection")
      .should("be.visible")
      .click();
    // Step 4: clicks the "Add to Cart" button for the Gaming Headset
    cy.get("div.product-container")
      .find("div.product-card")
      .contains("h2", "Gaming Headset")
      .parent("div.product-card")
      .within(() => {
        cy.get("p.price").contains("$89.99").should("be.visible");
        cy.get('button[data-cy="add-button"]').click();
      });
    // Step 5: Verify that the success message appears after the button is clicked
    cy.get('[class*="MuiAlert-message"]')
      .should("be.visible")
      .should("have.text", "Correct! You selected the Gaming Headset.");
  });
});
