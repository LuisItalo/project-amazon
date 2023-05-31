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
  "line": 11,
  "name": "cep invalido",
  "description": "",
  "id": "escolher-cep;cep-invalido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@teste1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "coloco um \u003ccep invalido\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "lista de ceps invalidos",
  "description": "",
  "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos",
  "rows": [
    {
      "cells": [
        "cep invalido"
      ],
      "line": 16,
      "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;1"
    },
    {
      "cells": [
        "\"789412\""
      ],
      "line": 17,
      "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;2"
    },
    {
      "cells": [
        "\"!@!@!@\""
      ],
      "line": 18,
      "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;3"
    },
    {
      "cells": [
        "\"aqswdefr\""
      ],
      "line": 19,
      "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 8591650295,
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
  "duration": 16162717240,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "cep invalido",
  "description": "",
  "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@teste1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "coloco um \"789412\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "789412",
      "offset": 11
    }
  ],
  "location": "CepSteps.coloco_um(String)"
});
formatter.result({
  "duration": 8386791431,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.oSistemaPedeUmCepValido()"
});
formatter.result({
  "duration": 180751644,
  "status": "passed"
});
formatter.after({
  "duration": 1552639885,
  "status": "passed"
});
formatter.before({
  "duration": 3031526460,
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
  "duration": 11857969459,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "cep invalido",
  "description": "",
  "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@teste1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "coloco um \"!@!@!@\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "!@!@!@",
      "offset": 11
    }
  ],
  "location": "CepSteps.coloco_um(String)"
});
formatter.result({
  "duration": 5383374997,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.oSistemaPedeUmCepValido()"
});
formatter.result({
  "duration": 137986748,
  "status": "passed"
});
formatter.after({
  "duration": 1207427415,
  "status": "passed"
});
formatter.before({
  "duration": 3026052365,
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
  "duration": 10883761695,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "cep invalido",
  "description": "",
  "id": "escolher-cep;cep-invalido;lista-de-ceps-invalidos;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@teste1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "coloco um \"aqswdefr\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "aqswdefr",
      "offset": 11
    }
  ],
  "location": "CepSteps.coloco_um(String)"
});
formatter.result({
  "duration": 5587998228,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.oSistemaPedeUmCepValido()"
});
formatter.result({
  "duration": 116404443,
  "status": "passed"
});
formatter.after({
  "duration": 1298598264,
  "status": "passed"
});
});