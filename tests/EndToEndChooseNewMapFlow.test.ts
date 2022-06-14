import test from '@lib/BaseTest';
import { testConfig } from '../testConfig';

// Cucumber format steps

test(`@Smoke PAYBACK end to end scenario`, async ({ homePage, jetzMitPage, setupTearDown }) => {
    await test.step(`Navigate to Application and accept cookies`, async () => {
        await setupTearDown.navigateToURL();
        await homePage.clickOnAcceptCookies();
    });
    await test.step(`Click on Anmelden`, async () => {
        await homePage.clickOnAnmeldenLabel();
    });
    await test.step(`Click Nock Kein radio button, select a card and click on Weiter in select card page".`, async () => {
        await jetzMitPage.clickOnNochKeinPaybackRadioButton();
        await jetzMitPage.searchAndClickOnCardRadioButton(testConfig.cardRadioButton.unimarkt);
        await jetzMitPage.clickOnNochKeinSectionWeiterButton();
    });
    await test.step(`Enter email ID, pin annd click on Weiter in Bank Details page`, async () => {
        await jetzMitPage.enterEmailId(testConfig.bankDetails.emailID);
        await jetzMitPage.enterFourDigitPin(testConfig.bankDetails.pin);
        await jetzMitPage.clickOnZugangsdatenWeiterButton();
    });
    await test.step(`Click on Nur Noch Ein Schritt Button with empty mandatory fields ands verify the error messages in Persoanl Details page`, async () => {
        await jetzMitPage.clickOnNurNochEinSchrittButton();
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.firstNameMandatory_1,1);
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.lastNameMandatory_2,2);
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.dateOfBirthMandatory_3,3);
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.streetNameMandatory_4,4);
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.floorNumberMandatory_5,5);
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.zipCodeMandatoryNumber_6,6);
        await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.cityNameMandatory_7,7);
    });
    await test.step(`Enter mandatory fields in Persoanl Details page.`, async () => {
        await jetzMitPage.selectSalutationFromDropDown(testConfig.personalDetails.salutation);
        await jetzMitPage.enterFirstName(testConfig.personalDetails.firstName);
        await jetzMitPage.enterLastName(testConfig.personalDetails.lastName);
       await jetzMitPage.enterDOBDate(testConfig.personalDetails.dateOfBirth);
       await jetzMitPage.enterStreetName(testConfig.personalDetails.streetName);
       await jetzMitPage.enterFloorNumber(testConfig.personalDetails.floorName);
       await jetzMitPage.enterZipCode(testConfig.personalDetails.zipCode);
       await jetzMitPage.enterCityName(testConfig.personalDetails.cityName);
    });
    await test.step(`Enter invalid date of birth in Persoanl Details page and verify the message.`, async () => {
       
       await jetzMitPage.enterDOBDate("99/01/2022");
       await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.dateOfBirthMandatory_3,3);
       await jetzMitPage.enterLastName(testConfig.personalDetails.lastName);
       await jetzMitPage.enterDOBDate("01/99/2022");
       await jetzMitPage.verifyPersönlicheDatenPageErrorMessages(testConfig.errorMessage.dateOfBirthMandatory_3,3);
       await jetzMitPage.enterLastName(testConfig.personalDetails.lastName);

    });
});


   

    



   
    
    
 
    