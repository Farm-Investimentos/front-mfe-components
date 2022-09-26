import validateFormStateBuilder from '../validateFormStateBuilder';

describe('validateFormStateBuilder', () => {
	it('Should return an object', () => {
		const r = validateFormStateBuilder();
		expect(r.errorBucket).toBeDefined();
	});
});
