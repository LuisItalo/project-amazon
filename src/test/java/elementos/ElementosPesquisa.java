package elementos;


import org.openqa.selenium.By;

public class ElementosPagina {

    private static String url = "https://www.amazon.com.br/";
    private By clicaCep = By.id("[glow-ingress-line1]");


    public static String getUrl() {
        return url;
    }
}
