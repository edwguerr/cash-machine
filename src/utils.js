const validate = (amount) => {
	const tmp = parseInt(amount, 10);
	if (tmp < 0) {
		throw new Error('InvalidArgumentException');
	} else if (tmp % 10 > 0) {
		throw new Error('NoteUnavailableException');
	} else if (isNaN(tmp) && !/^(null)$/.test(amount)){
		throw new Error('InvalidArgumentTypeException');
	}
}

const withdraw = (amount) => {
	const notes = [100, 50, 20, 10];
	const availableNotes = [];
	let rest = amount;
	let i = 0;

	while (rest > 0) {
		if (rest - notes[i] < 0) {
			i++;
			continue;
		}
		rest -= notes[i];
		availableNotes.push(notes[i]);
	}
	return availableNotes;
}

module.exports = {
	validate,
	withdraw
}