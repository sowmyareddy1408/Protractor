var base = require('../pages/Base.js');
var homePage = require('../pages/HomePage.js');
var objects = require('../json/objects.json');
var using = require('jasmine-data-provider');

describe("CustomerInfoTest",function() {
    beforeEach(function () {
        base.navigateToUrl(objects.url);
        browser.driver.manage().window().maximize();
    });
    function dataProviders() {
        return [
            {Customer: objects.locators.details.testdata.customer,}
        ];
    }
    using(dataProviders, function (data) {
        it("Select Customer and view the Info", function () {
            homePage.loginAsCustomer().selectCustomer(data.Customer);
            console.log("Customer Info test done");
            browser.sleep(2000);
        });
    });
});