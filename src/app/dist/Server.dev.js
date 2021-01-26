"use strict";

//import modules installed at the previous step. We need them to run Node.js server and send emails
var express = require("express");

var cors = require("cors");

var bodyParser = require("body-parser");

var nodemailer = require("nodemailer");

var expresshbs = require("express-handlebars");

var app = express(); // View engin setup

app.engine("handlebars", expresshbs());
app.set("veiw engine", "handlebars"); //BODY-PARSER Middleware

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("hello");
});
app.listen(3000, function () {
  console.log("server start ...");
});