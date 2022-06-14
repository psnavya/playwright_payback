import test from '@lib/BaseTest';
import { testConfig } from '../testConfig';

test(`End to end flow of a scenario.`,async({homePage, jetzMitPage, setupTearDown}) =>{
    await setupTearDown.navigateToURL();
    await homePage.clickOnAcceptCookies();

    await homePage.clickOnAnmeldenLabel();

    await jetzMitPage.clickOnNochKeinPaybackRadioButton();
    await jetzMitPage.searchAndClickOnCardRadioButton(testConfig.cardRadioButton.unimarkt);
    await jetzMitPage.clickOnNochKeinSectionWeiterButton();

    await jetzMitPage.enterEmailId(testConfig.bankDetails.emailID);
    await jetzMitPage.enterFourDigitPin(testConfig.bankDetails.pin);
    await jetzMitPage.clickOnZugangsdatenWeiterButton();

    await jetzMitPage.clickOnNurNochEinSchrittButton();
    
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.firstNameMandatory_1,1);
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.lastNameMandatory_2,2);
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.dateOfBirthMandatory_3,3);
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.streetNameMandatory_4,4);
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.floorNumberMandatory_5,5);
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.zipCodeMandatoryNumber_6,6);
    await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.cityNameMandatory_7,7);
 
    await jetzMitPage.selectSalutationFromDropDown(testConfig.personalDetails.salutation);
    await jetzMitPage.enterFirstName(testConfig.personalDetails.firstName);
    await jetzMitPage.enterLastName(testConfig.personalDetails.lastName);
    await jetzMitPage.enterDOBDate(testConfig.personalDetails.dateOfBirth);
    await jetzMitPage.enterStreetName(testConfig.personalDetails.streetName);
    await jetzMitPage.enterFloorNumber(testConfig.personalDetails.floorName);
    await jetzMitPage.enterZipCode(testConfig.personalDetails.zipCode);
    await jetzMitPage.enterCityName(testConfig.personalDetails.cityName);
    

    //await setupTearDown.closeBrowser();
 
    
});





