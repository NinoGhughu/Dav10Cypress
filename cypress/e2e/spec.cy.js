// describe('Automation exercise', () => {
//   it('Test Case 1: Register User', () => {
//     cy.visit('https://www.automationexercise.com/test_cases')
// // 1. Launch browser
// // 2. Navigate to url 'http://automationexercise.com'
// cy.visit('http://automationexercise.com')
// // 3. Verify that home page is visible successfully
// cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
// // 4. Click on 'Signup / Login' button
// cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
// // 5. Verify 'New User Signup!' is visible
// cy.get('.signup-form > h2').should("have.text", "New User Signup!")
// // 6. Enter name and email address
// cy.get('[data-qa="signup-name"]').type("nino").should("have.value", "nino")
// cy.get('[data-qa="signup-email"]').type("nino11111@gmail.com").should("have.value","nino11111@gmail.com")
// // 7. Click 'Signup' button
// cy.get('[data-qa="signup-button"]').click()
// // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// cy.get(':nth-child(1) > b').should("have.text","Enter Account Information")
// // 9. Fill details: Title, Name, Email, Password, Date of birth
// cy.get('#id_gender2').check()
// cy.get('[data-qa="name"]').should("have.value","nino")
// cy.get('[data-qa="email"]').should("have.value", "nino11111@gmail.com")
// cy.get('[data-qa="password"]').type("123")
// cy.get('[data-qa="days"]').select("11")
// cy.get('[data-qa="months"]').select(11)
// cy.get('[data-qa="years"]').select("1988")
// // 10. Select checkbox 'Sign up for our newsletter!'
// cy.get('#newsletter').check()
// // 11. Select checkbox 'Receive special offers from our partners!'
// cy.get('#optin').check()
// // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// cy.get('[data-qa="first_name"]').type("test")
// cy.get('[data-qa="last_name"]').type("test2")
// cy.get('[data-qa="company"]').type("test")
// cy.get('[data-qa="address"]').type("test")
// cy.get('[data-qa="country"]').select(3)
// cy.get('[data-qa="state"]').type("test")
// cy.get('[data-qa="city"]').type("test")
// cy.get('[data-qa="zipcode"]').type(123456)
// cy.get('[data-qa="mobile_number"]').type(9874563)
// // 13. Click 'Create Account button'
// cy.get('[data-qa="create-account"]').click()
// // 14. Verify that 'ACCOUNT CREATED!' is visible
// cy.get('[data-qa="account-created"]').should("have.text","Account Created!")
// // 15. Click 'Continue' button
// cy.get('[data-qa="continue-button"]').click()
// // 16. Verify that 'Logged in as username' is visible
// cy.get('b').should("have.text","nino")
// // 17. Click 'Delete Account' button
// cy.get(':nth-child(5) > a > .fa').click()
// // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
// cy.get('[data-qa="account-deleted"]').should("have.text","Account Deleted!")
// cy.get('[data-qa="continue-button"]').click()
//   })
// })
