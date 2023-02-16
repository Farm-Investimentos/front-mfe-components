import buildData from '../composition/buildData';

describe('buildData', () => {
	it('should initialize with empty arrays and false values', () => {
		const props = { value: [] };
		const result = buildData(props);

		expect(result.multipleValues.value).toEqual([]);
		expect(result.innerValue.value).toEqual([]);
		expect(result.isTouched.value).toBe(false);
		expect(result.isFocus.value).toBe(false);
		expect(result.isBlured.value).toBe(false);
		expect(result.isVisible.value).toBe(false);
		expect(result.selectedText.value).toBe('');
		expect(result.checked.value).toBe('1');
		expect(result.notChecked.value).toBe(false);
		expect(result.inputField.value).toBe(undefined);
	});

	it('should initialize with provided values', () => {
		const props = { value: 'test' };
		const result = buildData(props);

		expect(result.multipleValues.value).toEqual([]);
		expect(result.innerValue.value).toBe('test');
	});
});
