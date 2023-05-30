///<reference types = "cypress" />

/* global Given, Then, When */

import loginPage from '../pageobjects/loginPage'
import produtoPage from '../pageobjects/produtoPage';
const login = new loginPage
const produto = new produtoPage

Given ("que estou na página inicial", () => {
    login.acessarSite();

})

When ("efetuar o login de um usuário válido com senha válida", () => {
    login.efetuarLogin('standard_user', 'secret_sauce');

})

When ("efetuar o login de um usuário inválido", () => {
    login.efetuarLogin('invalid_user', 'secret_sauce');
})

When ("efetuar login de um usuário válido com senha inválida", () => {
    login.efetuarLogin('standard_user', 'invalid_password');
})

Then ("serei direcionado para a página de produtos", () => {
    produto.validaPaginaProduto;
})

Then ("visualizo uma mensagem de erro", () => {
    login.validaMensagemErro;

})

Then ("permaneço na página inicial", () => {
    login.validaPaginaInicial;
    
})
