"use strict";

require("dotenv").config();

var express = require("express");

var nodemailer = require("nodemailer");

var app = express();
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD
  }
});
var mailOptions = {
  from: "s.verardo29@gmail.com",
  to: "fingolfin3529@gmail.com",
  subject: "Node contact request",
  text: "Ceci est un mail de confirmation provenant de mon serveur! "
};
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});

function sendEmail(mailOptions) {
  var transporter;
  return regeneratorRuntime.async(function sendEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer.createTransport(config.mailOptions);
          _context.next = 3;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

app.use("/contact/send", function (req, res, next) {
  res.status(200).send(sendEmail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error : ", err);
    } else {
      console.log("Email sent !!!");
    }
  }));
});
module.exports = app;