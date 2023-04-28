import validateFormFieldBuilder from '../validateFormFieldBuilder';

describe('validateFormFieldBuilder', () => {
	it('Should return a function', () => {
		const r = validateFormFieldBuilder();
		expect(typeof r).toEqual('function');
	});

	it('Should run validations', () => {
		const rules = [() => true, () => true];
		const r = validateFormFieldBuilder(rules)(1);
		expect(r.length).toEqual(0);
		expect(r instanceof Array).toBeTruthy();
	});

	it('Should run validations and have some error', () => {
		const rules = [() => true, () => false, () => false];
		const r = validateFormFieldBuilder(rules)(1);
		expect(r.length).toEqual(2);
		expect(r instanceof Array).toBeTruthy();
	});

	it('Should run validations and have some error', () => {
		const rules = [() => true, () => false, () => false];
		const r = validateFormFieldBuilder(rules)(1);
		expect(r.length).toEqual(2);
		expect(r instanceof Array).toBeTruthy();
	});

	it('Should throw error', () => {
		const rules = [() => 123];
		expect(() => validateFormFieldBuilder(rules)(1)).toThrowError();
	});
});
