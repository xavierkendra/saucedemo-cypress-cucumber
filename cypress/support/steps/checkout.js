///<reference types = "cypress" />

/* global Given, Then, When */

import produtoPage from "../pageobjects/produtoPage"
import carrinhoPage from "../pageobjects/carrinhoPage";
import checkoutPage from "../pageobjects/checkoutPage";
const produto = new produtoPage
const carrinho = new carrinhoPage
const checkout = new checkoutPage

Given ("o carrinho possui três itens", () => {
    produto.adicionaProdutoBackpack();
    produto.adicionaProdutoJacket();
    produto.adicionaProdutoOnesie();
    produto.clicaCarrinho();
    carrinho.confereCarrinho('Sauce Labs Backpack');
    carrinho.confereCarrinho('Sauce Labs Fleece Jacket');
    carrinho.confereCarrinho('Sauce Labs Onesie');

})

When ("clico na opção checkout", () => {
    checkout.clicaCheckout();


})

When ("preencho os dados do comprador", () => { 
    checkout.preencheFirstName('Kendra');
    checkout.preencheLastName('Xavier');
    checkout.preenchePostalCode('25965703');
    
})

When ("não preencho os dados do comprador", () => {

})

Then ("deverá finalizar o checkout", () => {
    checkout.clicaContinue();
    carrinho.confereCarrinho('Sauce Labs Backpack');
    carrinho.confereCarrinho('Sauce Labs Fleece Jacket');
    carrinho.confereCarrinho('Sauce Labs Onesie');
    checkout.clicaFinish();
    checkout.confereCheckout();
    checkout.clicaBackHome();

})

Then ("exibe uma mensagem de erro", () => {
    checkout.clicaContinue();
    checkout.validaMensagemErro;

})

Then ("não deve finalizar o checkout", () => {
    checkout.confereCheckoutInvalido();
})