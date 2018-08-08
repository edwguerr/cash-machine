const request = require('supertest');
const expect = require('expect');

const app = require('./index').app;

describe('Server', () => {
	describe('GET /withdraw/:amount', () => {
		it('should return 400 when string', (done) => {
			request(app)
				.get('/withdraw/hello world')
				.expect(400)
				.expect((res) => {
					expect(res.body.result).toBe('InvalidArgumentTypeException');
				})
				.end(done);
		});

		it('should return 400 when negative amount', (done) => {
			request(app)
				.get('/withdraw/-130')
				.expect(400)
				.expect((res) => {
					expect(res.body.result).toBe('InvalidArgumentException');
				})
				.end(done);
		});

		it('should return 400 when note not available', (done) => {
			request(app)
				.get('/withdraw/125')
				.expect(400)
				.expect((res) => {
					expect(res.body.result).toEqual('NoteUnavailableException');
				})
				.end(done);
		});

		it('should return an empty array when NULL', (done) => {
			request(app)
				.get('/withdraw/null')
				.expect(200)
				.expect((res) => {
					expect(res.body.result).toEqual([]);
				})
				.end(done);
		});

		it('should return an array with [20, 10] response', (done) => {
			request(app)
				.get('/withdraw/30')
				.expect(200)
				.expect((res) => {
					expect(res.body.result).toEqual([20, 10]);
				})
				.end(done);
		});

		it('should return an array with [50, 20, 10] response', (done) => {
			request(app)
				.get('/withdraw/80')
				.expect(200)
				.expect((res) => {
					expect(res.body.result).toEqual([50, 20, 10]);
				})
				.end(done);
		});

		it('should return an array with [100, 50, 20, 10] response', (done) => {
			request(app)
				.get('/withdraw/180')
				.expect(200)
				.expect((res) => {
					expect(res.body.result).toEqual([100, 50, 20, 10]);
				})
				.end(done);
		});
	});
});
