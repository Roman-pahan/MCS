"use strict";

var express = require('express'); //node js


var cors = require('cors');

var booksData = require('./data/books.json');

var app = express();
app.use(cors());

function getRandomBook() {
  var randomIndex = Math.floor(Math.random() * booksData.length);
  var randomBook = booksData[randomIndex];
  return randomBook;
}

app.get('/random-book', function (req, res) {
  res.json(getRandomBook());
}); // app.get('/random-book-delayed', (req, res) => {
//   setTimeout(() => {
//     res.json(getRandomBook());
//   }, 2000);
// });

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});