Feature: Search functionality in IMDb

Scenario Outline: Search for the TV Shows in IMDb

		Given user already on home page
		Then  user clicks on Menu button
		And   user select Top Rated Shows
		And   search for "<searchvalue>"
		And   select "<episodename>"
		Then  title of the selected episode should be "<episodetitle>"
		Then  Rating should be "<rating>"
		Then  number of reviews should be "<numberofreviews>"
		
Examples:
	| searchvalue | episodename | episodetitle | rating | numberofreviews |
	| Game of thrones  | Game of Thrones: The Last Watch | Game of Thrones: The Last Watch (2019) 	  | 7.2    | 5,325  |