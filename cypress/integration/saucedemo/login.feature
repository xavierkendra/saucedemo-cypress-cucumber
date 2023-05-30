Feature: Login no site da Sauce Labs

    Como usuário do site da Sauce Labs
    Quero efetuar o login
    Para visualizar os produtos disponíveis

    Background: Página Inicial
    Given que estou na página inicial

    Scenario: Login de um usuário inválido
    When efetuar o login de um usuário inválido
    Then exibe uma mensagem de erro de login
    And deve permanecer na página inicial

    Scenario: Login de um usuário válido com senha inválida
    When efetuar login de um usuário válido com senha inválida
    Then exibe uma mensagem de erro de login
    And deve permanecer na página inicial

    Scenario: Login de um usuário válido com senha válida
    When efetuar o login de um usuário válido com senha válida
    Then deve direcionar para a página de produtos


