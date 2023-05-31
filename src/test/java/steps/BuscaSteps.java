package steps;

import basePages.BaseStep;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import pageObjects.BuscaPage;

import static entidades.TimerSleeper.timesleep;

public class BuscaSteps extends BaseStep {


    BuscaPage b = new BuscaPage(BuscaSteps.driver);


    @Dado("^que o usuario acessa o site da amazon$")
    public void queOUsuarioAcessaOSiteDaAmazon() throws Throwable {
        b.abrindo_pag();
        timesleep(2000);
    }

    @Entao("^verifica se o url da acesso ao site amazon$")
    public void verificaSeOUrlDaAcessoAoSiteAmazon() throws Throwable {
        Assert.assertTrue(b.verif_pagina());
        timesleep(2000);
    }

    @Quando("^o usuario faz busca de um \"([^\"]*)\"$")
    public void oUsuarioFazBuscaDeUm(String valido) throws Throwable {
        b.busca(valido);
        timesleep(2000);
    }

    @Entao("^verifica o resultado da busca valida$")
    public void verificaOResultadoDaBuscaValida() throws Throwable {
        Assert.assertTrue(b.verif_resultado_busca());
        timesleep(2000);
    }

    @Quando("^o usuario faz a busca de um \"([^\"]*)\"$")
    public void oUsuarioFazABuscaDeUm(String invalido) throws Throwable {
        b.busca(invalido);
        timesleep(2000);
    }

    @Entao("^verifica o resultado invalido$")
    public void verificaOResultadoInvalido() throws Throwable {
        Assert.assertTrue(b.verif_resultado_invalido());
        timesleep(2000);
    }

    @Entao("^verifica o resultado dessa busca$")
    public void verificaOResultadoDessaBusca() throws Throwable {
        Assert.assertTrue(b.verif_resultado_busca());
        timesleep(2000);
    }

    @Quando("^o usuario faz a busca com \"([^\"]*)\"$")
    public void oUsuarioFazABuscaCom(String campovazio) throws Throwable {
        b.busca(campovazio);
        timesleep(2000);
    }

    @Entao("^o sistema vai permanecer na pagina$")
    public void oSistemaVaiPermanecerNaPagina() throws Throwable {
        Assert.assertTrue(b.verif_pagina());
        timesleep(2000);
    }


}
