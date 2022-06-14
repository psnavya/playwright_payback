//Unable to import @playwright/test/types for beforeAll and afterAll usage
import { Page } from "playwright";
import { BrowserContext, expect } from '@playwright/test';
import { testConfig } from '../testConfig';

const waitForElement = testConfig.waitForElement;
export class SetupTearDown{
    readonly page:Page;
    constructor(page: Page){
        this.page=page;
       
    }
    
   async navigateToURL():Promise<void> {
    
    await  this.page.goto(``);
     
   }
   async closeBrowser():Promise<void> {
    
    console.log("------- I AM HERE waiting for page to load and the close the browser----")
    this.waitForPageNavigation("load");
    this.page.close()
  
}
async waitForPageNavigation(event: string): Promise<void> {
    switch (event.toLowerCase()) {
        case `networkidle`:
            await this.page.waitForNavigation({ waitUntil: `networkidle`, timeout: waitForElement });
            break;
        case `load`:
            await this.page.waitForNavigation({ waitUntil: `load`, timeout: waitForElement });
            break;
        case `domcontentloaded`:
            await this.page.waitForNavigation({ waitUntil: `domcontentloaded`, timeout: waitForElement });
    }
}
}