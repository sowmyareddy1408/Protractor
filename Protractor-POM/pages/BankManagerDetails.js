var selectWrapper = require('../util/wrapperClass.js');
var select = new selectWrapper(by.id("userSelect"));
var currencyType = new selectWrapper(by.id("currency"));
var locator = require('../util/customlocators.js');
var objects = require('../json/objects.json');

var BankManagerDetails = function(){
    this.gotoAddCustomer = function(){
element(by.ngClick(objects.locators.details.addcustomer)).click();
return this;
    };
    this.gotoOpenAccount = function(){
        element(by.ngClick(objects.locators.details.openAccount)).click();
        return this;
    };
    this.gotoSearchCustomers = function(){
        element(by.ngClick(objects.locators.details.searchCustomer)).click();
        return this;
    };

    this.addCustomerDetails = function(firstName,lastName,pCode){
        element(by.model(objects.locators.details.firstName)).sendKeys(firstName);
        element(by.model(objects.locators.details.lastName)).sendKeys(lastName);
        element(by.model(objects.locators.details.postCode)).sendKeys(pCode);
        element(by.css(objects.locators.details.submitCustomer)).click();
        browser.sleep(2000);
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){
            console.log(text);
        });

        alertDialog.accept();
        browser.sleep(2000);
        return this;

    };
    this.openAccount = function(customer,currency){
        select.selectByText(customer);
        currencyType.selectByText(currency);
        element(by.buttonText(objects.locators.details.processButtonText)).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        });

        alertDialog.accept();
        browser.sleep(2000);
        return this;
    };

    this.searchCustomer = function(customer){
        element(by.model(objects.locators.details.enterCustomerName)).sendKeys(customer);
        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function(text){
            console.log("Customer is: "+text);
        });
        expect(firstName.getText()).toEqual(customer);
        browser.sleep(2000);
    };
};
module.exports=new BankManagerDetails();
