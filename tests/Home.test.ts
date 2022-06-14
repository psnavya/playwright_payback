import test from '@lib/BaseTest';
import { testConfig } from '../testConfig';
test(`Navigate to url, accept cookies and click on Anmelden.`,async({homePage,setupTearDown}) =>{
    await setupTearDown.navigateToURL();
    await homePage.clickOnAcceptCookies();
    await homePage.clickOnAnmeldenLabel();
   // await setupTearDown.closeBrowser();
    
});
