"use strict";
const nodemailer = require("nodemailer");
import {encode} from 'html-entities';

export default async (req, res) => {
    res.statusCode = 200;
    res.json({response: "Thanks we will be contacting you shortly."});
    let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'darrell83@ethereal.email', // generated ethereal user
      pass: 'vePWKZSGtMYkpPFtjp' // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"no-replay.crossfit66.com" <darrell83@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: `contact us`, // Subject line
    text: `${encode(req.body.comments)}`, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
