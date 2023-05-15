package pageObjects;

import basePages.BasePage;
import elementos.ElementosPesquisa;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class PesquisaPage extends BasePage {
    public PesquisaPage(WebDriver d) {
        super(d);
    }

    WebDriver driver = new ChromeDriver();


    public void abrindo_pagina(){
        driver.get(ElementosPesquisa.getUrl());
    }
}
