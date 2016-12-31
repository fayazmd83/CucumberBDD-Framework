package pom;

import org.openqa.selenium.WebDriver;

public class AbstractPage {
	protected WebDriver driver;

	public AbstractPage(WebDriver driver) {
		this.driver = driver;
	}

	public MainPage navigateToCTM() {
		driver.navigate().to("https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TST");
		return new MainPage(driver);
	}

	public void closeDriver() {
		driver.quit();
	}

}
