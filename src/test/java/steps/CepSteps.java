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

    @Quando("^digito um \"([^\"]*)\"$")
    public void coloco_um(String cep) throws Throwable {
        c.preencheCep(cep);
    }

    @Quando("^deixo \"([^\"]*)\"$")
    public void deixo(String cep) throws Throwable {
        c.preencheCep(cep);
    }

    @Quando("^digito \"([^\"]*)\"$")
    public void digito(String cep) throws Throwable {
      c.preencheCep(cep);
    }

    @Entao("^deve solicitar cep valido$")
    public void oSistemaPedeUmCepValido() throws Throwable {
        c.verifica_cep();
    }
    @Entao("^deve confirmar cep na pagina$")
    public void deve_confirmar_cep_na_pagina() throws Throwable {
        boolean cep1 = Boolean.parseBoolean("41745001");
        boolean cep2 = Boolean.parseBoolean("30710010");
        boolean cep3 = Boolean.parseBoolean("59094330");
        if(cep1){
            c.confirma_cep1();
        } else if (cep2) {
            c.confirma_cep2();
        } else if (cep3){
            c.confirma_cep3();
        }
    }
}
