Feature: Amazon Login Feature Test

	@Smoke @Regression
	Scenario: Login with correct username and password   #given when then as but all are keywords
	Given user is on the loginpage
	When title of the LoginPage is amazon.in
	Then user clicks on SignIn Button
	Then user enters username and password
	And user clicks on the Login Button
	Then user should land on Homepage
	
	
	@EndToEnd
	Scenario: Login with incorrect username and password
	Given user is on the loginpage
	Then user enters incorrect username and password
	And user clicks on the Login Button
	Then user should not be navigated to HomePage

