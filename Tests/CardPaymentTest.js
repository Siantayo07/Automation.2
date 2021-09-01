var chai = require ('chai');
var should = chai.should()
const { expect, assert } = require("chai");
var chaiAsPromised = require("chai-as-promised");
const { before, after, describe, it } = require('selenium-webdriver/testing');
chai.use(chaiAsPromised);
var Page = require("../Pages/SubscribePage");
var page;

describe("Family Subscription", function(){
    this.timeout(100000);

    before(function (){
        page = new Page();
        page.visit("https://subscribe-dev.rescue.co/");
        page.sleep(5000)
       
    });
    after(function(){
        page.quit();
    });
    it("Should navigate to the subscribe website", function(){
        const message = page.welcomeMessage().then(function (message){
            expect(message).to.equal("Choose your plan");
            console.log(message);
        });
    });
    it("Checks the support email", function(){
        const emailSupport = page.supportEmail().then(function(emailSupport){
            expect(emailSupport).to.equal('info@rescue.co');
            console.log(emailSupport);
        });    
    });
    it("Checks the support email", function(){
        const phoneSupport = page.supportPhone().then(function(phoneSupport){
            expect(phoneSupport).to.equal('+254 (0) 110 929 011');
        });
    });
    it("Opens the form for details", function(){
        const familyPlan = page.forFamilyPlan();
        page.sleep(10000);
        page.driver.getCurrentUrl().then(function (details_page) {
            assert.equal(
              "https://subscribe-dev.rescue.co/family-household/your-details",
              details_page
            );
          });  
    });
    it("Should input the full name", function(){
        const name = page.fullNameField();
    });
    it("Should input the phone number", function(){
        const phone = page.phoneNumberField();
    });
    // it("Should input the email", function(){
    //     const email = page.emailField();
    // });
    it("Should navigate to the next page", function(){
        const nextBtn = page.detailsPageNext();
        page.sleep(1000)
        page.driver.getCurrentUrl().then(function (plan_options_page) {
            assert.equal(
              "https://subscribe-dev.rescue.co/family-household/plan-options",
              plan_options_page
            );
          });
    });
    it("Adds two members to be covered", function(){
        const members = page.addMembers();
    });
    it("Selects the option to cover road side", function(){
        const yesOption = page.roadsideYesOption();
    });
    it("Adds two vehicles to be covered", function(){
        const vehicles = page.addVehicles();
    });
    it("Navigates to the payments page", function(){
        const payment = page.paymentsPage();
        page.sleep(1000);
        page.driver.getCurrentUrl().then(function (payment_page) {
            assert.equal(
              "https://subscribe-dev.rescue.co/family-household/payment",
              payment_page
            );
          });
    });
    it('Selects the card payment method', function(){
        const creditCard = page.creditCardOptions();
    });
    it("Prints the stripe heading", function(){
        const h1 = page.stripeH1().then(function(h1){
            expect(h1).to.equal('Credit Card');
            console.log(h1);
        });
    });
    // it("Switches the frame", function(){
    //     const fr = page.frameSwitch();
    // })
    it("Inputs the card number", function(){
        const cardNumber = page.cardNumberInput();
    });
    // it("Inputs the card expiration", function(){
    //     const cardExpiration = page.cardExpirationInput();
    // });
    // it("Inputs the card CVC", function(){
    //     const cardCVC = page.cardCVCInput();
    // });
    // it("Accepts the terms and conditions", function(){
    //     const tAndC = page.termsAndConditions();
    // });
    // it("Purchases the cover", function(){
    //     const purchase = page.purchaseBtn();
    // });

});

