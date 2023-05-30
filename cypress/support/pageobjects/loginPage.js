///<reference types = "cypress" />


import loginElements from "../elements/loginElements";
const login = new loginElements

class loginPage {

    acessarSite() {
        cy.visit('/');
    }

    validaPaginaInicial() {
        cy.contains(login.loginLogo, 'Swag Labs').should('be.visible');
    }

    efetuarLogin(userName, password) {
        cy.get(login.campoUsername()).type(userName);
        cy.get(login.campoPassword()).type(password, {log: false});
        cy.get(login.botaoLogin()).click();
        
    }

    validaMensagemErro() {
        cy.contains(login.mensagemErro, 'Username and password do not match any user in this service').should('be.visible');
    }

}

export default loginPage;