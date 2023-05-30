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
    }

    @Quando("^coloco um cep invalido$")
    public void colocoUmCepInvalido() throws Throwable {
        c.digita_cep_inval();
        c.clica_confirm();
        timesleep(2000);
    }
    @Quando("^colo um cep com caracteres especiais$")
    public void colo_um_cep_com_caracteres_especiais() throws Throwable {
        c.digita_cep_esp();
        timesleep(2000);
        c.clica_confirm();

    }

    @Quando("^digito um cep com letras$")
    public void digito_um_cep_com_letras() throws Throwable {
        c.digita_cep_let();
        timesleep(2000);
        c.clica_confirm();
    }

    @Quando("^deixo em branco o cep$")
    public void deixo_em_branco_o_cep() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Quando("^digito cep valido$")
    public void digito_cep_valido() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
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
