const Page = require("./BasePage");
const locator = require("../Utils/Locators");
const { Key } = require("selenium-webdriver");

const welcomeText = locator.welcomeText;
const forFamilyPlanBtn = locator.forFamilyPlanBtn;
const fullNameSelector = locator.fullNameSelector;
const phoneSelector = locator.phoneSelector;
const emailSelector = locator.emailSelector;
const yourDetailsPageNextBtn = locator.yourDetailsPageNextBtn;
const supportEmailSelector = locator.supportEmailSelector;
const supportPhoneSelector = locator.supportPhoneSelector;
const roadsideNoSelector = locator.roadsideNoSelector;
const roadsideYesSelector = locator.roadsideYesSelector;
const addMembersButton = locator.addMembersButton;
const removeMemberButton = locator.removeMemberButton;
const removeVehiclesButton = locator.removeVehiclesButton;
const addVehicleButton = locator.addVehicleButton;
const memberCounterSelector = locator.memberCounterSelector;
const vehiclesCounterSelector = locator.vehiclesCounterSelector;
const planOptionsNextBtn = locator.planOptionsNextBtn;
const paymentTextSelector = locator.paymentTextSelector;

//Credit card payment option
const creditCardSelector = locator.creditCardSelector;
    //card number
const creditCardFrameSelector = locator.creditCardFrameSelector;
const cardNumberInputSelector = locator.cardNumberInputSelector;
    //Expiration date
const exprirationFrameSelector = locator.exprirationFrameSelector;
const cardExpirationInputSelector = locator.cardExpirationInputSelector;
    //CVC
const cardCVCFrameSelector = locator.cardCVCFrameSelector;
const cardCVCInputSelector = locator.cardCVCInputSelector;
    //T&Cs and submit button
const termsAndConditionsCardSelector = locator.termsAndConditionsCardSelector;
const purchaseBtnCardSelector = locator.purchaseBtnCardSelector;


//M-Pesa  payment option
const mpesaPaymentOptionSelector = locator.mpesaPaymentOptionSelector;
const mpesaNumberSelector = locator.mpesaNumberSelector;
const termsCheckbox = locator.termsCheckbox;
const purchaseButton = locator.purchaseButton;

//Input Address
const addAddressBtn = locator.addAddressBtn;
const addressField = locator.addressField;

//Member 2 Form
const member2AddBtn = locator.member2AddBtn;
const member2Name = locator.member2Name;
const memeber2Phone = locator.memeber2Phone;
const member2Email = locator.member2Email;
const member2DOB = locator.member2DOB; 
const saveBtn = locator.saveBtn;

//STRIPE H1

const stripeHeading = locator.stripeHeading;


Page.prototype.welcomeMessage = function(){
    return this.find(welcomeText).getText();
};
Page.prototype.supportEmail = function(){
    return this.find(supportEmailSelector).getText();
}
Page.prototype.supportPhone = function(){
    return this.find(supportPhoneSelector).getText();
}
Page.prototype.forFamilyPlan = function(){
    
    this.find(forFamilyPlanBtn).click();
};
Page.prototype.fullNameField = function(){
    this.write(fullNameSelector, this.fakeData().fakeFullName);
};
Page.prototype.phoneNumberField = function(){
    // this.write(phoneSelector, this.fakeData().fakePhoneNumber);
    this.write(phoneSelector, "721293780");
};
Page.prototype.emailField = function(){
    this.write(emailSelector, this.fakeData().fakeEmail);
};
Page.prototype.detailsPageNext = function(){
    this.find(yourDetailsPageNextBtn).click();   
};
Page.prototype.addMembers = function(){
    this.find(addMembersButton).click();
};
Page.prototype.roadsideYesOption = function(){
    this.find(roadsideYesSelector).click();
};
Page.prototype.addVehicles = function(){
    this.find(addVehicleButton).click();
};
Page.prototype.paymentsPage = function(){
    this.find(planOptionsNextBtn).click();
    return this.find(paymentTextSelector).getText() 
};
    //Mpesa payment option functions
Page.prototype.mpesaPayment = function(){
    this.find(mpesaPaymentOptionSelector).click();
};
Page.prototype.mpesaPhoneNumber = function(){
    this.write(mpesaNumberSelector, "721293780");
};
Page.prototype.termsAndconditions = function(){
    this.find(termsCheckbox).click();
};
Page.prototype.mpesaPurchase = function(){
    this.find(purchaseButton).click();
};

    //members information functions
try {
    Page.prototype.addressInput = function(){
        this.find(addAddressBtn).click();
        this.write(addressField, "Kisumu");
        this.write(addressField, Key.TAB);
    }
    
} catch (error) {
    console.error();
}

Page.prototype.addSecondMemberInfo = function(){
    this.find(member2AddBtn).click();
    this.write(member2Name, this.fakeData().fakeFullName);
    this.write(memeber2Phone, this.fakeData().fakePhoneNumber);
    this.write(member2Email, this.fakeData().fakeEmail);
    this.write(member2DOB, "12/12/2020");
    this.find(saveBtn).click();

}

//Credit card payment options 

Page.prototype.creditCardOptions = function(){
    this.find(creditCardSelector).click();
};
Page.prototype.cardNumberInput = function(){
    this.iFrame(creditCardFrameSelector);
    this.write(cardNumberInputSelector, 42424242424242);
};

Page.prototype.stripeH1 = function(){
    return this.find(stripeHeading).getText();  
};




module.exports = Page;