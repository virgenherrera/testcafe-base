# Description

basic [TestCafe](https://testcafe.io/) framework TypeScript starter repository.

## Installation

### install dependencies

```bash
npm install
```

### Define Environment Variables

either declaring it system level or defining an `.env` file in the top-level of this project.

Create `.env` file using `.env.example`  a template, e.g.

```bash
cp ./env.example ./env
```

## launching the tests

```bash
# run tests in headless mode.
$ npm run test

# run tests with chrome
$ npm run e2e:chrome

# run tests with edge
$ npm run e2e:edge

# run tests with firefox
$ npm run e2e:firefox

# run tests with internet explorer
$ npm run e2e:ie

# run tests to attach remote mobile browser
$ npm run remote
```
