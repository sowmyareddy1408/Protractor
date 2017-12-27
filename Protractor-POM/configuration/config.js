exports.config={
    directConnect:'true',
    capabilities:{
        browserName:'chrome'
    },
    framework:'jasmine2',
    specs:['../test_spec/HomePageTest.js','../test_spec/BankManagerLoginTest.js','../test_spec/CustomerLoginTest.js'],
       jasmineNodeOpts:{
        defaultTimeoutInterval:30000
    },
    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
    },

}