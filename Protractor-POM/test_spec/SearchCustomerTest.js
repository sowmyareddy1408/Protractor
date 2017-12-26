var base = require('../pages/Base.js');
var homePage = require('../pages/HomePage.js');
var objects = require('../json/objects.json');
var using = require('jasmine-data-provider');

describe("SearchCustomerTest",function() {
    beforeEach(function () {
        base.navigateToUrl(objects.url);
        browser.driver.manage().window().maximize();
    });

    function dataProviders() {
        return [
            { Customer: objects.locators.details.testdata.customerName}
        ];
    }
    using(dataProviders, function (data) {
        it("Validate Customer", function () {
            base.navigateToUrl(objects.url);
            browser.driver.manage().window().maximize();
            homePage.loginAsBankManager().gotoSearchCustomers().searchCustomer(data.Customer);
            browser.sleep(5000);
        });
    });
});