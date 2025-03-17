// Test Suite: Verify Element Relationships

describe(" Elements Relations", () => {
  // Before each test, navigate to the page and setup common elements
  beforeEach(() => {
    // Step 1: Navigate to the home page(using the base url defined in cypress.config.js)
    cy.visit("/");
    // Step 2: Click on the exercise 4 tab
    cy.get('[role="tab"]').contains("Exercise 4 - Element Relations").click();
    // Find and alias the parent div containing the "my-class" div
    cy.get("div.container").find("div.my-class").should("exist").as("card");
  });


  // Test Case 1: Verify "old-car" is inside the "my-class" element
  it(" Verify 'old-car is within an element with class 'my-class' ", () => {
    cy.get("@card").within(() => {
      cy.get("div.vehicle-card")
        .find("div.details")
        .find("span")
        .contains("old-car")
        .should("be.visible");
    });
  });

  // Test Case 2: Verify the number "1" is a sibling of "old-car"
  it(" Verify that the number '1' is a sibling of the old-car", () => {
    cy.get("@card").within(() => {
      cy.get("div.vehicle-card")
        .find("div.details")
        .find("span")
        .contains("old-car")
        .siblings("span")
        .contains("1")
        .should("be.visible");
    });
  });
});
