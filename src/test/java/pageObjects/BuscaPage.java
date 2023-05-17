package pageObjects;

import Elementos.ElementosPesquisa;
import basePages.BasePage;
import org.openqa.selenium.WebDriver;

public class BuscaPage extends BasePage {

    public BuscaPage(WebDriver d) {
        super(d);
    }


    public void abrindo_pag(){

        driver.get(ElementosPesquisa.getUrl());
    }


}
