var Base = function(){
    this.navigateToUrl = function(url){
    browser.get(url);
    };
};
module.exports = new Base();