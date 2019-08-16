package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefintion {

	
	WebDriver driver;
	
	@Given("user is on the loginpage")
	public void user_is_on_the_loginpage() {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\B MALATHI\\Documents\\SystemSoftwares\\Selenium\\chromedriver_win32\\chromedriver");
	    driver = new ChromeDriver();
		driver.get("www.amazon.in");
	}

	@When("title of the LoginPage is amazon.in")
	public void title_of_the_LoginPage_is_amazon_in() {
	    // Write code here that turns the phrase above into concrete actions
	  String title = driver.getTitle();
	  Assert.assertEquals("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",title);
	}

	@Then("user clicks on SignIn Button")
	public void user_clicks_on_SignIn_Button()
	{
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"nav-link-accountList\"]"))).build().perform();
		WebElement loginbutton = driver.findElement(By.xpath("//span[@class='nav-action-inner']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click", loginbutton);
		
	}
	@Then("user enters username and password")
	public void user_enters_username_and_password() {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.findElement(By.id("ap_email")).sendKeys("9652045289");
		driver.findElement(By.id("continue")).click();
		driver.findElement(By.name("password")).sendKeys("amazon@19");
	  
	}

	@Then("user clicks on the Login Button")
	public void user_clicks_on_the_Login_Button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("signInSubmit")).click();
	  
	}

	@Then("user should land on Homepage")
	public void user_should_land_on_Homepage() {
	    // Write code here that turns the phrase above into concrete actions
	   String homepagetitle = driver.getTitle();
	   Assert.assertEquals("Your Amazon.in", homepagetitle);
	}

	@Then("user enters incorrect username and password")
	public void user_enters_incorrect_username_and_password() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("ap_email")).sendKeys("9652045289");
		driver.findElement(By.id("continue")).click();
		driver.findElement(By.name("password")).sendKeys("amazon.in");
	  
	}

	@Then("user should not be navigated to HomePage")
	public void user_should_not_be_navigated_to_HomePage() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//h4[contains(text(),'There was a problem')]"));
	  
	}

	
	
}
