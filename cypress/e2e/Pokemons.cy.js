describe('Покупка аватара', function () {

    it('Тест на покупку нового аватара', function () {
         cy.visit('https://pokemonbattle.me/login');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.available > button').first().click();
         cy.get('.credit').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(125)
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Smirnov Pavel');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__field-defolt-for-success').contains('Покупка прошла успешно').should('be.visible');


     })
 })
 

 











 
