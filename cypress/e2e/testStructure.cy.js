/// <reference types="cypress" />
describe('Contex: My First Tests', () => {
     before(() => {
        //runs once before all test cases in this describe block, beforeClass in TestNG 
     })
     beforeEach(() => {
        // run before each case, beforeMethod in testNG
        cy.clearAllCookies();
     })
     after(() => {
        //similar to afterClass in TestNG, runs once after all tests finished
     })
     afterEach(() => {
        // similar to afterMethod in TestNG
     })
     it.skip('Opening a web application', () => {c
        cy.visit('/registration_form'); 
     })
     it('Test 2', () => {
        expect(false).to.equal(false);
     })
     it('Test 3', () => {
        expect(false).not.to.equal(true);
     })
     it.only('Test 4', () => {
        expect(true).to.equal('5'==5);
     })

})