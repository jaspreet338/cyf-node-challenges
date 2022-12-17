const express = require("express");
 const app = express();

 const Quotes = require("./quotes.json");


 app.get("/quotes", function (request, response) {
   response.json(Quotes);
 });
 
 
 app.get("/quotes/random", function (request, response) {
   response.json(pickFromArray(Quotes));
 });

 function pickFromArray(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
 }

 //Start our server so that it listens for HTTP requests!
 const listener = app.listen(process.env.PORT, function () {
   console.log("Your app is listening on port " + listener.address().port);
 });
