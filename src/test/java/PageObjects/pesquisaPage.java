package PageObjects;

import BasePages.BasePage;
import org.openqa.selenium.WebDriver;

import static Entidades.TimerSleeper.timesleep;
import Elementos.elementosPesquisa;

public class pesquisaPage extends BasePage {


    public pesquisaPage(WebDriver d) {
        super(d);
    }

    public void abrindo_pagina(){
        driver.get(elementosPesquisa.getUrl());
        timesleep(1000);
    }

}
