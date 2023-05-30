///<reference types = "cypress" />

/* global Given, Then, When */

import loginPage from '../pageobjects/loginPage'
import produtoPage from '../pageobjects/produtoPage';
const login = new loginPage
const produto = new produtoPage

beforeEach(() => {
    login.acessarSite();
    login.efetuarLogin('standard_user', 'secret_sauce');

})

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

Then ("deve direcionar para a página de produtos", () => {
    produto.validaPaginaProduto;
})

Then ("exibe uma mensagem de erro de login", () => {
    login.validaMensagemErro;

})

Then ("deve permanecer na página inicial", () => {
    login.validaPaginaInicial;
    
})
