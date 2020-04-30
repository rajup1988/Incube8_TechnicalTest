package pages;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import support.ActionDriver;

public class CreateAccountPage extends ActionDriver{
	
	public WebDriver driver;
	
	@FindBy(xpath="//div[text()='Sign In']/parent::a")
	WebElement signIn;
	
	@FindBy(xpath="//a[text()='Create a New Account']")
	WebElement createAccount;
	
	@FindBy(css="#ap_customer_name")
	WebElement yourName;
	
	@FindBy(css="#ap_email")
	WebElement email;
	
	
	@FindBy(css="#ap_password")
	WebElement password;
	
	@FindBy(css="#ap_password_check")
	WebElement reEnterPassword;
	
	@FindBy(xpath="//span[contains(text(),'Create your IMDb account')]/preceding-sibling::input")
	WebElement createYourImdbAccount;
	
	@FindBy(xpath="//label[@for='navUserMenu']/div")
	WebElement userNameLink;
	
	@FindBy(xpath="//label[@for='navUserMenu']/div/span")
	WebElement userName;
	
	@FindBy(xpath="//span[text()='Sign out']/parent::a")
	WebElement signOut;
	
	@FindBy(xpath="//span[text()='Sign in with IMDb']/parent::a")
	WebElement signInWithImdb;
	
	@FindBy(css="#signInSubmit")
	WebElement signInSubmit;
	
	
	public CreateAccountPage(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	/**
	 * This method is used to click on the Sign in Link
	 */
	public void clickSignIn() {
		click(signIn);
	}

	/**
	 * This method is used to click on the create account link
	 */
	public void clickCreateAccount() {
		click(createAccount);
	}

	/**
	 * This method is used to enter the text in the Your Name Text field
	 * @param textToEnter desired text to enter
	 */
	public void setYourName(String textToEnter) {
		type(yourName,textToEnter);
	}

	/**
	 * This method is used to enter the text in the email Text field
	 * @param textToEnter desired text to enter
	 */
	public void setEmail(String textToEnter) {
		type(email,textToEnter);
	}

	/**
	 * This method is used to enter the text in the password Text field
	 * @param textToEnter desired text to enter
	 */
	public void setPassword(String textToEnter) {
		type(password,textToEnter);
	}

	/**
	 * This method is used to enter the text in the re enter password Text field
	 * @param textToEnter desired text to enter
	 */
	public void setReEnterPassword(String textToEnter) {
		type(reEnterPassword,textToEnter);
	}

	/**
	 * This method is used to click on the create IMDb account link
	 */
	public void clickCreateYourImdbAccount() {
		click(createYourImdbAccount);
	}
	
	/**
	 * This method is used to verify the created account
	 * @param emailId email id used to create the account
	 * @param usernameText user name used to create the account
	 * @param passwordText password used to create the account
	 */
	public void verifyNewUser(String emailId, String usernameText, String passwordText) {
		click(userNameLink);
		click(signOut);
		click(signIn);
		click(signInWithImdb);
		type(email, emailId);
		type(password, passwordText);
		click(signInSubmit);
		assertEquals(usernameText, getText(userName));
	}


}
