const yargs = require('yargs');
const utils = require('./utils');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'amount',
			describe: 'amount to be withdrawn'
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

const amount = argv.a;
let result;

utils.validate(amount);

result = utils.withdraw(amount);
console.log(result);
