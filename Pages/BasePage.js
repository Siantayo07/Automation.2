var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

var testData = require("../Utils/TestData.js");
var fakeData = require("../Utils/FakeData.js");

var Page = function () {
  this.driver = new webdriver.Builder().forBrowser("chrome").build();
  var driver = this.driver;

  // this.fake = fake;
  this.testData = testData;
  this.fakeData = fakeData;

  this.visit = function (pageURL) {
    return driver.get(pageURL);
  };

  this.sleep = function (time) {
    return driver.sleep(time);
  };
  
  this.wait = function(){
    return driver.wait(2000);
  }

  this.quit = function () {
    return driver.quit();
  };
  this.find = function (element) {
    driver.wait(until.elementLocated(By.css(element)), 10000);
    return driver.findElement(By.css(element));
  };

  this.findClassName = function (element) {
    driver.wait(until.elementLocated(By.className(element)), 10000);
    return driver.findElement(By.className(element));
  };
  this.findName = function(element){
    driver.wait(until.elementLocated(By.name(element)), 10000)
    return driver.findElement(By.name(element));
  }
  this.findXpath = function (element) {
    driver.wait(until.elementLocated(By.xpath(element)), 10000);
    return driver.findElement(By.xpath(element));
  };

  this.findAll = function (element) {
    driver.wait(until.elementLocated(By.css(element)), 8000);
    return driver.findElements(By.css(element));
  };

  this.write = function (element, txt) {
    return this.find(element).sendKeys(txt);
  };

  this.writeXpath = function (element, txt) {
    return this.findXpath(element).sendKeys(txt);
  };

  this.findURL = function (url) {
    return this.driver.getCurrentUrl()
  };
  this.iFrame = function(element){
    // this.findName(element);
    return this.driver.switchTo().frame(element)
    // return this.driver.switchTo(this.iFrame)
  }

  this.findVisibility = function(element){
   return driver.wait(until.elementIsVisible(driver.findElement(By.id(element))), 10000);


    // driver.wait(until.elementLocated(By.id(element)), 10000);
    // return driver.findElement(By.id(element))
  }
};

module.exports = Page;
