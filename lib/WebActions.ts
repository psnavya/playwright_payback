import type { Page } from 'playwright';
import { BrowserContext, expect } from '@playwright/test';
import { testConfig } from '../testConfig';
//import path from 'path';
const waitForElement = testConfig.waitForElement;

export class WebActions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async waitForElementAttached(locator: string): Promise<void> {
        await this.page.waitForSelector(locator);
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

    async delay(time: number): Promise<void> {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
        

          async getWebElementsByAttribute(locator: string, attribute: string): Promise<void> {
            await this.waitForElementAttached(locator);
            await this.page.click(locator);

            // Locate elements, this locator points to a list.
        const rows = this.page.locator(locator);

        // Pattern 2: do something with each element in the list.
        const count = await rows.count()
        for (let i = 0; i < count; ++i)
          console.log(await rows.nth(i).getAttribute(attribute));
         }

    async clickElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }

    async clickElementJS(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.$eval(locator, (element: HTMLElement) => element.click());
    }

    async boundingBoxClickElement(locator: string): Promise<void> {
        await this.delay(1000);
        const elementHandle = await this.page.$(locator);
        const box = await elementHandle.boundingBox();
        await this.page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    }

    async enterElementText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.fill(locator, text);
    }

    async dragAndDrop(dragElementLocator: string, dropElementLocator: string): Promise<void> {
        await this.waitForElementAttached(dragElementLocator);
        await this.waitForElementAttached(dropElementLocator);
        await this.page.dragAndDrop(dragElementLocator, dropElementLocator);
    }

    async selectOptionFromDropdown(locator: string, option: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const selectDropDownLocator = await this.page.$(locator);
        selectDropDownLocator.type(option);
    }
 
    async getTextFromWebElements(locator: string): Promise<string[]> {
        await this.waitForElementAttached(locator);
        return this.page.$$eval(locator, elements => elements.map(item => item.textContent.trim()));
    }
    async getAttributeValueFromWebElements(locator: string, attribute: string): Promise<string[]> {
        await this.waitForElementAttached(locator);
        return this.page.$$eval(locator, elements => elements.map(item => item.getAttribute(`attribute`)));
    }

    // async downloadFile(locator: string): Promise<string> {
    //     const [download] = await Promise.all([
    //         this.page.waitForEvent(`download`),
    //         this.page.click(locator)
    //     ]);
    //     await download.saveAs(path.join(__dirname, `../Downloads`, download.suggestedFilename()));
    //     return download.suggestedFilename();
    // }

    async keyPress(locator: string, key: string): Promise<void> {
        this.page.press(locator, key);
    }

    async verifyElementText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.textContent(locator);
        expect(textValue.trim()).toBe(text);
    }


    async verifyNewWindowUrl(context: BrowserContext, locator: string, urlText: string): Promise<void> {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await this.page.click(locator)
        ])
        await newWindow.waitForLoadState("load");
        expect(newWindow.url()).toContain(urlText);
        await newWindow.close();
    }

    async verifyElementContainsText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await expect(this.page.locator(locator)).toContainText(text);
        console.log("Works fine------ compared error message")
    }

    async verifyJSElementValue(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.$eval(locator, (element: HTMLInputElement) => element.value);
        expect(textValue.trim()).toBe(text);
    }

    async verifyElementAttribute(locator: string, attribute: string, value: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.getAttribute(locator, attribute);
        expect(textValue.trim()).toBe(value);
    }

    async verifyElementIsDisplayed(locator: string, errorMessage: string): Promise<void> {
        await this.page.waitForSelector(locator, { state: `visible`, timeout: waitForElement })
            .catch(() => { throw new Error(`${errorMessage}`); });
    }
   
    async expectToBeTrue(status: boolean, errorMessage: string): Promise<void> {
        expect(status, `${errorMessage}`).toBe(true);
    }

    async expectToBeValue(expectedValue: string, actualValue: string, errorMessage: string): Promise<void> {
        expect(expectedValue.trim(), `${errorMessage}`).toBe(actualValue);
    }
}