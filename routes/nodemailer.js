const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
	host: 'smtp.flockmail.com',
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Nodemailer is ready...');
	}
});

router.post('/send', (req, res, next) => {
	let name = req.body.name;
	let email = req.body.email;
	let formSubject = req.body.subject;
	let message = req.body.message;
	let content = `Name: ${name} \n Subject: ${formSubject} \n Email: ${email} \n Message: ${content} `;

	let mail = {
		from: name,
		to: 'k.sentak@outlook.com', //Change to email address that you want to receive messages on
		subject: 'New message from keatonsentak.com contact form',
		text: content
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				msg: 'fail'
			});
		} else {
			res.json({
				msg: 'success'
			});
		}
	});
});

module.exports = router;
