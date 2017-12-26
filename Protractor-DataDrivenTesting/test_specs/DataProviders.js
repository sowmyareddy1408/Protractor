var Objects = require('../pageObjects/Objects.json');
var using = require('jasmine-data-provider');

describe("Automate Honeywell site",function(){

    beforeEach(function () {
        browser.ignoreSynchronization=true; //use for non angularjs applications
        browser.get(Objects.testUrl);
        browser.driver.manage().window().maximize();
    });

    function dataProviders(){
        return [
            {username:Objects.userDetails.email1,password:Objects.userDetails.pswd1},
            {username:Objects.userDetails.email2,password:Objects.userDetails.pswd2},
            {username:Objects.userDetails.email3,password:Objects.userDetails.pswd3}
        ];
    }
    using(dataProviders,function(data) {
        it("Login to the application", function () {
            element(By.id(Objects.locators.loginLink)).click();
            element(By.id(Objects.locators.userName)).sendKeys(data.username);
            console.log("email is: "+data.username);
            element(By.xpath(Objects.locators.password)).sendKeys(data.password);
            console.log("password is: "+data.password);
            element(By.linkText(Objects.locators.signInButton)).click();
            browser.sleep(5000);
        });
    });

    afterEach(function(){
        element(By.linkText(Objects.locators.logout)).click();
        browser.sleep(5000);
    });
});

