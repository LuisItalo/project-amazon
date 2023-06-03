package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/pesquisa.feature",
        glue = "steps",
        tags = "@tp4",
        //plugin = {"pretty", "html:target/report_html_busca"},
        monochrome = true,
        snippets = SnippetType.CAMELCASE,
        dryRun = false
)


public class RunnerPesquisa {
}
