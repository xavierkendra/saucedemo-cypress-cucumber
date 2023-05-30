Feature: Adicionar produtos no carrinho de compras

    Como usuário do site da Sauce Labs
    Quero adicionar produtos no carrinho
    Para realizar a compra

    Background: Página de Produtos
    Given estou na página de produtos


    Scenario: Adicionar um produto no carrinho de compras 
    When clicar no produto desejado
    And clicar na opção Add to cart
    Then o produto deve ser adicionado ao carrinho de compras

    Scenario: Adicionar quatro produtos no carrinho de compras
    When clico na opção Add to cart do primeiro produto
    And clico na opção Add to cart do segundo produto
    And clico na opção Add to cart do terceiro produto
    And clico na opção Add to cart do quarto produto
    Then os quatro produtos devem ser adicionados ao carrinho de compras







