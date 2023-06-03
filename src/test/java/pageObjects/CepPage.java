package pageObjects;

import basePages.BasePage;
import elementos.ElementosCep;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static entidades.TimerSleeper.timesleep;

public class CepPage extends BasePage {

    public CepPage(WebDriver d) {
        super(d);
    }

    public void abrindo_pagina(){
        driver.get(ElementosCep.getUrl());
    }

    public void clica_Cep(){
        driver.findElement(ElementosCep.clicaCep).click();
    }

    public void preencheCep(String cep){
        driver.findElement(ElementosCep.digitaCep).sendKeys(cep);
        timesleep(1000);
        driver.findElement(ElementosCep.clicaConfirm).click();
        timesleep(2000);
    }

    public void verifica_cep(){
        String verif = "Insira um CEP válido";
        String texto = driver.findElement((ElementosCep.verificaCep)).getText();
        Assert.assertEquals(verif, texto);
    }


    public void confirma_cep1(){
        String verif = "41745001\u200C";
        String texto = driver.findElement((ElementosCep.confirmaCep)).getText();
        Assert.assertEquals(verif, texto);
        timesleep(1000);
    }
    public void confirma_cep2(){
        String verif = "30710010\u200C";
        String texto = driver.findElement((ElementosCep.confirmaCep)).getText();
        Assert.assertEquals(verif, texto);
        timesleep(1000);
    }
    public void confirma_cep3(){
        String verif = "59094330\u200C";
        String texto = driver.findElement((ElementosCep.confirmaCep)).getText();
        Assert.assertEquals(verif, texto);
        timesleep(1000);
    }

}
