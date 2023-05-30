Feature: Realizar checkout

Como usuário do site Sauce Labs
Quero conferir o carrinho
E efetuar o checkout
Para finalizar a compra

Background: Carrinho
Given o carrinho possui três itens

Scenario: Realizar um checkout inválido
When clico na opção checkout
And não preencho os dados do comprador
Then exibe uma mensagem de erro 
And não deve finalizar o checkout

Scenario: Realizar um checkout válido
When clico na opção checkout
And preencho os dados do comprador
Then deverá finalizar o checkout







