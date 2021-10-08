import currency from './currency';

const { format, formatWithoutPrefix } = currency;

describe('Helper format', () => {
	describe('format', () => {
		it('should return value for R$10', () => {
			expect(format(10.0)).toEqual('R$10,00');
		});

		it('should format 0', () => {
			expect(format(0)).toEqual('R$0,00');
		});

		it('should check null value', () => {
			expect(format(null)).toBeNull();
		});

		it('should return value without decimals', () => {
			expect(format(10.0, 0)).toEqual('R$10');
		});
	});

	describe('formatWithoutPrefix', () => {
		it('should format 0', () => {
			expect(formatWithoutPrefix(0)).toEqual('0,00');
		});

		it('should check null value', () => {
			expect(formatWithoutPrefix(null)).toBeNull();
		});

		it('should return value', () => {
			expect(formatWithoutPrefix(10.0)).toEqual('10,00');
		});

		it('should return value without decimals', () => {
			expect(formatWithoutPrefix(10.0, 0)).toEqual('10');
		});
	});
});
