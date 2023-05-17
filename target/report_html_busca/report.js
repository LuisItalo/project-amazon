$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/pesquisa.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "",
  "description": "como usuario na pagina da Amazon\nquero fazer a busca por um produto\ne validar o retorno dessa busca",
  "id": "",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "campo de busca vazio",
  "description": "",
  "id": ";campo-de-busca-vazio",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "o usuario faz a busca com \u003ccampo-vazio\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "o sistema vai permanecer na pagina",
  "keyword": "Entao "
});
formatter.examples({
  "line": 17,
  "name": "campo de busca vazio",
  "description": "",
  "id": ";campo-de-busca-vazio;campo-de-busca-vazio",
  "rows": [
    {
      "cells": [
        "campo-vazio"
      ],
      "line": 18,
      "id": ";campo-de-busca-vazio;campo-de-busca-vazio;1"
    },
    {
      "cells": [
        "\"         \""
      ],
      "line": 19,
      "id": ";campo-de-busca-vazio;campo-de-busca-vazio;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3830086706,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "usuario acessa o site",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que o usuario acessa o site da amazon",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "verifica se o url da acesso ao site amazon",
  "keyword": "Entao "
});
formatter.match({
  "location": "BuscaSteps.queOUsuarioAcessaOSiteDaAmazon()"
});
formatter.result({
  "duration": 7304867368,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.verificaSeOUrlDaAcessoAoSiteAmazon()"
});
formatter.result({
  "duration": 1880613,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps.BuscaSteps.verificaSeOUrlDaAcessoAoSiteAmazon(BuscaSteps.java:27)\n\tat ✽.Entao verifica se o url da acesso ao site amazon(src/test/resources/features/pesquisa.feature:11)\n",
  "status": "pending"
});
formatter.scenario({
  "line": 19,
  "name": "campo de busca vazio",
  "description": "",
  "id": ";campo-de-busca-vazio;campo-de-busca-vazio;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "o usuario faz a busca com \"         \"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "o sistema vai permanecer na pagina",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "         ",
      "offset": 27
    }
  ],
  "location": "BuscaSteps.oUsuarioFazABuscaCom(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuscaSteps.oSistemaVaiPermanecerNaPagina()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 138159017,
  "status": "passed"
});
});