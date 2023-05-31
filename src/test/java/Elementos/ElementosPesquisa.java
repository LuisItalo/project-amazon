package Elementos;

import org.openqa.selenium.By;

public class ElementosPesquisa {

    private static String url = "https://www.amazon.com.br/";

    public static By verifica_pagina = By.cssSelector("a[aria-label='Amazon.com.br']");

    public static By barra_pesquisa = By.cssSelector("input[id='twotabsearchtextbox']");

    public static By click_pesquisa = By.cssSelector("input[id*='search-submit']");

    public static By verif_pag_resultado = By.cssSelector("span[class='a-size-medium-plus a-color-base a-text-bold']");

    public static By lista_resultado = By.cssSelector("div[data-index='7']");

    public static By resultado_inv = By.cssSelector("div[class='a-row']");

    public static By resultado_inv2 = By.xpath("//span[text()='Nenhum resultado para ']");




    public static String getUrl() {
        return url;
    }
}
