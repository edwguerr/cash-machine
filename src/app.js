const yargs = require('yargs');

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

if (typeof amount !== 'number' && amount !== null) {
	throw new Error('InvalidArgumentTypeException')
} else if ( amount < 0 ) {
	throw new Error('InvalidArgumentException');
} else if (amount % 10 !== 0 ) {
	throw new Error('NoteUnavailableException');
}

const notes = [100, 50, 20, 10];
let withdraw = [];
let rest = amount;
let i = 0;

while (rest > 0) {
	if (rest - notes[i] < 0) {
		i++;
		continue;
	}
	rest -= notes[i];
	withdraw.push(notes[i]);
}
console.log(withdraw);
