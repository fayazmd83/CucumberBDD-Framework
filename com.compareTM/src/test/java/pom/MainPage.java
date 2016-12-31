/*=====================================================================================================================
Title: 		 	CompareTheMarket Automation Test
File info: 		MainPage.java class 
Description:  	This class contains the logic that covers 3 important workflows for 
 				happy path, unhappy path and combination path.
Author: 		Fayazuddin Sheriff Mohammed
Date: 			28/12/2016
Version:	    1.0
Notes:			There are 2 issues out of which one is frequently reproducible, please check ReadME file for more details.
                 So one test case may fail 'Then user is shown results page'.
=======================================================================================================================*/
package pom;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MainPage extends AbstractPage {

	public MainPage(WebDriver driver) {
		super(driver);
	}

	WebDriverWait wait = new WebDriverWait(driver, 30);

	// HAPPY Path Methods Start from here
	public MainPage enterValidPostcode() {
		driver.findElement(By.id("your-postcode")).sendKeys("PE2 6YS");
		return new MainPage(driver);
	}

	public MainPage clickFindPostcode() {
		driver.findElement(By.id("find-postcode")).click();
		return new MainPage(driver);

	}

	public MainPage sysChecksValidPostcode() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("change-postcode")));
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		String postcodesuccess = "Change postcode";
		WebElement textwb = driver.findElement(By.id("change-postcode"));
		String actText = textwb.getText();
		if (actText.equals(postcodesuccess)) {
			System.out.println(actText + " is successfully verified");
		} else {
			System.out.println(actText + " is NOT verified");
		}
		return new MainPage(driver);
	}

	public MainPage selectElectricityOnly() {
		driver.findElement(By.cssSelector(".energy-electricity")).click();
		return new MainPage(driver);
	}

	public MainPage selectNextOption() {
		driver.findElement(By.id("goto-your-supplier-details")).click();
		return new MainPage(driver);
	}

	public MainPage enterElectricityUsage() {
		wait.until(ExpectedConditions.elementToBeClickable(By.id("electricity-usage")));
		WebElement electusagebox = driver.findElement(By.id("electricity-usage"));
		electusagebox.sendKeys("4500");
		return new MainPage(driver);
	}

	public MainPage chooseNextButton() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='goto-your-energy']")).click();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		return new MainPage(driver);
	}

	public MainPage selectTariffoptions() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".fixed-rate-1")));
		driver.findElement(By.cssSelector(".fixed-rate-1")).click();
		driver.findElement(By.cssSelector(".payment-all")).click();
		return new MainPage(driver);
	}

	public MainPage enterEmailAddress() {
		driver.findElement(By.id("Email")).clear();
		driver.findElement(By.id("Email")).sendKeys("fayaz1234@gmail.com");
		return new MainPage(driver);
	}

	public MainPage validateEmailAddress() {
		driver.findElement(By.id("Email")).sendKeys(Keys.TAB);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		WebElement emailTick = driver.findElement((By.id("email")));

		if (emailTick.isDisplayed()) {
			System.out.println(" Email address is successfully verified");
		} else {
			System.out.println("Email address is NOT verified");
		}
		return new MainPage(driver);
	}

	public MainPage checkTermsAndCondition() {
		driver.findElement(By.id("terms-label")).click();
		return new MainPage(driver);

	}

	public MainPage clickGoToPrices() {
		driver.findElement(By.id("email-submit")).click();
		// driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		wait.until(ExpectedConditions
				.visibilityOfElementLocated(By.xpath("//*[@id='price-page-loading-spinner']/div[2]/header/h3")));
		WebElement pricewb = driver.findElement(By.xpath("//*[@id='price-page-loading-spinner']/div[2]/header/h3"));

		String pricesearchTxt = pricewb.getText();
		System.out.println(pricesearchTxt + " text is successfully verified");
		return new MainPage(driver);
	}

	public MainPage verifyResultsPage() {
		String expText1 = "Annual personal projection";
		String expText2 = "Payment method";

		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("price-page-loading-spinner")));
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		WebElement summaryLine = driver.findElement(By.className("mm_t61_summary_line"));

		String summaryLineTxt = summaryLine.getText();
		System.out.println(summaryLineTxt + " text is verified successfully in result page");
		if (summaryLineTxt.contains(expText1)) {
			System.out.println(expText1 + " text is verified successfully in result page");
		} else {
			System.out.println(expText1 + " text is NOT verified in result page");
		}

		if (summaryLineTxt.contains(expText2)) {
			System.out.println(expText2 + " text is verified successfully in result page");
		} else {
			System.out.println(expText2 + " text is NOT verified in result page");
		}

		return new MainPage(driver);
	}

	// UNHAPPY Path methods start from here
	public MainPage enterInvalidPostcode() {
		driver.findElement(By.id("your-postcode")).sendKeys("IJK *&^");
		return new MainPage(driver);
	}

	public MainPage sysChecksInvalidPostcode() {
		String postcodefailure = "Your postcode has not been recognised, please check you have entered it correctly and if you still need help call the switching support team on 0800 093 6831";
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".error")));
		WebElement errormsgwb = driver.findElement(By.cssSelector(".error"));
		String errText = errormsgwb.getText();
		System.out.println(errText);
		if (errText.contains(postcodefailure)) {
			System.out.println("Invalid postcode message is successfully verified");
		} else {
			System.out.println("Invalid postcode message is NOT verified");
		}

		return new MainPage(driver);
	}

	public MainPage chooseNoBill() {
		driver.findElement(By.cssSelector(".have-bill-no")).click();
		return new MainPage(driver);
	}

	public MainPage chooseGasOnly() {
		driver.findElement(By.cssSelector(".energy-gas")).click();
		return new MainPage(driver);
	}

	public MainPage nextNotAllowed() {

		WebElement nextButton = driver.findElement(By.id("goto-your-supplier-details"));

		boolean flag = nextButton.isEnabled();
		System.out.println("Status of flag is: " + flag);

		if (flag != true) {
			System.out.println("The next button is grayed out as expected");
		} else {
			System.out.println("The next button is NOT grayed out");
		}

		return new MainPage(driver);
	}

	// Combination path methods start from here

	public MainPage chooseIDontKnow() {
		driver.findElement(By.id("gas-energy-suppliers-question"));
		return new MainPage(driver);
	}

	public MainPage selectNextOptions() {
		driver.findElement(By.id("goto-your-supplier-details")).click();
		return new MainPage(driver);
	}

	public MainPage chooseQuarterlyDropdown() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='gas-current-spend-period']")));
		WebElement QuarterlyDropdown = driver.findElement(By.xpath("//*[@id='gas-current-spend-period']"));
		Select dropDown = new Select(QuarterlyDropdown);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		dropDown.selectByVisibleText("Quarterly");
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		return new MainPage(driver);
	}

	public MainPage sysErrorMessage() {
		String ExpErrormsg = "Complete this section to continue 1 question remaining";
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("get-started-view-status")));
		WebElement textwb = driver.findElement(By.id("get-started-view-status"));
		if (textwb.isDisplayed()) {

			String errormsg = textwb.getText();
			if (errormsg.contains(ExpErrormsg)) {
				System.out.println("Error message for missing gas spend is successfully verified");
			} else {
				System.out.println("Error message for missing gas spend is NOT verified");
			}

		} else {
			System.out.println("There is something wrong! Error message for missing gas spend could NOT be verified");

		}
		return new MainPage(driver);
	}

	public MainPage correspQuarterlyOption() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("gas-current-spend")));
		driver.findElement(By.id("gas-current-spend")).sendKeys("360");
		return new MainPage(driver);
	}

	public MainPage selectVariableTariff() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".variable-bill-1")));
		driver.findElement(By.cssSelector(".variable-bill-1")).click();
		return new MainPage(driver);
	}

	public MainPage selectQuarterlyDirectly() {
		driver.findElement(By.cssSelector(".quarterly-1")).click();
		return new MainPage(driver);
	}

	public MainPage enterInvalidEmailAddress() {
		driver.findElement(By.id("Email")).clear();
		driver.findElement(By.id("Email")).sendKeys("123*&*hotmail");
		return new MainPage(driver);
	}

	public MainPage sysChecksInvalidEmailAdd() {
		String ExpEmailErrMsg = "Your email doesn’t appear to be valid. please check you have entered it correctly";
		driver.findElement(By.id("Email")).sendKeys(Keys.TAB);
		WebElement emailErrorMsg = driver.findElement(By.cssSelector(".error"));
		String ActErrorMsg = emailErrorMsg.getText();
		if (ActErrorMsg.contains(ExpEmailErrMsg)) {
			System.out.println("Error message for invalid Email is successfully verified");
		} else {
			System.out.println("Error message for invalid Email is NOT verified");
		}

		return new MainPage(driver);
	}

	public MainPage optForCompanyUpdates() {
		driver.findElement(By.id("marketingT")).click();
		return new MainPage(driver);
	}

}
