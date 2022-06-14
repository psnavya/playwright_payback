import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
import { JetzMitPageObjects } from "@objects/JetzMitPageObjects"

import { expect } from '@playwright/test';

let webActions: WebActions;
export class JetzMitPage{
    readonly page:Page;
    constructor (page: Page)
    {
        this.page=page;
        webActions=new WebActions(this.page);
    }
    jetzMitPageObjects=new JetzMitPageObjects();

    async clickOnNochKeinPaybackRadioButton():Promise<void>
    {
        await webActions.clickElement(this.jetzMitPageObjects.NOCHKEIN_PAYBACK_XPATH);
        this.page.waitForLoadState("networkidle");
    }
    async clickOnCardRadioButton(cardName: string):Promise<void>
    {
        await webActions.clickElement(this.jetzMitPageObjects.CARD_RADIO_BUTTON_SELECT_XPATH.replace(`cardType`,cardName));
         
    }
    async clickOnNextIcon():Promise<void>
    {
        await webActions.clickElement(this.jetzMitPageObjects.NEXT_ICON_CSS);
        this.page.waitForLoadState("networkidle");
    }
    async searchAndClickOnCardRadioButton(cardName: string):Promise<void>
    {
        let cardNames= await webActions.getTextFromWebElements(this.jetzMitPageObjects.CARD_RADIO_BUTTON_SEARCH_AND_SELECT_XPATH);
         const rows = this.page.locator(this.jetzMitPageObjects.CARD_RADIO_BUTTON_SEARCH_AND_SELECT_XPATH);
         let isClicked:boolean = false;
         //First Page
        for (let i = 0; i <cardNames.length; ++i)
        {
          if (!isClicked && cardName===await (await rows.nth(i).textContent()).trim())
          {
            await this.clickOnCardRadioButton(cardName);
            isClicked=true;
            i=cardNames.length;

          }

        }
        //Second Page
        if(!isClicked)
        {
          await webActions.clickElement(this.jetzMitPageObjects.NEXT_ICON_CSS);
          let cardNamesSecondPage= await webActions.getTextFromWebElements(this.jetzMitPageObjects.CARD_RADIO_BUTTON_SEARCH_AND_SELECT_XPATH);
          for (let i = 0; i < cardNamesSecondPage.length; ++i)
          {
            if (!isClicked && cardName===await (await rows.nth(i).textContent()).trim())
            {
              await this.clickOnCardRadioButton(cardName);
              isClicked=true;
              i=cardNamesSecondPage.length;
            }
          }
        }
        //Invalid card name
        if(!isClicked)
        {
            console.log("Invalid card type entered. Please enter BP/ UNIMARK/ sehen!wutscher/ dm drogerie markt/ Fressnapf/ Nah&Frisch/ BURGER KING®/ OTTO");
        }
      }
    async clickOnNochKeinSectionWeiterButton():Promise<void>
    {
        await webActions.clickElement(this.jetzMitPageObjects.NOCHKEIN_WEITER_BUTTON_XPATH);
        this.page.waitForLoadState("networkidle");
        
    }
    async enterEmailId(emailId: string):Promise<void>
    {
        await webActions.enterElementText(this.jetzMitPageObjects.EMAIL_ID_TEXTBOX_ID,emailId);
        
    }
    async enterFourDigitPin(pin: string):Promise<void>
    {
        await webActions.enterElementText(this.jetzMitPageObjects.PIN_TEXTBOX_ID,pin);
        
    }
    async clickOnZugangsdatenWeiterButton():Promise<void>
    {
        await webActions.clickElement(this.jetzMitPageObjects.ZUGANGDATEN_WEITER_BUTTON_XPATH);
        this.page.waitForLoadState("networkidle");
        
    }
    async clickOnNurNochEinSchrittButton():Promise<void>
    {
        await webActions.clickElement(this.jetzMitPageObjects.NURNOCHEINSCHRITT_WEITER_BUTTON_XPATH);
        this.page.waitForLoadState("networkidle");
        
    }
    async selectSalutationFromDropDown(salutation: string):Promise<void>
    {
        await webActions.selectOptionFromDropdown(this.jetzMitPageObjects.SALUTATION_ID,salutation);
      
        
    }
    async verifyPersönlicheDatenPageErrorMessages(message: string,divNumber: number):Promise<void>
    {
        const rows = this.page.locator(this.jetzMitPageObjects.ERROR_MESSAGE_CSS);
        await expect(rows.nth(divNumber)).toContainText(message);

     }
     async enterFirstName(firstName: string):Promise<void>
     {
         await webActions.enterElementText(this.jetzMitPageObjects.FIRST_NAME_ID,firstName);
         
     }
     async enterLastName(lastName: string):Promise<void>
     {
         await webActions.enterElementText(this.jetzMitPageObjects.LAST_NAME_ID,lastName);
         
     }
     async enterDOBDate(dobDate: string):Promise<void>
     {
        var dateString= dobDate.split("/",3);
        await webActions.clickElement(this.jetzMitPageObjects.DOB_CSS);
        await webActions.enterElementText(this.jetzMitPageObjects.DOB_DATE_CSS,dateString[0]);
        await webActions.enterElementText(this.jetzMitPageObjects.DOB_MONTH_CSS,dateString[1]);
        await webActions.enterElementText(this.jetzMitPageObjects.DOB_YEAR_CSS,dateString[2]);
         
     }
     async enterStreetName(streetName: string):Promise<void>
     {
         await webActions.enterElementText(this.jetzMitPageObjects.STREET_ID,streetName);
         
     }
     async enterFloorNumber(floorName: string):Promise<void>
     {
         await webActions.enterElementText(this.jetzMitPageObjects.FLOOR_ID,floorName);
         
     }
     async enterZipCode(zipCode: string):Promise<void>
     {
         await webActions.enterElementText(this.jetzMitPageObjects.ZIP_CODE_ID,zipCode);
         
     }
     async enterCityName(cityName: string):Promise<void>
     {
         await webActions.enterElementText(this.jetzMitPageObjects.CITY_ID,cityName);
         
     }
}