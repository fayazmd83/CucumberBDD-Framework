package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Features", glue = { "stepDefinition" }, 
		tags = {"@happyPath, @unhappyPath, @combinationPath" },
		plugin = { "pretty", "json:target/json/output.json","html:target/html" }
		)
public class TestRunner {

}
