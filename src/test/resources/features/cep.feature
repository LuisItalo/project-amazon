#language: pt

  Funcionalidade: escolher cep
    como usuario quero escolher cep
    para facilitar o frete

  Contexto:
    Dado que acesso a pagina da amazon

  @teste1
  Esquema do Cenario: cep invalido
    Quando coloco um <cep invalido>
    Entao deve solicitar cep valido

    Exemplos: lista de ceps invalidos
      |cep invalido|
      |   "789412"   |
      |   "!@!@!@"   |
      |  "aqswdefr"  |

#  Cenario: cep em branco
#    Dado que acesso a pagina da amazon
#    Quando deixo em branco o cep
#    Entao deve solicitar cep valido
#
#  Cenario: cep valido
#    Dado que acesso a pagina da amazon
#    Quando digito cep valido
#    Entao deve confirmar cep na pagina