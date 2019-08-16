package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
	features ="C:\\Users\\B MALATHI\\eclipse-workspace\\SeleniumRelated\\Tests\\src\\main\\java\\com\\qa\\cucumber\\TagsHooksPageObjectModel\\Tests", // specify the path of the feature files
	glue= {"stepDefintions"}, // specify the path of the step definitions file
	plugin= {"pretty", "html:test-ouput","json: json-output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
	monochrome= true, //display console output in a proer readable format
	strict = false,  // It will check if any step is not defined in the step definitions file
	dryRun= true //to check the mapping is proper between the stepdefintiions and the feature files
)

public class TestRunner {

}
