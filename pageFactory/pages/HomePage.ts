import { Page } from "playwright";
import { WebActions } from "@lib/WebActions";
import { HomePageObjects } from "@objects/HomePageObjects";

let webActions: WebActions;
export class HomePage{
    readonly page:Page;
    constructor(page: Page){
        this.page=page;
        webActions=new WebActions(this.page);
    }
    homePageObjects=new HomePageObjects();

   async clickOnAcceptCookies():Promise<void> {
       await webActions.clickElement(this.homePageObjects.ACCEPT_COOKIES_ID);
       this.page.waitForLoadState("networkidle");
}

   async clickOnAnmeldenLabel():Promise<void> {
    //await webActions.clickElement(this.homePageObjects.ANMELDEN_LABEL_CSS);
    await webActions.clickElement(this.homePageObjects.ANMELDEN_LABEL_XPATH);
    this.page.waitForLoadState("load");
   }

}
