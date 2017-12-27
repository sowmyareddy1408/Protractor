var base = require('../pages/Base.js');
var homePage = require('../pages/HomePage.js');
var objects = require('../json/objects.json');
var using = require('jasmine-data-provider');

describe("HomePageTest",function() {
    beforeEach(function(){
        base.navigateToUrl(objects.url);
        browser.driver.manage().window().maximize();
    });
    it("check Customer login button", function () {
    homePage.loginAsCustomer();
    console.log("Customer Login");
    browser.sleep(2000);
    });

    it("check Bank Manager login button", function () {
    homePage.loginAsBankManager();
    console.log("Bank Manager Login");
    browser.sleep(2000);
    });

});