$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cep.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "escolher cep",
  "description": "como usuario quero escolher cep\npara facilitar o frete",
  "id": "escolher-cep",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "cep em branco",
  "description": "",
  "id": "escolher-cep;cep-em-branco",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "deixo \u003ccep em branco\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.examples({
  "line": 26,
  "name": "lista em branco",
  "description": "",
  "id": "escolher-cep;cep-em-branco;lista-em-branco",
  "rows": [
    {
      "cells": [
        "cep em branco"
      ],
      "line": 27,
      "id": "escolher-cep;cep-em-branco;lista-em-branco;1"
    },
    {
      "cells": [
        "\" \""
      ],
      "line": 28,
      "id": "escolher-cep;cep-em-branco;lista-em-branco;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4439730664,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que acesso a pagina da amazon",
  "keyword": "Dado "
});
formatter.match({
  "location": "CepSteps.queAcessoAPaginaDaAmazon()"
});
formatter.result({
  "duration": 4830112153,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "cep em branco",
  "description": "",
  "id": "escolher-cep;cep-em-branco;lista-em-branco;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@teste2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "deixo \" \"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 7
    }
  ],
  "location": "CepSteps.deixo(String)"
});
formatter.result({
  "duration": 4133975862,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.oSistemaPedeUmCepValido()"
});
formatter.result({
  "duration": 110123918,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("URL ScreenShot: https://www.amazon.com.br/");
formatter.after({
  "duration": 556152990,
  "status": "passed"
});
formatter.after({
  "duration": 819721782,
  "status": "passed"
});
});