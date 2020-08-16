const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000;
const nodemailer = require('./routes/nodemailer');

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client/build'));

app.use('/', nodemailer);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
