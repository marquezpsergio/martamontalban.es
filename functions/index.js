const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
  const {body} = req;
  const isValidMessage = body.subject && body.email && body.message;

  if (!isValidMessage) {
    return res.status(400).send({message: 'invalid request'});
  }

  const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp-es.securemail.pro',
    port: 465,
    secure: true,
    auth: {
      user: 'contacto@martamontalban.es',
      pass: 'Hd_79501928'
    }
  }));

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'contacto@martamontalban.es, montalbanalarconmarta@gmail.com',
    subject: 'MartaMontalban.es Nuevo Contacto -' + body.subject,
    text: 'Mensaje: ' + body.message + ' /// Email: ' + body.email,
    html: "<p><b>" + body.subject + "</b></p><br/>" +
      "<p>" + body.message + "</p><br/>" +
      "<p>Email: " + body.email + "</p>"
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).send({message: 'Error en el servidor: ' + err.message});
    }

    return res.status(200).send({message: "Email enviado"});
  })
});

exports.mailer = functions.https.onRequest(app);
