var base = require('../pages/Base.js');
var homePage = require('../pages/HomePage.js');
var objects = require('../json/objects.json');
var using = require('jasmine-data-provider');

describe("OpenAccountTest",function() {
    beforeEach(function () {
        base.navigateToUrl(objects.url);
        browser.driver.manage().window().maximize();
    });

    function dataProviders() {
        return [
            {
                Customer: objects.locators.details.testdata.customer,
                Currency: objects.locators.details.testdata.currency
            }
        ];
    }

    using(dataProviders, function (data) {
        it("Login as Bank Manager and open Account", function () {
            base.navigateToUrl(objects.url);
            browser.driver.manage().window().maximize();
            homePage.loginAsBankManager().gotoOpenAccount().openAccount(data.Customer,data.Currency);
            console.log("Done with creating an account");
            browser.sleep(5000);
        });
    });
});