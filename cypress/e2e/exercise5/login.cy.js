// Test Case: verify successful login
// This test case verifies that the user can log in successfully by providing valid credentials.

describe("Login ", () => {
  it("successful", () => {
    // Call the custom command to proceed with login using valid user credentials
    cy.login("test@example.com", "password123");
  });
});
