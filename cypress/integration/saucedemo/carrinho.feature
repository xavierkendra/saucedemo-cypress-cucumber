Feature: Remover itens do carrinho

Como usuário do site Sauce Labs
Quero remover itens do carrinho
Para atualizar o carrinho

Scenario: Remover um item do carrinho
Given o carrinho possui quatro itens
When clico na opção Remove do segundo item
Then o item deve ser removido do carrinho



