var locators = require('../util/customlocators.js');
var objects = require('../json/objects.json');

var HomePage = function(){
    this.loginAsCustomer = function () {
        element(By.buttonText(objects.locators.homepage.Customer)).click();
        return require('./CustomerDetails.js');
    };
    this.loginAsBankManager = function(){
        element(by.ngClick(objects.locators.homepage.BankManager)).click();
        return require('./BankManagerDetails.js');
    };

};
module.exports= new HomePage(); //creating reference to the variable HomePage
