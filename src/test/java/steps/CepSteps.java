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
       c.clica_Cep();
       timesleep(2000);
    }

    @Quando("^coloco um cep invalido$")
    public void colocoUmCepInvalido() throws Throwable {
        c.digita_cep();
        c.clica_confirm();
        timesleep(2000);
    }

    @Entao("^o sistema pede um cep valido$")
    public void oSistemaPedeUmCepValido() throws Throwable {
        c.verifica_cep();
    }




}
