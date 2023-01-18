import randomId from '@/helpers/randomId';

describe('randomId', () => {
	it('should return a string of the specified length', () => {
		const length = 10;
		const randomString = randomId(length);
		expect(randomString).toHaveLength(length);
	});

	it('should only contain alphanumeric characters', () => {
		const randomString = randomId(10);
		const pattern = /^[A-Za-z0-9]+$/;
		expect(randomString).toMatch(pattern);
	});

	it('should return different strings on every call', () => {
		const randomString1 = randomId(10);
		const randomString2 = randomId(10);
		expect(randomString1).not.toEqual(randomString2);
	});
});
