var Objects = require('../pageObjects/Objects.json');


describe("Automate Honeywell site",function(){

    beforeEach(function () {
        browser.ignoreSynchronization=true; //use for non angularjs applications
        browser.get(Objects.testUrl);
        browser.driver.manage().window().maximize();
       });

    it("Login to the application",function(){
       element(By.id(Objects.locators.loginLink)).click();
       element(By.id(Objects.locators.userName)).sendKeys(Objects.userDetails.email1);
       element(By.xpath(Objects.locators.password)).sendKeys(Objects.userDetails.pswd1);
       element(By.linkText(Objects.locators.signInButton)).click();
       browser.sleep(5000);
    });

    afterEach(function(){
       element(By.linkText(Objects.locators.logout)).click();
       console.log("Successfully done");
       browser.sleep(5000);
    });
});