import { formatDatePickerHeader } from '@/helpers/formatDatePickerHeader';

describe('formatDatePickerHeader', () => {
	test('formats date in expected format', () => {
		const date = '2022-05';
		const expectedOutput = 'Maio 2022';
		expect(formatDatePickerHeader(date)).toBe(expectedOutput);
	});

	test('handles missing month value', () => {
		const date = '2022';
		const expectedOutput = '2022';
		expect(formatDatePickerHeader(date)).toBe(expectedOutput);
	});
});
