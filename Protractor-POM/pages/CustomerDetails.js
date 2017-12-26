var selectWrapper = require('../util/wrapperClass.js');
var select = new selectWrapper(by.id("userSelect"));
var locator = require('../util/customlocators.js');
var objects = require('../json/objects.json');

var CustomerDetails  = function(){
    this.selectCustomer = function(customer){
        select.selectByText(customer);
        element(by.css(objects.locators.details.submitCustomer)).click();
        browser.sleep(2000);
        element(by.ngClick(objects.locators.homepage.logout)).click();
    };
};
module.exports=new CustomerDetails();
