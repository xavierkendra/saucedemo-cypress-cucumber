Feature: Login no site da Sauce Labs

    Como usuário do site da Sauce Labs
    Quero efetuar o login
    Para visualizar os produtos disponíveis

    Background: Página Inicial
    Given que estou na página inicial

    Scenario: Login de um usuário inválido
    When efetuar o login de um usuário inválido
    Then visualizo uma mensagem de erro
    And permaneço na página inicial

    Scenario: Login de um usuário válido com senha inválida
    When efetuar login de um usuário válido com senha inválida
    Then visualizo uma mensagem de erro
    And permaneço na página inicial

    Scenario: Login de um usuário válido com senha válida
    When efetuar o login de um usuário válido com senha válida
    Then serei direcionado para a página de produtos


