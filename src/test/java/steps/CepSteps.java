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
    public void queAcessoAPaginaDaAmazon() {
       c.abrindo_pagina();
       c.clica_Cep();
    }

    @Quando("^coloco um \"([^\"]*)\"$")
    public void coloco_um(String cep) throws Throwable {
        c.preencheCep(cep);
    }
    @Entao("^deve solicitar cep valido$")
    public void oSistemaPedeUmCepValido() throws Throwable {
        c.verifica_cep();
    }
    @Entao("^deve confirmar cep na pagina$")
    public void deve_confirmar_cep_na_pagina() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }




}
