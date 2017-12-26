exports.config={
    directConnect:'true',
    capabilities:{
        browserName:'firefox'
    },
    framework:'jasmine2',
    specs:['../test_specs/Honeywell.js','../test_specs/DataProviders.js'],
    jasmineNodeOpts:{
        defaultTimeoutInterval:30000
    },
    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
    }
}