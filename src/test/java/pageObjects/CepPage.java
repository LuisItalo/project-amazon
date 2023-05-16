package pageObjects;

import basePages.BasePage;
import elementos.ElementosCep;
import org.openqa.selenium.WebDriver;

public class CepPage extends BasePage {

    public CepPage(WebDriver d) {
        super(d);
    }

    public void abrindo_pagina(){
        driver.get(ElementosCep.getUrl());
    }



}
