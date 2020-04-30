package stepdefinitions;



import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.SearchPage;
import support.DriverBase;

public class SearchIMDbTest extends DriverBase{
	
	SearchPage pg = null;
	
	@Given("^user already on home page$")
	public void user_already_on_home_page() throws Throwable {
		launchBrowser();
		pg = new SearchPage(driver);
		pg.verifyPageTitle();
	}

	
	@Then("^user clicks on Menu button$")
	public void user_clicks_on_Menu_button() throws Throwable {
		pg.clickMenuLink();
	}
	
	@And("^user select Top Rated Shows$")
	public void user_select_Top_Rated_Shows() throws Throwable {
		pg.clickTopRatedShowsLink();
	}
	
	@Then("^search for \"([^\"]*)\"$")
	public void search_for(String value) throws Throwable {
		pg.typeSuggestionSearch(value);
	}

	@Then("^select \"([^\"]*)\"$")
	public void select(String value) throws Throwable {
		pg.clickLinkFromSuggestionWindow(value);
	}
	
	@Then("^title of the selected episode should be \"([^\"]*)\"$")
	public void title_of_the_selected_episode_should_be(String arg1) throws Throwable {
		pg.verifySelectedEpisodeHeader(arg1);
	}

	@Then("^Rating should be \"([^\"]*)\"$")
	public void rating_should_be(String arg1) throws Throwable {
		pg.verifyRatingValue(arg1);
	}

	@Then("^number of reviews should be \"([^\"]*)\"$")
	public void number_of_reviews_should_be(String arg1) throws Throwable {
		pg.verifyRatingCount(arg1);
	}
	

	@After
	public void closeBrowser()
	{
		tearDown();
	}
}
