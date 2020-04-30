package stepdefinitions;

import org.junit.AfterClass;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.CreateAccountPage;
import pages.SearchPage;
import support.DriverBase;

public class CreateAccountTest extends DriverBase{
	
	CreateAccountPage cap = null;
	SearchPage pg= null;
	String email, name, password ="";
	
	
	@Given("^user opens the url$")
	public void user_opens_the_url() throws Throwable {
		launchBrowser();
		cap = new CreateAccountPage(driver);
	}

	
	@Then("^user clicks on Sing In button$")
	public void user_clicks_on_Sing_In_button() throws Throwable {
		cap.clickSignIn();
	}

	@Then("^user clicks on Create New Account$")
	public void user_clicks_on_Create_New_Account() throws Throwable {
		cap.clickCreateAccount();
	}

	@Then("^user enter the user name$")
	public void user_enter_the_user_name(DataTable data) throws Throwable {
		name = data.raw().get(0).get(0)+"_"+System.currentTimeMillis();
		cap.setYourName(name);
	}

	@Then("^user enter the email$")
	public void user_enter_the_email(DataTable data) throws Throwable {
		email = data.raw().get(0).get(0)+"_"+System.currentTimeMillis()+"@test.com";
		cap.setEmail(email);
	}

	@Then("^user enter the password$")
	public void user_enter_the_password(DataTable data) throws Throwable {
		password = data.raw().get(0).get(0);
		cap.setPassword(password);
	}

	@Then("^user enter the Re-enter password$")
	public void user_enter_the_Re_enter_password(DataTable data) throws Throwable {
		cap.setReEnterPassword(data.raw().get(0).get(0));
	}

	@Then("^clicks on Create your IMDb account$")
	public void clicks_on_Create_your_IMDb_account() throws Throwable {
		cap.clickCreateYourImdbAccount();
	}
	
	@Then("^verify created user$")
	public void verify_created_user() throws Throwable {
		cap.verifyNewUser(email, name, password);
	}
	
	@AfterClass
	public void closeBrowser()
	{
		tearDown();
	}
}
