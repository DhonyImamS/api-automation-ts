# Auotomotation API Typescript with Jest

Boilerplate for automation api that implement adapter pattern using typescript with supertest + axios and jest as runner

## Contributors:
dhony imam saputra

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed) like client strategy it should be AXIOS or SUPERTEST
```

Run the test and Html Report will generated automatically under "report" folder

```bash
npm run test
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.

## Project Structure

```
src\
 |--api\           # List all of api under test
 |--client\        # Stored all possible client as adaptee to this framework
 |--data\          # Stored payload needed for test data agains api testing
 |--interface\     # Stored all of interface in this project
 |--transformer\   # Set of Function to make 3rd party adjustable format for this framework
 |--utils\         # Center of helper function
tests\
 |--order_api.test.ts # Integration test again order api endpoint for example
 |--user_api.test.ts  # Integration test again user api endpoint for example
```

## Reporter

This Framework integrated with jest-html-reporter 

## Improvement

This Framework still need improvement in these area:

```
1. Create Custom Runners and Workers capability dynamic
2. Create Patterns for reporting tools so it should not depend on jest-html-reporter
3. Create Separate Library for Client folder when there will be growth for the wrapper
```
