const express = require('express');
const utils = require('./utils');

const port = process.env.PORT || 3000;
const app = express();


app.get('/withdraw/:amount', (req, res) => {

	let result;
	let { amount } = req.params;

	try{
		utils.validate(amount);
	} catch(e) {
		return res.status(400).send({result: e.message});
	}

	result = utils.withdraw(parseInt(amount));

	res.send({result});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});

module.exports.app = app;
