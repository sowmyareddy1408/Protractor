exports.config= {
    directConnect: 'true',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine2',
    specs: ['../test_spec/HomePageTest.js', '../test_spec/BankManagerLoginTest.js', '../test_spec/CustomerLoginTest.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        var AllureReporter = require('jasmine-allure-reporter');  // for generating reports
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {            // for taking Screenshot after function execution is done
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
}


