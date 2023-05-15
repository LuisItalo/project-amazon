package steps;

import basePages.BaseStep;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import baseObjects.Metodos;

public class CepSteps extends BaseStep {

    Metodos metCep = new Metodos(CepSteps.driver);
    private Object url;

    @Dado("^que estou no site da amazom$")
    public void queEstouNoSiteDaAmazom() throws Throwable {
        metCep.abrindo_pagina(url);
    }

    @Quando("^digito cep invalido$")
    public void digitoCepInvalido() throws Throwable {

    }

    @Entao("^pede cep válido$")
    public void pedeCepVálido() throws Throwable {

    }

}
