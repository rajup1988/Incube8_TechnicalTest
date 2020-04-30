Feature: Create Account in IMDb

Scenario: Create User Account in IMDb

		Given user opens the url
		Then  user clicks on Sing In button
		And   user clicks on Create New Account
		And   user enter the user name
		| test |
		And   user enter the email
		| testautomation |
		And   user enter the password
		| Test@123 |
		And   user enter the Re-enter password
		| Test@123 |
		And   clicks on Create your IMDb account
		Then  verify created user