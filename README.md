<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a>
                <li><a href="#installation">Installation</a>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright Demo - This project is based on Microsoft Playwright which enables automating a scenario in PLAYBACK website www.payback.at

Features:

- Easy to Configure.
- Auto-waits for all the relevant checks to pass and only then performs the requested action.
- Supports Headful/Headless mode execution for Firefox/Webkit/Google Chrome/Chromium/MS Edge on Windows/Linux/Mac machines.
- To slow down execution slowMo option is available.
- Supports Serial and Parallel execution.
- Records videos for Test Cases.
- Generates trace file, which gives in-depth details of Test Case execution.


## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above
  ```

### Installation

1. Clone the repo using below URL

```sh
https://github.com/psnavya/playwright_payback.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" is "qa", `Test Cases are present in "tests" folder`:

```JS
npx cross-env ENV=qa npm run test
```

3. For executing single test case on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change `--project=Firefox` against `test:single` in `package.json`, just make sure the browser name given matches the name given in `playwright.config.ts`.

```JS
npx cross-env ENV=qa npm run test:single
```

4. For executing test cases in parallel, provide a suitable tag `@Smoke` at the start of your test case name, then in `package.json` against `test:parallel` give the tag value and execute :

```JS
npx cross-env ENV=qa npm run test:parallel
```

5. For executing test cases in sequence, provide a suitable tag `@Smoke` at the start of your test case name, then in `package.json` against `test:serial` give the tag value and execute, `workers` parameter correspond to test cases you want to execute simultaneously e.g. `--workers=3`, executes 3 test cases simultaneously :

```JS
npx cross-env ENV=qa npm run test:serial
```

6. For recording test scripts :

```JS
npm run test:record
```
10. To change test data details go to `testConfig.ts` 
11. For viewing trace files, go to folder where `trace.zip` is generated and execute :
```JS
npx playwright show-trace trace.zip
```
12. In `tsconfig.json` file in `paths` section we can re-assign the long path imports like '../../' to a variable which starts with '@' and then we can use it to shorten our import statements in respective file.
In the below example wherever '../../pageFactory/pages/' import statement is used we can replace it with '@pages'
```JS
"@pages/*":["pageFactory/pages/*"]
```
