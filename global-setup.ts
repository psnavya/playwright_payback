//Not Working as expected 

// import { testConfig } from './testConfig';


// async function globalSetup() {
  
//   // const browser = await chromium.launch();
//   // const page = await browser.newPage();
  

//   async function globalSetup(): Promise<void> {
//     this.page.goto(testConfig[process.env.ENV]);
//     await new Promise(resolve => 
//       this.page.goto(testConfig[process.env.ENV]));
  
//   }

//   // Return the global teardown function.
//   return async () => {
//     await new Promise(done => this.page.close());
//   };
// }

// export default globalSetup;