Feature: As a consumer I want to compare the tariffs from different suppliers 

@happyPath 
Scenario: Test for valid workflow 
	Given user navigates to comparethemarket url 
	When user enters valid postcode 
	And clicks on find postcode button 
	Then system validates postcode 
	And user selects electricity only option 
	And user selects next option 
	And user enters electricity usage
	And user chooses next button 
	And user selects tariff options 
	When user enters valid email address 
	Then system validates email address 
	And user checks terms and conditions 
	When user clicks on go to prices 
	Then user is shown results page 
	
	
@unhappyPath 
Scenario: Test for invalid postcode workflow 
	Given user navigates to comparethemarket url 
	When user enters invalid postcode 
	And clicks on find postcode button 
	Then system checks invalid postcode 
	And user chooses no bill option 
	And user selects gas only option 
	Then user should not be allowed to next page 
	
	
@combinationPath 
Scenario: Test for valid and invalid cases 
	Given user navigates to comparethemarket url 
	When user enters valid postcode 
	And clicks on find postcode button 
	Then system validates postcode 
	And user chooses no bill option 
	And user selects gas only option 
	And user chooses I dont know option 
	And user selects next options 
	And user chooses quarterly from dropdown 
	And user chooses next button 
	But system gives error message 
	And user enters corresponding value for quarterly option 
	And user chooses next button 
	And user selects variable tariff option 
	And user selects quarterly direct option
	When user enters invalid email address 
	Then system checks invalid email address 
	When user enters valid email address 
	Then system validates email address 
	And user opts for company updates 
	And user checks terms and conditions
	When user clicks on go to prices 
	Then user is shown results page 
