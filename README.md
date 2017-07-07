# AbGitHubExample

This project was generated on 2017-07-07 with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

Here is the sequence of steps performed to scaffold this Angular application:
<ol>
<li>

Check which version of nodeJS is installed:
```npm
node --version
```
In my case, the output showed:
```
v8.1.2
```
</li>
<li>

Check which version of npm is installed:
```npm
npm --version
```
In my case, the output showed:
```
5.1.0
```
</li>
<li>

Check which version of WebPack is installed:
```npm
webpack --version
```
In my case, the output showed:
```npm
3.1.0
```
</li>
<li>

Check which version of TypeScript is installed globally:
```npm
tsc --version
```
In my case, the output showed:
```
Version 2.4.1
```
</li>
<li>

I created the Angular application using the following Angular-CLI command:
```
cd c:\projects
ng new abGitHubExample --skip-install --skip-tests --skip-commit --routing --style=scss 
```
It is __extremely__ important to specifiy the `--skip-install` switch when running `ng new` 
because we want to postpone installing the packages until after mkaing a few *adjustments* to `package.json` 
that will insure we will be using the latest editions of those packages in our application.
</li>
<li>

After the initial Angular-CLI scaffolding was completed, I used one of my favorite tools, `npm-check-updates`, to update `package.json` to the latest editions via the following command:
```
ncu -a
```
</li>
<li>

I edited `package.json` to change all of the @angular package versions back to ^4.0.0 to insure that the latest released editions would be installed.
Here is a portion of package.json that shows the dependencies:
```json
  "dependencies": {
    "@angular/animations": "^4.0.0",
    "@angular/common": "^4.0.0",
    "@angular/compiler": "^4.0.0",
    "@angular/core": "^4.0.0",
    "@angular/forms": "^4.0.0",
    "@angular/http": "^4.0.0",
    "@angular/platform-browser": "^4.0.0",
    "@angular/platform-browser-dynamic": "^4.0.0",
    "@angular/router": "^4.0.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.4.2",
    "zone.js": "^0.8.12"
  },
  "devDependencies": {
    "@angular/cli": "1.2.0",
    "@angular/compiler-cli": "^4.0.0",
    "@angular/language-service": "^4.0.0",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~8.0.8",
    "codelyzer": "~3.1.2",
    "jasmine-core": "~2.6.4",
    "jasmine-spec-reporter": "~4.1.1",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.3.0",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
    "tslint": "~5.5.0",
    "typescript": "~2.4.1"
  }
```
</li>
<li>
I installed the packages needed by the application
</li>
</ol>
## Development server

Run `ng serve --open` for a dev server. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
