## StockPrices
This returns the prices and volume information of the current trading day of a specified company, updated realtime.

## Required Dependencies
The following packages have to be installed
1. For web app - express, body-parser and node-fetch.
2. For CLI - prompts and node-fetch.

## Getting API Key
1. This app uses the API from Alpha Vantage and in order for this to work you need an API key. 
2. So, go to [Alpha Vantage][https://www.alphavantage.co/support/#api-key] and fill the required details to generate the API Key. 
3. Now copy the key generated and paste it onto the required version i.e, web or cli at the API_KEY.

## Usage
1. Clone the repository
2. cd `StockPrices`
3. For web app run `node web.js` and enter the stock symbol of the required company.
4. For CLI run `node terminal.js` and enter the stock symbol of the required company.

## License
[MIT](https://github.com/itsknk/StockPrices/blob/master/LICENSE)

