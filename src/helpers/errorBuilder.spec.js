import errorBuilder from './errorBuilder';
describe('ErrorBuilder', () => {
	it('Should return error for timeout/abort', () => {
		const r = errorBuilder({
			code: 'ECONNABORTED',
		});
		expect(r.code).toEqual('ECONNABORTED');
		expect(r.message).toEqual('timeout');
	});
});
