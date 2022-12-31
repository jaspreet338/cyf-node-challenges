const express = require("express");
 const app = express();

 const Quotes = require("./quotes.json");


 app.get("/quotes", function (request, response) {
   response.send(Quotes);
 });

  app.get("/quotes/search", function (request, response) {
    const searchWord = request.query.term;
    const result = search(searchWord)
    response.send(result);
  });

  function search(term){
    return Quotes.filter((q)=>q.quote.includes(term));
  }
 
 
 app.get("/quotes/random", function (request, response) {
   response.send(pickFromArray(Quotes));
 });

 function pickFromArray(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
 }

 //Start our server so that it listens for HTTP requests!
 const listener = app.listen(process.env.PORT, function () {
   console.log("Your app is listening on port " + listener.address().port);
 });
