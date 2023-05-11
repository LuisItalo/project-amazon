#language: pt

  Funcionalidade:
    como usuario na pagina da Amazon
    quero fazer a busca por um produto
    e validar o retorno dessa busca


    Contexto: usuario acessa o site
      Dado que o usuario acessa o site da amazon
      Entao verifica se o url da acesso ao site amazon

    Esquema do Cenário: campo de busca vazio
      Quando o usuario faz a busca com <campo-vazio>
      Entao o sistema vai permanecer na pagina

      Exemplos: campo de busca vazio
        |campo-vazio|
        |"         "|