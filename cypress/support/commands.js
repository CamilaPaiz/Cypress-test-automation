Cypress.Commands.add("login", (email, password) => {
  // Navigate to the home page(using the base url defined in cypress.config.js)
  cy.visit("/");
  //Click on the right arrow icon
  cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
  // Click on the Exercise 5 tab to find the login form
  cy.get('[role="tab"]')
    .contains("Exercise 5 - Login Command")
    .should("be.visible")
    .click();

  cy.get("form.login-form").within(() => {
    cy.get('[data-cy="email-input"]')
      .should("have.attr", "placeholder", "Email")
      .type(email); // Type email
    cy.get('[data-cy="password-input"]')
      .should("have.attr", "placeholder", "Password")
      .type(password); // Type password
    cy.get('[data-cy="submit-button"]').contains("Login").click(); // // Click login button
  });

  // Verify successful login
  cy.get('[data-cy="welcome-message"]')
    .contains("Welcome back!")
    .should("be.visible");
});
