package steps;

import BasePages.BaseStep;
import PageObjects.pesquisaPage;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;

import static Entidades.TimerSleeper.timesleep;

public class pesquisaSteps extends BaseStep {

    pesquisaPage p = new pesquisaPage(pesquisaSteps.driver);

    @Dado("^que o usuario acessa o site da amazon$")
    public void queOUsuarioAcessaOSiteDaAmazon() throws Throwable {
        p.abrindo_pagina();
        timesleep(1000);
    }

    @Entao("^verifica se o url da acesso ao site amazon$")
    public void verificaSeOUrlDaAcessoAoSiteAmazon() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Quando("^o usuario faz a busca com \"([^\"]*)\"$")
    public void oUsuarioFazABuscaCom(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Entao("^o sistema vai permanecer na pagina$")
    public void oSistemaVaiPermanecerNaPagina() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


}
