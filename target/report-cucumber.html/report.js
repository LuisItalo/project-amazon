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
  "description": "como cliente desejo escolher cep\npara facilitar frete",
  "id": "escolher-cep",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "cep invalido",
  "description": "",
  "id": "escolher-cep;cep-invalido",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou no site da amazom",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "digito cep invalido",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "pede cep válido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CepSteps.queEstouNoSiteDaAmazom()"
});
formatter.result({
  "duration": 504619953,
  "error_message": "java.lang.NullPointerException\n\tat pageObjects.PesquisaPage.abrindo_pagina(PesquisaPage.java:17)\n\tat steps.CepSteps.queEstouNoSiteDaAmazom(CepSteps.java:18)\n\tat ✽.Dado que estou no site da amazom(src/test/resources/features/cep.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "CepSteps.digitoCepInvalido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CepSteps.pedeCepVálido()"
});
formatter.result({
  "status": "skipped"
});
});