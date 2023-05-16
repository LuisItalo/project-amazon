package steps;

import basePages.BaseStep;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.CepPage;

import static entidades.TimerSleeper.timesleep;

public class CepSteps extends BaseStep {

    CepPage c = new CepPage(CepSteps.driver);


    @Dado("^que acesso a pagina da amazon$")
    public void queAcessoAPaginaDaAmazon() throws Throwable {
       c.abrindo_pagina();
       timesleep(4000);
    }

    @Quando("^coloco um cep invalido$")
    public void colocoUmCepInvalido() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Entao("^o sistema pede um cep valido$")
    public void oSistemaPedeUmCepValido() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }




}
