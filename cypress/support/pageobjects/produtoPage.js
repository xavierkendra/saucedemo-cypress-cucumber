///<reference types = "cypress" />

import produtoElements from "../elements/produtoElements"
const produto = new produtoElements

class produtoPage {

    validaPaginaProduto() {
        cy.contains(produto.tituloProduto, 'Products').should('be.visible');
    }

    selecionaProduto(nomeProduto) {
        cy.contains(produto.descricaoProduto(), nomeProduto).click();
    }

    adicionaProdutoBackpack() {
        cy.get(produto.addBackpack()).click();
     
       }
    
    adicionaProdutoBike() {
        cy.get(produto.addBike()).click();
    }

    adicionaProdutoTShirt() {
        cy.get(produto.addTShirt()).click();
    }

    adicionaProdutoJacket() {
        cy.get(produto.addJacket()).click();
    }

    adicionaProdutoOnesie() {
        cy.get(produto.addOnesie()).click();
    }

    clicaCarrinho() {
        cy.get(produto.iconeCarrinho()).click();
    }

}


export default produtoPage;