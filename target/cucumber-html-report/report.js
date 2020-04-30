$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/IMDBSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality in IMDB",
  "description": "",
  "id": "search-functionality-in-imdb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search for the TV Shows in IMDB",
  "description": "",
  "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Menu button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select Top Rated Shows",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "search for \"\u003csearchvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"\u003cepisodename\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "title of the selected episode should be \"\u003cepisodetitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Rating should be \"\u003crating\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "number of reviews should be \"\u003cnumberofreviews\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;",
  "rows": [
    {
      "cells": [
        "searchvalue",
        "episodename",
        "episodetitle",
        "rating",
        "numberofreviews"
      ],
      "line": 16,
      "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;;1"
    },
    {
      "cells": [
        "Game of thrones",
        "Game of Thrones: The Last Watch",
        "Game of Thrones: The Last Watch (2019)",
        "7.2",
        "5,324"
      ],
      "line": 17,
      "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Search for the TV Shows in IMDB",
  "description": "",
  "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Menu button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user select Top Rated Shows",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "search for \"Game of thrones\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"Game of Thrones: The Last Watch\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "title of the selected episode should be \"Game of Thrones: The Last Watch (2019)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Rating should be \"7.2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "number of reviews should be \"5,324\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.openUrl()"
});
formatter.result({
  "duration": 14755374300,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.user_clicks_on_Menu_button()"
});
formatter.result({
  "duration": 309209700,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.user_select_Top_Rated_Shows()"
});
formatter.result({
  "duration": 13207178600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game of thrones",
      "offset": 12
    }
  ],
  "location": "SearchTest.search_for(String)"
});
formatter.result({
  "duration": 415003300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game of Thrones: The Last Watch",
      "offset": 8
    }
  ],
  "location": "SearchTest.select(String)"
});
formatter.result({
  "duration": 13753260800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game of Thrones: The Last Watch (2019)",
      "offset": 41
    }
  ],
  "location": "SearchTest.title_of_the_selected_episode_should_be(String)"
});
formatter.result({
  "duration": 106739500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.2",
      "offset": 18
    }
  ],
  "location": "SearchTest.rating_should_be(String)"
});
formatter.result({
  "duration": 41216800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5,324",
      "offset": 29
    }
  ],
  "location": "SearchTest.number_of_reviews_should_be(String)"
});
formatter.result({
  "duration": 38196200,
  "status": "passed"
});
});