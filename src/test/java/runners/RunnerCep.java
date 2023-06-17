package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/cep.feature",
        glue = "steps",
        tags = "@teste2",
        plugin = {"pretty", "html:target/report_html_cep"},
        monochrome = true,
        snippets = SnippetType.CAMELCASE,
        dryRun = false
)






public class RunnerCep {
}
