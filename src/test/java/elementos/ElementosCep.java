package elementos;

import org.openqa.selenium.By;

public class ElementosCep {

    private static String url = "https://www.amazon.com.br/";

    public static By clicaCep = By.cssSelector("a[id=\"nav-global-location-popover-link\"]");
    public static By digitaCep = By.cssSelector("input[class='a-declarative a-span7']");
    public static By clicaConfirm = By.cssSelector("div[role='button']");
    public static By verificaCep = By.xpath("//*[@id=\"GLUXZipError\"]/div/div/div");

    public static String getUrl() {
        return url;
    }
}
