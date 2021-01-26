require("dotenv").config();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "s.verardo29@gmail.com",
    pass: "Ywdt7w2013g",
  },
});

const mailOptions = {
  from: "s.verardo29@gmail.com",
  to: "fingolfin3529@gmail.com",
  subject: "Node contact request",
  text: "Ceci est un mail de confirmation! ",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error : ", err);
  } else {
    console.log("Email sent !!!");
  }
});
