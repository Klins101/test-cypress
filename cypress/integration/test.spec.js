/// <reference types="cypress" />
describe("Happy Flow Test", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it ("Filling Form and Submit", () => {
        cy.get("[data-test-id='first-name']")
            .type("John")
            .should("have.value", "John");
        cy.get("[data-test-id='last-name']")
            .type("Doe")
            .should("have.value", "Doe");
        cy.get("[data-test-id='phone-number']")
            .type("0204987654")
            .should("have.value", "0204987654");
        cy.get("[data-test-id='dob']").click()
            .type('2009-12-12')
            .should("have.value", "2009-12-12");
        cy.get("[data-test-id='address']")
            .type('WR-0003-0036')
            .should("have.value", "WR-0003-0036");
        cy.get("[data-test-id='submit-btn']").click()
        // Check if the form is submitted and Displayed on the User List Section
        cy.get('.sc-htoDjs > :nth-child(1)')
            .should("be.visible")
            .should("contain", "John")
        cy.get('.sc-htoDjs > :nth-child(2)')
            .should("be.visible")
            .should("contain", "ADDRESS: WR-0003-0036")
        cy.get('.sc-htoDjs > :nth-child(3)')
            .should("be.visible")
            .should("contain", "DOB: 11th December 2009");        
    })
})