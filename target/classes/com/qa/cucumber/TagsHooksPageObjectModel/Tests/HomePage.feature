Feature: HomePageTest 

	@Smoke @Regression
	Scenario: Verify HomePageTitle
	Given user logs in with correct username and password
	Then verify the homepage title

	@Smoke
	Scenario: Login with incorrect username and password
	Given this is a negative test case
	
	@Sanity
	Scenario: Verifying the Homepagetitle
	Given User logins with valid credentials
	Given User is on the Home Page
	
