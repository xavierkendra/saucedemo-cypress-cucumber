///<reference types = "cypress" />

import checkoutElements from "../elements/checkoutElements"
const checkout = new checkoutElements

class checkoutPage {

    clicaCheckout() {
        cy.get(checkout.botaoCheckout()).click();
    }

    preencheFirstName(nome) {
        cy.get(checkout.campoFirstName()).type(nome);
    }

    preencheLastName(sobrenome) {
        cy.get(checkout.campoLastName()).type(sobrenome);
    }

    preenchePostalCode(cep) {
        cy.get(checkout.campoPostalCode()).type(cep);
    }

    clicaContinue() {
        cy.get(checkout.botaoContinue()).click();
    }

    clicaFinish() {
        cy.get(checkout.botaoFinish()).click();
    }

    confereCheckout() {
        cy.get(checkout.mensagemSucesso()).should('be.visible');
    }

    clicaBackHome() {
        cy.get(checkout.botaoHome()).click();
    }

    validaMensagemErro() {
        cy.contains(checkout.mensagemErro, 'First Name is required').should('be.visible');
    }

    confereCheckoutInvalido() {
        cy.get(checkout.checkoutInfo()).should('be.visible');
    }
}

export default checkoutPage;