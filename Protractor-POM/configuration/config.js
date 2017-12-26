exports.config={
    directConnect:'true',
    capabilities:{
        browserName:'chrome'
    },
    framework:'jasmine2',
    specs:['../test_spec/HomePageTest.js','../test_spec/CustomerInfoTest.js','../test_spec/AddNewCustomerTest.js','../test_spec/OpenAccountTest.js','../test_spec/SearchCustomerTest.js'],
      jasmineNodeOpts:{
        defaultTimeoutInterval:30000
    },
    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
    }
}