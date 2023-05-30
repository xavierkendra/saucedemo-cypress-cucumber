///<reference types = "cypress" />

/* global Given, Then, When */

import produtoPage from "../pageobjects/produtoPage"
import carrinhoPage from "../pageobjects/carrinhoPage";
const produto = new produtoPage
const carrinho = new carrinhoPage

Given ("o carrinho possui quatro itens", () => { 
    produto.adicionaProdutoBackpack();
    produto.adicionaProdutoBike();
    produto.adicionaProdutoJacket();
    produto.adicionaProdutoOnesie();
    produto.clicaCarrinho();
    carrinho.confereCarrinho('Sauce Labs Backpack');
    carrinho.confereCarrinho('Sauce Labs Bike Light');
    carrinho.confereCarrinho('Sauce Labs Fleece Jacket');
    carrinho.confereCarrinho('Sauce Labs Onesie');

})

When ("clico na opção Remove do segundo item", () => {
    carrinho.removeBike();

})

Then ("o item deve ser removido do carrinho", () => {
    carrinho.confereCarrinho('Sauce Labs Backpack');
    carrinho.confereCarrinho('Sauce Labs Fleece Jacket');
    carrinho.confereCarrinho('Sauce Labs Onesie');

})