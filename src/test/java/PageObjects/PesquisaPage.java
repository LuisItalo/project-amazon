package PageObjects;

import BasePages.BasePage;
import org.openqa.selenium.WebDriver;

import static Entidades.TimerSleeper.timesleep;
import Elementos.ElementosPesquisa;

public class PesquisaPage extends BasePage {


    public PesquisaPage(WebDriver d) {
        super(d);
    }

    public void abrindo_pagina(){
        driver.get(ElementosPesquisa.getUrl());
        timesleep(1000);
    }

}
