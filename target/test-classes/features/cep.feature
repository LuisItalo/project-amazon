#language: pt

  Funcionalidade: escolher cep
    como usuario quero escolher cep
    para facilitar o frete

  Cenario: cep invalido
    Dado que acesso a pagina da amazon
    Quando coloco um cep invalido
    Entao o sistema pede um cep valido