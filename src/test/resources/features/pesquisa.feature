#language: pt
Funcionalidade: busca de produtos
  Como um usuario na pagina da Amazon
  quero fazer a busca por um produto
  e validar o retorno dessa busca



  Contexto: usuario acessa o site
    Dado que o usuario acessa o site da amazon
    Entao verifica se o url da acesso ao site amazon


  @tp1
  Esquema do Cenário: busca por produtos validos
    Quando o usuario faz busca de um <produto_valido>
    Entao verifica o resultado da busca valida

    Exemplos: lista da busca de produtos validos
      |produto_valido  |
      |"Xbox series s" |
      |"jbl boombox"   |
      |"rtx 3060"      |

  @tp2
  Esquema do Cenário: busca por produtos invalidos
    Quando o usuario faz a busca de um <produto_invalido>
    Entao verifica o resultado invalido

    Exemplos: lista da busca de produtos invalidos
      |produto_invalido|
      |"dadadawdagagwagr32231"|
      |"55asdakfr3"          |
      |"23441252"            |

  @tp3
  Esquema do Cenário: busca por produtos nao especificos
    Quando o usuario faz a busca de um <produto_generico>
    Entao verifica o resultado dessa busca

    Exemplos: lista da busca generica
      |produto_generico|
      |"fone de ouvido "|
      |"tenis masculino"|
      |"mouse"          |

  @tp4
  Esquema do Cenário: campo de busca vazio
    Quando o usuario faz a busca com <campo-vazio>
    Entao o sistema vai permanecer na pagina

    Exemplos: campo de busca vazio
      |campo-vazio|
      |"         "|