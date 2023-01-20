import { ref, reactive } from 'vue';
import modelValueWatcher from '../modelValueWatcher.ts';

describe('modelValueWatcher', () => {
	let props;
	let isTouched;
	let innerValue;
	let validate;

	beforeEach(() => {
		props = reactive({
			modelValue: 'initial value',
		});
		isTouched = ref(false);
		innerValue = ref('');
		validate = jest.fn();
		modelValueWatcher(props, isTouched, innerValue, validate);
	});

	it('should set isTouched.value to true when props.modelValue changes', done => {
		props.modelValue = 'new value';
		setTimeout(() => {
			expect(isTouched.value).toBe(true);
			done();
		});
	});

	it('should update innerValue.value with new props.modelValue', done => {
		props.modelValue = 'new value';
		setTimeout(() => {
			expect(innerValue.value).toBe('new value');
			done();
		});
	});

	it('should call validate function with new innerValue.value', done => {
		props.modelValue = 'new value';
		setTimeout(() => {
			expect(validate).toHaveBeenCalledWith('new value');
			done();
		});
	});
});
