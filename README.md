## Available Scripts

In the project directory, you can run:

### `npm install`

Run npm install to install project dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## User Experience (UX)

### Exchange Widget
   
  - The app is opening on the exchange currency view.
   
  - The source for FX rates used is https://openexchangerates.org/
   
  - The app polls the endpoint every 10 seconds to get the latest rates for GBP, EUR and USD.
   
  - User can switch between USD, EUR, GBP currency pockets.
  
  - User can make an exchange between pockets by clicking on switch icon.
  
  - User inputs are validated to contain only numbers with two digits after the dot.
  
  - Exchange rate between active pockets are displayed.
  
  - Active pocket balances are displayed.
  
  - If user enters an amount more than the balance available in the selected from_currency, the exchange button will be disabled and the balance will be highlighted.
  
  - a "-" sign will be added before the number in the from_currency input when user enters a number and a "+" will be added before the number in the to_currency input.
  
  - If user changes currency pocket with the same currency in the other bocket, a currency swap will be done.

  - When user clicks on the available balance value, the corresponding input will be filled with the available balance amount.
  
  - when there is enough balance to be exchanged and user clicks on exchange, that will update the balances of selected currencies and a success message will be displayed.


## Code Style and quality

ESlint and Prettier are used to force a specific style rules 


## Test Coverage

Jest is used to test (action creators - reducers - services - components) of the app.


## Project Dockerization

I created a Docker configuration file that can be used in dev mode to create an image of the project and run the project thought docker.


Thanks a lot :) 
