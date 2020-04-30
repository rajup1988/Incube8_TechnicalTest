$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account in IMDb",
  "description": "",
  "id": "create-account-in-imdb",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create User Account in IMDb",
  "description": "",
  "id": "create-account-in-imdb;create-user-account-in-imdb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Sing In button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Create New Account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter the user name",
  "rows": [
    {
      "cells": [
        "test"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter the email",
  "rows": [
    {
      "cells": [
        "testautomation"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter the password",
  "rows": [
    {
      "cells": [
        "Test@123"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter the Re-enter password",
  "rows": [
    {
      "cells": [
        "Test@123"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "clicks on Create your IMDb account",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify created user",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountTest.user_opens_the_url()"
});
formatter.result({
  "duration": 14000900300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.user_clicks_on_Sing_In_button()"
});
formatter.result({
  "duration": 2263687400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.user_clicks_on_Create_New_Account()"
});
formatter.result({
  "duration": 761728600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.user_enter_the_user_name(DataTable)"
});
formatter.result({
  "duration": 39783400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ap_customer_name\"}\n  (Session info: chrome\u003d81.0.4044.129)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PALADUGU\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\palad\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 81.0.4044.129, webStorageEnabled: true}\nSession ID: bc31508c42284fd87f55cfc47c586b0b\n*** Element info: {Using\u003dcss selector, value\u003d#ap_customer_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\r\n\tat support.ActionDriver.type(ActionDriver.java:46)\r\n\tat pages.CreateAccountPage.setYourName(CreateAccountPage.java:79)\r\n\tat stepdefinitions.CreateAccountTest.user_enter_the_user_name(CreateAccountTest.java:39)\r\n\tat ✽.And user enter the user name(CreateAccount.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateAccountTest.user_enter_the_email(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.user_enter_the_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.user_enter_the_Re_enter_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.clicks_on_Create_your_IMDb_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.verify_created_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 831416900,
  "status": "passed"
});
formatter.uri("IMDbSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality in IMDb",
  "description": "",
  "id": "search-functionality-in-imdb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search for the TV Shows in IMDb",
  "description": "",
  "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user already on home page",
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
  "line": 14,
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
      "line": 15,
      "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;;1"
    },
    {
      "cells": [
        "Game of thrones",
        "Game of Thrones: The Last Watch",
        "Game of Thrones: The Last Watch (2019)",
        "7.2",
        "5,325"
      ],
      "line": 16,
      "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Search for the TV Shows in IMDb",
  "description": "",
  "id": "search-functionality-in-imdb;search-for-the-tv-shows-in-imdb;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user already on home page",
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
  "name": "number of reviews should be \"5,325\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchIMDbTest.user_already_on_home_page()"
});
formatter.result({
  "duration": 13251883400,
  "status": "passed"
});
formatter.match({
  "location": "SearchIMDbTest.user_clicks_on_Menu_button()"
});
formatter.result({
  "duration": 428879700,
  "status": "passed"
});
formatter.match({
  "location": "SearchIMDbTest.user_select_Top_Rated_Shows()"
});
formatter.result({
  "duration": 4415640300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game of thrones",
      "offset": 12
    }
  ],
  "location": "SearchIMDbTest.search_for(String)"
});
formatter.result({
  "duration": 563980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game of Thrones: The Last Watch",
      "offset": 8
    }
  ],
  "location": "SearchIMDbTest.select(String)"
});
formatter.result({
  "duration": 5968187400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game of Thrones: The Last Watch (2019)",
      "offset": 41
    }
  ],
  "location": "SearchIMDbTest.title_of_the_selected_episode_should_be(String)"
});
formatter.result({
  "duration": 61173700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.2",
      "offset": 18
    }
  ],
  "location": "SearchIMDbTest.rating_should_be(String)"
});
formatter.result({
  "duration": 49762900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5,325",
      "offset": 29
    }
  ],
  "location": "SearchIMDbTest.number_of_reviews_should_be(String)"
});
formatter.result({
  "duration": 49075900,
  "status": "passed"
});
formatter.after({
  "duration": 766422100,
  "status": "passed"
});
});