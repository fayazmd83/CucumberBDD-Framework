$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("compare.feature");
formatter.feature({
  "line": 1,
  "name": "As a consumer I want to compare the tariffs from different suppliers",
  "description": "",
  "id": "as-a-consumer-i-want-to-compare-the-tariffs-from-different-suppliers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5660431420,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Test for valid workflow",
  "description": "",
  "id": "as-a-consumer-i-want-to-compare-the-tariffs-from-different-suppliers;test-for-valid-workflow",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@happyPath"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to comparethemarket url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid postcode",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on find postcode button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "system validates postcode",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user selects electricity only option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user selects next option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user chooses next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user selects tariff options",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters valid email address",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "system validates email address",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user checks terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on go to prices",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user is shown results page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTestCompare.user_navigates_to_comparethemarket_url()"
});
formatter.result({
  "duration": 7700180821,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_valid_postcode()"
});
formatter.result({
  "duration": 271290064,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.clicks_on_find_postcode_button()"
});
formatter.result({
  "duration": 204208338,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_validates_postcode()"
});
formatter.result({
  "duration": 1483562908,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_electricity_only_option()"
});
formatter.result({
  "duration": 183926090,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_next_option()"
});
formatter.result({
  "duration": 268905961,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_electricity_usage()"
});
formatter.result({
  "duration": 903750502,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_next_button()"
});
formatter.result({
  "duration": 210627260,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_tariff_options()"
});
formatter.result({
  "duration": 634537056,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_valid_email_address()"
});
formatter.result({
  "duration": 314386683,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_validates_email_address()"
});
formatter.result({
  "duration": 192636357,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_checks_terms_and_conditions()"
});
formatter.result({
  "duration": 126599056,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_clicks_on_go_to_prices()"
});
formatter.result({
  "duration": 7059743504,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_is_shown_results_page()"
});
formatter.result({
  "duration": 10065982829,
  "status": "passed"
});
formatter.after({
  "duration": 2099829205,
  "status": "passed"
});
formatter.before({
  "duration": 4219680932,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test for invalid postcode workflow",
  "description": "",
  "id": "as-a-consumer-i-want-to-compare-the-tariffs-from-different-suppliers;test-for-invalid-postcode-workflow",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@unhappyPath"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user navigates to comparethemarket url",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user enters invalid postcode",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "clicks on find postcode button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "system checks invalid postcode",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user chooses no bill option",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user selects gas only option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should not be allowed to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTestCompare.user_navigates_to_comparethemarket_url()"
});
formatter.result({
  "duration": 5796926480,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_invalid_postcode()"
});
formatter.result({
  "duration": 259204159,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.clicks_on_find_postcode_button()"
});
formatter.result({
  "duration": 208189869,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_checks_invalid_postcode()"
});
formatter.result({
  "duration": 155433290,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_no_bill_option()"
});
formatter.result({
  "duration": 138131170,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_gas_only_option()"
});
formatter.result({
  "duration": 195001908,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_should_not_be_allowed_to_next_page()"
});
formatter.result({
  "duration": 104322688,
  "status": "passed"
});
formatter.after({
  "duration": 2206894796,
  "status": "passed"
});
formatter.before({
  "duration": 4182093014,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Test for valid and invalid cases",
  "description": "",
  "id": "as-a-consumer-i-want-to-compare-the-tariffs-from-different-suppliers;test-for-valid-and-invalid-cases",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@combinationPath"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user navigates to comparethemarket url",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user enters valid postcode",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "clicks on find postcode button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "system validates postcode",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user chooses no bill option",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user selects gas only option",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user chooses I dont know option",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user selects next options",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user chooses quarterly from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user chooses next button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "system gives error message",
  "keyword": "But "
});
formatter.step({
  "line": 45,
  "name": "user enters corresponding value for quarterly option",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user chooses next button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user selects variable tariff option",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user selects quarterly direct option",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user enters invalid email address",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "system checks invalid email address",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user enters valid email address",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "system validates email address",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user opts for company updates",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user checks terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user clicks on go to prices",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user is shown results page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTestCompare.user_navigates_to_comparethemarket_url()"
});
formatter.result({
  "duration": 10793582420,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_valid_postcode()"
});
formatter.result({
  "duration": 257242010,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.clicks_on_find_postcode_button()"
});
formatter.result({
  "duration": 227184149,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_validates_postcode()"
});
formatter.result({
  "duration": 1541928843,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_no_bill_option()"
});
formatter.result({
  "duration": 249917603,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_gas_only_option()"
});
formatter.result({
  "duration": 236576885,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_I_dont_know_option()"
});
formatter.result({
  "duration": 65008267,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_next_options()"
});
formatter.result({
  "duration": 240935374,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_quarterly_from_dropdown()"
});
formatter.result({
  "duration": 618723817,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_next_button()"
});
formatter.result({
  "duration": 265374803,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_gives_error_message()"
});
formatter.result({
  "duration": 280038619,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_corresponding_value_for_quarterly_option()"
});
formatter.result({
  "duration": 264224987,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_chooses_next_button()"
});
formatter.result({
  "duration": 186029153,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_variable_tariff_option()"
});
formatter.result({
  "duration": 492266860,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_selects_quarterly_direct_option()"
});
formatter.result({
  "duration": 179969820,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_invalid_email_address()"
});
formatter.result({
  "duration": 518605284,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_checks_invalid_email_address()"
});
formatter.result({
  "duration": 228301598,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_enters_valid_email_address()"
});
formatter.result({
  "duration": 253975315,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.system_validates_email_address()"
});
formatter.result({
  "duration": 201694371,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_opts_for_company_updates()"
});
formatter.result({
  "duration": 117687877,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_checks_terms_and_conditions()"
});
formatter.result({
  "duration": 134607908,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTestCompare.user_clicks_on_go_to_prices()"
});
formatter.result({
  "duration": 33234278830,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[@id\u003d\u0027price-page-loading-spinner\u0027]/div[2]/header/h3 (tried for 30 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LUK-PBA4HG7\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\mosherif\\AppData\\Local\\Temp\\scoped_dir13452_3857}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4ac432b6178698cbd61c5832c33d0eeb\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:265)\r\n\tat pom.MainPage.clickGoToPrices(MainPage.java:115)\r\n\tat stepDefinition.SmokeTestCompare.user_clicks_on_go_to_prices(SmokeTestCompare.java:100)\r\n\tat ✽.When user clicks on go to prices(compare.feature:55)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027price-page-loading-spinner\u0027]/div[2]/header/h3\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027LUK-PBA4HG7\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\mosherif\\AppData\\Local\\Temp\\scoped_dir13452_3857}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4ac432b6178698cbd61c5832c33d0eeb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027price-page-loading-spinner\u0027]/div[2]/header/h3}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat pom.MainPage.clickGoToPrices(MainPage.java:115)\r\n\tat stepDefinition.SmokeTestCompare.user_clicks_on_go_to_prices(SmokeTestCompare.java:100)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SmokeTestCompare.user_is_shown_results_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1956651550,
  "status": "passed"
});
});