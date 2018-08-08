# Cash machine

This project includes all the necessary files to run and test a cash machine

## Node.js

Before installing the dependencies please make sure to have node.js v8.11.3 installed in your machine. After having
node installed please run:

```
$ npm i nodemom -g 
```

to install nodemon globally in order to be able to run tests automatically while development.

Then just run:

```
$ npm install
```

to install all the dependencies.

## Server

In order to start the application please run:

```
$ npm start
```

this will run the app on port 3000. if you would like to specify another port, just go and set the PORT env variable
like this:

```
$ PORT={PORT_TO_USE} npm start
```

This will allow you to run the app and the tests at the same time. Otherwise you will get: 

```
Error: listen EADDRINUSE :::3000
```

### Test

In order to run the tests please run:

```
$ npm run test-watch
```

this will run the tests in port 8000 every time there is any change in the src libraries.

### API

#### GET /withdraw/:amount

To withdraw money from the cashier, please follow the next link with the running app and replace amount with
the amount of money you would like to get.

```
localhost:3000/withdraw/{amount}
```
### App

You can use the app.js to run autonomously on the command line. For this run:
```
nodemon src/app.js -a {VALUE_TO_TEST}
```