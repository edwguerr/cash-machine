const validate = (amount) => {
	if (parseInt(amount) < 0) {
		throw new Error('InvalidArgumentException');
	} else if (parseInt(amount) % 10 > 0) {
		throw new Error('NoteUnavailableException');
	} else if (isNaN(parseInt(amount)) && !/^(null)$/.test(amount)){
		throw new Error('InvalidArgumentTypeException');
	}
}

const withdraw = (amount) => {
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
	return withdraw;
}


module.exports = {
	validate,
	withdraw
}