#language: pt

  Funcionalidade: escolher cep
    como usuario quero escolher cep
    para facilitar o frete

  Contexto:
    Dado que acesso a pagina da amazon

  @teste1
  Esquema do Cenario: cep invalido
    Quando digito um <cep invalido>
    Entao deve solicitar cep valido

    Exemplos: lista de ceps invalidos
      |cep invalido|
      |   "789412"   |
      |   "!@!@!@"   |
      |  "aqswdefr"  |

  @teste2
  Esquema do Cenario: cep em branco
    Quando deixo <cep em branco>
    Entao deve solicitar cep valido

  Exemplos: lista em branco
    |cep em branco|
    |     " "     |

   @teste3
  Esquema do Cenario: cep valido
    Quando digito <cep valido>
    Entao deve confirmar cep na pagina

  Exemplos: cep valido
     |cep valido |
     | "41745001" |
     | "30710010" |
     | "59094330" |