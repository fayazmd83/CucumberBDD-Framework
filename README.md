Cucumber BDD Automation Framework for Comparethemarket.com

============================================================================================================================

###About the framework:

This framework has been implemented using Selenium Web Driver, Java and  Cucumber (BDD).
It utilizes the following concepts:

+ Behaviour driven development (BDD)
+ Feature files, scenarios, hooks, step definitions, annotations etc.
+ Inheritance, different wait statements (used both implicit and explicit waits) etc.
 

###In order to run this project you need to have below tools and meet these requirements:

A) Tools:
1. Junit
2. Cucumber-JVM
3. Selenium Web Driver
4. JAVA jdk1.8.0_73
5. Eclipse Neon.2 Release (4.6.2)


B) Dependencies (versions in POM file):
1. selenium-java 3.0.1
2. Junit 4.12
3. cucumber junit 1.2.2 
4. cucumber java 1.2.2

C) Plugins:
1. Cucumber feature file editor (optional for eclipse)
2. Eclipse plugin for Cucumber(for eclipse)
3. Maven (for eclipse)

D) Browser:
Chrome 55.0.2883.87 
chromedriver_win32

E) Operating System:
Windows 7 Professional service pack 1, 64- bit


###Project:
The objective of this project is to make sure all functionality works as expected and is not broken anywhere in
any of the workflows mentioned below.


Test covers 3 important business scenarios each covering test cases tagged to 
a path. 1) Happy Path 2) Unhappy Path  3) Combination Path

+ Happy path- This covers positive cases where user navigates to the url, enters all valid details, 
then checks for successful mesage and finally verifies the result page. {14 test cases}

+ Unhappy path- This covers negative cases where user navigates to required url, inputs 
invalid criteria then verify appropriate error message shown. Note this is the only scenario which will not
cover verification of results page. {7 cases}

+ Combination path- This covers combination of both the above cases, here we do various invalid and valid checks
to make sure functionality is not broken. {23 cases}

###A total of 44 steps are present in all 3 scenarios. 
[29 cases are actually covered and 15 cases have been reused]



###Step-by-step instructions to set up the framework and get the scripts running:

1. Checkout/clone the project  from Github public repository [my_repo] (https://github.com/fayazmd83/CucumberBDD-Framework.git)

2. Download and install all the tools and dependencies mentioned in sections A-E. Start by installing Java JDK 
   and make sure to set [JAVA_HOME] and [PATH] variables and then type java -version , javac commands in command prompt just to confirm 
   Java is properly installed.

3. Install Eclipse. Get latest version from [here] (http://www.eclipse.org/downloads)

4. Download chromedriver for selenium from [here] (http://chromedriver.storage.googleapis.com/index.html?path=2.25/), extract and save      it in some location like D:\users\ .. that you can remember.
   Note that you need to use this location later in your stepdefinition class using System.setProperty followed by
   instantiating the ChromeDriver class. 
5. Run eclipse, install required maven and cucumber plugins by going to Help-> Install new software 
   add locations- http://download.eclipse.org/technology/m2e/releases/ and http://cucumber.github.com/cucumber-eclipse/update-site
   Restart eclipse after this.

6. In eclipse, create a new maven project then go to the POM file and add dependencies as mentioned in my POM file.
   Just add 4 dependencies mentioned in Section B and rest of the dependencies will be added automatically.
   Right click on main project folder in my case com.CompareTM, then run as Maven Test and make sure there are no build errors.
   once you get Build success messsage proceed to the next step.

   **Tip: Ensure you have same versions for cucumber dependency. For eg. if you're using cucumber-java 1.2.2 then use cucumber-junit               1.2.2 version. if you use different versions errors may be encountered.

7. Next thing will be to set up your project structure (packages, folders & classes). Right click on the project add new folder and        inside it create a new  feature file (right click on new folder new->file and give any name with .feature extension)
   In src->test>java add new packages(pom, runner, stepdefinition) and add your java classes in there. Go with TestRunner class creation    first, add features, tags and plugin details in @cucumber.options and finally create other java classes similar to what I have          created in my project.

   An easier option will be to import my project. Simply right click on the source folder and navigate import->General->File system then 
   import my project compareTM.zip which you downloaded from my repo. Remember to extract the contents of compareTM.zip first on your      local drive.


8. Now its time to run the test! There are multiple ways to run, I would recommend you to run it from testrunner class because your
   feature, stepdefs and report formats all are declared in that, so reports may not get generated if we run through feature file.
   (Alternatively we can run this way, right click on feature file-> run as -> cucumber feature). 

9. The test will run and each time it will run in a new browser window, as we have already used setup and teardown functions in an          organised way. Each feature file scenarios will get executed and you will see junit runner pass results on the left hand pane, in        addition to this,the results in Console window and also in the saved reports (Test result and Reports section for more details).	
   There are 3 locations to see the test result.
	

###Test result and Reports:
Result reports will be located in the target folder, usually it will be in your workspace. Format specified in my runner file is json, html.
so In my case I can get the report from this location, (see zipped result_report attachment). 
C:\Users\mosherif\workspace\com.compareTM\target\json or access it from target folder in the eclipse project.


###Issues found:
There are 2 intermittent issues found during the test.
1.1) Follow the steps provided in scenarios happy path or combination path. It does not affect the 2nd scenario since this bug
is related to results page.

Repeat same flow multiple times atleast thrice and notice the final result page. Sometimes the header shows "Current Tariff and usage" and sometimes it shows "Your estimated  usage". Which one is correct? The behavior should be consistent when the actions performed on SUT are consistent. None of the steps have changed since the script uses same options but it is unable to identify element due to this conflict.

1.2) There is one more issue related to this one, There is difficulty in finding correct xpaths/selectors for headers in the 'Your results' page. I tried with all below in my script but only 2 seem to be working which are uncommented. The rest of them do not work due to the defect as described in 1.1, web driver fails to identity the object when other "current tariff and usage" text is shown.

  - for  "Your estimated usage"- 
   driver.findElement(By.className("mm_t61_summary_line"));
   wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//*[@id='page-container']/div[1]/div/h1")));  
  
  - for  "Current tariff" - 
  //driver.findElement(By.xpath("//*[@id='page-container']/div[1]/div/ul/li[4]/span"));
  //driver.findElement(By.CssSelector(".personal-projection-inner"));
  
  - for "Annual personal projection"
  //WebElement CurrTarriffWebElt = driver.findElement(By.cssSelector(".personal-projection-list"));
  //driver.findElement(By.xpath("html/body/div/div/main/section[1]/div/ul/li[3]")); 

2 ) This issue is not easily reproducible, sometimes even though the script clicks on next button the page does not proceed. 
I have tested this many times, it happens when we click manually  as well. So in 1 out of 10 attempts this issue can be occur. When I click on Next button, nothing happens.

Usually it is seen in "Your Energy" page where you enter electricity details like below before clicking next button
what electricity tariff you are on? 
How do you pay for your electricity?
what is your current electricity usage?

ps: I have found a workaround for this. Clear cookies, auto form data, basically everything in the browser history and re-run the test.
Seems to be a cache issue. 


That's the end of this ReadME! If you have any questions, please email me - fayaz.md83@gmail.com


