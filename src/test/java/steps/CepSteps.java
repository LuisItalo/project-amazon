package steps;

import basePages.BaseStep;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.PesquisaPage;

import static entidades.TimerSleeper.timesleep;

public class CepSteps extends BaseStep {

    PesquisaPage cep = new PesquisaPage(CepSteps.driver);

    @Dado("^que estou no site da amazom$")
    public void queEstouNoSiteDaAmazom() throws Throwable {
        cep.abrindo_pagina();
        timesleep(1000);
    }

    @Quando("^digito cep invalido$")
    public void digitoCepInvalido() throws Throwable {
        throw new PendingException();
    }

    @Entao("^pede cep válido$")
    public void pedeCepVálido() throws Throwable {
        throw new PendingException();
    }

}
