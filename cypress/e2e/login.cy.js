describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('german@dolnikov.ru');//ввела верный логин 
    cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
    cy.get('#loginButton').click();// нажала Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//после авт.вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})
it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('german@dolnikov.ru');//ввела верный логин 
    cy.get('#pass').type('iLoveqastudio9');//ввела неверный пароль
    cy.get('#loginButton').click();// нажала Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//после авт.вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('erman@dolnikov.ru');//ввела неверный логин 
    cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
    cy.get('#loginButton').click();// нажала Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//после авт.вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

})

it('проверка,что в Логине есть @', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('germandolnikov.ru');//ввела логин без @
    cy.get('#pass').type('iLoveqastudio1');//ввела верный пароль
    cy.get('#loginButton').click();// нажала Войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//после авт.вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 
})



it('Поле для ввода Логина приводит к строчным буквам', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru');//ввела логин 
    cy.get('#pass').type('GerMan@Dolnikov.ru');//ввела верный пароль
    cy.get('#loginButton').click();// нажала Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//после авт.вижу текст
    cy.get('#messageHeader').should('be.visible');//текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 
})


it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');//зашла на сайт
    cy.get('#forgotEmailButton').click();// нажала забыли пароль?
    cy.get('#forgotForm > .header').contains('Восстановите пароль');
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#message').contains('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 
})
})



 // Найти поле логин и ввести правильный логин
// Найти поле пароль и ввести правильный пароль
// Найти кнопку Войти и нажать на неё
//Проверить нужный текст и наличие кнопки крестик