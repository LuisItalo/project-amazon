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
formatter.before({
  "duration": 6883001125,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "cep com letras",
  "description": "",
  "id": "escolher-cep;cep-com-letras",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 19,
      "name": "@teste3"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "que acesso a pagina da amazon",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "digito um cep com letras",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "deve solicitar cep valido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CepSteps.queAcessoAPaginaDaAmazon()"
});
formatter.result({
  "duration": 10582040261,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.digito_um_cep_com_letras()"
});
formatter.result({
  "duration": 3048610926,
  "status": "passed"
});
formatter.match({
  "location": "CepSteps.oSistemaPedeUmCepValido()"
});
formatter.result({
  "duration": 232684032,
  "status": "passed"
});
formatter.after({
  "duration": 1341304390,
  "status": "passed"
});
});