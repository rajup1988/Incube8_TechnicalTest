package pages;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import support.ActionDriver;

public class SearchPage extends ActionDriver{
	
	public WebDriver driver;
	
	@CacheLookup
	@FindBy(id="imdbHeader-navDrawerOpen--desktop")
	WebElement menuLink;
	
	@CacheLookup
	@FindBy(xpath="//span[text()='Top Rated Shows']/parent::a")
	WebElement topRatedShowsLink;
	
	@CacheLookup
	@FindBy(css="#suggestion-search")
	WebElement suggestionSearch;
	
	
	@CacheLookup
	@FindBy(css=".title_wrapper h1")
	WebElement episodeTitle;
	
	@CacheLookup
	@FindBy(css="[itemprop='ratingValue']")
	WebElement rating;
	
	@CacheLookup
	@FindBy(css="[itemprop='ratingCount']")
	WebElement ratingCount;
	

	public SearchPage(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	/**
	 * This method is used to click on the Menu Link
	 */
	public void clickMenuLink() {
		waitTillElementVisible(driver, menuLink);
		click(menuLink);
	}
	
	/**
	 * This method is used to verify the Page title
	 */
	public void verifyPageTitle()
	{
		assertEquals("IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows", getTitle(driver));
	}

	/**
	 * This method is used to click on the Top Rated shows Link
	 */
	public void clickTopRatedShowsLink() throws InterruptedException {
		waitTillElementVisible(driver, topRatedShowsLink);
		click(topRatedShowsLink);
	}
	
	/**
	 * This method is used to enter text in the Suggestion Search text field
	 * @param searchValue desired value to enter
	 */
	public void typeSuggestionSearch(String searchValue)
	{
		type(suggestionSearch, searchValue);
	}
	
	/**
	 * This method is used to click on the link from Suggestion Window
	 * @param linkName name of the link to click
	 */
	public void clickLinkFromSuggestionWindow(String linkName) throws InterruptedException
	{
		click(driver, "//ul[@role='listbox']/li//div[text()='"+linkName+"']/ancestor::a");
	}
	
	/**
	 * This method is used to verify the Selected episode header
	 * @param expectedValue name of the header to match
	 */
	public void verifySelectedEpisodeHeader(String expectedValue)
	{
		String text_UI = getText(episodeTitle);
		assertEquals(expectedValue, text_UI);
	}
	
	/**
	 * This method is used to verify the rating value
	 * @param expectedValue desired rating value
	 */
	public void verifyRatingValue(String expectedValue)
	{
		String text_UI = getText(rating);
		assertEquals(expectedValue, text_UI);
	}
	
	/**
	 * This method is used to verify the Rating count
	 * @param expectedValue desired rating count
	 */
	public void verifyRatingCount(String expectedValue)
	{
		String text_UI = getText(ratingCount);
		assertEquals(expectedValue, text_UI);
	}

}
