// Test Case: API Interception

describe("API Interception", () => {
  it("POST", () => {
    //Step 1: Monitor the POST request to the jsonplaceholder API
    cy.intercept("POST", "https://jsonplaceholder.typicode.com/posts").as("postRequest")

    //Step 2 :Simulate a POST request with a mock payload
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "Product Added",
        body: "Added product to cart",
        userId: 1,
      },
    }).then((response) => {
      //// Assertions to check if the response is as expected
      expect(response.body).to.have.property("id").to.be.a("number").eq(101);
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("body");
      expect(response.body).to.have.property("userId");
    });
  });
});
