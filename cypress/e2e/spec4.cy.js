describe('template spec', () => {
  it('Test Case 4: Logout User', () => {
    cy.visit('https://www.automationexercise.com/test_cases')

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com')
    // 3. Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    // 5. Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should("have.text","Login to your account")
    // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type("nino1@gmail.com")
    cy.get('[data-qa="login-password"]').type(123)
    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    // 8. Verify that 'Logged in as username' is visible
    cy.get('b').should("have.text","nino")
        // 9. Click 'Logout' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    // 10. Verify that user is navigated to login page
    cy.get('.login-form > h2').should("have.text","Login to your account")
  })
})