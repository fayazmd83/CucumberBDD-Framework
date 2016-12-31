package stepDefinition;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pom.MainPage;

public class SmokeTestCompare {
	WebDriver driver;
	MainPage mainPage;

	@Before
	public void functionSetUp() {
		System.out.print("Test has started");
		System.setProperty("webdriver.chrome.driver",
				"D:\\Users\\mosherif\\Downloads\\Selenium_Downloads\\chromedriver_win32-Extracted\\chromedriver.exe");
		driver = new ChromeDriver();
	}

	@After
	public void functionTearDown() {
		System.out.println("Test has ended");
		driver.quit();
	}

	// Happy path steps start from here
	@Given("^user navigates to comparethemarket url$")
	public void user_navigates_to_comparethemarket_url() throws Throwable {
		driver.get("https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TST");
		driver.manage().window().maximize();
		mainPage = new MainPage(driver);
	}

	@When("^user enters valid postcode$")
	public void user_enters_valid_postcode() throws Throwable {
		mainPage.enterValidPostcode();

	}

	@And("^clicks on find postcode button$")
	public void clicks_on_find_postcode_button() throws Throwable {
		mainPage.clickFindPostcode();

	}

	@Then("^system validates postcode$")
	public void system_validates_postcode() throws Throwable {
		mainPage.sysChecksValidPostcode();

	}

	@And("^user selects electricity only option$")
	public void user_selects_electricity_only_option() throws Throwable {
		mainPage.selectElectricityOnly();
	}

	@Then("^user selects next option$")
	public void user_selects_next_option() throws Throwable {
		mainPage.selectNextOption();
	}

	@And("^user enters electricity usage$")
	public void user_enters_electricity_usage() throws Throwable {
		mainPage.enterElectricityUsage();
	}

	@And("^user chooses next button$")
	public void user_chooses_next_button() throws Throwable {
		mainPage.chooseNextButton();
	}

	@And("^user selects tariff options$")
	public void user_selects_tariff_options() throws Throwable {
		mainPage.selectTariffoptions();
	}

	@When("^user enters valid email address$")
	public void user_enters_valid_email_address() throws Throwable {
		mainPage.enterEmailAddress();
	}

	@Then("^system validates email address$")
	public void system_validates_email_address() throws Throwable {
		mainPage.validateEmailAddress();
	}

	@And("^user checks terms and conditions$")
	public void user_checks_terms_and_conditions() throws Throwable {
		mainPage.checkTermsAndCondition();
	}

	@When("^user clicks on go to prices$")
	public void user_clicks_on_go_to_prices() throws Throwable {
		mainPage.clickGoToPrices();
	}

	@Then("^user is shown results page$")
	public void user_is_shown_results_page() throws Throwable {
		mainPage.verifyResultsPage();
	}

	// Unhappy Path steps start from here
	@When("^user enters invalid postcode$")
	public void user_enters_invalid_postcode() throws Throwable {
		mainPage.enterInvalidPostcode();

	}

	@Then("^system checks invalid postcode$")
	public void system_checks_invalid_postcode() throws Throwable {
		mainPage.sysChecksInvalidPostcode();

	}

	@When("^user chooses no bill option$")
	public void user_chooses_no_bill_option() throws Throwable {
		mainPage.chooseNoBill();
	}

	@When("^user selects gas only option$")
	public void user_selects_gas_only_option() throws Throwable {
		mainPage.chooseGasOnly();

	}

	@Then("^user should not be allowed to next page$")
	public void user_should_not_be_allowed_to_next_page() throws Throwable {
		mainPage.nextNotAllowed();
	}

	// STEPS for Combination path start from here

	@Then("^user chooses I dont know option$")
	public void user_chooses_I_dont_know_option() throws Throwable {
		mainPage.chooseIDontKnow();
	}

	@And("^user selects next options$")
	public void user_selects_next_options() throws Throwable {
		mainPage.selectNextOptions();
	}

	@Then("^user chooses quarterly from dropdown$")
	public void user_chooses_quarterly_from_dropdown() throws Throwable {
		mainPage.chooseQuarterlyDropdown();
	}

	@Then("^system gives error message$")
	public void system_gives_error_message() throws Throwable {
		mainPage.sysErrorMessage();
	}

	@Then("^user enters corresponding value for quarterly option$")
	public void user_enters_corresponding_value_for_quarterly_option() throws Throwable {
		mainPage.correspQuarterlyOption();
	}

	@Then("^user selects variable tariff option$")
	public void user_selects_variable_tariff_option() throws Throwable {
		mainPage.selectVariableTariff();
	}

	@Then("^user selects quarterly direct option$")
	public void user_selects_quarterly_direct_option() throws Throwable {
		mainPage.selectQuarterlyDirectly();
	}

	@When("^user enters invalid email address$")
	public void user_enters_invalid_email_address() throws Throwable {
		mainPage.enterInvalidEmailAddress();
	}

	@Then("^system checks invalid email address$")
	public void system_checks_invalid_email_address() throws Throwable {
		mainPage.sysChecksInvalidEmailAdd();

	}

	@Then("^user opts for company updates$")
	public void user_opts_for_company_updates() throws Throwable {
		mainPage.optForCompanyUpdates();

	}

}
