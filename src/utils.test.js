const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

	describe('#validate', () => {

		it('should throw an exception when string', () => {
			expect(utils.validate.bind(null, 'foo')).toThrowError('InvalidArgumentTypeException');
		});

		it('should throw an exception when boolean', () => {
			expect(utils.validate.bind(null, true)).toThrowError('InvalidArgumentTypeException');
		});

		it('should throw an exception when object and not null', () => {
			expect(utils.validate.bind(null, {})).toThrowError('InvalidArgumentTypeException');
		});

		it('should throw an exception when the amount is negative', () => {
			expect(utils.validate.bind(null, -130)).toThrowError('InvalidArgumentException');
		});

		it('should throw an exception when the note is not available', () => {
			expect(utils.validate.bind(null, 125)).toThrowError('NoteUnavailableException');
		});

		it('should not throw an exception when number', () => {
			expect(utils.validate.bind(null, 120)).not.toThrowError();
		});

		it('should not throw an exception when null', () => {
			expect(utils.validate.bind(null, null)).not.toThrowError();
		});
	});

	describe('#withdraw', () => {

		it('should withdraw [] when NULL', () => {
			const result = utils.withdraw('NULL');
			expect(result).toEqual([]);
		});

		it('should withdraw [] when null', () => {
			const result = utils.withdraw(null);
			expect(result).toEqual([]);
		});

		it('should withdraw 30 with 20x1 and 10x1', () => {
			const result = utils.withdraw(30);
			expect(result).toEqual([20, 10]);
		});

		it('should withdraw 80 with 50x1, 20x1 and 10x1', () => {
			const result = utils.withdraw(80);
			expect(result).toEqual([50, 20, 10]);
		});

		it('should withdraw 180 with 100x1, 50x1, 20x1 and 10x1', () => {
			const result = utils.withdraw(180);
			expect(result).toEqual([100, 50, 20, 10]);
		});

	});

});