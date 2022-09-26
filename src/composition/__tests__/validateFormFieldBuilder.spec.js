import validateFormFieldBuilder from '../validateFormFieldBuilder';

describe('validateFormFieldBuilder', () => {
	it('Should return a function', () => {
		const r = validateFormFieldBuilder();
		expect(typeof r).toEqual('function');
	});
});
