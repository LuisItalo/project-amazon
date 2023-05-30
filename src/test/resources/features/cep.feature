#language: pt

  Funcionalidade: escolher cep
    como usuario quero escolher cep
    para facilitar o frete

  @teste1
  Cenario: cep invalido
    Dado que acesso a pagina da amazon
    Quando coloco um cep invalido
    Entao deve solicitar cep valido

  @teste2
  Cenario: cep com caracteres especiais
    Dado que acesso a pagina da amazon
    Quando colo um cep com caracteres especiais
    Entao deve solicitar cep valido

  @teste3
  Cenario: cep com letras
    Dado que acesso a pagina da amazon
    Quando digito um cep com letras
    Entao deve solicitar cep valido

  Cenario: cep em branco
    Dado que acesso a pagina da amazon
    Quando deixo em branco o cep
    Entao deve solicitar cep valido

  Cenario: cep valido
    Dado que acesso a pagina da amazon
    Quando digito cep valido
    Entao deve confirmar cep na pagina