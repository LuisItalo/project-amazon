package steps;


import basePages.BaseStep;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import static basePages.BaseStep.driver;

public class Hook {

    @Before
    public void BeforeAllTest() throws Throwable {
        BaseStep.abrindo_nav();
    }

    @After(order = 0)
    public void AfterAllTest(Scenario scenario) throws Throwable {
//        BaseStep.Screenshot("Fim do test/"+ scenario.getId());
        BaseStep.saindo_nav();
    }

    @After(order = 1)
    public void screenShotNow(Scenario scenario) {
        try {
            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
            scenario.write("URL ScreenShot: " + driver.getCurrentUrl());
        } catch (WebDriverException wde) {
            scenario.write("Embed ScreenShot " + wde.getMessage());
        } catch (ClassCastException cce) {
            cce.printStackTrace();
        }
    }
}
