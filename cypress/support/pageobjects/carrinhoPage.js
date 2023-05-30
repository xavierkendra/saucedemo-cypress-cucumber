///<reference types = "cypress" />

import carrinhoElements from "../elements/carrinhoElements"
const carrinho = new carrinhoElements

class carrinhoPage {

    confereCarrinho(carrinhoProduto) {
        cy.contains(carrinho.carrinhoItem(), carrinhoProduto).should('be.visible');
    }

    removeBike() {
        cy.get(carrinho.removeBike()).click();
    }

}

export default carrinhoPage;