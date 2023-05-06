/// <reference types="cypress" />
describe('Find or Get Elememts by using Differnet Locators', () => {

    beforeEach(() => {
       // run before each case, beforeMethod in testNG
       cy.clearAllCookies();
       cy.visit('/login')
    })
  
    it.skip('check differnt locatesrs strategies', () => {
       cy.visit('/registration_form'); 
       //By CSS locator
       cy.get(("input[name='username']")).type("CydeoStudent"); // every statement creates an object to be intracted,  
       // and next makes command makes operation to the object created at the previous statement
       //attribute name 
       cy.get("[type='text']").clear(); // clear what is typed
       cy.get("input").each((item,index,list) => {
        //assert the length of the list is 2
        expect(list).to.have.length(2);
        expect(item).to.have.attr("type");
       })
    })
  

})