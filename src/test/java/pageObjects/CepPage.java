package pageObjects;

import basePages.BasePage;
import Elementos.ElementosCep;
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

    public void digita_cep(){
        driver.findElement((ElementosCep.digitaCep)).sendKeys("789412");
    }
    public void clica_confirm(){
        driver.findElement((ElementosCep.clicaConfirm)).click();
    }
    public void verifica_cep(){
        String verif = "Insira um CEP válido";
        String texto = driver.findElement((ElementosCep.verificaCep)).getText();
        Assert.assertEquals(verif, texto);


    }

}
