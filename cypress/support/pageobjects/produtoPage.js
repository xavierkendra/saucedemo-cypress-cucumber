///<reference types = "cypress" />

import produtoElements from "../elements/produtoElements"
const produto = new produtoElements

class produtoPage {

    validaPaginaProduto() {
        cy.contains(produto.tituloProduto, 'Products').should('be.visible');
    }
}

export default produtoPage;