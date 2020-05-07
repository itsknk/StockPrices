/**
 * @Author: Kishore Karanam <itsknk>
 * @Date:   2020-05-07T21:44:21+05:30
 * @Project: Stock Prices Web APP
 * @Last modified by:   itsknk
 * @Last modified time: 2020-05-07T21:45:01+05:30
 */
const axios = require('axios');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/files/" + "index.html");
});

app.post('/fetch', (req,res) => {
  try{
  var ssymbol = req.body.symbol;
  const API_KEY = '';
  let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ssymbol}&outputsize=compact&apikey=${API_KEY}`;
  res.setHeader('Content-Type', 'application/json');
  fetch(API_CALL)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      res.send(data);
    })
}
catch(error){
  console.log("ERROR");
}
});
//port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening to ${port}`));
