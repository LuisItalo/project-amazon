package steps;

import basePages.BaseStep;
import cucumber.api.Scenario;
import org.junit.After;
import org.junit.Before;

public class hook {
    @Before
    public void BeforeAllTest() throws Throwable {
        BaseStep.abrindo_nav();
    }

    @After
    public void AfterAllTest(Scenario scenario) throws Throwable {
        BaseStep.Screenshot("Fim do test/"+ scenario.getId());
        BaseStep.saindo_nav();
    }
}
