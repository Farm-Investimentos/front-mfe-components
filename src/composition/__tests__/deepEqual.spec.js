import deepEqual from '../deepEqual';

describe('deepEqual', () => {
	it('Should return true for same object', () => {
		const r = deepEqual({ a: 1 }, { a: 1 });
		expect(r).toBeTruthy();
	});

	it('Should return true for different object', () => {
		const r = deepEqual({ a: 1 }, { a: '1' });
		expect(r).toBeFalsy();
	});
});
