/**
 * @Author: Kishore Karanam <itsknk>
 * @Date:   2020-05-07T21:45:55+05:30
 * @Project: Stock Prices CLI APP
 * @Last modified by:   itsknk
 * @Last modified time: 2020-05-07T21:46:20+05:30
 */
 const fetch = require('node-fetch');
 const prompts = require('prompts');

 //to get username via input in terminal
 (async() => {
 	const response = await prompts({
 		type:'text',
 		name:'ssymbol',
 		message: 'Enter Stock Symbol'
 	});
 	console.log('Starting...');
 	getContent(response.ssymbol);
 })();
 async function getContent(ssymbol) {
   const API_KEY = '';
   let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ssymbol}&outputsize=compact&apikey=${API_KEY}`;
   fetch(API_CALL)
     .then(function(response){
       return response.json();
     })
     .then(function(data){
       console.log(data);
     })
 }
