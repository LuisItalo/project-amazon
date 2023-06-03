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
  "line": 31,
  "name": "cep valido",
  "description": "",
  "id": "escolher-cep;cep-valido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 30,
      "name": "@teste3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "digito \u003ccep valido\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "deve confirmar cep na pagina",
  "keyword": "Entao "
});
formatter.examples({
  "line": 35,
  "name": "cep valido",
  "description": "",
  "id": "escolher-cep;cep-valido;cep-valido",
  "rows": [
    {
      "cells": [
        "cep valido"
      ],
      "line": 36,
      "id": "escolher-cep;cep-valido;cep-valido;1"
    },
    {
      "cells": [
        "\"41745001\""
      ],
      "line": 37,
      "id": "escolher-cep;cep-valido;cep-valido;2"
    },
    {
      "cells": [
        "\"30710010\""
      ],
      "line": 38,
      "id": "escolher-cep;cep-valido;cep-valido;3"
    },
    {
      "cells": [
        "\"59094330\""
      ],
      "line": 39,
      "id": "escolher-cep;cep-valido;cep-valido;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4635477337,
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
  "duration": 6076512400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "cep valido",
  "description": "",
  "id": "escolher-cep;cep-valido;cep-valido;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 30,
      "name": "@teste3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "digito \"41745001\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "deve confirmar cep na pagina",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "41745001",
      "offset": 8
    }
  ],
  "location": "CepSteps.digito(String)"
});
formatter.result({
  "duration": 4846999532,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.deve_confirmar_cep_na_pagina()"
});
formatter.result({
  "duration": 198692,
  "status": "passed"
});
formatter.after({
  "duration": 3239317869,
  "status": "passed"
});
formatter.before({
  "duration": 1586509795,
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
  "duration": 5499612936,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "cep valido",
  "description": "",
  "id": "escolher-cep;cep-valido;cep-valido;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 30,
      "name": "@teste3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "digito \"30710010\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "deve confirmar cep na pagina",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "30710010",
      "offset": 8
    }
  ],
  "location": "CepSteps.digito(String)"
});
formatter.result({
  "duration": 4445820051,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.deve_confirmar_cep_na_pagina()"
});
formatter.result({
  "duration": 90931,
  "status": "passed"
});
formatter.after({
  "duration": 2330098032,
  "status": "passed"
});
formatter.before({
  "duration": 1528568440,
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
  "duration": 5461966063,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "cep valido",
  "description": "",
  "id": "escolher-cep;cep-valido;cep-valido;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 30,
      "name": "@teste3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "digito \"59094330\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "deve confirmar cep na pagina",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "59094330",
      "offset": 8
    }
  ],
  "location": "CepSteps.digito(String)"
});
formatter.result({
  "duration": 4443099790,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.deve_confirmar_cep_na_pagina()"
});
formatter.result({
  "duration": 167342,
  "status": "passed"
});
formatter.after({
  "duration": 3371289228,
  "status": "passed"
});
});