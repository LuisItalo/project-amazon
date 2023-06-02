package pageObjects;

import elementos.ElementosPesquisa;
import basePages.BasePage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static entidades.TimerSleeper.timesleep;

public class BuscaPage extends BasePage {

    public BuscaPage(WebDriver d) {
        super(d);
    }


    public void abrindo_pag(){
        driver.get(ElementosPesquisa.getUrl());
    }

    public boolean verif_pagina(){
        driver.findElement(ElementosPesquisa.verifica_pagina);
        return true;
    }

    public void busca(String busca){
        driver.findElement(ElementosPesquisa.barra_pesquisa).sendKeys(busca);
        timesleep(1000);
        driver.findElement(ElementosPesquisa.click_pesquisa).click();
    }

    public boolean verif_resultado_busca(){
        String verificacao = "Resultados";
        String texto = driver.findElement(ElementosPesquisa.verif_pag_resultado).getText();
        Assert.assertEquals(verificacao, texto);
        timesleep(1000);
        driver.findElement(ElementosPesquisa.lista_resultado);
        return true;
    }

    public boolean verif_resultado_invalido(){
        driver.findElement(ElementosPesquisa.resultado_inv);
        timesleep(1000);
        driver.findElement(ElementosPesquisa.resultado_inv2);
        timesleep(1000);
        return true;
    }

}
