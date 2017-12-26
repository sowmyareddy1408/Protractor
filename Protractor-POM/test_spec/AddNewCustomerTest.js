var base = require('../pages/Base.js');
var homePage = require('../pages/HomePage.js');
var objects = require('../json/objects.json');
var using = require('jasmine-data-provider');

describe("AddNewCustomerTest",function() {
    beforeEach(function () {
        base.navigateToUrl(objects.url);
        browser.driver.manage().window().maximize();
    });
    function dataProviders() {
        return [
            {
                fName: objects.locators.details.testdata.firstName,
                lName: objects.locators.details.testdata.lastName,
                pCode: objects.locators.details.testdata.postCode
            }
        ];
    }
    using(dataProviders, function (data) {
        it("Login as Bank Manager and add New Customer", function () {
            base.navigateToUrl(objects.url);
            browser.driver.manage().window().maximize();
            homePage.loginAsBankManager().gotoAddCustomer().addCustomerDetails(data.fName,data.lName,data.pCode);
            console.log("Done with adding new Customer");
            browser.sleep(5000);
        });
    });
});