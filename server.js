const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
