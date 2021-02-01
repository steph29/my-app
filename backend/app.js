require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: "s.verardo29@gmail.com",
  to: "fingolfin3529@gmail.com",
  subject: "Node contact request",
  text: "Ceci est un mail de confirmation provenant de mon serveur! ",
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

async function sendEmail(mailOptions) {
  const transporter = nodemailer.createTransport(config.smtpOptions);
  await transporter.sendMail(mailOptions);
}

app.use("/contact/send", (req, res, next) => {
  res.status(200).send(
     sendEmail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error : ", err);
      } else {
        console.log("Email sent !!!");
      }
    })  
  );
});

module.exports = app;
