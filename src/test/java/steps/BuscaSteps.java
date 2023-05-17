package steps;

import basePages.BaseStep;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.BuscaPage;

import static entidades.TimerSleeper.timesleep;

public class BuscaSteps extends BaseStep {


    BuscaPage busca = new BuscaPage(BuscaSteps.driver);


    @Dado("^que o usuario acessa o site da amazon$")
    public void queOUsuarioAcessaOSiteDaAmazon() throws Throwable {
        busca.abrindo_pag();
        timesleep(2000);
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
