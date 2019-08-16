$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:login.feature");
formatter.feature({
  "name": "Amazon Login Feature Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with correct username and password   #given when then as but all are keywords",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on the loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_is_on_the_loginpage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Runtime.executionContextCreated has invalid \u0027context\u0027: {\"auxData\":{\"frameId\":\"C9DB91678C289285769DDBEA2E113A24\",\"isDefault\":true,\"type\":\"default\"},\"id\":1,\"name\":\"\",\"origin\":\"://\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027LAPTOP-M4LNSHAT\u0027, ip: \u0027192.168.1.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {userDataDir: C:\\Users\\BMALAT~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, javascriptEnabled: true, locationContextEnabled: true, nativeEvents: true, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: 809905a8a2d8c39a6b3a1a45bc22d5a9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitionsofDataDrivenFeatures.LoginDataDrivenStepDefinition.user_is_on_the_loginpage(LoginDataDrivenStepDefinition.java:26)\r\n\tat ✽.user is on the loginpage(file:login.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "title of the LoginPage is amazon.in",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.title_of_the_LoginPage_is_amazon_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_clicks_on_SignIn_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"9652045289\" and \"amazon.in\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_clicks_on_the_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should land on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_should_land_on_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with incorrect username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "name": "user is on the loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_is_on_the_loginpage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Runtime.executionContextCreated has invalid \u0027context\u0027: {\"auxData\":{\"frameId\":\"38052374E52BCD5B3C04AEF445F19042\",\"isDefault\":true,\"type\":\"default\"},\"id\":1,\"name\":\"\",\"origin\":\"://\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027LAPTOP-M4LNSHAT\u0027, ip: \u0027192.168.1.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {userDataDir: C:\\Users\\BMALAT~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, javascriptEnabled: true, locationContextEnabled: true, nativeEvents: true, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: 1cb06470f640829fae5a0b293dc916c0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitionsofDataDrivenFeatures.LoginDataDrivenStepDefinition.user_is_on_the_loginpage(LoginDataDrivenStepDefinition.java:26)\r\n\tat ✽.user is on the loginpage(file:login.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters incorrect username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_enters_incorrect_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_clicks_on_the_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should not be navigated to HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDataDrivenStepDefinition.user_should_not_be_navigated_to_HomePage()"
});
formatter.result({
  "status": "skipped"
});
});