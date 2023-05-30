///<reference types = "cypress" />

/* global Given, Then, When */

import produtoPage from '../pageobjects/produtoPage';
import carrinhoPage from '../pageobjects/carrinhoPage';
const produto = new produtoPage
const carrinho = new carrinhoPage

Given ("estou na página de produtos", () => {
    produto.validaPaginaProduto;

})

When ("clicar no produto desejado", () => {
    produto.selecionaProduto('Sauce Labs Bolt T-Shirt');

})

When ("clicar na opção Add to cart", () => {
    produto.adicionaProdutoTShirt();

})

When ("clico na opção Add to cart do primeiro produto", () => {
    produto.adicionaProdutoBackpack();

})

When ("clico na opção Add to cart do segundo produto", () => {
    produto.adicionaProdutoBike();

})

When ("clico na opção Add to cart do terceiro produto", () => {
    produto.adicionaProdutoJacket();

})

When ("clico na opção Add to cart do quarto produto", () => {
    produto.adicionaProdutoOnesie();

})

Then ("o produto deve ser adicionado ao carrinho de compras", () => {
    produto.clicaCarrinho();
    carrinho.confereCarrinho('Sauce Labs Bolt T-Shirt');

})

Then ("os quatro produtos devem ser adicionados ao carrinho de compras", () => {
    produto.clicaCarrinho();
    carrinho.confereCarrinho('Sauce Labs Backpack');
    carrinho.confereCarrinho('Sauce Labs Bike Light');
    carrinho.confereCarrinho('Sauce Labs Fleece Jacket');
    carrinho.confereCarrinho('Sauce Labs Onesie');

})