// This test suite verifies that the application correctly finds and interacts
// with the table elements based on specific criteria

describe("Find Table Elements", () => {
  //Setup: Visit the page and click the tab before each test
  beforeEach(() => {
    // Step 1: Navigate to the home page(using the base url defined in cypress.config.js)
    cy.visit("/");
    // Step 2: Click on the exercise 2 tab
    cy.get('[role="tab"]').contains("Exercise 2 - Table Elements").click();
    // Convert the target date to match the Los Angeles timezone format
    // since moment.tz is not installed in the project.
    const laDate = new Date("2024-05-15").toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    // Setup alias to find the specific row that contains the date "05/15/2024"
    // This will be used to filter elements within that row
    cy.get('table[name="Test1"]')
      .contains(laDate)
      .parentsUntil("tbody")
      .as("test-table");
  });
  it('Find a paragraph element containing exactly "First"', () => {
    // Test Case: Use the alias @test-table to refer to the specific row and find the <p> element containing "First"
    cy.get("@test-table").within(() => {
      cy.get("p").first().should("have.text", "First").should("be.visible");
    });
  });
  it('Find a span element containing "Accepted"', () => {
    // Test Case: Use the alias '@test-table' to refer to the specific row and find the <span> element containing "Accepted"
    cy.get("@test-table").within(() => {
      cy.get("span").first().contains("Accepted").should("be.visible");
    });
  });
  it('Find a button element containing "View"', () => {
    // Test Case: Use the alias '@test-table' to refer to the specific row and find the <button> element containing "View"
    cy.get("@test-table").within(() => {
      cy.get("button").contains("View").should("be.visible");
    });
  });
  it('Find and click a button with the class "button-order-more"', () => {
    // Test Case: Use the alias '@test-table' to refer to the specific row and find and click a button with specific class
    cy.get("@test-table").within(() => {
      cy.get("button.button-order-more").should("be.visible").click();
    });
  });
});
