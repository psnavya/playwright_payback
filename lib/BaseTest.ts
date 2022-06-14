import { test as baseTest } from '@playwright/test';
// import { beforeAll as baseBeforeAll } from '@playwright/test/types';
// import { afterAll as baseAfterAll } from '@playwright/test/types';

import { HomePage } from '@pages/HomePage';
import { JetzMitPage } from '@pages/JetzMitPage';
import { SetupTearDown } from '@lib/SetupTearDown';
import { testConfig } from '../testConfig';



const test = baseTest.extend<{
    homePage: HomePage;
    jetzMitPage: JetzMitPage;
    setupTearDown: SetupTearDown;
  
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    jetzMitPage: async ({ page }, use) => {
            await use(new JetzMitPage(page));
    },
    setupTearDown: async ({ page }, use) => {
        await use(new SetupTearDown(page));
}

});

export default test;


// let browser: Browser;
// beforeAll(async () => {
//   browser = await chromium.launch();
// });
// afterAll(async () => {
//   await browser.close();
// });

// let page: Page;
// beforeEach(async () => {
//   page = await browser.newPage();
// });
// afterEach(async () => {
//   await page.close();
// });

// Error [ERR_PACKAGE_PATH_NOT_EXPORTED] [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './types' is not defined by "exports" in /Users/psnavya/Desktop/gitProjects/MiniProjects/PaybackPortal/node_modules/@playwright/test/package.json
// export const beforeAll = baseBeforeAll.extend<{
//     homePage: HomePage;
  
// }>({
//     homePage: async ({ page }, use) => {
//         console.log("------------- ENTERED=---------------");
//        /// await use(new HomePage(page));
//         //await page.waitForNavigation();
//         await page.goto(testConfig[process.env.ENV]);
        
//     }
   
// });;

// export const afterAll = baseAfterAll.extend<{
//     homePage: HomePage;
  
// }>({
//     homePage: async ({ page }, use) => {
//         await use(new HomePage(page));
//         await page.waitForNavigation();
//         await page.close();
        
//     }
   
// });;